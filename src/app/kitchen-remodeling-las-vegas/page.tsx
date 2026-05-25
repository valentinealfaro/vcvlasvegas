import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { TwoColumnFeature } from '@/components/TwoColumnFeature';
import { FinishSpec } from '@/components/FinishSpec';
import { ImageRow } from '@/components/Marquee';
import { CTASection } from '@/components/CTASection';
import { InlineLeadStrip } from '@/components/InlineLeadStrip';
import { FAQ } from '@/components/FAQ';
import { SectionHeader } from '@/components/SectionHeader';
import { kitchenImages } from '@/lib/images';
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Luxury Kitchen Remodeling in Las Vegas',
  description:
    'Custom luxury kitchen remodeling in Las Vegas — waterfall islands, integrated appliances, designer cabinetry. Architectural design-build by VCV Vegas.',
  alternates: { canonical: `${siteConfig.url}/kitchen-remodeling-las-vegas` },
  openGraph: {
    title: 'Luxury Kitchen Remodeling in Las Vegas · VCV Vegas',
    description:
      'Custom kitchens for the way Las Vegas entertains — waterfall islands, integrated appliances, and bespoke cabinetry.',
    images: [kitchenImages[0].src],
  },
};

const faqs = [
  {
    q: 'How much does a luxury kitchen remodel cost in Las Vegas?',
    a: 'Custom luxury kitchen remodels typically begin in the low six figures and scale based on appliance package, stone selections, and millwork complexity. A transparent investment range is established during your private consultation.',
  },
  {
    q: 'How long does a luxury kitchen remodel take?',
    a: 'Most chef-grade kitchens take 8–14 weeks on site once specifications are signed off. Long-lead items — cabinetry, stone slabs, and appliances — are ordered before demolition so the build stays on schedule.',
  },
  {
    q: 'Do you build true custom cabinetry?',
    a: 'Yes. VCV Vegas partners with millwork shops that build full-custom, inset, and architectural cabinetry — not stock or semi-custom boxes. Every kitchen is drawn to the inch.',
  },
  {
    q: 'Can you integrate Sub-Zero, Wolf, Miele, and similar appliances?',
    a: 'Of course. Integrated paneled refrigeration, induction, steam ovens, beverage centers, and built-in coffee systems are standard specifications in our kitchens.',
  },
  {
    q: 'Can you open up walls to expand the kitchen?',
    a: 'Yes — many of our most loved projects involve removing a load-bearing wall to combine the kitchen with the living area. We handle the structural engineering, permitting, and execution end-to-end.',
  },
];

export default function KitchenPage() {
  const pageUrl = `${siteConfig.url}/kitchen-remodeling-las-vegas`;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Luxury Kitchen Remodeling Las Vegas',
            description:
              'Design-build luxury kitchen remodeling for Las Vegas homes — waterfall islands, custom cabinetry, integrated appliances, and architectural finish work.',
            url: pageUrl,
            image: kitchenImages[0].src,
          }),
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Kitchen Remodeling Las Vegas', url: pageUrl },
          ]),
          faqSchema(faqs),
        ]}
      />
      <PageHero
        eyebrow="Luxury Kitchen Remodeling"
        title="Kitchens built"
        italic="for how Vegas lives."
        description="Waterfall islands, integrated appliances, and custom cabinetry — designed around the way you actually entertain, cook, and gather in your Las Vegas home."
        image={kitchenImages[0]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Kitchen Remodeling' },
        ]}
      />

      <TwoColumnFeature
        eyebrow="Chef's Kitchen"
        title="An island"
        italic="you’ll never leave."
        body={[
          'The island is the room. We design ours to host eight people standing, six seated, and an entire dinner-party prep — without anything ever feeling crowded.',
          'Behind it, integrated panels, hidden outlets, push-latch drawers, and concealed pantries do all the work invisibly, so the room reads quiet, sculptural, and modern.',
        ]}
        bullets={[
          'Waterfall stone islands',
          'Integrated paneled refrigeration',
          'Induction + gas configurations',
          'Hidden walk-in pantries',
          'Custom range hoods',
          'Beverage + coffee stations',
        ]}
        image={kitchenImages[1]}
      />

      <TwoColumnFeature
        eyebrow="Cabinetry"
        title="Millwork-grade"
        italic="from floor to ceiling."
        body={[
          'We don’t sell stock cabinetry. Every VCV Vegas kitchen is drawn to the inch and built by craft millwork shops — full-custom boxes, inset doors, soft-close hardware, and finishes you cannot buy off a showroom floor.',
          'Cabinetry runs floor-to-ceiling, integrates into the architecture, and disappears into the walls of the space rather than fighting for attention.',
        ]}
        image={kitchenImages[3]}
        reverse
      />

      <FinishSpec
        eyebrow="Kitchen Specifications"
        title="The kind of details that separate a kitchen from a showroom."
        specs={[
          {
            label: 'Waterfall Islands',
            description:
              'Mitered stone returns that wrap the full island side — a single sculptural mass at the heart of the room.',
          },
          {
            label: 'Integrated Appliances',
            description:
              'Sub-Zero, Wolf, Miele, and Thermador integrated behind matching cabinetry panels for a uniform plane.',
          },
          {
            label: 'Hidden Pantries',
            description:
              'Concealed pocket-door pantries with countertops, plug strips, and storage so daily clutter never reaches the main kitchen.',
          },
          {
            label: 'Custom Hoods',
            description:
              'Plaster, stone, or metal hoods sculpted to the room — not box hoods bolted to a wall.',
          },
          {
            label: 'Architectural Lighting',
            description:
              'Layered task, cove, and ambient lighting on dimmer scenes for cooking, hosting, and quiet mornings.',
          },
          {
            label: 'Engineered Plumbing',
            description:
              'Pot fillers, instant hot, filtered, and beverage runs — pre-planned and pre-walled so the finish is permanent.',
          },
        ]}
      />

      <ImageRow images={kitchenImages.slice(2, 5)} />

      <InlineLeadStrip
        title="Ready to design your kitchen?"
        italic="Start with a senior designer."
        description="Tell us about your home and how you cook — we’ll come back with a direction within one business day."
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Kitchen FAQs"
            title="What Las Vegas homeowners ask first."
          />
          <div className="mt-16 max-w-4xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Design the kitchen your home was always meant to have."
        description="Schedule a private design consultation for your Las Vegas kitchen remodel."
        image={kitchenImages[5]}
      />
    </>
  );
}
