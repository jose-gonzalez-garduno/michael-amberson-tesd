import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import type { NewsPost } from '@/types';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function News({ params }: PageProps) {
  const { locale } = await params;
  const t = useTranslations('news');
  
  // Placeholder news posts
  const posts: NewsPost[] = [
    {
      id: '1',
      title: locale === 'es' ? 'Anuncio de Campaña (Marcador) (VERIFY TRANSLATION)' : 'Campaign Announcement (Placeholder)',
      excerpt: locale === 'es'
        ? 'Marcador: Resumen del artículo sobre el anuncio de campaña. (VERIFY TRANSLATION)'
        : 'Placeholder: Excerpt of article about campaign announcement.',
      date: '2024-12-01',
      slug: 'campaign-announcement',
      imageUrl: '/placeholders/banner.jpg',
    },
  ];
  
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-campaign-text-dark mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-campaign-text-light">
            {t('subtitle')}
          </p>
        </div>
        
        {/* News Posts */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {post.imageUrl && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <p className="text-sm text-campaign-primary font-semibold mb-2">
                    {new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <h2 className="text-xl font-bold text-campaign-text-dark mb-3">
                    {post.title}
                  </h2>
                  <p className="text-campaign-text-light mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/${locale}/news/${post.slug}`}
                    className="inline-flex items-center text-campaign-primary font-semibold hover:text-campaign-secondary transition-colors"
                  >
                    {t('readMore')}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-campaign-text-light">
              {t('noNews')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
