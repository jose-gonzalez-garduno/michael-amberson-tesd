// Form payload types
export interface VolunteerPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredLanguage: 'en' | 'es';
  address?: string;
  comments?: string;
  consent: boolean;
}

// Analytics event types
export interface TrackEvent {
  event: string;
  language?: string;
  utm_source?: string;
  utm_campaign?: string;
  utm_medium?: string;
  [key: string]: string | number | boolean | undefined;
}

// Meta Conversion API types
export interface MetaConversionPayload {
  eventName: string;
  eventParams?: Record<string, unknown>;
  user?: {
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
  };
}

// Issue card type
export interface Issue {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

// Endorsement type
export interface Endorsement {
  id: string;
  name: string;
  title?: string;
  organization?: string;
  quote?: string;
  logoUrl?: string;
}

// Event type
export interface CampaignEvent {
  id: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description?: string;
  registrationUrl?: string;
}

// News/Blog post type
export interface NewsPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  imageUrl?: string;
}
