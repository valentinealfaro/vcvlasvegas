import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { TwoColumnFeature } from '@/components/TwoColumnFeature';
import { FinishSpec } from '@/components/FinishSpec';
import { ImageRow } from '@/components/Marquee';
import { CTASection } from '@/components/CTASection';
import { FAQ } from '@/components/FAQ';
import { SectionHeader } from '@/components/SectionHeader';
import { customHomeImages, flooringImages, kitchenImages } from '@/lib/images';
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Luxury Renovations in Las Vegas',
  description:
    'High-end luxury renovations across the Las Vegas metro — bespoke millwork, stone, glass, and metalwork. Architectural design-build by VCV Vegas.',
  alternates: { canonical: `${siteConfig.url}/luxury-renovations-las-vegas` },
};

const faqs = [
  {
    q: 'What separates a luxury renovation from a standard remodel?',
    a: 'A luxury renovation is defined by the layer of bespoke detail you cannot buy off the shelf — full-custom millwork, stone fabricated to the inch, glass walls engineered to the room, and integrated lighting that disappears into the architecture.',
  },
  {
    q: 'Do you handle stone fabrication and glass partitions?',
    a: 'Yes. VCV Vegas works with trade-only stone yards, glass fabricators, and metal shops capable of architectural-grade work — book-matched slabs, frameless partitions, and custom railings to spec.',
  },
  {
    q: 'Can you renovate a single signature room?',
    a: 'Absolutely. A signature wet bar, library, wine room, or media room is a common starting point for clients new to working with us.',
  },
];

export default function LuxuryRenovationsPage() {
  const pageUrl = `${siteConfig.url}/luxury-renovations-las-vegas`;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Luxury Renovations Las Vegas',
            description:
              'High-end bespoke renovations for Las Vegas homes — custom millwork, stone, glass, and metal finish work.',
            url: pageUrl,
            image: customHomeImages[2].src,
          }),
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Luxury Renovations Las Vegas', url: pageUrl },
          ]),
          faqSchema(faqs),
        ]}
      />
      <PageHero
        eyebrow="Luxury Renovations"
        title="The bespoke layer"
        italic="above a remodel."
        description="Luxury renovations are defined by the details you cannot buy off the shelf — bespoke millwork, stone fabricated to the inch, and architectural glass engineered to the room."
        image={customHomeImages[2]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Luxury Renovations' },
        ]}
      />

      <TwoColumnFeature
        eyebrow="Bespoke Millwork"
        title="Cabinetry as"
        italic="architecture."
        body={[
          'Bespoke millwork is the single largest visual surface in a luxury home — and the most quietly powerful one. We treat cabinetry as architectural mass, not furniture.',
          'Full-custom boxes, inset doors, hand-finished panels, integrated lighting, push-latch hardware, and species selected to age beautifully. Every detail is drawn before a board is cut.',
        ]}
        image={kitchenImages[1]}
      />

      <TwoColumnFeature
        eyebrow="Stone + Glass"
        title="Material weight"
        italic="and material light."
        body={[
          'A great room is a balance of mass and openness. Book-matched stone gives weight to the architecture; frameless glass releases the room into light. We engineer both — from slab selection to fabrication to install.',
          'Our trade partners are reserved for design-build studios and architectural offices; the result is finish work that holds up at close inspection, not just in photographs.',
        ]}
        image={flooringImages[0]}
        reverse
      />

      <FinishSpec
        eyebrow="Signature Capabilities"
        title="The bespoke layer."
        specs={[
          { label: 'Architectural Millwork', description: 'Full-custom cabinetry, built-ins, libraries, and media walls.' },
          { label: 'Book-Matched Stone', description: 'Slab selection, fabrication, and dry-lay before install.' },
          { label: 'Frameless Glass', description: 'Wine rooms, shower envelopes, interior partitions.' },
          { label: 'Custom Metalwork', description: 'Railings, hardware, range hoods, and feature details.' },
          { label: 'Wine + Wet Bars', description: 'Climate-controlled wine display and entertaining stations.' },
          { label: 'Lighting Integration', description: 'Architectural cove, recessed, and decorative layers on scenes.' },
        ]}
      />

      <ImageRow images={[customHomeImages[1], customHomeImages[3], customHomeImages[5]]} />

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader eyebrow="Renovation FAQs" title="What to know." />
          <div className="mt-16 max-w-4xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Commission your bespoke renovation."
        description="A private design consultation with a senior VCV Vegas designer — by appointment."
        image={customHomeImages[6]}
      />
    </>
  );
}
