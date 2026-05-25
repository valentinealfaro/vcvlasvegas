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
                <Calculator className="h-3.5 w-3.5 text-bone" />
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
                ].map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm text-bone/70">
                    <span className="h-px w-4 bg-gold" />
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

              {/* Floating calculator card preview */}
              <div className="absolute bottom-6 left-6 right-6 border border-bone/15 bg-ink-800/95 p-6 backdrop-blur-xl md:bottom-8 md:left-8 md:right-8">
                <p className="text-[0.6rem] uppercase tracking-[0.28em] text-bone/45">
                  Indicative Range · Premium Kitchen
                </p>
                <p className="mt-3 font-display text-3xl text-bone md:text-4xl">
                  $243k <span className="mx-2 text-bone/30">–</span> $567k
                </p>
                <p className="mt-2 text-xs text-bone/55">300 sqft · 8–14 weeks</p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-gold via-gold-light to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
