import Link from 'next/link';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { Reveal } from './Reveal';

export function BookingStrip() {
  return (
    <section className="relative overflow-hidden bg-bone-800/40">
      {/* Soft sunset wash behind the strip */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse at 0% 50%, rgba(252,187,0,0.10), transparent 55%), radial-gradient(ellipse at 100% 50%, rgba(249,115,22,0.08), transparent 55%)',
        }}
      />
      {/* Gradient hairline top — amber → coral → blue */}
      <div
        aria-hidden
        className="relative h-px w-full"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(252,187,0,0.6) 30%, rgba(249,115,22,0.6) 50%, rgba(59,130,246,0.6) 70%, transparent 100%)',
        }}
      />

      <div className="container-luxe relative">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center md:py-9">
            <div className="flex items-start gap-4 md:items-center">
              <span className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden border border-gold/40 bg-gold/5 shadow-[0_0_20px_-4px_rgba(252,187,0,0.4)]">
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-br from-gold/15 to-transparent"
                />
                {/* Corner ticks */}
                <span aria-hidden className="absolute left-1 top-1 h-1.5 w-1.5 border-l border-t border-gold" />
                <span aria-hidden className="absolute bottom-1 right-1 h-1.5 w-1.5 border-b border-r border-gold" />
                <Calendar className="relative h-5 w-5 text-ink" />
              </span>
              <div>
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-gold"
                  />
                  <p className="text-[0.62rem] uppercase tracking-[0.32em] text-ink">
                    Studio Calendar · Now Booking
                  </p>
                </div>
                <p className="mt-2 font-display text-lg text-ink md:text-xl">
                  Currently booking design consultations for{' '}
                  <span className="italic text-ink">Q3 2026</span>.
                </p>
                <p className="mt-1 text-xs text-ink/55">
                  Limited capacity for premium-scope projects. Reserve a private
                  walkthrough.
                </p>
              </div>
            </div>
            <Link
              href="/visit"
              className="group relative flex items-center gap-3 self-end overflow-hidden border border-ink/15 px-5 py-3 text-[0.65rem] uppercase tracking-[0.28em] text-ink transition-all duration-500 hover:border-gold hover:bg-gold/5 md:self-auto"
            >
              {/* Diagonal gold shimmer sweep on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
              />
              <span className="relative">Reserve a slot</span>
              <ArrowUpRight className="relative h-3 w-3 transition-transform duration-500 group-hover:rotate-45" />
            </Link>
          </div>
        </Reveal>
      </div>

      <div
        aria-hidden
        className="relative h-px w-full"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(59,130,246,0.6) 30%, rgba(249,115,22,0.6) 50%, rgba(252,187,0,0.6) 70%, transparent 100%)',
        }}
      />
    </section>
  );
}
