import type { Metadata } from 'next';
import { CinematicHero } from '@/components/CinematicHero';
import { TwoColumnFeature } from '@/components/TwoColumnFeature';
import { FinishSpec } from '@/components/FinishSpec';
import { CTASection } from '@/components/CTASection';
import { FAQ } from '@/components/FAQ';
import { SectionHeader } from '@/components/SectionHeader';
import { Reveal } from '@/components/Reveal';
import { InlineLeadStrip } from '@/components/InlineLeadStrip';
import { TradeIntakeForm } from '@/components/TradeIntakeForm';
import {
  customHomeImages,
  kitchenImages,
  bathroomImages,
} from '@/lib/images';
import { siteConfig } from '@/lib/site';
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
} from '@/lib/schema';

export const metadata: Metadata = {
  title: 'For Architects & Designers · VCV Vegas',
  description:
    'Trade partnership program for architects and interior designers — VCV Vegas as the licensed construction arm executing their luxury residential projects across the Las Vegas metro.',
  alternates: { canonical: `${siteConfig.url}/for-architects-and-designers` },
};

const faqs = [
  {
    q: 'Do you offer trade pricing or designer terms?',
    a: 'Yes. Architects and interior designers introducing projects to VCV Vegas operate under our trade program — pre-construction support, fixed-turnaround pricing, and milestone reviews structured around your timeline.',
  },
  {
    q: 'Will you sign an NDA before pricing a project?',
    a: 'Of course. NDAs are standard practice on our trade-introduced projects. Drawings, finish schedules, and client information stay within our pre-construction team.',
  },
  {
    q: 'Can you build to a designer’s specification book?',
    a: 'That is exactly our preferred working mode. Drawings are honored, specifications are protected, and substitutions never happen without your written sign-off.',
  },
  {
    q: 'What is your turnaround on a pre-construction estimate?',
    a: 'Most trade-introduced packages return a transparent investment range within 7–10 business days of receiving full drawings and finish schedules. Phased and fast-track projects can compress further by arrangement.',
  },
  {
    q: 'Do you take projects from outside the Las Vegas metro?',
    a: 'Selectively. Trade-introduced projects from Los Angeles, Scottsdale, and Orange County designers working on Las Vegas residences are welcome and frequent.',
  },
];

const program = [
  {
    n: '01',
    t: 'A single pre-construction lead.',
    d: 'You work with one senior pre-construction manager from intake through hand-off. No bouncing between estimators and project managers.',
  },
  {
    n: '02',
    t: 'Fixed-turnaround pricing.',
    d: 'Trade-introduced packages return a transparent investment range within 7–10 business days of receiving full drawings.',
  },
  {
    n: '03',
    t: 'Design intent protected.',
    d: 'Drawings are honored. Specifications are protected. Substitutions never happen without your written sign-off — and the field knows it.',
  },
  {
    n: '04',
    t: 'Milestone reviews on your calendar.',
    d: 'Mock-ups, stone selections, and finish walks happen on your schedule, not ours. Every milestone is scheduled around the designer first.',
  },
  {
    n: '05',
    t: 'Photography-grade closeout.',
    d: 'Projects are photographed at completion at our cost — final images licensed to the designer for portfolio use.',
  },
];

export default function ForTradePage() {
  const pageUrl = `${siteConfig.url}/for-architects-and-designers`;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'For Architects & Designers', url: pageUrl },
          ]),
          faqSchema(faqs),
        ]}
      />

      <CinematicHero
        eyebrow="The Trade Program"
        title="A construction arm"
        italic="for design professionals."
        description="VCV Vegas operates as the licensed construction studio behind architects and interior designers working on luxury Las Vegas residences. One senior lead, protected design intent, and pricing on your timeline."
        images={[customHomeImages[0], customHomeImages[1], kitchenImages[1], bathroomImages[3]]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'For Architects & Designers' },
        ]}
      />

      <TwoColumnFeature
        eyebrow="The Brief"
        title="Your drawings,"
        italic="executed."
        body={[
          'You did not draw the project so a contractor could re-draw it in the field. We start every trade-introduced engagement with a single principle: the design comes first, and our job is to execute it.',
          'That means we read your drawings before pricing. We submit RFIs in writing, not in the field. We do not substitute without your sign-off. And we treat the project as your portfolio piece — because it is.',
        ]}
        bullets={[
          'One pre-construction lead',
          'Fixed 7–10 day turnaround',
          'Mock-up reviews on your calendar',
          'NDA standard on intake',
          'Substitutions never silently',
          'Photography-grade closeout',
        ]}
        image={kitchenImages[1]}
      />

      <section className="bg-ink-800 py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="The Program"
            title="What it looks like to introduce a project."
          />
          <div className="mt-16 space-y-12">
            {program.map((p, i) => (
              <Reveal key={p.n} delay={i}>
                <div className="grid items-start gap-8 border-t border-bone/10 pt-10 lg:grid-cols-[auto_1fr_2fr] lg:gap-14">
                  <p className="font-display text-5xl text-bone lg:text-6xl">
                    {p.n}
                  </p>
                  <h3 className="font-display text-2xl text-bone md:text-3xl">
                    {p.t}
                  </h3>
                  <p className="text-base leading-relaxed text-bone/65">
                    {p.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TwoColumnFeature
        eyebrow="Working Style"
        title="Built around"
        italic="how the best studios work."
        body={[
          'The Los Angeles, Scottsdale, and Orange County firms we work with most often share one preference — a contractor who understands they are not the design lead. We have built our trade operations around that posture.',
          'For repeat designers, we offer a streamlined pre-construction relationship: your finish library carries between projects, your preferred subcontractors are protected, and your typical detail set becomes our starting point on every new build.',
        ]}
        image={bathroomImages[3]}
        reverse
      />

      <FinishSpec
        eyebrow="What You Get"
        title="The trade-program deliverables."
        specs={[
          { label: 'NDA Standard', description: 'Mutual NDAs signed before pricing on every trade-introduced project.' },
          { label: 'Drawing Review', description: 'Pre-construction team reads every page before pricing returns.' },
          { label: 'Spec-Book Honor', description: 'Your specification book is the source of truth in the field.' },
          { label: 'Trade-Only Vendors', description: 'Our stone, millwork, and metal partners reserved for design-build studios.' },
          { label: 'Photographed Closeout', description: 'Final project photography at our cost, licensed for your portfolio.' },
          { label: 'Repeat-Build Speed', description: 'Second projects move faster than first — your specs carry forward.' },
        ]}
      />

      <InlineLeadStrip
        title="Have a project to introduce?"
        italic="The trade brief is below."
        description="Three short sections covering the firm, project, and engagement type. Our pre-construction team responds within one business day. NDA available on request before any drawings are shared."
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Trade FAQs"
            title="Questions designers ask first."
          />
          <div className="mt-16 max-w-4xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* Trade intake */}
      <section id="trade-intake" className="bg-ink-800 py-24 lg:py-32">
        <div className="container-luxe">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div>
                <p className="eyebrow mb-6">Trade Intake</p>
                <h2 className="font-display text-4xl text-bone md:text-5xl">
                  Send a project<br />
                  <span className="italic text-bone">straight to pre-construction.</span>
                </h2>
                <p className="mt-6 text-bone/65">
                  Three short sections — the firm, the project, and the
                  engagement you want from us. NDA available on request
                  before drawings are shared. Senior pre-construction lead
                  reviews every brief personally.
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="mt-14 border border-bone/10 bg-ink p-8 md:p-10">
                <TradeIntakeForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Let’s build your next project."
        description="A pre-construction conversation with a senior VCV Vegas lead — by arrangement, within one business day."
        image={customHomeImages[1]}
      />
    </>
  );
}
