import { getTranslations } from 'next-intl/server';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function About({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations('about');
  
  return (
    <div className="min-h-screen bg-bg py-16 md:py-24">
      <div className="container mx-auto max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            About the Candidate
          </h1>
          <p className="text-xl text-muted">
            Meet the person behind the campaign
          </p>
        </div>
        
        {/* Bio Section */}
        <div className="bg-paper rounded-xl p-8 md:p-12 card-shadow mb-12">
          <div className="space-y-6 text-text-secondary leading-relaxed">
            <p className="text-lg">
              [Placeholder biography paragraph 1: This is where you would include information about the candidate's background, experience, and what led them to run for this position. Replace this text with the actual candidate biography.]
            </p>
            
            <p className="text-lg">
              [Placeholder biography paragraph 2: Add information about the candidate's professional experience, community involvement, and relevant qualifications. This section should highlight what makes them qualified for the position.]
            </p>
            
            <p className="text-lg">
              [Placeholder biography paragraph 3: Include personal values, vision for the future, and connection to the community. This should help voters understand the candidate's motivations and priorities.]
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-paper rounded-xl p-8 md:p-12 card-shadow">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Get in Touch
          </h2>
          <div className="space-y-4 text-text-secondary">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-accent-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:info@example.com"
                className="text-accent-primary hover:text-accent-secondary transition-colors"
              >
                info@example.com
              </a>
            </div>
            
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-accent-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href="tel:+1234567890"
                className="text-accent-primary hover:text-accent-secondary transition-colors"
              >
                (123) 456-7890
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="mt-8 pt-8 border-t border-accent-primary/10">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Quick Links
            </h3>
            <div className="flex flex-wrap gap-4">
              <a
                href={`/${locale}/platform`}
                className="text-accent-primary hover:text-accent-secondary transition-colors"
              >
                View Platform
              </a>
              <a
                href={`/${locale}/get-involved`}
                className="text-accent-primary hover:text-accent-secondary transition-colors"
              >
                Get Involved
              </a>
              <a
                href="#"
                className="text-accent-primary hover:text-accent-secondary transition-colors"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
