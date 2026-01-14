import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function MeetMichael({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations('meetMichael');
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-campaign-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-campaign-primary mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-campaign-text-light max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Section 1 - Image Left */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/photos/IMG_0140.jpeg"
                alt="Michael Abramson III"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-campaign-primary">
                {t('section1Title')}
              </h2>
              <div className="text-lg text-campaign-text-light leading-relaxed space-y-4">
                <p>{t('section1Para1')}</p>
                <p>{t('section1Para2')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Image Right */}
      <section className="py-16 bg-campaign-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 lg:order-1">
              <h2 className="text-3xl font-bold text-campaign-primary">
                {t('section2Title')}
              </h2>
              <div className="text-lg text-campaign-text-light leading-relaxed space-y-4">
                <p>{t('section2Para1')}</p>
                <p>{t('section2Para2')}</p>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl lg:order-2">
              <Image
                src="/photos/IMG_0142.jpeg"
                alt="Michael Abramson III with community"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Image Left */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/photos/IMG_0152.jpeg"
                alt="Michael Abramson III engaging with students"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-campaign-primary">
                {t('section3Title')}
              </h2>
              <div className="text-lg text-campaign-text-light leading-relaxed space-y-4">
                <p>{t('section3Para1')}</p>
                <p>{t('section3Para2')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-campaign-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-bold italic mb-4">
            "{t('quote')}"
          </blockquote>
          <p className="text-xl text-gray-200">
            — Michael Abramson III
          </p>
        </div>
      </section>
    </div>
  );
}
