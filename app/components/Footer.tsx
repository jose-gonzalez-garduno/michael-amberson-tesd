'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  
  const switchLanguage = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };
  
  return (
    <footer className="bg-campaign-primary text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Campaign Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('campaignName')}</h3>
            <p className="text-sm text-gray-300 mb-2">
              {t('position')}
            </p>
            <p className="text-sm text-gray-300">
              {t('district')}
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/issues`}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {t('issues')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/volunteer`}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {t('volunteer')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {t('contact')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/press`}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {t('press')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('connect')}</h3>
            <div className="space-y-2 mb-4">
              <a
                href="mailto:info@michaelamberson.example"
                className="text-sm text-gray-300 hover:text-white transition-colors block"
              >
                info@michaelamberson.example
              </a>
              <a
                href="tel:+1234567890"
                className="text-sm text-gray-300 hover:text-white transition-colors block"
              >
                (123) 456-7890
              </a>
            </div>
            
            {/* Language Toggle */}
            <div className="mb-4">
              <div className="flex items-center space-x-2 border border-white rounded-md w-fit">
                <button
                  onClick={() => switchLanguage('en')}
                  className={`px-3 py-1 text-sm font-medium transition-colors ${
                    locale === 'en'
                      ? 'bg-white text-campaign-primary'
                      : 'text-white hover:bg-campaign-primary-dark'
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <button
                  onClick={() => switchLanguage('es')}
                  className={`px-3 py-1 text-sm font-medium transition-colors ${
                    locale === 'es'
                      ? 'bg-white text-campaign-primary'
                      : 'text-white hover:bg-campaign-primary-dark'
                  }`}
                  aria-label="Cambiar a Español"
                >
                  ES
                </button>
              </div>
            </div>
            
            {/* Privacy Links */}
            <div className="space-y-1">
              <Link
                href={`/${locale}/privacy`}
                className="text-xs text-gray-400 hover:text-white transition-colors block"
              >
                {t('privacy')}
              </Link>
              <Link
                href={`/${locale}/cookies`}
                className="text-xs text-gray-400 hover:text-white transition-colors block"
              >
                {t('cookies')}
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar - Legal Disclaimer */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300 mb-2">
            {t('paid')}
          </p>
          <p className="text-xs text-gray-400 mb-2">
            {t('treasurer')}: {t('treasurerName')} ({t('treasurerEmail')})
          </p>
          <p className="text-xs text-gray-400">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
