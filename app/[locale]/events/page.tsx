import { getTranslations } from 'next-intl/server';
import type { CampaignEvent } from '@/types';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Events({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations('events');
  
  // Placeholder events
  const events: CampaignEvent[] = [
    {
      id: '1',
      title: locale === 'es' ? 'Reunión Comunitaria (Marcador) (VERIFY TRANSLATION)' : 'Community Town Hall (Placeholder)',
      date: '2025-01-15',
      time: locale === 'es' ? '18:00 - 20:00 (VERIFY TRANSLATION)' : '6:00 PM - 8:00 PM',
      location: locale === 'es' ? 'Biblioteca Comunitaria de Tempe (Marcador) (VERIFY TRANSLATION)' : 'Tempe Community Library (Placeholder)',
      description: locale === 'es'
        ? 'Marcador: Únase a nosotros para una sesión de preguntas y respuestas sobre educación local. (VERIFY TRANSLATION)'
        : 'Placeholder: Join us for a Q&A session about local education.',
      registrationUrl: 'https://example.com/register',
    },
    {
      id: '2',
      title: locale === 'es' ? 'Evento de Voluntarios (Marcador) (VERIFY TRANSLATION)' : 'Volunteer Kickoff (Placeholder)',
      date: '2025-01-22',
      time: locale === 'es' ? '10:00 - 12:00 (VERIFY TRANSLATION)' : '10:00 AM - 12:00 PM',
      location: locale === 'es' ? 'Oficina de Campaña (Marcador) (VERIFY TRANSLATION)' : 'Campaign Office (Placeholder)',
      description: locale === 'es'
        ? 'Marcador: Conozca al equipo y aprenda cómo puede ayudar. (VERIFY TRANSLATION)'
        : 'Placeholder: Meet the team and learn how you can help.',
      registrationUrl: 'https://example.com/register',
    },
  ];
  
  return (
    <div className="py-16 bg-campaign-light min-h-screen">
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
        
        {/* Events List */}
        {events.length > 0 ? (
          <div className="space-y-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1 mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold text-campaign-text-dark mb-2">
                      {event.title}
                    </h2>
                    <div className="space-y-1 text-campaign-text-light mb-3">
                      <p className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(event.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
                        {event.time && ` • ${event.time}`}
                      </p>
                      {event.location && (
                        <p className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.location}
                        </p>
                      )}
                    </div>
                    {event.description && (
                      <p className="text-campaign-text-light">
                        {event.description}
                      </p>
                    )}
                  </div>
                  
                  {event.registrationUrl && (
                    <div className="flex-shrink-0">
                      <a
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-campaign-primary hover:bg-campaign-primary-dark text-white font-semibold rounded-md transition-colors"
                      >
                        {t('register')}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-campaign-text-light">
              {t('noEvents')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
