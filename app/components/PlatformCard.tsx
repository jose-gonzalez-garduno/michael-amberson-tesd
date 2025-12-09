'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import type { Platform } from '@/types';

interface PlatformCardProps {
  platform: Platform;
}

export default function PlatformCard({ platform }: PlatformCardProps) {
  const locale = useLocale();
  
  return (
    <Link
      href={`/${locale}/platform/${platform.slug}`}
      className="block bg-paper rounded-xl overflow-hidden hover-lift card-shadow transition-all duration-200"
    >
      <div className="relative h-48 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20">
        {/* Placeholder for image - using gradient background */}
        <div className="absolute inset-0 flex items-center justify-center text-6xl">
          {platform.icon || '📋'}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-primary mb-2">
          {platform.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed">
          {platform.summary}
        </p>
        
        <div className="mt-4 flex items-center text-accent-primary text-sm font-semibold">
          Learn More
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
