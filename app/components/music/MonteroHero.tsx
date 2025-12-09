import Link from 'next/link';

interface MonteroHeroProps {
  locale: string;
}

export default function MonteroHero({ locale }: MonteroHeroProps) {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 montero-hero-gradient">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          Michael Amberson
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Musician • Producer • Sound Designer
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={`/${locale}/music`}
            className="px-8 py-4 bg-[--montero-primary] hover:bg-[--montero-primary-dark] text-white font-semibold rounded-lg transition-colors text-lg shadow-lg hover:shadow-xl"
          >
            Listen Now
          </Link>
          <Link
            href={`/${locale}/about`}
            className="px-8 py-4 bg-[--montero-coral] hover:bg-[--montero-coral-dark] text-white font-semibold rounded-lg transition-colors text-lg shadow-lg hover:shadow-xl"
          >
            About Me
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
