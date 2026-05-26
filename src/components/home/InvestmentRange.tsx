import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../Reveal';

const tiers = [
  {
    label: 'Signature Bathroom',
    range: '$80k — $180k',
    duration: '6 – 10 weeks',
    href: '/bathroom-remodeling-las-vegas',
  },
  {
    label: 'Chef’s Kitchen',
    range: '$150k — $350k+',
    duration: '8 – 14 weeks',
    href: '/kitchen-remodeling-las-vegas',
  },
  {
    label: 'Whole-Home',
    range: '$500k — $2M+',
    duration: '4 – 9 months',
    href: '/home-remodeling-las-vegas',
  },
  {
    label: 'Architectural Build',
    range: 'By project',
    duration: 'Custom calendar',
    href: '/luxury-renovations-las-vegas',
  },
];

export function InvestmentRange() {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="container-luxe">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow mb-6">Investment Ranges</p>
              <h2 className="font-display text-4xl text-bone text-balance md:text-5xl">
                Transparent ranges,<br />
                <span className="italic text-bone">private numbers.</span>
              </h2>
              <p className="mt-6 max-w-xl text-bone/65">
                Indicative investment windows for typical VCV Vegas projects.
                A precise range is shared after your private consultation,
                tied to your home and your goals.
              </p>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <Link href="/contact" className="btn-ghost">
              Request your range
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {tiers.map((t, i) => (
            <Reveal key={t.label} delay={i % 4}>
              <div className="border-gradient h-full">
                <Link
                  href={t.href}
                  className="group relative flex h-full flex-col justify-between gap-12 overflow-hidden bg-ink p-8 transition-colors duration-500 hover:bg-ink-700 lg:p-10"
                >
                  {/* Subtle corner sweep */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background:
                        i % 2 === 0
                          ? 'radial-gradient(circle at 100% 0%, rgba(252,187,0,0.14), transparent 60%)'
                          : 'radial-gradient(circle at 0% 100%, rgba(59,130,246,0.14), transparent 60%)',
                    }}
                  />
                  {/* Gold corner ticks on hover */}
                  <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-gold/0 transition-colors duration-500 group-hover:border-gold/70" />
                  <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-gold/0 transition-colors duration-500 group-hover:border-gold/70" />
                  <div>
                    <div className="flex items-center gap-3">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold/60 transition-all duration-500 group-hover:bg-gold group-hover:shadow-[0_0_8px_rgba(252,187,0,0.7)]" />
                      <p className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/45">
                        {t.label}
                      </p>
                    </div>
                    <p className="mt-5 font-display text-3xl text-bone transition-all duration-500 group-hover:[text-shadow:0_0_24px_rgba(252,187,0,0.4)] md:text-4xl">
                      {t.range}
                    </p>
                    <p className="mt-3 text-sm text-bone/55">{t.duration}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-bone opacity-70 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="relative">
                      Explore
                      <span aria-hidden className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                    </span>
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-gold" />
                  </div>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
