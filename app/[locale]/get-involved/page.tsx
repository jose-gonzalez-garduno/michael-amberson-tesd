import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function GetInvolved({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations('getInvolved');

  return (
    <div className="min-h-screen bg-bg py-16 md:py-24">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Get Involved
          </h1>
          <p className="text-xl text-muted">
            Join us in making a difference. There are many ways to support this campaign.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Volunteer Card */}
          <div className="bg-paper rounded-xl p-8 card-shadow hover-lift">
            <div className="text-5xl mb-4">🙋</div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Volunteer
            </h2>
            <p className="text-muted mb-6">
              Join our team of dedicated volunteers. Help with canvassing, phone banking, events, and more.
            </p>
            <a
              href="#volunteer-form"
              className="inline-flex items-center text-accent-primary hover:text-accent-secondary transition-colors font-semibold"
            >
              Sign Up to Volunteer
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* Donate Card */}
          <div className="bg-paper rounded-xl p-8 card-shadow hover-lift">
            <div className="text-5xl mb-4">💚</div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Donate
            </h2>
            <p className="text-muted mb-6">
              Your financial support helps us reach more voters and spread our message throughout the community.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-accent-primary hover:text-accent-secondary transition-colors font-semibold"
            >
              Make a Donation
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* RSVP Card */}
          <div className="bg-paper rounded-xl p-8 card-shadow hover-lift">
            <div className="text-5xl mb-4">📅</div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Attend Events
            </h2>
            <p className="text-muted mb-6">
              Join us at upcoming campaign events, town halls, and community gatherings. Meet the candidate!
            </p>
            <Link
              href={`/${locale}/events`}
              className="inline-flex items-center text-accent-primary hover:text-accent-secondary transition-colors font-semibold"
            >
              View Events
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Volunteer Form Placeholder */}
        <div id="volunteer-form" className="bg-paper rounded-xl p-8 md:p-12 card-shadow">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            Volunteer Sign-Up
          </h2>
          <p className="text-muted mb-8">
            [Placeholder for volunteer form. This would be replaced with an actual form or integrated with a CRM system.]
          </p>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-bg border border-accent-primary/20 rounded-lg text-text-primary placeholder-muted focus:outline-none focus:border-accent-primary transition-colors"
                  placeholder="Enter your first name"
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-bg border border-accent-primary/20 rounded-lg text-text-primary placeholder-muted focus:outline-none focus:border-accent-primary transition-colors"
                  placeholder="Enter your last name"
                  disabled
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-bg border border-accent-primary/20 rounded-lg text-text-primary placeholder-muted focus:outline-none focus:border-accent-primary transition-colors"
                placeholder="your.email@example.com"
                disabled
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Phone
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 bg-bg border border-accent-primary/20 rounded-lg text-text-primary placeholder-muted focus:outline-none focus:border-accent-primary transition-colors"
                placeholder="(123) 456-7890"
                disabled
              />
            </div>
            
            <button
              className="w-full md:w-auto px-8 py-4 bg-accent-primary hover:bg-accent-secondary text-bg font-semibold rounded-lg transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              Submit (Form Not Active - Placeholder)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
