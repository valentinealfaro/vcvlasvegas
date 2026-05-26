import type { Metadata } from 'next';
import { CinematicHero } from '@/components/CinematicHero';
import { TwoColumnFeature } from '@/components/TwoColumnFeature';
import { FinishSpec } from '@/components/FinishSpec';
import { CTASection } from '@/components/CTASection';
import { InlineLeadStrip } from '@/components/InlineLeadStrip';
import { FAQ } from '@/components/FAQ';
import { SectionHeader } from '@/components/SectionHeader';
import { customHomeImages, remodelImages } from '@/lib/images';
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Luxury General Contractor in Las Vegas',
  description:
    'Licensed luxury general contractor serving the Las Vegas metro — white-glove project management, custom renovation, and design-build expertise.',
  alternates: { canonical: `${siteConfig.url}/general-contractor-las-vegas` },
  openGraph: {
    title: 'Luxury General Contractor in Las Vegas · VCV Vegas',
    description:
      'Licensed luxury general contractor with white-glove project management for high-value Las Vegas homes.',
    images: [customHomeImages[0].src],
  },
};

const faqs = [
  {
    q: 'What kind of projects does VCV Vegas take as a general contractor?',
    a: 'High-end residential remodels, whole-home renovations, custom finish work, and specialty projects for designers and architects across the Las Vegas valley.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. VCV Vegas operates as a licensed, fully insured general contractor and carries the bonding and liability coverage expected for high-value Las Vegas residential work.',
  },
  {
    q: 'Can I bring my own architect or interior designer?',
    a: 'Absolutely. We frequently act as the construction arm for outside architects and designers, executing their drawings to a luxury finish standard.',
  },
  {
    q: 'What does “white-glove project management” actually mean?',
    a: 'A dedicated project lead, weekly client briefings, a published build calendar, dust and site protection protocols, and a finishing standard most contractors do not bother with.',
  },
];

export default function GeneralContractorPage() {
  const pageUrl = `${siteConfig.url}/general-contractor-las-vegas`;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Luxury General Contractor Las Vegas',
            description:
              'Licensed luxury general contractor for high-end residential projects across the Las Vegas metro.',
            url: pageUrl,
            image: customHomeImages[0].src,
          }),
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'General Contractor Las Vegas', url: pageUrl },
          ]),
          faqSchema(faqs),
        ]}
      />
      <CinematicHero
        eyebrow="Luxury General Contractor"
        title="A general contractor"
        italic="built for high-value homes."
        description="Licensed, insured, and design-led — VCV Vegas brings architectural finish standards and white-glove project management to luxury construction across the Las Vegas valley."
        images={[customHomeImages[0], customHomeImages[1], customHomeImages[3], customHomeImages[4], remodelImages[0]]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'General Contractor' },
        ]}
      />

      <TwoColumnFeature
        eyebrow="White-Glove Construction"
        title="Built like an architecture practice,"
        italic="run like a luxury hotel."
        body={[
          'Construction at the high end is not just about who can swing a hammer — it is about how the project feels from week one to keys-back. We treat your home as a private project, not a job site.',
          'You get a dedicated project lead, a published build calendar, weekly progress briefings, dust and site-protection protocols, and a finishing standard the rest of the industry treats as optional.',
        ]}
        bullets={[
          'Dedicated project lead',
          'Weekly client briefings',
          'Published build calendar',
          'Dust + site protection',
          'Trade coordination + scheduling',
          'Permitting + engineering',
        ]}
        image={customHomeImages[3]}
      />

      <TwoColumnFeature
        eyebrow="Architect + Designer Partner"
        title="A construction arm"
        italic="for design professionals."
        body={[
          'We work regularly with outside architects and interior designers as the licensed general contractor executing their vision. Drawings are honored. Specifications are protected. The design intent never gets lost in field decisions.',
          'For repeat designers and architects, we offer a streamlined pre-construction relationship — fixed turnaround on pricing, milestone reviews, and a single point of contact for the duration of the project.',
        ]}
        image={remodelImages[0]}
        reverse
      />

      <InlineLeadStrip
        title="Have drawings to price?"
        italic="Send them over."
        description="Our pre-construction team responds within one business day. NDA available on request."
      />

      <FinishSpec
        eyebrow="Capabilities"
        title="What we contract."
        specs={[
          { label: 'Whole-Home Remodels', description: 'Complete renovations with structural and layout changes.' },
          { label: 'Kitchen Builds', description: 'Custom millwork kitchens with integrated appliances.' },
          { label: 'Bathroom Suites', description: 'Spa primary baths, guest baths, powder rooms.' },
          { label: 'Outdoor Living', description: 'Sheltered patios, outdoor kitchens, poolside builds.' },
          { label: 'Custom Millwork', description: 'Closets, built-ins, wet bars, libraries, media walls.' },
          { label: 'Designer Collaboration', description: 'Execution arm for outside architects and designers.' },
        ]}
      />

      <section className="bg-bone py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="GC FAQs"
            title="What to expect from a luxury GC."
          />
          <div className="mt-16 max-w-4xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Bring your project to a contractor built for it."
        description="Schedule a private walkthrough or send drawings for a pre-construction conversation."
        image={customHomeImages[4]}
      />
    </>
  );
}
