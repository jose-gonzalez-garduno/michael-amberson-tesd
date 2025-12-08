import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function About() {
  const t = useTranslations('about');
  
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-campaign-text-dark mb-4">
            {t('title')}
          </h1>
        </div>
        
        {/* Headshot and Bio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Headshot */}
          <div className="md:col-span-1">
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              <Image
                src="/placeholders/headshot.jpg"
                alt="Michael Amberson III"
                width={400}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
          
          {/* Bio Content */}
          <div className="md:col-span-2 space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-campaign-text-light leading-relaxed">
                {t('intro')}
              </p>
              
              <p className="text-lg text-campaign-text-light leading-relaxed">
                {t('biography')}
              </p>
              
              <p className="text-lg text-campaign-text-light leading-relaxed">
                {t('values')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
