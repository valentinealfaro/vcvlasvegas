import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { TwoColumnFeature } from '@/components/TwoColumnFeature';
import { FinishSpec } from '@/components/FinishSpec';
import { CTASection } from '@/components/CTASection';
import { FAQ } from '@/components/FAQ';
import { SectionHeader } from '@/components/SectionHeader';
import { customHomeImages, kitchenImages } from '@/lib/images';
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Outdoor Living & Poolside Remodels in Las Vegas',
  description:
    'Outdoor living, sheltered patios, outdoor kitchens, and poolside remodels designed for the Las Vegas climate. Design-build by VCV Vegas.',
  alternates: { canonical: `${siteConfig.url}/outdoor-living-las-vegas` },
};

const faqs = [
  {
    q: 'What is included in an outdoor living build?',
    a: 'A sheltered patio structure, integrated lighting, outdoor kitchen or bar, fans, heaters, and finished flooring — designed to be a true second living room of the house, not a backyard add-on.',
  },
  {
    q: 'Do you remodel pool surrounds?',
    a: 'Yes. Resurfacing, deck stone replacement, water-feature integration, and architectural pool-side cabanas are common scope items.',
  },
  {
    q: 'Can you build outdoor kitchens that survive the Vegas summer?',
    a: 'Absolutely. We spec UV-stable cabinetry, sealed stone, ventilated appliance bays, and shaded structure so the outdoor kitchen actually gets used in July, not just photographed.',
  },
];

export default function OutdoorPage() {
  const pageUrl = `${siteConfig.url}/outdoor-living-las-vegas`;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Outdoor Living Las Vegas',
            description:
              'Outdoor living, patios, outdoor kitchens, and poolside remodels for the Las Vegas climate.',
            url: pageUrl,
            image: customHomeImages[3].src,
          }),
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Outdoor Living Las Vegas', url: pageUrl },
          ]),
          faqSchema(faqs),
        ]}
      />
      <PageHero
        eyebrow="Outdoor Living & Poolside"
        title="A second living room"
        italic="under the sky."
        description="Sheltered patios, outdoor kitchens, and poolside remodels engineered for the Las Vegas climate — designed to be used year-round, not just photographed."
        image={customHomeImages[3]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Outdoor Living' },
        ]}
      />

      <TwoColumnFeature
        eyebrow="Indoor / Outdoor"
        title="Where the house"
        italic="opens up."
        body={[
          'The strongest move in modern Vegas architecture is the threshold between inside and outside — glass walls that disappear into pockets, a continuous floor plane, and an outdoor room that reads as an extension of the great room.',
          'We engineer the structure, shade, and air movement so the patio is as comfortable in July as it is in November.',
        ]}
        bullets={[
          'Sheltered patio structures',
          'Outdoor kitchens + bars',
          'Integrated heaters + fans',
          'Concealed lighting + audio',
          'Resurfaced pool decks',
          'Architectural fire features',
        ]}
        image={customHomeImages[2]}
      />

      <TwoColumnFeature
        eyebrow="Poolside"
        title="A reason"
        italic="to be outside."
        body={[
          'Most Vegas pools were designed and never re-thought. We do that: re-finished surfaces, new stone decks, integrated water features, shaded cabanas, and outdoor kitchens that actually pull people out of the house.',
          'Our outdoor builds are spec-engineered for desert sun, monsoon rain, and the temperature swings unique to this valley.',
        ]}
        image={kitchenImages[2]}
        reverse
      />

      <FinishSpec
        eyebrow="Scope Library"
        title="Outdoor living scope."
        specs={[
          { label: 'Patio Structures', description: 'Engineered shade with integrated lighting and fans.' },
          { label: 'Outdoor Kitchens', description: 'Stainless or sealed-stone islands with grill, sink, and beverage.' },
          { label: 'Pool Decks', description: 'Stone or large-format porcelain decking, re-set and re-finished.' },
          { label: 'Cabanas', description: 'Architectural pool-side structures with shade and storage.' },
          { label: 'Fire Features', description: 'Linear gas, sculptural bowls, integrated fire-and-water designs.' },
          { label: 'Landscape', description: 'Desert-modern landscape coordination with trusted partners.' },
        ]}
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader eyebrow="Outdoor FAQs" title="Common questions." />
          <div className="mt-16 max-w-4xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Re-imagine your outdoor room."
        description="Schedule a walkthrough for your patio, pool, or full outdoor build."
        image={customHomeImages[4]}
      />
    </>
  );
}
