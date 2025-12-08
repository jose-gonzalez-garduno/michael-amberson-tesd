import { getTranslations } from 'next-intl/server';

export default async function Contact() {
  const t = await getTranslations('contact');
  
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
        
        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-campaign-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-campaign-text-dark mb-2">
                  {t('email')}
                </h3>
                <a
                  href="mailto:info@michaelamberson.example"
                  className="text-campaign-primary hover:text-campaign-secondary transition-colors"
                >
                  info@michaelamberson.example
                </a>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-campaign-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-campaign-text-dark mb-2">
                  {t('phone')}
                </h3>
                <a
                  href="tel:+1234567890"
                  className="text-campaign-primary hover:text-campaign-secondary transition-colors"
                >
                  (123) 456-7890
                </a>
              </div>
            </div>
            
            {/* Address */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-campaign-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-campaign-text-dark mb-2">
                  {t('address')}
                </h3>
                <p className="text-campaign-text-light">
                  {t('placeholder.address')}
                </p>
              </div>
            </div>
            
            {/* Mailto Form Fallback */}
            <div className="pt-8 border-t border-gray-200">
              <a
                href="mailto:info@michaelamberson.example?subject=Campaign%20Inquiry"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-campaign-primary hover:bg-campaign-primary-dark text-white font-semibold rounded-md transition-colors"
              >
                Send Email
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
