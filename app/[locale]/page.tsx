import { useTranslations } from 'next-intl';
import Hero from '../components/Hero';
import IssueCard from '../components/IssueCard';
import type { Issue } from '@/types';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  const t = useTranslations('home');
  
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
            <h2 className="text-3xl md:text-4xl font-bold text-campaign-text-dark mb-4">
              {t('issuesTitle')}
            </h2>
            <p className="text-lg text-campaign-text-light max-w-2xl mx-auto">
              {t('issuesDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {issues.map((issue) => (
              <IssueCard key={issue.id} issue={issue} locale={locale} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
