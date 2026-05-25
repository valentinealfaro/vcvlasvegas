import Link from 'next/link';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { Reveal } from './Reveal';

export function BookingStrip() {
  return (
    <section className="relative overflow-hidden bg-ink-800/40">
      {/* Gradient hairline top + bottom */}
      <div
        aria-hidden
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(252,187,0,0.55) 50%, transparent 100%)',
        }}
      />

      <div className="container-luxe relative">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center md:py-9">
            <div className="flex items-start gap-4 md:items-center">
              <span className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden border border-gold/40 bg-gold/5">
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-br from-gold/15 to-transparent"
                />
                <Calendar className="relative h-5 w-5 text-bone" />
              </span>
              <div>
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-gold"
                  />
                  <p className="text-[0.62rem] uppercase tracking-[0.32em] text-bone">
                    Studio Calendar · Now Booking
                  </p>
                </div>
                <p className="mt-2 font-display text-lg text-bone md:text-xl">
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
              className="group flex items-center gap-3 self-end border border-bone/15 px-5 py-3 text-[0.65rem] uppercase tracking-[0.28em] text-bone transition-all duration-500 hover:border-gold hover:bg-gold/5 md:self-auto"
            >
              Reserve a slot
              <ArrowUpRight className="h-3 w-3 transition-transform duration-500 group-hover:rotate-45" />
            </Link>
          </div>
        </Reveal>
      </div>

      <div
        aria-hidden
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(59,130,246,0.55) 50%, transparent 100%)',
        }}
      />
    </section>
  );
}
