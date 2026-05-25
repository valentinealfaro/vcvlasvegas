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
    <section className="relative overflow-hidden bg-ink-800 py-20 lg:py-28">
      <div aria-hidden className="glow-duotone" />

      <div className="container-luxe">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center border border-gold/40 bg-gold/5">
                  <Calculator className="h-4 w-4 text-bone" aria-hidden />
                </span>
                <p className="eyebrow !text-bone">{eyebrow}</p>
              </div>
              <h2 className="font-display text-3xl text-bone md:text-4xl">
                {title}
              </h2>
              {description && (
                <p className="mt-5 max-w-md text-base leading-relaxed text-bone/60">
                  {description}
                </p>
              )}
              <div className="mt-8">
                <Link
                  href="/investment"
                  className="group inline-flex items-center gap-3 border border-bone/15 px-5 py-3 text-[0.65rem] uppercase tracking-[0.28em] text-bone transition-all duration-500 hover:border-gold hover:bg-gold/5"
                >
                  Calculate your range
                  <ArrowUpRight className="h-3 w-3 transition-transform duration-500 group-hover:rotate-45" />
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="border-gradient">
              <dl className="divide-y divide-bone/10 bg-ink-800 px-7 py-2 lg:px-10">
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
                    <dt className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/45 transition-colors duration-500 group-hover:text-bone/75">
                      {row.label}
                    </dt>
                    <dd className="flex items-baseline gap-3 font-display text-xl text-bone md:text-2xl">
                      <span
                        aria-hidden
                        className="h-px w-0 bg-gold transition-all duration-500 group-hover:w-6"
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
