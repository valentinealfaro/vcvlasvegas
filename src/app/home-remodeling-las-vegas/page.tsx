import type { Metadata } from 'next';
import { CinematicHero } from '@/components/CinematicHero';
import { TwoColumnFeature } from '@/components/TwoColumnFeature';
import { FinishSpec } from '@/components/FinishSpec';
import { ImageRow } from '@/components/Marquee';
import { CTASection } from '@/components/CTASection';
import { InlineLeadStrip } from '@/components/InlineLeadStrip';
import { InvestmentBlock } from '@/components/InvestmentBlock';
import { RelatedReading } from '@/components/RelatedReading';
import { FAQ } from '@/components/FAQ';
import { SectionHeader } from '@/components/SectionHeader';
import { remodelImages, customHomeImages, kitchenImages } from '@/lib/images';
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Luxury Home Remodeling in Las Vegas',
  description:
    'Full home remodeling in Las Vegas — design-build whole-home renovations, layout reconfigurations, and complete property re-imaginings by VCV Vegas.',
  alternates: { canonical: `${siteConfig.url}/home-remodeling-las-vegas` },
  openGraph: {
    title: 'Luxury Home Remodeling in Las Vegas · VCV Vegas',
    description:
      'Whole-home design-build renovations across the Las Vegas valley.',
    images: [remodelImages[0].src],
  },
};

const faqs = [
  {
    q: 'How much does a whole-home remodel cost in Las Vegas?',
    a: 'Whole-home renovations from VCV Vegas typically begin in the mid-six figures and scale with square footage, structural work, and finish level. Every project receives a transparent investment range after the initial walkthrough.',
  },
  {
    q: 'How long does a whole-home remodel take?',
    a: 'Most full-home renovations run 4–9 months on site depending on structural scope. We lock long-lead orders early so production runs to a fixed calendar.',
  },
  {
    q: 'Can we live in the home during the remodel?',
    a: 'For whole-home builds we typically recommend relocating. Some clients live in the home during phased projects; we coordinate the schedule, dust protocols, and access so it’s livable.',
  },
  {
    q: 'Do you reconfigure floor plans?',
    a: 'Frequently. Opening the kitchen to the great room, expanding the primary suite, adding a wet bar, or carving out an office are among our most-requested moves.',
  },
];

export default function HomeRemodelingPage() {
  const pageUrl = `${siteConfig.url}/home-remodeling-las-vegas`;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Luxury Home Remodeling Las Vegas',
            description:
              'Whole-home design-build remodeling for Las Vegas homeowners — layout reconfigurations, structural changes, and complete finish renovations.',
            url: pageUrl,
            image: remodelImages[0].src,
            priceRange: { low: 500000, high: 2000000 },
          }),
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Home Remodeling Las Vegas', url: pageUrl },
          ]),
          faqSchema(faqs),
        ]}
      />
      <CinematicHero
        eyebrow="Whole-Home Renovation"
        title="A house"
        italic="re-imagined."
        description="VCV Vegas leads full-home renovations across the Las Vegas valley — single team, single timeline, single point of accountability from concept through completion."
        images={[remodelImages[0], customHomeImages[0], customHomeImages[1], remodelImages[1], remodelImages[2]]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Home Remodeling' },
        ]}
      />

      <TwoColumnFeature
        eyebrow="Design-Build"
        title="One team"
        italic="from sketch to keys."
        body={[
          'A whole-home remodel is dozens of small projects that all have to land together. We do that by keeping concept design, construction drawings, trade coordination, and field execution inside a single accountable studio.',
          'You meet your designer at the first walkthrough and you’re still working with them on the final punch list — no hand-offs, no losing the original vision in translation.',
        ]}
        bullets={[
          'Architectural floor plan changes',
          'Structural reconfigurations',
          'Permit + engineering management',
          'Full finish + millwork specification',
          'Weekly client briefings',
          'One-year service relationship',
        ]}
        image={customHomeImages[1]}
      />

      <TwoColumnFeature
        eyebrow="Spatial Strategy"
        title="Better flow,"
        italic="more light, fewer walls."
        body={[
          'Most Las Vegas homes were built on standard developer plans. The first thing we do is re-read the floor plan with fresh eyes — where does light land, where do people gather, where does the home want to open up?',
          'The result is a layout that feels custom to you: an enlarged primary suite, an opened kitchen, a wet bar where the dining nook used to be, a glass wall onto the pool. The architecture, finally, follows how you actually live.',
        ]}
        image={kitchenImages[2]}
        reverse
      />

      <InvestmentBlock
        title="What a whole-home renovation looks like — in numbers."
        description="Indicative ranges only. Whole-home scope scales with square footage, structural work, and finish level."
        rows={[
          { label: 'Signature Range', value: '$500k – $2M+' },
          { label: 'Build Window', value: '4 – 9 months on site' },
          { label: 'Engineering', value: 'NV-PE Structural · Managed' },
          { label: 'Studio Lead', value: 'Senior Designer · End-to-end' },
          { label: 'Warranty', value: '1-Year Workmanship Standard' },
        ]}
      />

      <FinishSpec
        eyebrow="Scope Library"
        title="What a VCV Vegas whole-home renovation typically includes."
        specs={[
          { label: 'Kitchens', description: 'Full chef-grade kitchens with custom cabinetry and integrated appliances.' },
          { label: 'Primary Suites', description: 'Reworked primary bedrooms with spa baths and architectural closets.' },
          { label: 'Guest Baths', description: 'Coordinated guest bathrooms that read as a continuation of the primary.' },
          { label: 'Great Rooms', description: 'Open-plan living spaces with engineered structure and integrated lighting.' },
          { label: 'Wet Bars', description: 'Beverage centers, wine display, and entertaining stations.' },
          { label: 'Flooring', description: 'Whole-home wide-plank, large-format porcelain, or stone.' },
          { label: 'Lighting', description: 'Layered scenes throughout — recessed, decorative, and architectural cove.' },
          { label: 'Smart Systems', description: 'Climate, lighting, audio, and shade integration through certified partners.' },
          { label: 'Exteriors', description: 'Re-stuccoed and re-detailed façades, modern entries, refreshed landscape.' },
        ]}
      />

      <ImageRow images={remodelImages.slice(0, 3)} />

      <InlineLeadStrip
        title="Thinking through a whole-home remodel?"
        italic="We’ll walk it with you."
        description="A senior designer visits, walks the property, and listens — before we draw anything. By appointment."
      />

      <section className="bg-bone py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Whole-Home FAQs"
            title="What to expect."
          />
          <div className="mt-16 max-w-4xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <RelatedReading
        slugs={['opening-up-vegas-floor-plan', 'how-to-choose-luxury-contractor-las-vegas']}
        description="Two studio notes bearing on a whole-home renovation — how we re-engineer a closed-plan Vegas floor plan, and how to evaluate the contractor you choose."
      />

      <CTASection
        title="Re-imagine your Las Vegas home."
        description="Schedule a private walkthrough with a senior VCV Vegas designer."
        image={remodelImages[1]}
      />
    </>
  );
}
