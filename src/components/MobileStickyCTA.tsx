'use client';

import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-bone/10 bg-ink/95 backdrop-blur-xl lg:hidden">
      <a
        href={siteConfig.phoneHref}
        className="flex items-center justify-center gap-2 py-4 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-bone"
      >
        <Phone className="h-4 w-4 text-bone" />
        Call
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 bg-gold py-4 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-ink"
      >
        <Calendar className="h-4 w-4" />
        Consultation
      </Link>
    </div>
  );
}
