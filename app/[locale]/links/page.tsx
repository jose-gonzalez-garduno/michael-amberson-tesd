export default async function LinksPage() {

  const links = [
    {
      title: 'Latest Release',
      description: 'Listen to my newest album',
      href: 'https://bandcamp.com/michaelamberson/latest',
      icon: '🎵',
      color: 'bg-[--montero-primary]',
    },
    {
      title: 'Bandcamp',
      description: 'Full discography and merch',
      href: 'https://bandcamp.com/michaelamberson',
      icon: '💿',
      color: 'bg-[--montero-coral]',
    },
    {
      title: 'SoundCloud',
      description: 'Streams and works in progress',
      href: 'https://soundcloud.com/michaelamberson',
      icon: '☁️',
      color: 'bg-[--montero-primary]',
    },
    {
      title: 'Spotify',
      description: 'Stream on Spotify',
      href: 'https://open.spotify.com/artist/michaelamberson',
      icon: '🎧',
      color: 'bg-[--montero-coral]',
    },
    {
      title: 'Instagram',
      description: 'Behind the scenes & updates',
      href: 'https://instagram.com/michaelamberson',
      icon: '📷',
      color: 'bg-[--montero-primary]',
    },
    {
      title: 'YouTube',
      description: 'Music videos & live sessions',
      href: 'https://youtube.com/@michaelamberson',
      icon: '📹',
      color: 'bg-[--montero-coral]',
    },
  ];

  return (
    <div className="min-h-screen bg-[--montero-dark-bg] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-[--montero-primary] rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
            🎹
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Michael Amberson
          </h1>
          <p className="text-xl text-gray-300">
            Musician • Producer • Sound Designer
          </p>
        </div>

        {/* Links Grid */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block ${link.color} hover:opacity-90 text-white rounded-lg p-6 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{link.icon}</span>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-bold mb-1">{link.title}</h3>
                  <p className="text-sm opacity-90">{link.description}</p>
                </div>
                <svg
                  className="w-6 h-6 opacity-75"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Michael Amberson. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
