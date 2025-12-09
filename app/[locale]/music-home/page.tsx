import MonteroHero from '@/app/components/music/MonteroHero';
import ReleaseCard from '@/app/components/music/ReleaseCard';
import { releases } from '@/data/releases';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function MusicHomePage({ params }: PageProps) {
  const { locale } = await params;
  
  // Show only the 3 most recent releases on the home page
  const featuredReleases = releases.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <MonteroHero locale={locale} />
      
      {/* Featured Releases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[--montero-dark-bg]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Latest Releases
            </h2>
            <p className="text-xl text-gray-300">
              Explore my recent work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredReleases.map((release) => (
              <ReleaseCard key={release.id} release={release} locale={locale} />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href={`/${locale}/music`}
              className="inline-block px-8 py-4 bg-[--montero-primary] hover:bg-[--montero-primary-dark] text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              View All Music →
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 montero-hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About the Artist
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Michael Amberson is a multidisciplinary artist exploring the boundaries between 
            ambient soundscapes, electronic experimentation, and acoustic textures.
          </p>
          <Link
            href={`/${locale}/music-about`}
            className="inline-block px-8 py-4 bg-[--montero-coral] hover:bg-[--montero-coral-dark] text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Read Full Bio →
          </Link>
        </div>
      </section>
    </div>
  );
}
