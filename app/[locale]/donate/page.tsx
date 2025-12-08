'use client';

import { useTranslations } from 'next-intl';
import { trackDonateClick } from '@/utils/analytics';

export default function Donate() {
  const t = useTranslations('donate');
  
  // Build ActBlue URL with UTM parameters
  const actblueUrl = process.env.NEXT_PUBLIC_ACTBLUE_URL || 'https://secure.actblue.com/donate/your-campaign';
  const donateUrl = `${actblueUrl}?utm_source=website&utm_medium=referral&utm_campaign=launch`;
  
  const handleDonateClick = () => {
    // Track the donate click event
    trackDonateClick('website', 'launch');
  };
  
  return (
    <div className="py-16 bg-campaign-light min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-campaign-text-dark mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-campaign-text-light">
            {t('subtitle')}
          </p>
        </div>
        
        {/* Donation CTA Card */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
          <div className="mb-8">
            <p className="text-lg text-campaign-text-light leading-relaxed mb-6">
              {t('description')}
            </p>
          </div>
          
          {/* ActBlue Button */}
          <div className="flex flex-col items-center space-y-4">
            <a
              href={donateUrl}
              onClick={handleDonateClick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white bg-campaign-accent hover:bg-campaign-secondary transition-colors rounded-full shadow-lg hover:shadow-xl"
            >
              {t('cta')}
              <svg
                className="w-6 h-6 ml-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            
            <p className="text-sm text-campaign-text-light">
              {t('secure')}
            </p>
          </div>
          
          {/* Additional Information */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-campaign-text-light">
              Contributions or gifts to Friends of Michael Amberson III are not tax-deductible.
              Federal law requires us to use our best efforts to collect and report the name, mailing address,
              occupation, and employer of individuals whose contributions exceed $200 in an election cycle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
