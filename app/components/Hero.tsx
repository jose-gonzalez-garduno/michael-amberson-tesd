import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

interface HeroProps {
  locale: string;
}

export default async function Hero({ locale }: HeroProps) {
  const t = await getTranslations('hero');
  
  return (
    <section className="hero-section relative py-20 md:py-32">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Hero Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-text-primary">
            Candidate Name
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Fighting for a better tomorrow. Placeholder tagline for your campaign message.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href={`/${locale}/platform`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-bg bg-accent-primary hover:bg-accent-secondary transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl"
            >
              View Platform
            </Link>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-accent-primary bg-transparent hover:bg-accent-primary/10 border-2 border-accent-primary transition-all duration-200 rounded-lg"
            >
              Donate
            </a>
            <Link
              href={`/${locale}/get-involved`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-accent-secondary bg-transparent hover:bg-accent-secondary/10 border-2 border-accent-secondary transition-all duration-200 rounded-lg"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-paper pointer-events-none" />
    </section>
  );
}
