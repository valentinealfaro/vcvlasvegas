import { Reveal } from '../Reveal';
import { siteConfig } from '@/lib/site';

export function AreasServed() {
  return (
    <section className="border-y border-bone/5 bg-ink py-20 lg:py-24">
      <div className="container-luxe">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <Reveal>
            <div>
              <p className="eyebrow mb-4">Service Area</p>
              <h2 className="font-display text-3xl text-bone md:text-4xl">
                Built for the Las Vegas valley.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={1} className="grid flex-1 grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 lg:max-w-2xl">
            {siteConfig.serviceArea.map((c) => (
              <div
                key={c}
                className="flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-bone/65"
              >
                <span className="h-px w-3 bg-gold" />
                {c}
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
