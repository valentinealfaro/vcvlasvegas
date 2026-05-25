import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
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
  title: 'Luxury Remodeling in Paradise, Las Vegas',
  description:
    'Luxury remodeling and general contracting for Paradise, NV — Strip-adjacent estates, mid-century moderns, high-rise interiors. Design-build by VCV Vegas.',
  alternates: { canonical: `${siteConfig.url}/paradise-remodeling` },
};

const faqs = [
  {
    q: 'What types of Paradise homes do you work on?',
    a: 'Strip-adjacent estates, mid-century modern remodels east of the Strip, and high-rise interior renovations at the Waldorf, Veer, and Turnberry. We handle HOA approvals and high-rise logistics directly.',
  },
  {
    q: 'Can you renovate a Las Vegas high-rise condo?',
    a: 'Yes. We are well-versed in the protocols required for high-rise renovations — service-elevator scheduling, freight protection, noise-window compliance, and HOA architectural review.',
  },
  {
    q: 'Do you work on mid-century Paradise homes?',
    a: 'Often. Mid-century remodels in Paradise are some of our favorite projects — preserving the original architectural language while modernizing the kitchen, primary suite, and indoor-outdoor flow.',
  },
];

export default function ParadisePage() {
  const pageUrl = `${siteConfig.url}/paradise-remodeling`;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Luxury Remodeling Paradise Las Vegas',
            description:
              'Design-build luxury remodeling for Paradise, NV — Strip-adjacent estates, mid-century moderns, and high-rise interiors.',
            url: pageUrl,
            image: kitchenImages[3].src,
          }),
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Paradise Remodeling', url: pageUrl },
          ]),
          faqSchema(faqs),
        ]}
      />
      <PageHero
        eyebrow="Paradise · Las Vegas"
        title="Luxury remodeling"
        italic="for Paradise homes."
        description="Strip-adjacent estates, mid-century moderns east of the Strip, and high-rise interiors — VCV Vegas brings architectural finish standards to the most diverse residential market in the valley."
        image={kitchenImages[3]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Paradise Remodeling' }]}
      />

      <TwoColumnFeature
        eyebrow="The Paradise Brief"
        title="Three architectures,"
        italic="one studio."
        body={[
          'Paradise is unusual: it’s the only Vegas submarket where a 1965 mid-century, a Strip-view estate, and a 38th-floor condo are all under the same zip code. The architecture brief changes block by block.',
          'Our job is to read the building first — then design to its language rather than against it. Mid-centuries get expanded volume and modern materials; estates get architectural finishes and outdoor reveals; high-rises get layouts that finally use the view.',
        ]}
        bullets={[
          'Strip-adjacent estate kitchens',
          'Mid-century primary suites',
          'High-rise condo renovations',
          'View-side patio rebuilds',
          'Architectural floor-plan changes',
          'HOA + high-rise coordination',
        ]}
        image={kitchenImages[0]}
      />

      <TwoColumnFeature
        eyebrow="High-Rise Discipline"
        title="The protocols"
        italic="other contractors avoid."
        body={[
          'Renovating a Las Vegas high-rise is its own discipline. Freight elevators booked in advance. Floor protection from the service entrance to your unit. Noise windows respected. Architectural review submitted properly. Most contractors will not take on this work — we built our protocols around it.',
        ]}
        image={bathroomImages[0]}
        reverse
      />

      <FinishSpec
        eyebrow="Paradise Specializations"
        title="What we are known for here."
        specs={[
          { label: 'Strip-Adjacent Estates', description: 'Large residential remodels east of the Strip with view-side outdoor work.' },
          { label: 'Mid-Century Moderns', description: 'Sympathetic remodels that preserve the original architectural language.' },
          { label: 'High-Rise Condos', description: 'Waldorf, Veer, Turnberry — full interior renovations on the schedule a building actually allows.' },
          { label: 'Investor STRs', description: 'Short-term-rental work in qualifying Paradise zones with photography-grade finish.' },
          { label: 'Indoor / Outdoor', description: 'Glass walls, patio reveals, and Strip-view balcony rebuilds.' },
          { label: 'Architectural Lighting', description: 'Layered scenes designed for night-side living near the Strip.' },
        ]}
      />

      <ImageRow images={[customHomeImages[0], bathroomImages[2], kitchenImages[1]]} />

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader eyebrow="Paradise FAQs" title="Questions from Paradise homeowners." />
          <div className="mt-16 max-w-4xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Remodel your Paradise home."
        description="Schedule a private walkthrough in Paradise, the Strip corridor, or a Las Vegas high-rise."
        image={customHomeImages[3]}
      />
    </>
  );
}
