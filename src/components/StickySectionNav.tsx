'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export type SectionLink = { id: string; label: string };

export function StickySectionNav({ sections }: { sections: SectionLink[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(s.id);
          });
        },
        { rootMargin: '-40% 0px -55% 0px' },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  return (
    <nav
      aria-label="Section navigation"
      className="pointer-events-none fixed right-8 top-1/2 z-30 hidden -translate-y-1/2 xl:block"
    >
      <ul className="pointer-events-auto flex flex-col gap-4">
        {sections.map((s) => {
          const isActive = s.id === active;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="group flex items-center justify-end gap-3"
              >
                <span
                  className={cn(
                    'text-[0.6rem] uppercase tracking-[0.28em] transition-all duration-500',
                    isActive
                      ? 'text-ink opacity-100'
                      : 'translate-x-2 text-ink/40 opacity-0 group-hover:translate-x-0 group-hover:opacity-100',
                  )}
                >
                  {s.label}
                </span>
                <span
                  className={cn(
                    'h-px transition-all duration-500',
                    isActive
                      ? 'w-10 bg-gradient-to-r from-transparent to-gold shadow-[0_0_8px_rgba(252,187,0,0.6)]'
                      : 'w-5 bg-ink/30 group-hover:bg-ink/60',
                  )}
                />
                <span
                  aria-hidden
                  className={cn(
                    'h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-500',
                    isActive
                      ? 'bg-gold shadow-[0_0_10px_rgba(252,187,0,0.8)]'
                      : 'scale-50 bg-ink/30 group-hover:scale-100 group-hover:bg-ink/60',
                  )}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
