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
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-7 text-left"
            >
              <span className="font-display text-xl text-bone md:text-2xl">
                {item.q}
              </span>
              <span className="grid h-9 w-9 shrink-0 place-items-center border border-bone/15 transition-colors">
                {isOpen ? (
                  <Minus className="h-4 w-4 text-gold" />
                ) : (
                  <Plus className="h-4 w-4 text-bone" />
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
                <p className="pb-7 text-base leading-relaxed text-bone/65 md:text-lg">
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
