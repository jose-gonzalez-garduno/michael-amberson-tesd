import type { Release } from '@/data/releases';

interface ReleaseCardProps {
  release: Release;
  locale: string;
}

export default function ReleaseCard({ release }: ReleaseCardProps) {
  return (
    <div className="montero-card-hover bg-[--montero-paper] rounded-lg overflow-hidden shadow-md">
      {/* Cover Image */}
      <div className="relative aspect-square bg-[--montero-dark-bg]">
        <div className="w-full h-full flex items-center justify-center text-[--montero-text-muted] text-6xl">
          🎵
        </div>
      </div>
      
      {/* Release Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-[--montero-text-dark] mb-1 line-clamp-2">
          {release.title}
        </h3>
        <p className="text-sm text-[--montero-text-muted] mb-2">
          {release.year} • {release.format}
        </p>
        {release.label && (
          <p className="text-xs text-[--montero-text-muted] mb-3">
            {release.label}
          </p>
        )}
        
        {/* Links */}
        <div className="flex flex-wrap gap-2">
          {release.bandcampUrl && (
            <a
              href={release.bandcampUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1 bg-[--montero-primary] hover:bg-[--montero-primary-dark] text-white rounded-full transition-colors"
              aria-label={`Listen to ${release.title} on Bandcamp`}
            >
              Bandcamp
            </a>
          )}
          {release.soundcloudUrl && (
            <a
              href={release.soundcloudUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1 bg-[--montero-coral] hover:bg-[--montero-coral-dark] text-white rounded-full transition-colors"
              aria-label={`Listen to ${release.title} on SoundCloud`}
            >
              SoundCloud
            </a>
          )}
          {release.spotifyUrl && (
            <a
              href={release.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1 bg-[--montero-primary] hover:bg-[--montero-primary-dark] text-white rounded-full transition-colors"
              aria-label={`Listen to ${release.title} on Spotify`}
            >
              Spotify
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
