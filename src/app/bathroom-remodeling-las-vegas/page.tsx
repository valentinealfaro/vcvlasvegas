import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { TwoColumnFeature } from '@/components/TwoColumnFeature';
import { FinishSpec } from '@/components/FinishSpec';
import { ImageRow } from '@/components/Marquee';
import { CTASection } from '@/components/CTASection';
import { InlineLeadStrip } from '@/components/InlineLeadStrip';
import { InvestmentBlock } from '@/components/InvestmentBlock';
import { FAQ } from '@/components/FAQ';
import { SectionHeader } from '@/components/SectionHeader';
import { bathroomImages } from '@/lib/images';
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Luxury Bathroom Remodeling in Las Vegas',
  description:
    'Spa-inspired luxury bathroom remodeling in Las Vegas — frameless walk-ins, soaking tubs, floating vanities, and matte stone. Design-build by VCV Vegas.',
  alternates: { canonical: `${siteConfig.url}/bathroom-remodeling-las-vegas` },
  openGraph: {
    title: 'Luxury Bathroom Remodeling in Las Vegas · VCV Vegas',
    description:
      'Architectural bathroom remodels for Las Vegas homeowners. Frameless walk-ins, soaking tubs, floating vanities, and matte stone finishes.',
    images: [bathroomImages[0].src],
  },
};

const faqs = [
  {
    q: 'How much does a luxury bathroom remodel cost in Las Vegas?',
    a: 'Most VCV Vegas luxury bathroom remodels range from the high-five into the mid-six figures depending on scope, stone selections, and whether plumbing or layouts are reconfigured. A transparent investment range is shared after your private consultation.',
  },
  {
    q: 'How long does a luxury bathroom remodel take?',
    a: 'Primary suite renovations typically run 6–10 weeks on site once specifications are signed and long-lead items are ordered. Smaller guest baths complete in 4–6 weeks.',
  },
  {
    q: 'Do you build curbless walk-in showers and wet rooms?',
    a: 'Yes — curbless, linear-drain walk-ins and combined wet rooms (tub inside the shower envelope) are signature VCV Vegas details. We engineer the slope, waterproofing, and substrate so the finish is permanent.',
  },
  {
    q: 'What finishes are typical in a VCV Vegas bath?',
    a: 'Honed natural stone, large-format porcelain, brushed brass or matte black hardware, frameless glass, integrated LED, heated floors, and millwork-grade vanities. We specify trade-only product lines reserved for design-build studios.',
  },
  {
    q: 'Can you work with my existing layout?',
    a: 'Almost always. We frequently rework the floor plan to expand the shower, relocate the tub, and add a walk-in closet — even within the original footprint.',
  },
];

export default function BathroomPage() {
  const pageUrl = `${siteConfig.url}/bathroom-remodeling-las-vegas`;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Luxury Bathroom Remodeling Las Vegas',
            description:
              'Design-build luxury bathroom remodeling for Las Vegas homeowners — walk-in showers, soaking tubs, floating vanities, and spa-grade primary suites.',
            url: pageUrl,
            image: bathroomImages[0].src,
          }),
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Bathroom Remodeling Las Vegas', url: pageUrl },
          ]),
          faqSchema(faqs),
        ]}
      />
      <PageHero
        eyebrow="Luxury Bathroom Remodeling"
        title="Spa bathrooms"
        italic="for desert living."
        description="Frameless walk-ins, soaking tubs, floating vanities, and matte stone — primary suites designed to feel like the best resort in Las Vegas, only quieter."
        image={bathroomImages[0]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Bathroom Remodeling' },
        ]}
      />

      <TwoColumnFeature
        eyebrow="Primary Suite"
        title="A private resort,"
        italic="not a bathroom."
        body={[
          'We design primary baths around the way you actually live in them — barefoot mornings, late evenings, and the quiet hour after the rest of the house has gone to sleep.',
          'Every element — the floor temperature, the depth of the tub, the throw of the shower head, the warmth of the lighting — is specified in advance so the finished space feels engineered for stillness.',
        ]}
        bullets={[
          'Curbless frameless walk-ins',
          'Freestanding soaking tubs',
          'Heated stone flooring',
          'Designer LED lighting layers',
          'Custom millwork vanities',
          'Integrated water-control niches',
        ]}
        image={bathroomImages[2]}
      />

      <TwoColumnFeature
        eyebrow="Material Story"
        title="Honed stone."
        italic="Frameless glass. Warm brass."
        body={[
          'Modern desert bathrooms reward restraint. We work with honed natural stone, large-format porcelain, brushed brass, and matte black — palettes that look as good in ten years as they do the day the keys turn back.',
          'Our trade relationships give us access to stone yards, fabricators, and hardware suppliers reserved for design-build firms — a level of specification you cannot buy off the shelf.',
        ]}
        image={bathroomImages[3]}
        reverse
      />

      <InvestmentBlock
        title="What a luxury bathroom looks like — in numbers."
        description="Indicative ranges only. A precise investment range is shared after your private consultation, tied to your home and your goals."
        rows={[
          { label: 'Signature Range', value: '$80k – $180k' },
          { label: 'Build Window', value: '6 – 10 weeks on site' },
          { label: 'Long-Lead Order', value: 'Pre-construction phase' },
          { label: 'Studio Lead', value: 'Senior Designer · End-to-end' },
          { label: 'Warranty', value: '1-Year Workmanship Standard' },
        ]}
      />

      <FinishSpec
        eyebrow="Signature Details"
        title="The details that separate a remodel from a renovation."
        description="Every VCV Vegas bathroom is built around a short list of architectural details — the small decisions that quietly elevate the entire space."
        specs={[
          {
            label: 'Curbless Walk-Ins',
            description:
              'Engineered slopes and linear drains let the floor read as one continuous surface from vanity to shower.',
          },
          {
            label: 'Floating Vanities',
            description:
              'Wall-hung millwork lifts the eye and the room — paired with integrated LED that washes the floor in warm light.',
          },
          {
            label: 'Wet Rooms',
            description:
              'A single waterproof envelope combines the tub and shower into one calm, architectural moment.',
          },
          {
            label: 'Heated Floors',
            description:
              'Radiant heat under honed stone — invisible, quiet, and one of the most loved details in every home.',
          },
          {
            label: 'Designer Lighting',
            description:
              'Layered LED at the cove, vanity, and floor levels for a soft, almost cinematic ambient feel.',
          },
          {
            label: 'Hidden Storage',
            description:
              'Recessed niches, push-latch drawers, and millwork-integrated medicine cabinets that vanish into the wall.',
          },
        ]}
      />

      <ImageRow images={bathroomImages.slice(0, 3)} />

      <InlineLeadStrip
        title="Ready to design your spa bathroom?"
        italic="The first conversation is free."
        description="A senior designer will walk your home, listen, and respond with scope direction within one business day."
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Bathroom FAQs"
            title="Questions Las Vegas homeowners ask first."
          />
          <div className="mt-16 max-w-4xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Design a bathroom you’ll never want to leave."
        description="Schedule a private design consultation for your Las Vegas bathroom remodel. We respond within one business day."
        image={bathroomImages[5]}
      />
    </>
  );
}
