import type { Metadata } from 'next';
import { CinematicHero } from '@/components/CinematicHero';
import { TwoColumnFeature } from '@/components/TwoColumnFeature';
import { FinishSpec } from '@/components/FinishSpec';
import { CTASection } from '@/components/CTASection';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { InlineLeadStrip } from '@/components/InlineLeadStrip';
import { customHomeImages, kitchenImages, bathroomImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Studio Concierge · VCV Vegas',
  description:
    'The VCV Vegas Studio Concierge — a top-tier engagement model for $1M+ residential commissions across the Las Vegas metro. By referral.',
  alternates: { canonical: `${siteConfig.url}/concierge` },
};

const principles = [
  {
    t: 'A dedicated project director.',
    d: 'A single senior leader assigned to your project for its full duration. Your phone call is the call — no ticket queues, no junior intermediaries.',
  },
  {
    t: 'The team, coordinated.',
    d: 'Architects, interior designers, structural engineers, landscape, AV, lighting, and trade specialists — sourced, contracted, and orchestrated by us so you do not have to manage parallel teams.',
  },
  {
    t: 'Hotel-level discipline.',
    d: 'Site cleanliness, dust containment, and finish protocols comparable to five-star hospitality renovations. Workers in branded uniform. Site visits available by appointment in the evening.',
  },
  {
    t: 'Anonymized references.',
    d: 'Past Concierge clients are not in our public portfolio. References are available privately, on request, after a preliminary conversation.',
  },
];

const inclusions = [
  { label: 'Project Director', description: 'Senior studio principal assigned end-to-end.' },
  { label: 'Architectural Team', description: 'Drawings, engineering, permitting — managed.' },
  { label: 'Interior Design', description: 'In-house or coordinated with your designer of choice.' },
  { label: 'Specification Library', description: 'Custom finish library curated to the project.' },
  { label: 'Photography Rights', description: 'Project photographed at completion, licensed to client.' },
  { label: 'White-Glove Closeout', description: 'Styling, deep clean, owner walkthrough, year-one service.' },
];

export default function ConciergePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Studio Concierge', url: `${siteConfig.url}/concierge` },
        ])}
      />

      <CinematicHero
        eyebrow="Studio Concierge"
        title="A single phone call,"
        italic="for the entire project."
        description="The Studio Concierge engagement is our top-tier service for residential commissions at scale — one principal lead, every trade and consultant coordinated by us, and a level of discipline reserved for five-star hospitality work."
        images={[customHomeImages[0], customHomeImages[1], kitchenImages[0], customHomeImages[3], bathroomImages[0]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Studio Concierge' }]}
      />

      <TwoColumnFeature
        eyebrow="When This Applies"
        title="When the project"
        italic="deserves its own studio principal."
        body={[
          'The Studio Concierge engagement is built for residential commissions where the scope, the timeline, or the level of discretion required exceed what a standard design-build relationship can absorb.',
          'In practice that usually means a whole-home renovation in the seven-figure range, a flagship build that will be photographed for the owner’s private collection, or a project that involves multiple outside consultants who need orchestrating.',
        ]}
        bullets={[
          'Whole-home renovations $1M+',
          'New custom builds $2M+',
          'Multi-residence portfolios',
          'High-discretion projects',
          'Designer + architect collaborations',
          'Out-of-town owners',
        ]}
        image={customHomeImages[1]}
      />

      <section className="bg-bone-800 py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="The Concierge Principles"
            title="Four commitments."
            description="The disciplines that separate a Concierge engagement from a standard luxury remodel."
          />
          <div className="mt-16 grid gap-px bg-ink/10 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.t} delay={i % 2} className="bg-bone-800 p-8 lg:p-12">
                <p className="font-display text-4xl text-ink">0{i + 1}</p>
                <p className="mt-6 font-display text-2xl text-ink md:text-3xl">
                  {p.t}
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink/65">
                  {p.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinishSpec
        eyebrow="What's Included"
        title="The full Concierge inclusions."
        specs={inclusions}
      />

      <InlineLeadStrip
        title="Considering a Concierge engagement?"
        italic="A private conversation."
        description="Concierge inquiries reach a studio principal directly. We respond within one business day and route only mutually-fit conversations forward."
      />

      {/* By referral note */}
      <section className="relative isolate overflow-hidden bg-bone-800 py-24 lg:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gold/15 blur-[180px]"
        />
        <div className="container-luxe">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow mb-6 justify-center">By Referral</p>
              <p className="font-display text-3xl text-ink md:text-4xl">
                Studio Concierge engagements are typically introduced through
                a previous client, architect, designer, or private wealth
                advisor.{' '}
                <span className="italic text-ink">
                  Direct inquiries are welcomed and reviewed personally by a
                  studio principal.
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Begin a Concierge conversation."
        description="A senior principal responds within one business day. Confidential."
        image={customHomeImages[0]}
      />
    </>
  );
}
