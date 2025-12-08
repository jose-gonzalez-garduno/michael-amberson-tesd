import { useTranslations } from 'next-intl';
import VolunteerForm from '../../components/VolunteerForm';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Volunteer({ params }: PageProps) {
  const { locale } = await params;
  const t = useTranslations('volunteer');
  
  return (
    <div className="py-16 bg-campaign-light min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-campaign-text-dark mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-campaign-text-light mb-2">
            {t('subtitle')}
          </p>
          <p className="text-lg text-campaign-text-light max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>
        
        {/* Volunteer Form */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <VolunteerForm locale={locale} />
        </div>
      </div>
    </div>
  );
}
