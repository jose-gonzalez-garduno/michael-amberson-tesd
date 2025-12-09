import ReleaseCard from '@/app/components/music/ReleaseCard';
import { releases } from '@/data/releases';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function MusicPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-[--montero-dark-bg]">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 montero-hero-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Music
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my discography of albums, EPs, and singles
          </p>
        </div>
      </section>

      {/* Releases Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {releases.map((release) => (
              <ReleaseCard key={release.id} release={release} locale={locale} />
            ))}
          </div>

          {/* Empty State */}
          {releases.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-400">
                No releases available yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
