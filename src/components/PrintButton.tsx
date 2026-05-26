'use client';

import { Printer } from 'lucide-react';

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="group relative inline-flex items-center gap-3 overflow-hidden border border-bone/20 px-5 py-3 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-bone transition-all duration-500 hover:border-gold hover:bg-gold/5"
    >
      {/* Diagonal gold shimmer sweep on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
      <Printer className="relative h-3.5 w-3.5 transition-all duration-500 group-hover:text-gold group-hover:drop-shadow-[0_0_6px_rgba(252,187,0,0.7)]" />
      <span className="relative">Print or Save as PDF</span>
    </button>
  );
}
