import { getTranslations } from 'next-intl/server';
import Hero from '../components/Hero';
import IssueCard from '../components/IssueCard';
import Link from 'next/link';
import type { Issue } from '@/types';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations('home');
  
  // Placeholder issues - these would come from a CMS or database in production
  const issues: Issue[] = [
    {
      id: 'teacher-support',
      title: locale === 'es' ? 'Apoyo a los Maestros (VERIFY TRANSLATION)' : 'Teacher Support',
      description: locale === 'es' 
        ? 'Asegurar recursos adecuados, desarrollo profesional y compensación competitiva para nuestros educadores. (VERIFY TRANSLATION)'
        : 'Ensuring adequate resources, professional development, and competitive compensation for our educators.',
      icon: '👩‍🏫',
    },
    {
      id: 'student-achievement',
      title: locale === 'es' ? 'Logro Estudiantil (VERIFY TRANSLATION)' : 'Student Achievement',
      description: locale === 'es'
        ? 'Implementar programas basados en evidencia que promuevan el éxito académico de todos los estudiantes. (VERIFY TRANSLATION)'
        : 'Implementing evidence-based programs that promote academic success for all students.',
      icon: '📚',
    },
    {
      id: 'community-engagement',
      title: locale === 'es' ? 'Participación Comunitaria (VERIFY TRANSLATION)' : 'Community Engagement',
      description: locale === 'es'
        ? 'Fomentar la comunicación abierta entre la junta, las familias y los miembros de la comunidad. (VERIFY TRANSLATION)'
        : 'Fostering open communication between the board, families, and community members.',
      icon: '🤝',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero locale={locale} />
      
      {/* Issues Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-campaign-primary mb-4">
              {t('prioritiesTitle')}
            </h2>
            <p className="text-lg text-campaign-text-light max-w-2xl mx-auto mb-8">
              {t('prioritiesDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {issues.map((issue) => (
              <IssueCard key={issue.id} issue={issue} locale={locale} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href={`/${locale}/priorities`}
              className="inline-block bg-campaign-accent hover:bg-campaign-accent-alt text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              {t('viewAllPriorities')}
            </Link>
          </div>
        </div>
      </section>

      {/* Boundaries Section */}
      <section className="py-16 bg-campaign-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-campaign-primary mb-4">
              {t('boundariesTitle')}
            </h2>
            <p className="text-lg text-campaign-text-light max-w-2xl mx-auto">
              {t('boundariesDescription')}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 text-center">
              <div className="mb-6">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-lg text-campaign-text-light mb-6">
                  {t('boundariesText')}
                </p>
              </div>
              <a
                href="https://www.arcgis.com/home/item.html?id=660f9b04f0c044999e6bcd23e749ef1b&sublayer=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-campaign-primary hover:bg-campaign-primary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                {t('learnMoreBoundaries')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contribute Now Section */}
      <section className="py-16 bg-campaign-accent-warm text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('contributeTitle')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('contributeDescription')}
          </p>
          <Link
            href={`/${locale}/donate`}
            className="inline-block bg-white text-campaign-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            {t('contributeButton')}
          </Link>
        </div>
      </section>
    </div>
  );
}
