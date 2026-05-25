'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <Link
      href="/contact"
      aria-label="Schedule a consultation"
      className={cn(
        'group fixed bottom-8 right-8 z-40 hidden items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-gold-light to-gold pl-6 pr-7 py-4 text-[0.7rem] font-medium uppercase tracking-[0.26em] text-ink shadow-[0_20px_50px_-15px_rgba(252,187,0,0.45)] transition-all duration-500 hover:from-gold hover:to-gold-deep hover:shadow-[0_25px_60px_-15px_rgba(252,187,0,0.65)] lg:flex',
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-6 opacity-0',
      )}
    >
      {/* Diagonal shimmer sweep */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%)',
          animation: 'shimmer-cta 4s ease-in-out infinite',
          animationDelay: '1s',
        }}
      />
      <Calendar className="relative h-4 w-4 transition-transform duration-500 group-hover:scale-110" />
      <span className="relative">Schedule Consultation</span>
    </Link>
  );
}
