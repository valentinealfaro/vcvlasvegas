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
                <span className="italic text-gold-light">private numbers.</span>
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

        <div className="mt-16 grid gap-px bg-bone/10 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t, i) => (
            <Reveal key={t.label} delay={i % 4}>
              <Link
                href={t.href}
                className="group flex h-full flex-col justify-between gap-12 bg-ink p-8 transition-colors hover:bg-ink-700 lg:p-10"
              >
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/45">
                    {t.label}
                  </p>
                  <p className="mt-5 font-display text-3xl text-bone group-hover:text-gold-light md:text-4xl">
                    {t.range}
                  </p>
                  <p className="mt-3 text-sm text-bone/55">{t.duration}</p>
                </div>
                <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-gold opacity-70 transition-opacity group-hover:opacity-100">
                  Explore
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
