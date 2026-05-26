'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export type FAQItem = { q: string; a: string };

export function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={cn(
              'group relative pl-4 transition-colors duration-500 md:pl-6',
              isOpen && 'bg-gradient-to-r from-gold/5 to-transparent',
            )}
          >
            {/* Left gold bar — slides in when open */}
            <span
              aria-hidden
              className={cn(
                'absolute left-0 top-1/2 h-12 w-px -translate-y-1/2 transition-all duration-500',
                isOpen
                  ? 'bg-gold shadow-[0_0_10px_rgba(252,187,0,0.6)]'
                  : 'bg-ink/0 group-hover:bg-ink/15',
              )}
            />
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-7 text-left"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-4">
                <span
                  aria-hidden
                  className={cn(
                    'h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-500',
                    isOpen
                      ? 'bg-gold shadow-[0_0_8px_rgba(252,187,0,0.7)]'
                      : 'bg-ink/30 group-hover:bg-gold/60',
                  )}
                />
                <span
                  className={cn(
                    'font-display text-xl transition-colors duration-500 md:text-2xl',
                    isOpen ? 'text-ink' : 'text-ink/85 group-hover:text-ink',
                  )}
                >
                  {item.q}
                </span>
              </span>
              <span
                className={cn(
                  'grid h-9 w-9 shrink-0 place-items-center border transition-all duration-500',
                  isOpen
                    ? 'rotate-180 border-gold bg-gold/10 shadow-[0_0_18px_-4px_rgba(252,187,0,0.5)]'
                    : 'rotate-0 border-ink/15 group-hover:border-gold/60',
                )}
              >
                {isOpen ? (
                  <Minus className="h-4 w-4 text-ink" />
                ) : (
                  <Plus className="h-4 w-4 text-ink transition-colors group-hover:text-ink" />
                )}
              </span>
            </button>
            <div
              className={cn(
                'grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden">
                <div className="pl-6 pr-12 pb-7">
                  {/* Lead-in mini hairline above answer */}
                  <span
                    aria-hidden
                    className="mb-4 block h-px w-10 bg-gradient-to-r from-gold via-gold/40 to-transparent"
                  />
                  <p className="text-base leading-relaxed text-ink/65 md:text-lg">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
