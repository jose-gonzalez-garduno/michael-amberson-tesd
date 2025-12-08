import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import type { MetaConversionPayload } from '@/types';

/**
 * POST /api/track-meta
 * Server-side Meta Conversion API tracking
 * Hashes PII (email, phone) using SHA256 for privacy
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as MetaConversionPayload;
    
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
    const accessToken = process.env.META_CONVERSION_ACCESS_TOKEN;
    
    if (!pixelId || !accessToken) {
      console.warn('Meta Conversion API credentials not configured');
      return NextResponse.json({ ok: true, skipped: true });
    }
    
    // Hash PII for privacy
    const userData: Record<string, string> = {};
    if (body.user?.email) {
      userData.em = hashPII(body.user.email.toLowerCase().trim());
    }
    if (body.user?.phone) {
      // Remove all non-numeric characters for consistent hashing
      const cleanPhone = body.user.phone.replace(/\D/g, '');
      userData.ph = hashPII(cleanPhone);
    }
    if (body.user?.firstName) {
      userData.fn = hashPII(body.user.firstName.toLowerCase().trim());
    }
    if (body.user?.lastName) {
      userData.ln = hashPII(body.user.lastName.toLowerCase().trim());
    }
    
    // Build Meta Conversion API payload
    const payload = {
      data: [
        {
          event_name: body.eventName,
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_source_url: request.headers.get('referer') || process.env.NEXT_PUBLIC_SITE_URL,
          user_data: userData,
          custom_data: body.eventParams || {},
        },
      ],
    };
    
    // Call Meta Conversion API
    // NOTE: Using Authorization header to avoid exposing token in URL logs
    const metaApiUrl = `https://graph.facebook.com/v18.0/${pixelId}/events`;
    
    const response = await fetch(metaApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      console.error('Meta Conversion API error:', {
        status: response.status,
        result,
        // Do not log access token or sensitive data
      });
      return NextResponse.json(
        { error: 'Failed to track conversion' },
        { status: response.status }
      );
    }
    
    console.log('Meta Conversion API success:', {
      eventName: body.eventName,
      eventsReceived: result.events_received,
      messagesCount: result.messages?.length || 0,
    });
    
    return NextResponse.json({ ok: true, result });
  } catch (error) {
    console.error('Meta Conversion API tracking error:', error);
    return NextResponse.json(
      { error: 'An error occurred while tracking conversion' },
      { status: 500 }
    );
  }
}

/**
 * Hash PII using SHA256 for Meta Conversion API
 * Meta requires lowercase, trimmed, and hashed values
 */
function hashPII(value: string): string {
  return crypto.createHash('sha256').update(value).digest('hex');
}

/**
 * GET /api/track-meta
 * Health check endpoint
 */
export async function GET() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const accessToken = process.env.META_CONVERSION_ACCESS_TOKEN;
  
  return NextResponse.json({
    status: 'ok',
    configured: !!(pixelId && accessToken),
    pixelId: pixelId ? `${pixelId.slice(0, 4)}...` : 'not configured',
  });
}
