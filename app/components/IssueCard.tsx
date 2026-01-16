import Link from 'next/link';
import type { Issue } from '@/types';

interface IssueCardProps {
  issue: Issue;
  locale: string;
}

export default function IssueCard({ issue, locale }: IssueCardProps) {
  return (
    <div className="card-hover-lift bg-white rounded-lg shadow-md p-6 border-t-4 border-campaign-accent">
      {/* Icon placeholder */}
      {issue.icon && (
        <div className="text-4xl mb-4" aria-hidden="true">
          {issue.icon}
        </div>
      )}
      
      <h3 className="text-xl font-bold text-campaign-text-dark mb-3">
        {issue.title}
      </h3>
      
      <p className="text-campaign-text-light mb-4 line-clamp-3">
        {issue.description}
      </p>
      
      <Link
        href={`/${locale}/issues#${issue.id}`}
        className="inline-flex items-center text-campaign-primary font-semibold hover:text-campaign-secondary transition-colors"
      >
        {locale === 'es' ? 'Leer más' : 'Learn more'}
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
}
