import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Sparkles, Crown, Building2 } from 'lucide-react';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { customHomeImages, kitchenImages, bathroomImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Engagement Tiers · VCV Vegas',
  description:
    'Three ways to work with VCV Vegas — Studio Engagement (standard luxury), Studio Concierge (top-tier), and Trade Engagement (designer-introduced).',
  alternates: { canonical: `${siteConfig.url}/engagement` },
};

const tiers = [
  {
    icon: Sparkles,
    eyebrow: 'Tier 01',
    name: 'Studio Engagement',
    summary: 'The default VCV Vegas relationship for luxury single-room, multi-room, and whole-home work in the Las Vegas metro.',
    range: '$80k – $2M',
    duration: '6 weeks – 9 months',
    bullets: [
      'Senior designer lead end-to-end',
      'Design-build under one roof',
      'Trade-only material partners',
      'Weekly client briefings',
      'One-year service relationship',
    ],
    href: '/services',
    cta: 'Explore Services',
    image: kitchenImages[0],
  },
  {
    icon: Crown,
    eyebrow: 'Tier 02',
    name: 'Studio Concierge',
    summary: 'Top-tier service for $1M+ commissions where the project deserves its own studio principal and a coordinated multi-consultant team.',
    range: '$1M+',
    duration: 'Custom calendar',
    bullets: [
      'Studio principal as project director',
      'Full team coordination (architect, designer, engineers)',
      'Anonymized portfolio · references private',
      'Hotel-level site discipline',
      'Photography licensed to client',
    ],
    href: '/concierge',
    cta: 'Explore Concierge',
    image: customHomeImages[1],
  },
  {
    icon: Building2,
    eyebrow: 'Tier 03',
    name: 'Trade Engagement',
    summary: 'A pre-construction and execution relationship for architects and interior designers introducing residential projects to the studio.',
    range: 'Per project',
    duration: '7–10 day estimate turnaround',
    bullets: [
      'One pre-construction lead',
      'Fixed turnaround on pricing',
      'NDA standard',
      'Designer spec-book honored',
      'Photographed closeout licensed to designer',
    ],
    href: '/for-architects-and-designers',
    cta: 'Explore Trade Program',
    image: bathroomImages[0],
  },
];

export default function EngagementPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Engagement Tiers', url: `${siteConfig.url}/engagement` },
        ])}
      />

      <CinematicHero
        eyebrow="Engagement"
        title="Three ways"
        italic="to work with the studio."
        description="VCV Vegas operates three engagement models. They overlap in standard but differ in scope, principal lead, and how the project is run. Pick the one that matches where you are."
        images={[kitchenImages[0], customHomeImages[1], bathroomImages[0], customHomeImages[0]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Engagement' }]}
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="The Three Tiers"
            title="One studio. Three engagements."
            description="Same finish standard, same senior team, calibrated to the scope and discretion of the work."
          />

          <div className="mt-20 space-y-20">
            {tiers.map((tier, i) => {
              const Icon = tier.icon;
              return (
                <Reveal key={tier.name}>
                  <div
                    className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                      i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                    }`}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-ink-700">
                      <Image
                        src={tier.image.src}
                        alt={tier.image.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/20 to-transparent" />
                      <div className="absolute left-6 top-6">
                        <Icon className="h-7 w-7 text-bone" />
                      </div>
                    </div>

                    <div>
                      <p className="eyebrow mb-4">{tier.eyebrow}</p>
                      <h2 className="font-display text-4xl text-bone md:text-5xl">
                        {tier.name}
                      </h2>
                      <p className="mt-5 text-lg leading-relaxed text-bone/70">
                        {tier.summary}
                      </p>

                      <dl className="mt-10 divide-y divide-bone/10 border-y border-bone/10">
                        <div className="flex items-baseline justify-between gap-6 py-4">
                          <dt className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/45">
                            Investment Range
                          </dt>
                          <dd className="font-display text-lg text-bone">
                            {tier.range}
                          </dd>
                        </div>
                        <div className="flex items-baseline justify-between gap-6 py-4">
                          <dt className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/45">
                            Build Window
                          </dt>
                          <dd className="font-display text-lg text-bone">
                            {tier.duration}
                          </dd>
                        </div>
                      </dl>

                      <ul className="mt-8 space-y-3">
                        {tier.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-sm text-bone/70">
                            <span className="mt-2 h-px w-4 shrink-0 bg-gold" />
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-10">
                        <Link
                          href={tier.href}
                          className="inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.28em] text-bone transition-colors hover:text-bone"
                        >
                          {tier.cta}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Unsure which tier fits?"
        description="A senior designer will read the project and recommend a path within one business day. By appointment."
        image={customHomeImages[0]}
      />
    </>
  );
}
