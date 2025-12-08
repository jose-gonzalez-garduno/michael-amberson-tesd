import { useTranslations } from 'next-intl';

export default function Press() {
  const t = useTranslations('press');
  
  // Placeholder press resources
  const resources = [
    {
      id: '1',
      name: 'Campaign Logo (PNG)',
      description: 'High-resolution campaign logo',
      url: '/placeholders/banner.jpg',
    },
    {
      id: '2',
      name: 'Candidate Headshot (JPG)',
      description: 'Professional headshot for media use',
      url: '/placeholders/headshot.jpg',
    },
    {
      id: '3',
      name: 'Platform Summary (PDF)',
      description: 'One-page summary of key campaign positions',
      url: '#',
    },
  ];
  
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-campaign-text-dark mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-campaign-text-light">
            {t('subtitle')}
          </p>
        </div>
        
        {/* Press Contact */}
        <div className="bg-campaign-light rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold text-campaign-text-dark mb-4">
            {t('contact')}
          </h2>
          <a
            href="mailto:press@michaelamberson.example"
            className="text-lg text-campaign-primary hover:text-campaign-secondary transition-colors font-semibold"
          >
            {t('email')}
          </a>
        </div>
        
        {/* Downloadable Resources */}
        <div>
          <h2 className="text-3xl font-bold text-campaign-text-dark mb-8 text-center">
            {t('downloads')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-campaign-text-dark mb-2">
                      {resource.name}
                    </h3>
                    <p className="text-sm text-campaign-text-light">
                      {resource.description}
                    </p>
                  </div>
                  <svg className="w-6 h-6 text-campaign-primary flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <a
                  href={resource.url}
                  download
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-campaign-primary hover:bg-campaign-primary-dark text-white font-semibold rounded-md transition-colors"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
