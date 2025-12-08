import { NextRequest, NextResponse } from 'next/server';
import type { VolunteerPayload } from '@/types';

// TODO: Add rate limiting before production (e.g., using Vercel Edge Config or Redis)
// TODO: Add reCAPTCHA verification before production
// TODO: Verify Mailchimp list IDs and API permissions before production

/**
 * POST /api/volunteer
 * Handle volunteer form submissions
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as VolunteerPayload;
    
    // Server-side validation
    const validationError = validateVolunteerPayload(body);
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
      );
    }
    
    // TODO: Add reCAPTCHA verification here
    // const recaptchaValid = await verifyRecaptcha(body.recaptchaToken);
    // if (!recaptchaValid) {
    //   return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    // }
    
    // Process volunteer signup - send to multiple destinations
    const results = await Promise.allSettled([
      sendToMailchimp(body),
      sendToGoogleSheets(body),
      sendConfirmationEmail(body),
    ]);
    
    // Log results (do not expose detailed errors to client)
    results.forEach((result, index) => {
      const service = ['Mailchimp', 'Google Sheets', 'SendGrid'][index];
      if (result.status === 'rejected') {
        console.error(`Failed to send to ${service}:`, result.reason);
      } else {
        console.log(`Successfully sent to ${service}`);
      }
    });
    
    // Track conversion with Meta Conversion API
    try {
      await fetch(`${request.nextUrl.origin}/api/track-meta`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventName: 'volunteer_signup',
          eventParams: {
            language: body.preferredLanguage,
          },
          user: {
            email: body.email,
            phone: body.phone,
            firstName: body.firstName,
            lastName: body.lastName,
          },
        }),
      });
    } catch (error) {
      console.error('Failed to track Meta conversion:', error);
      // Don't fail the request if tracking fails
    }
    
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Volunteer signup error:', error);
    return NextResponse.json(
      { error: 'An error occurred processing your request' },
      { status: 500 }
    );
  }
}

/**
 * Validate volunteer form payload
 */
function validateVolunteerPayload(payload: VolunteerPayload): string | null {
  if (!payload.firstName?.trim()) {
    return 'First name is required';
  }
  if (!payload.lastName?.trim()) {
    return 'Last name is required';
  }
  if (!payload.email?.trim() || !isValidEmail(payload.email)) {
    return 'Valid email is required';
  }
  if (!payload.phone?.trim()) {
    return 'Phone number is required';
  }
  if (!['en', 'es'].includes(payload.preferredLanguage)) {
    return 'Invalid preferred language';
  }
  if (!payload.consent) {
    return 'Consent is required';
  }
  return null;
}

/**
 * Basic email validation
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Send volunteer data to Mailchimp
 * TODO: Implement actual Mailchimp API integration
 */
async function sendToMailchimp(data: VolunteerPayload): Promise<void> {
  // Placeholder for Mailchimp integration
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_LIST_ID;
  
  if (!apiKey || !listId) {
    console.warn('Mailchimp credentials not configured');
    return;
  }
  
  // TODO: Implement actual API call
  // Example:
  // const datacenter = apiKey.split('-')[1];
  // const response = await fetch(
  //   `https://${datacenter}.api.mailchimp.com/3.0/lists/${listId}/members`,
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Authorization': `Bearer ${apiKey}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email_address: data.email,
  //       status: 'subscribed',
  //       merge_fields: {
  //         FNAME: data.firstName,
  //         LNAME: data.lastName,
  //         PHONE: data.phone,
  //         LANGUAGE: data.preferredLanguage,
  //       },
  //       tags: ['volunteer'],
  //     }),
  //   }
  // );
  // if (!response.ok) {
  //   throw new Error(`Mailchimp API error: ${response.status}`);
  // }
  
  console.log('Mailchimp integration stub - data:', {
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
  });
}

/**
 * Send volunteer data to Google Sheets via webhook
 * TODO: Implement actual Google Sheets webhook integration
 */
async function sendToGoogleSheets(data: VolunteerPayload): Promise<void> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.warn('Google Sheets webhook URL not configured');
    return;
  }
  
  // TODO: Implement actual webhook call
  // Example:
  // const response = await fetch(webhookUrl, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     firstName: data.firstName,
  //     lastName: data.lastName,
  //     email: data.email,
  //     phone: data.phone,
  //     preferredLanguage: data.preferredLanguage,
  //     address: data.address,
  //     comments: data.comments,
  //     timestamp: new Date().toISOString(),
  //   }),
  // });
  // if (!response.ok) {
  //   throw new Error(`Google Sheets webhook error: ${response.status}`);
  // }
  
  console.log('Google Sheets webhook stub - data:', {
    email: data.email,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Send confirmation email to volunteer via SendGrid
 * TODO: Implement actual SendGrid email integration
 */
async function sendConfirmationEmail(data: VolunteerPayload): Promise<void> {
  const apiKey = process.env.SENDGRID_API_KEY;
  
  if (!apiKey) {
    console.warn('SendGrid API key not configured');
    return;
  }
  
  // TODO: Implement actual SendGrid API call
  // Example:
  // const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
  //   method: 'POST',
  //   headers: {
  //     'Authorization': `Bearer ${apiKey}`,
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     personalizations: [
  //       {
  //         to: [{ email: data.email, name: `${data.firstName} ${data.lastName}` }],
  //         subject: data.preferredLanguage === 'es' 
  //           ? '¡Gracias por ser voluntario!'
  //           : 'Thank you for volunteering!',
  //       },
  //     ],
  //     from: {
  //       email: 'campaign@michaelamberson.example',
  //       name: 'Michael Amberson III Campaign',
  //     },
  //     content: [
  //       {
  //         type: 'text/plain',
  //         value: data.preferredLanguage === 'es'
  //           ? `Hola ${data.firstName},\n\n¡Gracias por inscribirte como voluntario!`
  //           : `Hi ${data.firstName},\n\nThank you for signing up to volunteer!`,
  //       },
  //     ],
  //   }),
  // });
  // if (!response.ok) {
  //   throw new Error(`SendGrid API error: ${response.status}`);
  // }
  
  console.log('SendGrid confirmation email stub - data:', {
    email: data.email,
    language: data.preferredLanguage,
  });
}
