import type { Metadata } from 'next';
import { CinematicHero } from '@/components/CinematicHero';
import { TwoColumnFeature } from '@/components/TwoColumnFeature';
import { FinishSpec } from '@/components/FinishSpec';
import { CTASection } from '@/components/CTASection';
import { InlineLeadStrip } from '@/components/InlineLeadStrip';
import { FAQ } from '@/components/FAQ';
import { SectionHeader } from '@/components/SectionHeader';
import { kitchenImages, bathroomImages, remodelImages } from '@/lib/images';
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Investor & Airbnb Remodels in Las Vegas',
  description:
    'Design-led renovations engineered to lift ADR, occupancy, and resale value across the Las Vegas valley. Investor and short-term rental remodels by VCV Vegas.',
  alternates: { canonical: `${siteConfig.url}/investor-remodels-las-vegas` },
};

const faqs = [
  {
    q: 'How is an investor remodel different from a homeowner remodel?',
    a: 'Same finish standard, different decision framework. We engineer the design around photography, ADR uplift, guest experience, durability, and turnover speed — not just aesthetic preference.',
  },
  {
    q: 'Do you work on Airbnb / short-term rentals specifically?',
    a: 'Yes. Many of our investor clients operate short-term rentals where finish quality, photographability, and durability under heavy use are non-negotiable.',
  },
  {
    q: 'Can you turn a project around quickly?',
    a: 'We pre-order long-lead items, schedule trades in tight sequence, and operate to a published calendar — short-term-rental investors typically see significantly faster turnarounds than the local average.',
  },
  {
    q: 'Do you work with flip and resale projects?',
    a: 'Selectively, where the property and finish standard justify a luxury design-build approach. We are not the right team for cosmetic flips, but for resale builds in the top quartile we are an excellent fit.',
  },
];

export default function InvestorPage() {
  const pageUrl = `${siteConfig.url}/investor-remodels-las-vegas`;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Investor Remodels Las Vegas',
            description:
              'Design-build investor and short-term-rental renovations engineered for ADR, occupancy, and resale uplift in the Las Vegas market.',
            url: pageUrl,
            image: remodelImages[1].src,
          }),
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Investor Remodels Las Vegas', url: pageUrl },
          ]),
          faqSchema(faqs),
        ]}
      />
      <CinematicHero
        eyebrow="Investor & Airbnb Remodels"
        title="Design"
        italic="that prints."
        description="Renovations engineered to lift ADR, occupancy, and resale value — finish quality that photographs, durability that holds up to turnover, and a build calendar your projections can trust."
        images={[remodelImages[1], kitchenImages[3], bathroomImages[1], remodelImages[2], kitchenImages[0]]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Investor Remodels' },
        ]}
      />

      <TwoColumnFeature
        eyebrow="The Investor Lens"
        title="Finish that"
        italic="earns its keep."
        body={[
          'Investor projects live or die on three numbers — ADR, occupancy, and resale. We design specifically to move all three: hero photography moments, durable finishes that survive heavy turnover, and architectural details guests can’t find anywhere else on the platform.',
          'Every specification is reviewed against cost, lead time, replaceability, and how it actually photographs — not just how it feels in a showroom.',
        ]}
        bullets={[
          'ADR uplift design',
          'Hero photography moments',
          'Durable luxury finishes',
          'Turnover-friendly materials',
          'Long-lead pre-ordering',
          'Published build calendar',
        ]}
        image={kitchenImages[3]}
      />

      <TwoColumnFeature
        eyebrow="Operator-Friendly"
        title="Built for"
        italic="real-world turnover."
        body={[
          'Short-term-rental properties take more abuse in a year than a primary home takes in five. We choose materials and detail every joint with that in mind — sealed stone, commercial-grade hardware, replaceable lighting, and floors that can be refinished in place.',
          'For repeat investor clients we offer a streamlined repeat-build relationship — your spec book carries between properties so the second project is faster than the first.',
        ]}
        image={bathroomImages[1]}
        reverse
      />

      <InlineLeadStrip
        title="Have a property to reposition?"
        italic="Send your pro-forma."
        description="Our team responds with scope direction within one business day. Pro-forma and address welcomed."
      />

      <FinishSpec
        eyebrow="Investor Capabilities"
        title="Where we add value."
        specs={[
          { label: 'STR Repositioning', description: 'Renovating tired rentals into top-quartile short-term inventory.' },
          { label: 'Resale Builds', description: 'High-end renovations for resale in luxury Las Vegas submarkets.' },
          { label: 'Photography Moments', description: 'Designed hero rooms that drive booking conversion.' },
          { label: 'Durable Finishes', description: 'Trade-grade materials that survive turnover-heavy use.' },
          { label: 'Repeat Spec Books', description: 'Reusable specification libraries for portfolio investors.' },
          { label: 'Build-to-Schedule', description: 'Published calendars investors can pro-forma against.' },
        ]}
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader eyebrow="Investor FAQs" title="What investors ask first." />
          <div className="mt-16 max-w-4xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Renovate a property that earns."
        description="Send us your address and pro-forma — we’ll respond with scope direction within one business day."
        image={remodelImages[2]}
      />
    </>
  );
}
