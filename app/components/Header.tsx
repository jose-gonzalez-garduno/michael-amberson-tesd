'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  
  const switchLanguage = (newLocale: string) => {
    // Remove current locale from pathname and add new locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };
  
  return (
    <header className="bg-paper/95 backdrop-blur-sm sticky top-0 z-50 border-b border-accent-primary/10">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="text-xl font-bold text-accent-primary hover:text-accent-secondary transition-colors">
              Candidate Name
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              href={`/${locale}/platform`}
              className="text-text-secondary hover:text-accent-primary transition-colors"
            >
              Platform
            </Link>
            <Link
              href={`/${locale}/about`}
              className="text-text-secondary hover:text-accent-primary transition-colors"
            >
              About
            </Link>
            <Link
              href={`/${locale}/get-involved`}
              className="text-text-secondary hover:text-accent-primary transition-colors"
            >
              Get Involved
            </Link>
            <a
              href="#"
              className="bg-accent-primary hover:bg-accent-secondary text-bg px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Donate
            </a>
          </div>
          
          {/* Language Toggle */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 border border-accent-primary/30 rounded-md">
              <button
                onClick={() => switchLanguage('en')}
                className={`px-3 py-1 text-sm font-medium transition-colors ${
                  locale === 'en'
                    ? 'bg-accent-primary text-bg'
                    : 'text-accent-primary hover:bg-accent-primary/10'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => switchLanguage('es')}
                className={`px-3 py-1 text-sm font-medium transition-colors ${
                  locale === 'es'
                    ? 'bg-accent-primary text-bg'
                    : 'text-accent-primary hover:bg-accent-primary/10'
                }`}
                aria-label="Cambiar a Español"
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
