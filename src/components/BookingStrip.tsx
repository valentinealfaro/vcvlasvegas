import Link from 'next/link';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { Reveal } from './Reveal';

export function BookingStrip() {
  return (
    <section className="border-y border-bone/8 bg-ink-800/40">
      <div className="container-luxe">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center md:py-8">
            <div className="flex items-start gap-4 md:items-center">
              <span className="grid h-10 w-10 shrink-0 place-items-center border border-gold/40 bg-gold/5">
                <Calendar className="h-4 w-4 text-bone" />
              </span>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-bone">
                  Studio Calendar
                </p>
                <p className="mt-1 font-display text-lg text-bone md:text-xl">
                  Currently booking design consultations for{' '}
                  <span className="italic text-bone">Q3 2026</span>.
                </p>
                <p className="mt-1 text-xs text-bone/55">
                  Limited capacity for premium-scope projects. Reserve a private
                  walkthrough.
                </p>
              </div>
            </div>
            <Link
              href="/visit"
              className="flex items-center gap-3 self-end text-[0.65rem] uppercase tracking-[0.28em] text-bone transition-colors hover:text-bone md:self-auto"
            >
              Reserve a slot
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
