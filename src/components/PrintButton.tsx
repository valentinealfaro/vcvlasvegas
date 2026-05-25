'use client';

import { Printer } from 'lucide-react';

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-3 border border-bone/20 px-5 py-3 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-bone transition-all duration-500 hover:border-gold hover:text-gold"
    >
      <Printer className="h-3.5 w-3.5" />
      Print or Save as PDF
    </button>
  );
}
