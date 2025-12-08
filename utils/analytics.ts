import type { TrackEvent, MetaConversionPayload } from '@/types';

// Declare dataLayer for GTM
declare global {
  interface Window {
    dataLayer: TrackEvent[];
  }
}

/**
 * Push an event to Google Tag Manager dataLayer
 * @param event - Event object to track
 */
export function trackEvent(event: TrackEvent): void {
  if (typeof window === 'undefined') return;
  
  // Initialize dataLayer if it doesn't exist
  window.dataLayer = window.dataLayer || [];
  
  // Push event to dataLayer
  window.dataLayer.push(event);
  
  // Optionally call server-side Meta Conversion API (non-blocking)
  if (event.event === 'volunteer_signup' || event.event === 'donate_click') {
    callMetaConversionAPI({
      eventName: event.event,
      eventParams: event,
    }).catch((error) => {
      console.error('Failed to track Meta conversion:', error);
    });
  }
}

/**
 * Track donate button click
 * @param source - UTM source
 * @param campaign - UTM campaign
 */
export function trackDonateClick(source = 'website', campaign = 'launch'): void {
  trackEvent({
    event: 'donate_click',
    utm_source: source,
    utm_campaign: campaign,
    utm_medium: 'referral',
  });
}

/**
 * Track volunteer form signup
 * @param language - Preferred language
 * @param utmSource - UTM source
 * @param utmCampaign - UTM campaign
 */
export function trackVolunteerSignup(
  language: string,
  utmSource?: string,
  utmCampaign?: string
): void {
  trackEvent({
    event: 'volunteer_signup',
    language,
    utm_source: utmSource,
    utm_campaign: utmCampaign,
  });
}

/**
 * Track email newsletter signup
 * @param language - Preferred language
 */
export function trackEmailSignup(language: string): void {
  trackEvent({
    event: 'email_signup',
    language,
  });
}

/**
 * Call Meta Conversion API endpoint (non-blocking)
 * @param payload - Conversion event payload
 */
async function callMetaConversionAPI(payload: MetaConversionPayload): Promise<void> {
  try {
    const response = await fetch('/api/track-meta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    if (!response.ok) {
      throw new Error(`Meta conversion API failed: ${response.status}`);
    }
  } catch (error) {
    // Log error but don't throw - this should be non-blocking
    console.error('Error calling Meta Conversion API:', error);
  }
}
