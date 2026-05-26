import Image from 'next/image';
import { ArrowUpRight, Calculator } from 'lucide-react';
import { Reveal } from '../Reveal';
import { MagneticButton } from '../MagneticButton';
import { bathroomImages } from '@/lib/images';

export function CalculatorPromo() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 -z-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gold/12 blur-[160px]"
      />
      <div className="container-luxe">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal>
            <div>
              <p className="eyebrow mb-5 flex items-center gap-3">
                <span className="relative grid h-7 w-7 place-items-center overflow-hidden border border-gold/40 bg-gold/5 shadow-[0_0_14px_-4px_rgba(252,187,0,0.45)]">
                  <span aria-hidden className="absolute inset-0 bg-gradient-to-br from-gold/15 to-transparent" />
                  <Calculator className="relative h-3 w-3 text-bone" />
                </span>
                Investment Calculator
              </p>
              <h2 className="font-display text-4xl text-bone text-balance md:text-5xl lg:text-6xl">
                Calculate the range
                <br />
                <span className="italic text-bone">before you call.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-bone/65 md:text-lg">
                A live, three-step estimator tuned to real VCV Vegas project
                data. Pick your scope, square footage, and finish tier — see an
                indicative range in seconds. Request the detailed breakdown by
                email anytime.
              </p>

              <ul className="mt-8 space-y-3 border-t border-bone/10 pt-7">
                {[
                  'Four scope types: kitchen, bathroom, whole-home, outdoor',
                  'Three finish tiers from Signature to Bespoke',
                  'Build window and timeline included',
                  'Detailed breakdown sent by email — no salesperson',
                ].map((b, i) => (
                  <li key={b} className="group flex items-center gap-3 text-sm text-bone/70 transition-colors duration-500 hover:text-bone">
                    <span
                      aria-hidden
                      className={`h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-500 ${i % 2 === 0 ? 'bg-gold/70 group-hover:bg-gold group-hover:shadow-[0_0_8px_rgba(252,187,0,0.7)]' : 'bg-accent/70 group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(59,130,246,0.7)]'}`}
                    />
                    <span aria-hidden className="h-px w-4 bg-gold/60 transition-all duration-500 group-hover:w-8" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <MagneticButton href="/investment">
                  Launch the Calculator
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </MagneticButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="relative aspect-[4/5] overflow-hidden bg-ink-700">
              <Image
                src={bathroomImages[0].src}
                alt="VCV Vegas Investment Calculator preview"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent" />
              {/* Gold corner ticks */}
              <span aria-hidden className="pointer-events-none absolute left-4 top-4 h-3 w-3 border-l border-t border-gold/60" />
              <span aria-hidden className="pointer-events-none absolute right-4 top-4 h-3 w-3 border-r border-t border-gold/60" />

              {/* Floating calculator card preview — gradient bordered */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                <div className="border-gradient">
                  <div className="relative overflow-hidden bg-ink-800/95 p-6 backdrop-blur-xl">
                    <div className="flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.28em] text-bone/45">
                      <span aria-hidden className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
                      Indicative Range · Premium Kitchen
                    </div>
                    <p className="mt-3 font-display text-3xl text-bone md:text-4xl">
                      $243k <span className="mx-2 text-bone/30">–</span> $567k
                    </p>
                    <p className="mt-2 text-xs text-bone/55">300 sqft · 8–14 weeks</p>
                    <div className="mt-4 h-px w-full bg-gradient-to-r from-gold via-gold to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
