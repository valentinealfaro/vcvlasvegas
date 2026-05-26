import type { Metadata } from 'next';
import { CinematicHero } from '@/components/CinematicHero';
import { TwoColumnFeature } from '@/components/TwoColumnFeature';
import { FinishSpec } from '@/components/FinishSpec';
import { ImageRow } from '@/components/Marquee';
import { CTASection } from '@/components/CTASection';
import { FAQ } from '@/components/FAQ';
import { SectionHeader } from '@/components/SectionHeader';
import { RelatedReading } from '@/components/RelatedReading';
import { kitchenImages, bathroomImages, customHomeImages } from '@/lib/images';
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Luxury Remodeling in Centennial Hills',
  description:
    'Luxury remodeling and general contracting for Centennial Hills, NW Las Vegas — Iron Mountain Ranch, Providence, Skye Canyon. Design-build by VCV Vegas.',
  alternates: { canonical: `${siteConfig.url}/centennial-hills-remodeling` },
};

const faqs = [
  {
    q: 'What Centennial Hills sub-neighborhoods do you serve?',
    a: 'Iron Mountain Ranch, Providence, Skye Canyon, Eagle Hills, and the broader 89143 / 89149 zip codes. Tule Springs and the new master-planned northwest is an active build region for us.',
  },
  {
    q: 'Is Centennial Hills a good market for a luxury remodel?',
    a: 'It’s one of the most quietly under-served luxury submarkets in Vegas. The custom-home stock built in 2005–2015 is generous in square footage and orientation but typically a decade behind on finish — exactly the moment a design-build studio adds the most value.',
  },
  {
    q: 'Do you handle the drive distance?',
    a: 'Yes — the entire northwest valley is within our active project radius and our crews are based to serve it without surcharge.',
  },
];

export default function CentennialHillsPage() {
  const pageUrl = `${siteConfig.url}/centennial-hills-remodeling`;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Luxury Remodeling Centennial Hills',
            description:
              'Design-build luxury remodeling for Centennial Hills and the NW Las Vegas valley.',
            url: pageUrl,
            image: customHomeImages[2].src,
          }),
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Centennial Hills Remodeling', url: pageUrl },
          ]),
          faqSchema(faqs),
        ]}
      />
      <CinematicHero
        eyebrow="Centennial Hills · NW Las Vegas"
        title="Luxury remodeling"
        italic="for Centennial Hills."
        description="Iron Mountain Ranch, Providence, Skye Canyon, and the new northwest master-planned communities — VCV Vegas brings the design-build standard the rest of the valley already takes for granted."
        images={[customHomeImages[2], customHomeImages[0], kitchenImages[2], bathroomImages[1], customHomeImages[4]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Centennial Hills Remodeling' }]}
      />

      <TwoColumnFeature
        eyebrow="The Centennial Hills Brief"
        title="Generous lots,"
        italic="ready architecture."
        body={[
          'Centennial Hills is the under-priced opportunity of the Las Vegas luxury market. The lots are generous, the orientations are good, and the homes built in the 2005–2015 wave have aged into exactly the window where a thoughtful remodel adds the most value per dollar.',
          'Our work in the northwest tends to focus on opening kitchens to great rooms, expanding primary suites, and bringing the indoor-outdoor relationship up to the standard the architecture already deserves.',
        ]}
        bullets={[
          'Iron Mountain Ranch kitchens',
          'Providence whole-home refreshes',
          'Skye Canyon primary suites',
          'Mountain-view patio reveals',
          'Wine + entertaining rooms',
          'Investor STR work',
        ]}
        image={kitchenImages[2]}
      />

      <TwoColumnFeature
        eyebrow="Northwest Specifics"
        title="Mountain light,"
        italic="modern desert palette."
        body={[
          'The light in the northwest is different — softer in the morning, harder in the late afternoon as it comes off the Spring Mountains. Our finish palette here leans toward warmer stone, lighter walnut, and brushed brass to read consistently through that light cycle.',
          'It is a small thing that compounds. The right palette in the wrong light looks like a different home. In Centennial Hills we tune for the room first.',
        ]}
        image={bathroomImages[1]}
        reverse
      />

      <FinishSpec
        eyebrow="Centennial Hills Specializations"
        title="What we are known for here."
        specs={[
          { label: 'Iron Mountain Ranch', description: 'Custom-home refreshes and finish-level renovations.' },
          { label: 'Providence', description: 'Whole-home builds across the Providence master plan.' },
          { label: 'Skye Canyon', description: 'New northwest builds and resale-side renovations.' },
          { label: 'Mountain-View Patios', description: 'Outdoor rooms designed for Spring Mountain frontage.' },
          { label: 'Investor STRs', description: 'Photography-grade renovations in qualifying northwest zones.' },
          { label: 'Spa Primary Suites', description: 'Wet rooms and architectural baths in northwest customs.' },
        ]}
      />

      <ImageRow images={[customHomeImages[0], bathroomImages[2], kitchenImages[0]]} />

      <section className="bg-bone py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader eyebrow="Centennial Hills FAQs" title="Questions from northwest homeowners." />
          <div className="mt-16 max-w-4xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <RelatedReading
        slugs={['how-to-choose-luxury-contractor-las-vegas', 'what-pre-construction-actually-looks-like']}
        description="Two studio notes useful when evaluating a Centennial Hills remodel — how to read the contractor in front of you, and what real pre-construction discipline looks like."
      />

      <CTASection
        title="Re-imagine your Centennial Hills home."
        description="Schedule a private walkthrough in Iron Mountain Ranch, Providence, or Skye Canyon."
        image={customHomeImages[4]}
      />
    </>
  );
}
