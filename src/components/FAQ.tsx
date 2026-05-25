'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export type FAQItem = { q: string; a: string };

export function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-bone/10 border-y border-bone/10">
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
                isOpen ? 'bg-gold' : 'bg-bone/0 group-hover:bg-bone/15',
              )}
            />
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-7 text-left"
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  'font-display text-xl transition-colors duration-500 md:text-2xl',
                  isOpen ? 'text-bone' : 'text-bone/85 group-hover:text-bone',
                )}
              >
                {item.q}
              </span>
              <span
                className={cn(
                  'grid h-9 w-9 shrink-0 place-items-center border transition-all duration-500',
                  isOpen
                    ? 'rotate-180 border-gold bg-gold/10'
                    : 'rotate-0 border-bone/15 group-hover:border-gold/60',
                )}
              >
                {isOpen ? (
                  <Minus className="h-4 w-4 text-gold" />
                ) : (
                  <Plus className="h-4 w-4 text-bone transition-colors group-hover:text-gold" />
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
                <p className="pb-7 pr-12 text-base leading-relaxed text-bone/65 md:text-lg">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
