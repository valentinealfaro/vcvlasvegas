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
  title: 'Luxury Remodeling in Summerlin, Las Vegas',
  description:
    'Luxury remodeling and general contracting for Summerlin — The Ridges, Red Rock Country Club, Summerlin West, Reverence. Design-build by VCV Vegas.',
  alternates: { canonical: `${siteConfig.url}/summerlin-remodeling` },
};

const faqs = [
  {
    q: 'Which Summerlin neighborhoods do you actively work in?',
    a: 'The Ridges, Red Rock Country Club, Summerlin West, Reverence, The Mesa, The Cliffs, The Vistas, The Paseos, and The Arbors are all active project areas for VCV Vegas.',
  },
  {
    q: 'What does a typical Summerlin remodel involve?',
    a: 'Most Summerlin projects involve opening the kitchen to the great room, rebuilding the primary suite as a spa retreat, and bringing the indoor-outdoor relationship up to current architectural standards.',
  },
  {
    q: 'Do you handle Summerlin HOA approvals?',
    a: 'Yes. Summerlin HOA architectural review submittals and approvals are handled by our pre-construction team as part of the standard build process.',
  },
];

export default function SummerlinPage() {
  const pageUrl = `${siteConfig.url}/summerlin-remodeling`;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Luxury Remodeling Summerlin Las Vegas',
            description:
              'Design-build luxury remodeling and general contracting for Summerlin and Summerlin West.',
            url: pageUrl,
            image: kitchenImages[0].src,
          }),
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Summerlin Remodeling', url: pageUrl },
          ]),
          faqSchema(faqs),
        ]}
      />
      <CinematicHero
        eyebrow="Summerlin"
        title="Luxury remodeling"
        italic="for Summerlin homes."
        description="From The Ridges and Red Rock Country Club to Reverence and Summerlin West — design-build remodeling tuned for Summerlin’s architecture, lots, and Strip-facing light."
        images={[kitchenImages[0], kitchenImages[1], customHomeImages[1], bathroomImages[0], customHomeImages[3]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Summerlin Remodeling' }]}
      />

      <TwoColumnFeature
        eyebrow="The Summerlin Brief"
        title="The valley’s"
        italic="quietest luxury."
        body={[
          'Summerlin holds some of the most considered residential architecture in Nevada. Our job isn’t to add — it’s to refine. We work in restraint: cleaner planes, lighter palettes, opened sightlines, and a primary suite worthy of the view.',
          'The result is a home that feels like it was always meant to be this way, not one that announces a remodel.',
        ]}
        bullets={[
          'The Ridges custom finish refreshes',
          'Red Rock CC kitchens',
          'Reverence whole-home builds',
          'Strip-facing patio reveals',
          'Spa primary suites',
          'Wine + entertaining rooms',
        ]}
        image={kitchenImages[1]}
      />

      <TwoColumnFeature
        eyebrow="Signature Moves"
        title="What we build"
        italic="in Summerlin."
        body={[
          'A flagship kitchen-plus-great-room reveal. A primary suite re-imagined as a private resort. A patio that finally opens to the view it was given. These are the three most-requested Summerlin scopes — and the three things we’re best at.',
          'Every Summerlin project is led by a senior designer and built by trade specialists who have completed comparable work in The Ridges, Red Rock Country Club, and Summerlin West.',
        ]}
        image={bathroomImages[2]}
        reverse
      />

      <FinishSpec
        eyebrow="Summerlin Specializations"
        title="What we’re known for here."
        specs={[
          { label: 'The Ridges', description: 'Finish refreshes and whole-home remodels in The Ridges.' },
          { label: 'Red Rock CC', description: 'Course-frontage remodels and view-side patio rebuilds.' },
          { label: 'Reverence', description: 'Top-of-market custom finish work in Reverence.' },
          { label: 'Strip-Facing Patios', description: 'Outdoor rooms engineered for Summerlin views.' },
          { label: 'Spa Primaries', description: 'Resort-grade primary suites across Summerlin.' },
          { label: 'Wine + Bars', description: 'Architectural wine rooms and entertaining bars.' },
        ]}
      />

      <ImageRow images={[customHomeImages[1], kitchenImages[3], bathroomImages[0]]} />

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader eyebrow="Summerlin FAQs" title="Questions from Summerlin homeowners." />
          <div className="mt-16 max-w-4xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <RelatedReading
        slugs={['five-details-luxury-remodel-las-vegas', 'designing-spa-bathroom-desert']}
        description="Two studio notes that map directly onto Summerlin work — the five details that separate a remodel from a renovation, and how we design spa bathrooms for desert living."
      />

      <CTASection
        title="Re-imagine your Summerlin home."
        description="Schedule a private walkthrough in The Ridges, Red Rock Country Club, Reverence, or Summerlin West."
        image={customHomeImages[2]}
      />
    </>
  );
}
