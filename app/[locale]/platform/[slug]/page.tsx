import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPlatformBySlug, getAllPlatformSlugs } from '@/src/data/platforms';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPlatformSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function PlatformDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const platform = getPlatformBySlug(slug);

  if (!platform) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg py-16 md:py-24">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Link
          href={`/${locale}/platform`}
          className="inline-flex items-center text-accent-primary hover:text-accent-secondary transition-colors mb-8"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Platform
        </Link>

        {/* Platform Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            {platform.icon && (
              <span className="text-5xl mr-4">{platform.icon}</span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
              {platform.title}
            </h1>
          </div>
          <p className="text-xl text-text-secondary">
            {platform.summary}
          </p>
        </div>

        {/* Platform Details */}
        <div className="bg-paper rounded-xl p-8 md:p-12 card-shadow">
          <div className="prose prose-invert prose-lg max-w-none">
            <div
              className="text-muted leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: platform.details
                  .split('\n')
                  .map((line) => {
                    if (line.startsWith('## ')) {
                      return `<h2 class="text-2xl font-bold text-text-primary mt-8 mb-4">${line.slice(3)}</h2>`;
                    }
                    if (line.startsWith('### ')) {
                      return `<h3 class="text-xl font-semibold text-text-secondary mt-6 mb-3">${line.slice(4)}</h3>`;
                    }
                    if (line.startsWith('- **')) {
                      const match = line.match(/- \*\*(.*?)\*\*: (.*)/);
                      if (match) {
                        return `<li class="mb-2"><strong class="text-accent-primary">${match[1]}</strong>: ${match[2]}</li>`;
                      }
                    }
                    if (line.startsWith('- ')) {
                      return `<li class="mb-2">${line.slice(2)}</li>`;
                    }
                    if (line.match(/^\d+\. /)) {
                      return `<li class="mb-2">${line.replace(/^\d+\. /, '')}</li>`;
                    }
                    if (line.trim().startsWith('*') && line.trim().endsWith('*')) {
                      return `<p class="text-sm italic text-muted/70 mt-6">${line.slice(1, -1)}</p>`;
                    }
                    if (line.trim()) {
                      return `<p class="mb-4">${line}</p>`;
                    }
                    return '';
                  })
                  .join(''),
              }}
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/get-involved`}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-bg bg-accent-primary hover:bg-accent-secondary transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </div>
  );
}
