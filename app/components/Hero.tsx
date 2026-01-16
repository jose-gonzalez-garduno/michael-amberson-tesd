import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  locale: string;
}

export default async function Hero({ locale }: HeroProps) {
  const t = await getTranslations('hero');
  
  return (
    <section className="relative bg-campaign-primary py-16 md:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t('title')}
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-campaign-accent">
              {t('subtitle')}
            </h2>
            
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              {t('tagline')}
            </p>
            
            {/* CTAs - Primary and Secondary */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={`/${locale}/meet-michael`}
                className="btn-hover-scale inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-campaign-primary bg-white hover:bg-gray-50 transition-colors rounded-lg shadow-md hover:shadow-lg"
                aria-label="Learn More About Michael"
              >
                {t('learnMore')}
              </Link>
              <Link
                href={`/${locale}/donate`}
                className="btn-hover-scale inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-campaign-accent hover:bg-campaign-accent-alt transition-colors rounded-lg shadow-lg hover:shadow-xl"
                aria-label={t('donateCTA')}
              >
                {t('donateCTA')}
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
                  src="/photos/IMG_0176.jpeg"
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
