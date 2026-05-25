import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { FAQ } from '@/components/FAQ';
import { SectionHeader } from '@/components/SectionHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { kitchenImages, customHomeImages } from '@/lib/images';
import { JsonLd, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'FAQ · VCV Vegas',
  description:
    'Common questions about luxury remodeling in Las Vegas — investment ranges, timelines, process, neighborhoods, materials, and warranty. Answered directly by the studio.',
  alternates: { canonical: `${siteConfig.url}/faq` },
};

type Group = { title: string; eyebrow: string; items: { q: string; a: string }[] };

const groups: Group[] = [
  {
    eyebrow: 'Investment & Timing',
    title: 'Cost and calendar.',
    items: [
      {
        q: 'What does a luxury remodel cost in Las Vegas?',
        a: 'Signature bathrooms typically start in the high-five into the mid-six figures. Chef-grade kitchens begin in the low six figures. Whole-home renovations begin in the mid-six figures and scale with structural and finish scope. A transparent investment range is shared after your private consultation.',
      },
      {
        q: 'How long does a luxury remodel take?',
        a: 'Primary suite renovations typically run 6–10 weeks on site. Chef-grade kitchens run 8–14 weeks. Whole-home renovations run 4–9 months depending on structural scope. Long-lead items are pre-ordered before demolition so production stays on schedule.',
      },
      {
        q: 'Can we live in the home during construction?',
        a: 'For most single-room remodels — yes. For whole-home renovations we typically recommend relocating, although phased builds with strict dust-control protocols are possible by arrangement.',
      },
      {
        q: 'How do payments and milestones work?',
        a: 'Standard milestone-based draws: a pre-construction deposit, a series of construction milestones tied to completed scope, and a holdback at substantial completion. Each milestone is invoiced against a published budget so you always know where the project is.',
      },
    ],
  },
  {
    eyebrow: 'Studio & Process',
    title: 'How the studio works.',
    items: [
      {
        q: 'Is VCV Vegas a contractor or a design-build studio?',
        a: 'A design-build studio. Concept design, construction drawings, permitting, trade coordination, and finished construction are all managed by one accountable team. A senior designer leads from first walkthrough to final punch list.',
      },
      {
        q: 'Will I work with the same designer the whole way through?',
        a: 'Yes. The senior designer you meet at the first walkthrough is the same designer who will walk the final punch list. There are no hand-offs to junior staff mid-project.',
      },
      {
        q: 'Can you collaborate with my architect or interior designer?',
        a: 'Frequently — and one of our preferred working modes. See our trade program at /for-architects-and-designers for the full pre-construction structure.',
      },
      {
        q: 'Do you handle permits and engineering?',
        a: 'Yes. Structural engineering, permitting, and inspection coordination are all managed by our pre-construction team end-to-end.',
      },
    ],
  },
  {
    eyebrow: 'Service Area',
    title: 'Where we build.',
    items: [
      {
        q: 'What neighborhoods do you serve?',
        a: 'The full Las Vegas metro — Summerlin, The Ridges, Henderson, MacDonald Highlands, Paradise, Enterprise, Spring Valley, North Las Vegas, Green Valley, Centennial Hills, Mountains Edge, and Silverado Ranch.',
      },
      {
        q: 'Do you work in Las Vegas high-rises?',
        a: 'Yes. We have protocols for service-elevator scheduling, freight protection, noise-window compliance, and high-rise HOA architectural review — the disciplines most contractors avoid.',
      },
      {
        q: 'Can you work in Lake Las Vegas?',
        a: 'Yes. Waterfront residences in Lake Las Vegas are part of our active project radius, with weather-engineered exterior detailing where required.',
      },
    ],
  },
  {
    eyebrow: 'Materials & Standards',
    title: 'What we build with.',
    items: [
      {
        q: 'Where do you source stone, hardware, and finishes?',
        a: 'Through trade-only suppliers reserved for design-build studios — stone yards, fabricators, hardware showrooms, and millwork shops not available to the general public. The specification is the difference.',
      },
      {
        q: 'Do you build true custom cabinetry?',
        a: 'Yes. All VCV Vegas kitchens are full-custom millwork drawn to the inch of the room — not stock or semi-custom boxes.',
      },
      {
        q: 'What warranty do you provide?',
        a: 'A one-year workmanship warranty plus manufacturer pass-through warranties on all installed product. A six-month follow-up inspection is scheduled automatically.',
      },
      {
        q: 'Are you licensed and insured?',
        a: 'Yes — Nevada-licensed general contractor, bonded, with general liability and workers compensation coverage. Full credentials available on request.',
      },
    ],
  },
];

export default function FAQPage() {
  const allFaqs = groups.flatMap((g) => g.items);
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'FAQ', url: `${siteConfig.url}/faq` },
          ]),
          faqSchema(allFaqs),
        ]}
      />

      <PageHero
        eyebrow="Frequently Asked"
        title="Direct"
        italic="answers."
        description="Common questions about a luxury remodel — investment, timeline, process, neighborhoods, materials, and warranty. Answered directly by the studio."
        image={kitchenImages[0]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
      />

      <section className="bg-ink py-20 lg:py-28">
        <div className="container-luxe">
          <div className="space-y-24">
            {groups.map((g, gi) => (
              <Reveal key={g.title}>
                <div className="grid gap-12 border-t border-bone/10 pt-14 lg:grid-cols-[1fr_2fr] lg:gap-20">
                  <div className="lg:sticky lg:top-32 lg:self-start">
                    <p className="eyebrow mb-4">
                      Section · 0{gi + 1}
                    </p>
                    <p className="eyebrow mb-3 !text-bone/45">{g.eyebrow}</p>
                    <h2 className="font-display text-3xl text-bone md:text-4xl">
                      {g.title}
                    </h2>
                  </div>
                  <div>
                    <FAQ items={g.items} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Still have questions?"
        description="A senior designer will answer them in person, in your home — by private appointment, within one business day."
        image={customHomeImages[0]}
      />
    </>
  );
}
