import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import type { Endorsement } from '@/types';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Endorsements({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations('endorsements');
  
  // Placeholder endorsements
  const endorsements: Endorsement[] = [
    {
      id: '1',
      name: locale === 'es' ? 'Organización Educativa A (Marcador) (VERIFY TRANSLATION)' : 'Education Organization A (Placeholder)',
      title: locale === 'es' ? 'Organización de Educadores (VERIFY TRANSLATION)' : 'Educators Organization',
      quote: locale === 'es'
        ? 'Marcador: Cita de apoyo de la organización. (VERIFY TRANSLATION)'
        : 'Placeholder: Endorsement quote from organization.',
      logoUrl: '/placeholders/banner.jpg',
    },
    {
      id: '2',
      name: locale === 'es' ? 'Líder Comunitario B (Marcador) (VERIFY TRANSLATION)' : 'Community Leader B (Placeholder)',
      title: locale === 'es' ? 'Ex Miembro de la Junta Escolar (VERIFY TRANSLATION)' : 'Former School Board Member',
      quote: locale === 'es'
        ? 'Marcador: Cita de apoyo del líder comunitario. (VERIFY TRANSLATION)'
        : 'Placeholder: Endorsement quote from community leader.',
    },
    {
      id: '3',
      name: locale === 'es' ? 'Organización de Padres C (Marcador) (VERIFY TRANSLATION)' : 'Parent Organization C (Placeholder)',
      title: locale === 'es' ? 'Asociación de Padres (VERIFY TRANSLATION)' : 'Parent Association',
      quote: locale === 'es'
        ? 'Marcador: Cita de apoyo de la organización de padres. (VERIFY TRANSLATION)'
        : 'Placeholder: Endorsement quote from parent organization.',
    },
  ];
  
  return (
    <div className="py-16 bg-white">
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
        
        {/* Endorsements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {endorsements.map((endorsement) => (
            <div
              key={endorsement.id}
              className="bg-campaign-light rounded-lg shadow-md p-6 flex flex-col"
            >
              {/* Logo if available */}
              {endorsement.logoUrl && (
                <div className="mb-4 h-20 flex items-center justify-center">
                  <Image
                    src={endorsement.logoUrl}
                    alt={`${endorsement.name} logo`}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              )}
              
              {/* Name and Title */}
              <h3 className="text-xl font-bold text-campaign-text-dark mb-2">
                {endorsement.name}
              </h3>
              {endorsement.title && (
                <p className="text-sm text-campaign-primary font-semibold mb-4">
                  {endorsement.title}
                </p>
              )}
              
              {/* Quote */}
              {endorsement.quote && (
                <blockquote className="text-campaign-text-light italic border-l-4 border-campaign-accent pl-4 mt-auto">
                  &quot;{endorsement.quote}&quot;
                </blockquote>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
