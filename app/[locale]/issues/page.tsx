import { getTranslations } from 'next-intl/server';
import type { Issue } from '@/types';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Issues({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations('issues');
  
  // Placeholder issues - expand with more details
  const issues: Issue[] = [
    {
      id: 'teacher-support',
      title: locale === 'es' ? 'Apoyo a los Maestros (VERIFY TRANSLATION)' : 'Teacher Support & Professional Development',
      description: locale === 'es'
        ? 'Placeholder: Descripción detallada del apoyo a los maestros, desarrollo profesional, compensación competitiva y recursos en el aula. (VERIFY TRANSLATION)'
        : 'Placeholder: Detailed description of teacher support, professional development, competitive compensation, and classroom resources.',
      icon: '👩‍🏫',
    },
    {
      id: 'student-achievement',
      title: locale === 'es' ? 'Logro y Apoyo Estudiantil (VERIFY TRANSLATION)' : 'Student Achievement & Support',
      description: locale === 'es'
        ? 'Placeholder: Descripción de programas académicos basados en evidencia, servicios de apoyo estudiantil e iniciativas de equidad. (VERIFY TRANSLATION)'
        : 'Placeholder: Description of evidence-based academic programs, student support services, and equity initiatives.',
      icon: '📚',
    },
    {
      id: 'community-engagement',
      title: locale === 'es' ? 'Participación Comunitaria (VERIFY TRANSLATION)' : 'Community Engagement & Communication',
      description: locale === 'es'
        ? 'Placeholder: Detalles sobre transparencia de la junta, participación de las familias y asociaciones comunitarias. (VERIFY TRANSLATION)'
        : 'Placeholder: Details about board transparency, family involvement, and community partnerships.',
      icon: '🤝',
    },
    {
      id: 'facilities',
      title: locale === 'es' ? 'Instalaciones e Infraestructura (VERIFY TRANSLATION)' : 'Facilities & Infrastructure',
      description: locale === 'es'
        ? 'Placeholder: Plan para mantener y mejorar las instalaciones escolares, la tecnología y los recursos de aprendizaje. (VERIFY TRANSLATION)'
        : 'Placeholder: Plan for maintaining and improving school facilities, technology, and learning resources.',
      icon: '🏫',
    },
    {
      id: 'fiscal-responsibility',
      title: locale === 'es' ? 'Responsabilidad Fiscal (VERIFY TRANSLATION)' : 'Fiscal Responsibility & Planning',
      description: locale === 'es'
        ? 'Placeholder: Compromiso con la gestión financiera responsable y la planificación a largo plazo. (VERIFY TRANSLATION)'
        : 'Placeholder: Commitment to responsible financial management and long-term planning.',
      icon: '💰',
    },
    {
      id: 'safety-wellbeing',
      title: locale === 'es' ? 'Seguridad y Bienestar (VERIFY TRANSLATION)' : 'Safety & Student Wellbeing',
      description: locale === 'es'
        ? 'Placeholder: Enfoque en la seguridad escolar, apoyo de salud mental y ambiente de aprendizaje positivo. (VERIFY TRANSLATION)'
        : 'Placeholder: Focus on school safety, mental health support, and positive learning environment.',
      icon: '🛡️',
    },
  ];
  
  return (
    <div className="py-16 bg-campaign-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-campaign-text-dark mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-campaign-text-light max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        {/* Issues List */}
        <div className="space-y-8">
          {issues.map((issue) => (
            <div
              key={issue.id}
              id={issue.id}
              className="bg-white rounded-lg shadow-md p-8 border-l-4 border-campaign-accent"
            >
              <div className="flex items-start space-x-4">
                {issue.icon && (
                  <div className="text-5xl flex-shrink-0" aria-hidden="true">
                    {issue.icon}
                  </div>
                )}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-campaign-text-dark mb-3">
                    {issue.title}
                  </h2>
                  <p className="text-lg text-campaign-text-light leading-relaxed">
                    {issue.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
