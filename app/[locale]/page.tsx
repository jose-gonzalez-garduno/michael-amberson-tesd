import { getTranslations } from 'next-intl/server';
import Hero from '../components/Hero';
import PlatformCard from '../components/PlatformCard';
import { platforms } from '@/src/data/platforms';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations('home');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero locale={locale} />
      
      {/* Platform Highlights Section */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our Platform
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Learn about the key issues and priorities driving this campaign.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <PlatformCard key={platform.slug} platform={platform} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
