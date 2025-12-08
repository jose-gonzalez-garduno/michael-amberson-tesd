import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  locale: string;
}

export default function Hero({ locale }: HeroProps) {
  const t = useTranslations('hero');
  
  return (
    <section className="relative bg-campaign-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Add comment about Google Font - humanist/serif-like */}
            {/* TODO: Add Google Font (e.g., Lora, Merriweather, or Playfair Display) for headings */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-campaign-text-dark">
              {t('title')}
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-campaign-secondary">
              {t('subtitle')}
            </h2>
            
            <p className="text-lg md:text-xl text-campaign-text-light leading-relaxed">
              {t('tagline')}
            </p>
            
            {/* CTAs - Primary and Secondary */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={`/${locale}/donate`}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-campaign-accent hover:bg-campaign-secondary transition-colors rounded-full shadow-lg hover:shadow-xl"
                aria-label={t('donateCTA')}
              >
                {t('donateCTA')}
              </Link>
              <Link
                href={`/${locale}/volunteer`}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-campaign-primary bg-white hover:bg-campaign-primary hover:text-white border-2 border-campaign-primary transition-colors rounded-full shadow-md hover:shadow-lg"
                aria-label={t('volunteerCTA')}
              >
                {t('volunteerCTA')}
              </Link>
            </div>
          </div>
          
          {/* Right Column - Portrait Image */}
          <div className="relative">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto lg:ml-auto">
              {/* Container with warm accent border */}
              <div className="absolute inset-0 bg-campaign-accent rounded-2xl transform translate-x-4 translate-y-4" />
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholders/hero.jpg"
                  alt={t('imageAlt')}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
