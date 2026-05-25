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
        'group fixed bottom-8 right-8 z-40 hidden items-center gap-3 rounded-full bg-gold pl-6 pr-7 py-4 text-[0.7rem] font-medium uppercase tracking-[0.26em] text-ink shadow-[0_20px_50px_-15px_rgba(184,148,92,0.45)] transition-all duration-500 hover:bg-gold-light hover:shadow-[0_25px_60px_-15px_rgba(184,148,92,0.6)] lg:flex',
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-6 opacity-0',
      )}
    >
      <Calendar className="h-4 w-4 transition-transform duration-500 group-hover:scale-110" />
      Schedule Consultation
    </Link>
  );
}
