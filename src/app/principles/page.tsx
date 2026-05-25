import type { Metadata } from 'next';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { InlineLeadStrip } from '@/components/InlineLeadStrip';
import { customHomeImages, kitchenImages, bathroomImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Principles · VCV Vegas',
  description:
    'Ten principles that govern the work at VCV Vegas — the foundational beliefs behind every project decision, from the first walkthrough to the final punch list.',
  alternates: { canonical: `${siteConfig.url}/principles` },
};

const principles = [
  {
    n: '01',
    t: 'Restraint over decoration.',
    d: 'A finished room should feel inevitable, not styled. Restraint is the look the budget cannot buy and the eye cannot fake.',
  },
  {
    n: '02',
    t: 'A senior designer through every phase.',
    d: 'The designer who walks the first consultation is the designer who walks the final punch list. No hand-offs. No staffing surprises.',
  },
  {
    n: '03',
    t: 'Pre-construction matters more than construction.',
    d: 'Eight weeks of drawings, engineering, permits, and long-lead orders before demolition. Every later week of the project depends on these eight being run with discipline.',
  },
  {
    n: '04',
    t: 'Trade-only materials, every time.',
    d: 'Stone yards, fabricators, millwork shops, and hardware lines reserved for design-build studios. The specification is the difference between a remodel and a renovation.',
  },
  {
    n: '05',
    t: 'A site that runs quietly is a site that finishes well.',
    d: 'Dust containment, daily cleanup, branded uniforms, published calendars, weekly client briefings. The job site is part of the finished work.',
  },
  {
    n: '06',
    t: 'Design intent is the line we will not cross.',
    d: 'Drawings are honored. Specifications are protected. Substitutions never happen without your written sign-off. The field knows.',
  },
  {
    n: '07',
    t: 'A published calendar from day one.',
    d: 'Every milestone, every trade, every inspection, every delivery is scheduled before the wall comes down. The calendar is the project.',
  },
  {
    n: '08',
    t: 'Honest pricing, honest scope.',
    d: 'A range, not a fantasy. A scope that fits inside the range, not at the edge of it. A conversation about cost that happens before a contract, not during one.',
  },
  {
    n: '09',
    t: 'The long view, always.',
    d: 'We specify what will look as good in ten years as the day the keys turn back. Not what photographs well in the showroom. Not what trends. What endures.',
  },
  {
    n: '10',
    t: 'Privacy as a finish.',
    d: 'Client identities, addresses, and project specifics stay private by default. Concierge engagements never appear in the public portfolio. Privacy is part of the studio standard, not an exception to it.',
  },
];

export default function PrinciplesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Principles', url: `${siteConfig.url}/principles` },
        ])}
      />

      <CinematicHero
        eyebrow="The Studio · Foundations"
        title="Ten principles"
        italic="that govern the work."
        description="A short manifesto of the beliefs behind every VCV Vegas decision — from the first walkthrough to the final punch list. Foundational, not aspirational."
        images={[customHomeImages[0], kitchenImages[0], bathroomImages[0], customHomeImages[1]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Principles' }]}
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="The Manifesto"
            title="What we hold to."
            description="These principles do not change with project, client, or scope. They are the parts of the studio that everything else is built around."
          />

          <div className="mt-20 space-y-14">
            {principles.map((p) => (
              <Reveal key={p.n}>
                <div className="grid items-baseline gap-8 border-t border-bone/10 pt-10 lg:grid-cols-[auto_1fr_1.6fr] lg:gap-16">
                  <p className="font-display text-6xl text-gold-light lg:text-7xl">
                    {p.n}
                  </p>
                  <h3 className="font-display text-2xl text-bone md:text-3xl">
                    {p.t}
                  </h3>
                  <p className="text-base leading-relaxed text-bone/70 md:text-lg">
                    {p.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InlineLeadStrip
        title="Hold the studio to all ten."
        italic="In writing."
        description="A senior designer responds to every inquiry personally. Confidential, no pressure, one business day."
      />

      <CTASection
        title="Begin a project that lives by them."
        description="A private consultation with a senior VCV Vegas designer."
        image={customHomeImages[1]}
      />
    </>
  );
}
