import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { InlineLeadStrip } from '@/components/InlineLeadStrip';
import { FAQ } from '@/components/FAQ';
import dynamic from 'next/dynamic';

const InvestmentCalculator = dynamic(
  () => import('@/components/InvestmentCalculator').then((m) => m.InvestmentCalculator),
  {
    loading: () => (
      <div className="h-[640px] w-full animate-pulse border border-bone/10 bg-ink-800/40" aria-label="Loading calculator" />
    ),
  },
);
import { ImageCard } from '@/components/ImageCard';
import { kitchenImages, bathroomImages, customHomeImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema, faqSchema } from '@/lib/schema';

const url = `${siteConfig.url}/luxury-remodel-cost-las-vegas`;

export const metadata: Metadata = {
  title: 'Luxury Remodel Cost in Las Vegas · 2026 Guide',
  description:
    'What does a luxury remodel cost in Las Vegas? Honest 2026 ranges for kitchens, bathrooms, and whole-home renovations — written by the studio at VCV Vegas.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Luxury Remodel Cost in Las Vegas · 2026 Guide',
    description:
      'What a luxury remodel actually costs in Las Vegas — written directly by the studio.',
    images: [kitchenImages[0].src],
  },
};

const faqs = [
  {
    q: 'What does a luxury kitchen remodel cost in Las Vegas?',
    a: 'Most VCV Vegas chef-grade kitchens fall between $150k and $350k, with bespoke builds running higher. Custom millwork, integrated appliances, and book-matched stone are the most material drivers of cost.',
  },
  {
    q: 'What does a luxury bathroom remodel cost in Las Vegas?',
    a: 'Signature primary baths typically run $80k to $180k. Architectural baths with wet-room engineering, curbless walk-ins, and floating millwork vanities can run $180k–$220k.',
  },
  {
    q: 'What does a whole-home remodel cost in Las Vegas?',
    a: 'Whole-home renovations begin in the mid-six figures and scale to $2M+ depending on square footage, structural work, and finish level. A 5,000 sqft Premium-tier renovation is typically in the $1M–$1.8M range.',
  },
  {
    q: 'What drives the cost of a luxury Las Vegas remodel?',
    a: 'Five primary factors: scope (single room vs whole-home), square footage, finish tier (Signature / Premium / Bespoke), structural complexity (load-bearing wall removal, additions), and long-lead specifications (custom cabinetry, stone selections, integrated appliances).',
  },
  {
    q: 'How does VCV Vegas pricing compare to other Las Vegas contractors?',
    a: 'We are not the lowest. We are also not the highest. We position at the architectural-finish level — homes built to standards comparable to LA and Scottsdale design-build studios. If you are pricing on lowest-bid metrics, we are not the right team.',
  },
];

const drivers = [
  {
    t: 'Scope',
    d: 'Single room vs. multi-room vs. whole-home. The most significant single cost driver — and the easiest one to control through phased planning.',
  },
  {
    t: 'Square Footage',
    d: 'Cost scales with surface area: floor, walls, ceilings, cabinetry, glass. Larger rooms aren’t proportionally more expensive — but the materials add up.',
  },
  {
    t: 'Finish Tier',
    d: 'Signature, Premium, or Bespoke. The same room can cost 1.0× or 1.8× depending on stone, hardware, millwork, and lighting selections.',
  },
  {
    t: 'Structural Work',
    d: 'Load-bearing wall removal, beam engineering, foundation modifications, additions. Adds engineering, permitting, and skilled trade hours.',
  },
  {
    t: 'Long-Lead Specs',
    d: 'Custom millwork, book-matched stone, integrated appliances, architectural glass. The largest line items — and the ones we order before demolition.',
  },
  {
    t: 'Site Conditions',
    d: 'High-rise access, HOA architectural review, sloped lots, older mechanical systems. Most projects have one or two; we plan for all of them.',
  },
];

const ranges = [
  {
    label: 'Signature Bathroom',
    range: '$80k – $180k',
    duration: '6 – 10 weeks',
    href: '/bathroom-remodeling-las-vegas',
  },
  {
    label: 'Architectural Bath',
    range: '$100k – $220k',
    duration: '7 – 11 weeks',
    href: '/modern-bathroom-design-las-vegas',
  },
  {
    label: 'Chef’s Kitchen',
    range: '$150k – $350k+',
    duration: '8 – 14 weeks',
    href: '/kitchen-remodeling-las-vegas',
  },
  {
    label: 'Whole-Home',
    range: '$500k – $2M+',
    duration: '4 – 9 months',
    href: '/home-remodeling-las-vegas',
  },
  {
    label: 'Outdoor / Patio',
    range: '$60k – $250k',
    duration: '6 – 14 weeks',
    href: '/outdoor-living-las-vegas',
  },
  {
    label: 'Luxury Renovation',
    range: 'By project',
    duration: 'Custom calendar',
    href: '/luxury-renovations-las-vegas',
  },
];

export default function CostGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Luxury Remodel Cost', url },
          ]),
          faqSchema(faqs),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Luxury Remodel Cost in Las Vegas · 2026 Guide',
            description:
              'Honest 2026 cost ranges for luxury remodeling in the Las Vegas metro — kitchens, bathrooms, whole-home, outdoor.',
            image: kitchenImages[0].src,
            author: { '@type': 'Organization', name: siteConfig.name },
            publisher: {
              '@type': 'Organization',
              name: siteConfig.name,
              logo: { '@type': 'ImageObject', url: `${siteConfig.url}/og.jpg` },
            },
            mainEntityOfPage: url,
            datePublished: '2026-01-15',
            dateModified: '2026-05-20',
          },
        ]}
      />

      <CinematicHero
        eyebrow="2026 Cost Guide"
        title="What a luxury remodel"
        italic="actually costs in Las Vegas."
        description="An honest, studio-written guide to luxury remodel pricing across the Las Vegas valley — kitchen, bathroom, whole-home, and outdoor scopes. Updated for 2026."
        images={[kitchenImages[0], customHomeImages[0], bathroomImages[0], customHomeImages[1], kitchenImages[1]]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Luxury Remodel Cost' },
        ]}
      />

      {/* Quick reference ranges */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="At a Glance"
            title="The ranges, by scope."
            description="Indicative 2026 ranges for typical VCV Vegas projects in the Las Vegas metro. A precise number arrives after your private consultation."
          />
          <div className="mt-16 grid gap-px bg-bone/10 md:grid-cols-2 lg:grid-cols-3">
            {ranges.map((r, i) => (
              <Reveal key={r.label} delay={i % 3}>
                <Link
                  href={r.href}
                  className="group flex h-full flex-col justify-between gap-10 bg-ink p-8 transition-colors hover:bg-ink-700 lg:p-10"
                >
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/45">
                      {r.label}
                    </p>
                    <p className="mt-4 font-display text-3xl text-bone group-hover:text-bone md:text-4xl">
                      {r.range}
                    </p>
                    <p className="mt-2 text-sm text-bone/55">{r.duration}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-bone opacity-70 transition-opacity group-hover:opacity-100">
                    Explore
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cost drivers */}
      <section className="bg-ink-800 py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="What Drives the Number"
            title="Six factors. Every project."
            description="The same room can vary by 2× or more depending on these six. Understanding them is the difference between an estimate and an investment."
          />
          <div className="mt-16 grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-3">
            {drivers.map((d, i) => (
              <Reveal key={d.t} delay={i % 3} className="bg-ink-800 p-8 lg:p-10">
                <p className="font-display text-3xl text-bone">0{i + 1}</p>
                <p className="mt-5 font-display text-xl text-bone md:text-2xl">
                  {d.t}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-bone/60">
                  {d.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator embed */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Try the Calculator"
            title="Get your range, instantly."
            description="A live, three-step estimator tuned to real VCV Vegas project data. Email-delivered detailed breakdown available."
          />
          <Reveal delay={2} className="mt-16">
            <InvestmentCalculator />
          </Reveal>
        </div>
      </section>

      {/* Visual reference grid */}
      <section className="bg-ink-800 py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Recent Work · Cost Reference"
            title="What the ranges actually look like."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3 lg:gap-8">
            <Reveal>
              <ImageCard image={kitchenImages[0]} aspect="portrait" caption={false} />
              <p className="mt-4 font-display text-lg text-bone">$240k – $360k</p>
              <p className="text-xs uppercase tracking-[0.22em] text-bone/45">
                Chef’s Kitchen · 320 sqft · Premium
              </p>
            </Reveal>
            <Reveal delay={1}>
              <ImageCard image={bathroomImages[0]} aspect="portrait" caption={false} />
              <p className="mt-4 font-display text-lg text-bone">$140k – $200k</p>
              <p className="text-xs uppercase tracking-[0.22em] text-bone/45">
                Spa Primary Bath · 240 sqft · Bespoke
              </p>
            </Reveal>
            <Reveal delay={2}>
              <ImageCard image={customHomeImages[1]} aspect="portrait" caption={false} />
              <p className="mt-4 font-display text-lg text-bone">$1.2M – $1.7M</p>
              <p className="text-xs uppercase tracking-[0.22em] text-bone/45">
                Whole-Home · 4,800 sqft · Premium
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <InlineLeadStrip
        title="Want a number tied to your home?"
        italic="Schedule a private walk."
        description="A senior designer walks the project and responds with a transparent investment range within one business day."
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader eyebrow="Cost FAQs" title="The questions homeowners ask first." />
          <div className="mt-16 max-w-4xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Replace the estimate with an investment."
        description="A private consultation with a senior VCV Vegas designer."
        image={customHomeImages[0]}
      />
    </>
  );
}
