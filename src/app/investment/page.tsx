import type { Metadata } from 'next';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import dynamic from 'next/dynamic';

const InvestmentCalculator = dynamic(
  () => import('@/components/InvestmentCalculator').then((m) => m.InvestmentCalculator),
  {
    loading: () => (
      <div className="h-[640px] w-full animate-pulse border border-ink/10 bg-bone-800/40" aria-label="Loading calculator" />
    ),
  },
);
import { kitchenImages, customHomeImages, bathroomImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Investment Calculator · VCV Vegas',
  description:
    'Indicative investment ranges and build windows for a luxury remodel in Las Vegas — kitchens, bathrooms, whole-home, and outdoor living. Calculate yours.',
  alternates: { canonical: `${siteConfig.url}/investment` },
};

const notes = [
  {
    t: 'Ranges, not estimates.',
    d: 'The calculator is tuned to real VCV Vegas range data — but every home is different. A precise number arrives after a senior designer walks the project.',
  },
  {
    t: 'No salesperson follow-up.',
    d: 'If you request the detailed breakdown, a senior designer reaches out — not a sales team. One business day, one response.',
  },
  {
    t: 'Trade-only specification baseline.',
    d: 'All three finish tiers assume the trade-only material partners that come standard on every VCV Vegas project.',
  },
];

export default function InvestmentPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Investment Calculator', url: `${siteConfig.url}/investment` },
        ])}
      />

      <CinematicHero
        eyebrow="The Numbers"
        title="What a"
        italic="luxury remodel costs."
        description="An honest, indicative range tied to your project type, square footage, and finish level — calculated against real VCV Vegas data. Request the detailed breakdown anytime."
        images={[kitchenImages[0], customHomeImages[0], bathroomImages[0], kitchenImages[3]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Investment Calculator' }]}
      />

      <section className="bg-bone py-24 lg:py-32">
        <div className="container-luxe">
          <Reveal>
            <InvestmentCalculator />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-bone-800 py-20">
        <div className="container-luxe">
          <div className="grid gap-px bg-ink/10 md:grid-cols-3">
            {notes.map((n) => (
              <Reveal key={n.t} className="bg-bone-800 p-8 lg:p-10">
                <p className="font-display text-xl text-ink md:text-2xl">
                  {n.t}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {n.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Already know your scope?"
        description="Skip the calculator and schedule a private consultation directly with a senior designer."
        image={customHomeImages[0]}
      />
    </>
  );
}
