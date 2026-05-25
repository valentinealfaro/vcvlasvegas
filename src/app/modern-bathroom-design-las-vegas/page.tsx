import type { Metadata } from 'next';
import { CinematicHero } from '@/components/CinematicHero';
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
  title: 'Modern Bathroom Design in Las Vegas',
  description:
    'Modern bathroom design for desert homes — wet rooms, frameless walk-ins, oversized vanities, and matte stone. Architectural design-build by VCV Vegas.',
  alternates: { canonical: `${siteConfig.url}/modern-bathroom-design-las-vegas` },
};

const faqs = [
  {
    q: 'What defines a “modern” bathroom design?',
    a: 'Restraint. Modern bathrooms are about clean planes, hidden storage, layered lighting, and material honesty — natural stone, honed finishes, frameless glass, and quiet hardware.',
  },
  {
    q: 'Do you build wet rooms?',
    a: 'Yes. Wet rooms — a tub set inside the walk-in shower envelope behind a single glass partition — are one of our most-requested modern bathroom layouts in the Las Vegas valley.',
  },
  {
    q: 'How is modern bathroom design different from a renovation?',
    a: 'A standard renovation replaces. A modern design re-thinks. We start from the architecture — light, ceiling height, sightlines — and design the bath as a calm spatial experience, not a checklist of fixtures.',
  },
];

export default function ModernBathPage() {
  const pageUrl = `${siteConfig.url}/modern-bathroom-design-las-vegas`;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Modern Bathroom Design Las Vegas',
            description:
              'Modern architectural bathroom design for desert homes — wet rooms, frameless walk-ins, and matte stone palettes.',
            url: pageUrl,
            image: bathroomImages[1].src,
          }),
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Modern Bathroom Design Las Vegas', url: pageUrl },
          ]),
          faqSchema(faqs),
        ]}
      />
      <CinematicHero
        eyebrow="Modern Bathroom Design"
        title="Architectural baths"
        italic="for desert homes."
        description="Wet rooms, oversized walk-ins, frameless partitions, and matte stone — modern bathroom design tuned for how Las Vegas homes catch light, air, and quiet."
        images={[bathroomImages[1], bathroomImages[3], bathroomImages[4], bathroomImages[5], bathroomImages[0]]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Modern Bathroom Design' },
        ]}
      />

      <TwoColumnFeature
        eyebrow="Wet Rooms"
        title="A single calm"
        italic="waterproof envelope."
        body={[
          'A wet room combines the tub and walk-in shower into a single architectural moment — one glass partition, one floor plane, one continuous wall finish.',
          'It’s the most quietly sophisticated move in modern bath design, and one of the rooms our clients live inside the longest each day.',
        ]}
        image={bathroomImages[4]}
      />

      <TwoColumnFeature
        eyebrow="Material Restraint"
        title="Honed stone."
        italic="Matte black. Warm wood."
        body={[
          'Modern desert palettes reward restraint. We work in honed stone, large-format porcelain, matte black or brushed brass hardware, and the occasional warm wood vanity for weight.',
          'The result is a room that looks effortless — even though every joint, reveal, and dimension has been drawn in advance.',
        ]}
        image={bathroomImages[3]}
        reverse
      />

      <InvestmentBlock
        title="What an architectural bath looks like — in numbers."
        description="Indicative ranges only. Architectural scope adds engineering for wet rooms, curbless drainage, and integrated lighting."
        rows={[
          { label: 'Signature Range', value: '$100k – $220k' },
          { label: 'Build Window', value: '7 – 11 weeks on site' },
          { label: 'Wet-Room Engineering', value: 'Included Where Specified' },
          { label: 'Studio Lead', value: 'Senior Designer · End-to-end' },
          { label: 'Warranty', value: '1-Year Workmanship Standard' },
        ]}
      />

      <FinishSpec
        eyebrow="Design Moves"
        title="Signature modern details."
        specs={[
          { label: 'Curbless Walk-Ins', description: 'A continuous floor from vanity to shower with a linear drain.' },
          { label: 'Floating Vanities', description: 'Wall-hung millwork with integrated under-cabinet wash light.' },
          { label: 'Frameless Glass', description: 'Tempered partitions cut and dry-laid before fabrication.' },
          { label: 'Layered Lighting', description: 'Cove, vanity, and floor LED on programmable scenes.' },
          { label: 'Heated Stone', description: 'Radiant heat under honed stone or large-format porcelain.' },
          { label: 'Hidden Storage', description: 'Push-latch drawers and recessed millwork medicine cabinets.' },
        ]}
      />

      <ImageRow images={bathroomImages.slice(2, 5)} />

      <InlineLeadStrip
        title="Design a bathroom that reads as architecture."
        italic="Start with a senior designer."
        description="A private design consultation in your home — by appointment, within one business day."
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader eyebrow="Modern Bath FAQs" title="What to know." />
          <div className="mt-16 max-w-4xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="A modern bathroom for a modern home."
        description="Schedule a private design consultation in your Las Vegas residence."
        image={bathroomImages[5]}
      />
    </>
  );
}
