interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function MusicAboutPage({ params }: PageProps) {
  // Params extracted for potential future use (e.g., i18n)
  await params;

  return (
    <div className="min-h-screen bg-[--montero-dark-bg]">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 montero-hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About
          </h1>
          <p className="text-xl text-gray-300">
            Artist • Biography • Contact
          </p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[--montero-paper] rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-[--montero-text-dark] mb-6">
              Biography
            </h2>
            <div className="space-y-4 text-[--montero-text-dark]">
              <p className="text-lg leading-relaxed">
                Michael Amberson is a multidisciplinary artist exploring the boundaries between 
                ambient soundscapes, electronic experimentation, and acoustic textures. Based in 
                the Southwest, his work draws inspiration from desert landscapes, urban environments, 
                and the subtle interactions between technology and nature.
              </p>
              <p className="text-lg leading-relaxed">
                With a background in sound design and production, Michael creates immersive 
                sonic experiences that invite listeners to discover new perspectives on familiar 
                sounds. His releases span multiple formats, from full-length albums to experimental 
                EPs and collaborative projects.
              </p>
              <p className="text-lg leading-relaxed">
                When not composing, Michael can be found field recording, teaching music production 
                workshops, or collaborating with visual artists on multimedia installations.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-[--montero-paper] rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-[--montero-text-dark] mb-6">
              Get in Touch
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-[--montero-text-dark]">
                For booking inquiries, collaborations, or general questions:
              </p>
              <a
                href="mailto:music@michaelamberson.com"
                className="inline-block text-lg text-[--montero-primary] hover:text-[--montero-primary-dark] font-semibold transition-colors"
              >
                music@michaelamberson.com
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="bg-[--montero-paper] rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[--montero-text-dark] mb-6">
              Connect
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://bandcamp.com/michaelamberson"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <span className="text-2xl">🎵</span>
                <span className="font-semibold text-[--montero-text-dark]">Bandcamp</span>
              </a>
              <a
                href="https://soundcloud.com/michaelamberson"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <span className="text-2xl">☁️</span>
                <span className="font-semibold text-[--montero-text-dark]">SoundCloud</span>
              </a>
              <a
                href="https://open.spotify.com/artist/michaelamberson"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <span className="text-2xl">🎧</span>
                <span className="font-semibold text-[--montero-text-dark]">Spotify</span>
              </a>
              <a
                href="https://instagram.com/michaelamberson"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <span className="text-2xl">📷</span>
                <span className="font-semibold text-[--montero-text-dark]">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
