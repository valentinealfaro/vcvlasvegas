import type { Metadata } from 'next';
import { CinematicHero } from '@/components/CinematicHero';
import { TwoColumnFeature } from '@/components/TwoColumnFeature';
import { FinishSpec } from '@/components/FinishSpec';
import { ImageRow } from '@/components/Marquee';
import { CTASection } from '@/components/CTASection';
import { FAQ } from '@/components/FAQ';
import { SectionHeader } from '@/components/SectionHeader';
import { kitchenImages, bathroomImages, customHomeImages } from '@/lib/images';
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'The Ridges Remodeling · Summerlin · VCV Vegas',
  description:
    'Top-of-market remodeling for The Ridges in Summerlin — Falcon Ridge, The Pointe, Promontory Pointe. Architectural design-build by VCV Vegas.',
  alternates: { canonical: `${siteConfig.url}/the-ridges-remodeling` },
};

const faqs = [
  {
    q: 'Which Ridges sub-communities do you serve?',
    a: 'Falcon Ridge, The Pointe, Promontory Pointe, Boulder Ridge, Sky Terrace, and Tangerine. We have completed comparable scope across the Bear’s Best frontage and the Red Rock-side custom lots.',
  },
  {
    q: 'Do you handle Ridges architectural review submittals?',
    a: 'Yes. Every Ridges project we lead is submitted through the appropriate architectural review channels, with drawings, finish schedules, and material samples prepared by our pre-construction team.',
  },
  {
    q: 'What is a typical Ridges project scope?',
    a: 'Most often: a flagship kitchen-plus-great-room reveal, a primary-suite re-imagination, and a Strip-facing patio rebuild — sometimes all three on a single project.',
  },
  {
    q: 'Can you work with my outside architect or interior designer?',
    a: 'Frequently. The Ridges is one of the few Vegas submarkets where most projects already involve an outside designer or architect. We act as the licensed construction arm executing their vision.',
  },
];

export default function TheRidgesPage() {
  const pageUrl = `${siteConfig.url}/the-ridges-remodeling`;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Luxury Remodeling The Ridges Summerlin',
            description:
              'Top-of-market design-build remodeling for The Ridges in Summerlin — Falcon Ridge, The Pointe, Promontory Pointe, and the Red Rock-side custom lots.',
            url: pageUrl,
            image: customHomeImages[0].src,
          }),
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'The Ridges Remodeling', url: pageUrl },
          ]),
          faqSchema(faqs),
        ]}
      />
      <CinematicHero
        eyebrow="The Ridges · Summerlin"
        title="A studio"
        italic="for The Ridges."
        description="Top-of-market remodeling for The Ridges — Falcon Ridge, The Pointe, Promontory Pointe, and the Bear’s Best frontage. Architectural finish to a standard the rest of the valley aspires to."
        images={[customHomeImages[0], customHomeImages[1], kitchenImages[0], bathroomImages[0], customHomeImages[3]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'The Ridges Remodeling' }]}
      />

      <TwoColumnFeature
        eyebrow="The Ridges Brief"
        title="The valley’s"
        italic="quietest architecture."
        body={[
          'The Ridges holds the most considered residential architecture in Nevada. Lots oriented to the strip and to Red Rock. Custom homes built when the original architect was still on site. Bones that have aged into opportunity rather than tiredness.',
          'Our job here is to refine — not to add. Cleaner planes, lighter palettes, opened sightlines, and a primary suite worthy of the view the lot was bought for. The result is a home that reads as inevitable rather than remodeled.',
        ]}
        bullets={[
          'Falcon Ridge whole-home refreshes',
          'The Pointe primary suites',
          'Promontory Pointe kitchen reveals',
          'Strip-facing patio rebuilds',
          'Wine + entertaining rooms',
          'Outside architect coordination',
        ]}
        image={kitchenImages[0]}
      />

      <TwoColumnFeature
        eyebrow="At This Level"
        title="The disciplines"
        italic="behind a top-quartile build."
        body={[
          'A Ridges project lives or dies on three things: the architectural review submittal, the long-lead specification, and the senior designer carrying it through. Get any of them wrong and the project drifts — at this level the drift shows immediately.',
          'We protect all three. Pre-construction drawings tight enough to survive review. Materials ordered before demolition. A single senior lead from concept through punch list. That is the standard the address requires.',
        ]}
        image={bathroomImages[0]}
        reverse
      />

      <FinishSpec
        eyebrow="The Ridges Specializations"
        title="What we’re known for here."
        specs={[
          { label: 'Falcon Ridge', description: 'Whole-home refreshes and finish-level renovations on Falcon Ridge custom lots.' },
          { label: 'The Pointe', description: 'Spa primary suites and architectural lighting on The Pointe properties.' },
          { label: 'Promontory Pointe', description: 'Open-plan reveals and view-side patio rebuilds.' },
          { label: 'Bear’s Best Frontage', description: 'Course-side outdoor living, patio cabanas, and pool surrounds.' },
          { label: 'Red Rock Side', description: 'Modern desert palette work tuned for the lot’s west light.' },
          { label: 'Outside Designer GC', description: 'Construction arm for outside architects and interior designers.' },
        ]}
      />

      <ImageRow images={[customHomeImages[1], kitchenImages[3], bathroomImages[3]]} />

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader eyebrow="The Ridges FAQs" title="Questions from Ridges homeowners." />
          <div className="mt-16 max-w-4xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Build at the standard the address requires."
        description="Schedule a private walkthrough in The Ridges — by appointment, by a senior designer."
        image={customHomeImages[3]}
      />
    </>
  );
}
