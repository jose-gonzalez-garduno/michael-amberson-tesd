import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from "next";
import Script from 'next/script';
import "../globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Michael Amberson III for Tempe Elementary School District",
  description: "Running for Governing Board - Dedicated to improving education and supporting our community.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Locale = (typeof routing.locales)[number];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  
  // GTM ID from environment (placeholder if not set)
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXX';

  return (
    <html lang={locale}>
      <head>
        {/* Google Tag Manager */}
        {gtmId && gtmId !== 'GTM-XXXX' && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                /* eslint-disable */
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
                /* eslint-enable */
              `,
            }}
          />
        )}
      </head>
      <body className="antialiased font-sans flex flex-col min-h-screen">
        {/* Google Tag Manager (noscript) */}
        {gtmId && gtmId !== 'GTM-XXXX' && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
