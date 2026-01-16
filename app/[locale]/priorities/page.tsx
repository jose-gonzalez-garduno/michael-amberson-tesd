import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Priorities({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations('priorities');
  
  const priorities = [
    {
      id: 'teacher-support',
      icon: '👩‍🏫',
      title: t('priority1Title'),
      description: t('priority1Desc'),
    },
    {
      id: 'student-success',
      icon: '📚',
      title: t('priority2Title'),
      description: t('priority2Desc'),
    },
    {
      id: 'community-engagement',
      icon: '🤝',
      title: t('priority3Title'),
      description: t('priority3Desc'),
    },
    {
      id: 'fiscal-responsibility',
      icon: '💰',
      title: t('priority4Title'),
      description: t('priority4Desc'),
    },
    {
      id: 'safe-environment',
      icon: '🛡️',
      title: t('priority5Title'),
      description: t('priority5Desc'),
    },
  ];
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-campaign-primary py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('title')}
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Priorities List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {priorities.map((priority) => (
              <div
                key={priority.id}
                id={priority.id}
                className="card-hover-lift bg-white rounded-lg shadow-lg p-8 border-l-4 border-campaign-accent"
              >
                <div className="flex items-start space-x-4">
                  {priority.icon && (
                    <div className="text-5xl flex-shrink-0" aria-hidden="true">
                      {priority.icon}
                    </div>
                  )}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-campaign-primary mb-3">
                      {priority.title}
                    </h2>
                    <p className="text-lg text-campaign-text-light leading-relaxed">
                      {priority.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute Now Section */}
      <section className="py-16 bg-campaign-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('contributeTitle')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('contributeDescription')}
          </p>
          <Link
            href={`/${locale}/donate`}
            className="btn-hover-scale inline-block bg-white text-campaign-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
          >
            {t('contributeButton')}
          </Link>
        </div>
      </section>
    </div>
  );
}
