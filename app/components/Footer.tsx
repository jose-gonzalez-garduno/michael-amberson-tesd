'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-paper border-t border-accent-primary/10 text-muted mt-auto">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Campaign Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text-primary">Candidate Name</h3>
            <p className="text-sm mb-2">
              Campaign for [Position]
            </p>
            <p className="text-sm">
              [District/Location]
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/platform`}
                  className="text-sm hover:text-accent-primary transition-colors"
                >
                  Platform
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-sm hover:text-accent-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/get-involved`}
                  className="text-sm hover:text-accent-primary transition-colors"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@example.com"
                  className="text-sm hover:text-accent-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text-primary">Connect</h3>
            <div className="space-y-2 mb-4">
              <a
                href="mailto:info@example.com"
                className="text-sm hover:text-accent-primary transition-colors block"
              >
                info@example.com
              </a>
              <a
                href="tel:+1234567890"
                className="text-sm hover:text-accent-primary transition-colors block"
              >
                (123) 456-7890
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-accent-primary/10 mt-8 pt-8 text-center">
          <p className="text-sm mb-2">
            Paid for by [Committee Name]
          </p>
          <p className="text-xs">
            © {currentYear} Campaign for [Candidate Name]. All rights reserved. • Placeholder content for customization
          </p>
        </div>
      </div>
    </footer>
  );
}
