import { getTranslations } from 'next-intl/server';
import PlatformCard from '../../components/PlatformCard';
import { platforms } from '@/src/data/platforms';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function PlatformPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations('platform');

  return (
    <div className="min-h-screen bg-bg py-16 md:py-24">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Our Platform
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
            Explore the key issues and policy positions that drive this campaign. Each platform item represents a commitment to meaningful change.
          </p>
        </div>
        
        {/* Platform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <PlatformCard key={platform.slug} platform={platform} />
          ))}
        </div>
      </div>
    </div>
  );
}
