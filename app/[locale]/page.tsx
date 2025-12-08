import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');

  return (
    <div className="flex min-h-screen items-center justify-center bg-campaign-light font-sans">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-32 px-8 bg-white sm:items-start">
        <div className="w-full">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-campaign-primary mb-4">
            {t('title')}
          </h1>
          <h2 className="text-2xl font-semibold text-campaign-secondary mb-8">
            {t('subtitle')}
          </h2>
        </div>
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left my-12">
          <p className="text-xl font-semibold text-gray-800">
            {t('welcome')}
          </p>
          <p className="max-w-2xl text-lg leading-8 text-gray-600">
            {t('description')}
          </p>
        </div>
        
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row w-full">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-campaign-primary px-5 text-white transition-colors hover:bg-campaign-primary-dark md:w-[200px]"
            href="#about"
          >
            {t('learnMore')}
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border-2 border-campaign-primary px-5 text-campaign-primary transition-colors hover:bg-campaign-primary hover:text-white md:w-[200px]"
            href="#contact"
          >
            {t('getInvolved')}
          </a>
        </div>
      </main>
    </div>
  );
}
