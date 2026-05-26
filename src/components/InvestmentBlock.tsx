import Link from 'next/link';
import { ArrowUpRight, Calculator } from 'lucide-react';
import { Reveal } from './Reveal';

type Row = { label: string; value: string };

export function InvestmentBlock({
  eyebrow = 'Investment & Timeline',
  title,
  description,
  rows,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  rows: Row[];
}) {
  return (
    <section className="relative overflow-hidden bg-bone-800 py-20 lg:py-28">
      <div aria-hidden className="glow-duotone" />

      <div className="container-luxe">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="relative grid h-9 w-9 place-items-center overflow-hidden border border-gold/40 bg-gold/5 shadow-[0_0_18px_-4px_rgba(252,187,0,0.45)]">
                  <span aria-hidden className="absolute inset-0 bg-gradient-to-br from-gold/15 to-transparent" />
                  <span aria-hidden className="absolute left-1 top-1 h-1.5 w-1.5 border-l border-t border-gold" />
                  <span aria-hidden className="absolute bottom-1 right-1 h-1.5 w-1.5 border-b border-r border-gold" />
                  <Calculator className="relative h-4 w-4 text-ink" aria-hidden />
                </span>
                <p className="eyebrow !text-ink">{eyebrow}</p>
              </div>
              <h2 className="font-display text-3xl text-ink md:text-4xl">
                {title}
              </h2>
              {description && (
                <p className="mt-5 max-w-md text-base leading-relaxed text-ink/60">
                  {description}
                </p>
              )}
              <div className="mt-8">
                <Link
                  href="/investment"
                  className="group relative inline-flex items-center gap-3 overflow-hidden border border-ink/15 px-5 py-3 text-[0.65rem] uppercase tracking-[0.28em] text-ink transition-all duration-500 hover:border-gold hover:bg-gold/5"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                  />
                  <span className="relative">Calculate your range</span>
                  <ArrowUpRight className="relative h-3 w-3 transition-transform duration-500 group-hover:rotate-45" />
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="border-gradient">
              <dl className="divide-y divide-ink/10 bg-bone-800 px-7 py-2 lg:px-10">
                {rows.map((row, i) => (
                  <div
                    key={row.label}
                    className="group grid grid-cols-[1fr_auto] items-baseline gap-6 py-5 transition-all md:grid-cols-[1.2fr_2fr] md:gap-10"
                    style={{
                      animation: `fade-up 0.6s cubic-bezier(0.16,1,0.3,1) ${
                        0.08 * i + 0.15
                      }s backwards`,
                    }}
                  >
                    <dt className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-ink/45 transition-colors duration-500 group-hover:text-ink/75">
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-gold/40 transition-all duration-500 group-hover:bg-gold group-hover:shadow-[0_0_8px_rgba(252,187,0,0.7)]"
                      />
                      {row.label}
                    </dt>
                    <dd className="flex items-baseline gap-3 font-display text-xl text-ink transition-all duration-500 group-hover:[text-shadow:0_0_18px_rgba(252,187,0,0.35)] md:text-2xl">
                      <span
                        aria-hidden
                        className="h-px w-0 bg-gold transition-all duration-500 group-hover:w-6 group-hover:shadow-[0_0_8px_rgba(252,187,0,0.6)]"
                      />
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
