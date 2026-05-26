'use client';

import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      {/* Gradient hairline lead-in */}
      <div
        aria-hidden
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(252,187,0,0.55) 35%, rgba(59,130,246,0.55) 65%, transparent 100%)',
        }}
      />
      <div className="grid grid-cols-2 bg-ink/95 backdrop-blur-xl">
        <a
          href={siteConfig.phoneHref}
          className="group relative flex items-center justify-center gap-2 py-4 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-bone transition-colors active:bg-ink-700"
        >
          <span aria-hidden className="absolute left-4 top-1/2 h-1.5 w-1.5 -translate-y-1/2 animate-pulse rounded-full bg-gold shadow-[0_0_8px_rgba(252,187,0,0.7)]" />
          <Phone className="h-4 w-4 text-bone transition-transform duration-300 group-active:scale-110" />
          Call
        </a>
        <Link
          href="/contact"
          className="group relative flex items-center justify-center gap-2 overflow-hidden bg-gradient-to-r from-gold-light to-gold py-4 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-ink active:from-gold active:to-gold-deep"
        >
          {/* Soft shimmer sweep */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)',
              animation: 'shimmer-cta 3s ease-in-out infinite',
            }}
          />
          <Calendar className="relative h-4 w-4" />
          <span className="relative">Consultation</span>
        </Link>
      </div>
    </div>
  );
}
