import type { Metadata } from 'next';
import { CinematicHero } from '@/components/CinematicHero';
import { TwoColumnFeature } from '@/components/TwoColumnFeature';
import { FinishSpec } from '@/components/FinishSpec';
import { ImageRow } from '@/components/Marquee';
import { CTASection } from '@/components/CTASection';
import { FAQ } from '@/components/FAQ';
import { SectionHeader } from '@/components/SectionHeader';
import { RelatedReading } from '@/components/RelatedReading';
import { customHomeImages, kitchenImages, bathroomImages } from '@/lib/images';
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Luxury Remodeling in Henderson, NV',
  description:
    'Luxury remodeling and general contracting for Henderson, NV — Green Valley, MacDonald Highlands, Anthem, Lake Las Vegas. Design-build by VCV Vegas.',
  alternates: { canonical: `${siteConfig.url}/henderson-remodeling` },
};

const faqs = [
  {
    q: 'What Henderson neighborhoods do you serve?',
    a: 'Green Valley, MacDonald Highlands, Anthem, Anthem Country Club, Inspirada, Seven Hills, and Lake Las Vegas are all within our active project radius.',
  },
  {
    q: 'Is Henderson a good market for a luxury remodel?',
    a: 'Yes — Henderson’s high-end inventory has aged into the right window for re-imagination. The bones are good; the finishes are usually a decade behind where the market is now.',
  },
  {
    q: 'Do you handle permitting in Henderson?',
    a: 'Yes. We manage Henderson permitting and inspections end-to-end, including engineering coordination for structural and pool-side work.',
  },
];

export default function HendersonPage() {
  const pageUrl = `${siteConfig.url}/henderson-remodeling`;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Luxury Remodeling Henderson NV',
            description:
              'Design-build luxury remodeling and general contracting for Henderson, NV.',
            url: pageUrl,
            image: customHomeImages[1].src,
          }),
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Henderson Remodeling', url: pageUrl },
          ]),
          faqSchema(faqs),
        ]}
      />
      <CinematicHero
        eyebrow="Henderson, NV"
        title="Luxury remodeling"
        italic="for Henderson homes."
        description="From Green Valley and Seven Hills to MacDonald Highlands and Lake Las Vegas — design-build remodeling tuned for the architecture, light, and lifestyle of Henderson’s most considered streets."
        images={[customHomeImages[1], kitchenImages[0], bathroomImages[2], customHomeImages[3], kitchenImages[1]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Henderson Remodeling' }]}
      />

      <TwoColumnFeature
        eyebrow="The Henderson Brief"
        title="Architecture"
        italic="that has aged into opportunity."
        body={[
          'Henderson’s best homes were built when the valley was different. The footprints are generous, the lots are well-oriented, and the structures are quietly excellent — they just haven’t been re-thought in fifteen years.',
          'We open kitchens to great rooms, reconfigure primary suites, replace dark finish carpentry with light architectural millwork, and re-introduce indoor-outdoor flow that the original builders didn’t quite finish.',
        ]}
        bullets={[
          'Open-plan kitchen reconfigurations',
          'Primary suite expansions',
          'Spa bath conversions',
          'Indoor / outdoor reveals',
          'Whole-home finish refreshes',
          'Lake Las Vegas waterfront work',
        ]}
        image={kitchenImages[0]}
      />

      <TwoColumnFeature
        eyebrow="Signature Project Types"
        title="What we build"
        italic="across Henderson."
        body={[
          'Most Henderson projects fall into one of three buckets: a flagship kitchen-plus-great-room reveal, a full primary suite re-imagination, or a whole-home design-build refresh on a 5–7 year-old custom.',
          'Each is led by a senior designer, executed by trade specialists, and delivered to a finishing standard the rest of the valley treats as optional.',
        ]}
        image={bathroomImages[0]}
        reverse
      />

      <FinishSpec
        eyebrow="Henderson Specializations"
        title="What we’re known for here."
        specs={[
          { label: 'Custom Homes', description: 'Finish and renovation work on Henderson custom builds.' },
          { label: 'Golf Course Homes', description: 'Anthem and MacDonald Highlands course-frontage properties.' },
          { label: 'Waterfront', description: 'Lake Las Vegas remodels with weather-engineered exteriors.' },
          { label: 'Investor STRs', description: 'Short-term-rental repositioning in qualifying Henderson zones.' },
          { label: 'Family Homes', description: 'Green Valley and Seven Hills primary-residence remodels.' },
          { label: 'Outdoor Living', description: 'Pool decks, cabanas, and outdoor kitchens.' },
        ]}
      />

      <ImageRow images={[customHomeImages[0], bathroomImages[2], kitchenImages[1]]} />

      <section className="bg-bone py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader eyebrow="Henderson FAQs" title="Questions from Henderson homeowners." />
          <div className="mt-16 max-w-4xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <RelatedReading
        slugs={['opening-up-vegas-floor-plan', 'how-to-choose-luxury-contractor-las-vegas']}
        description="Two studio notes that bear on Henderson work — how we open up a typical Vegas floor plan, and how to evaluate the contractor leading the build."
      />

      <CTASection
        title="Build the Henderson home you actually want."
        description="Schedule a private walkthrough in Green Valley, Anthem, MacDonald Highlands, Seven Hills, or Lake Las Vegas."
        image={customHomeImages[3]}
      />
    </>
  );
}
