import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { InlineLeadStrip } from '@/components/InlineLeadStrip';
import { kitchenImages, customHomeImages, bathroomImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Before You Start · VCV Vegas',
  description:
    'A seven-step preparation checklist for homeowners considering a luxury remodel in Las Vegas — what to think through, gather, and decide before you ever call a contractor.',
  alternates: { canonical: `${siteConfig.url}/before-you-start` },
};

const steps: {
  n: string;
  t: string;
  d: string;
  link?: { label: string; href: string };
}[] = [
  {
    n: '01',
    t: 'Define the scope, honestly.',
    d: 'Are you remodeling a single room, a few coordinated rooms, the whole home, or building new? Be honest with yourself about how much of the home will need to change. A scope that grows in the middle of construction is the most expensive mistake on a luxury build.',
  },
  {
    n: '02',
    t: 'Find your direction.',
    d: 'Modern desert, transitional, Mediterranean, Hollywood Regency — language for an architectural direction matters more than a Pinterest board. Take a few minutes with our short style profile to identify the language you respond to.',
    link: { label: 'Take the style quiz', href: '/style' },
  },
  {
    n: '03',
    t: 'Set an investment range.',
    d: 'Not a number — a range. Look at the indicative calculator output or the sample budgets to anchor the conversation. Bring a range, not a ceiling; the right project lives inside its range, not at the edge of it.',
    link: { label: 'Try the calculator', href: '/investment' },
  },
  {
    n: '04',
    t: 'Gather references in writing.',
    d: 'Save the rooms and details you love into a single location — Pinterest, IG saves, magazine images, screenshots of your favorite spaces. A senior designer can read the through-line in five minutes. Without references, the first meeting starts at zero.',
    link: { label: 'Browse the lookbook', href: '/lookbook' },
  },
  {
    n: '05',
    t: 'Photograph your home, today.',
    d: 'Walk every room with your phone and take wide-angle shots in good light. The senior designer who visits your home will appreciate the pre-visit context — and you will appreciate having the "before" photos for comparison later.',
  },
  {
    n: '06',
    t: 'Think about timeline.',
    d: 'When do you want to be back in the finished home? Most luxury remodels run 6–10 weeks (signature bathroom) to 4–9 months (whole-home). Add 6–10 weeks of pre-construction to either. Working backward from your in-home date is the right way to schedule the conversation.',
    link: { label: 'Read pre-construction notes', href: '/journal/what-pre-construction-actually-looks-like' },
  },
  {
    n: '07',
    t: 'Prepare your questions.',
    d: 'Five questions every prospective contractor should answer — who runs the project daily, who specifies materials, how long-lead orders work, what the dust protocol is, and what the warranty actually covers. We wrote the questions out in the journal.',
    link: { label: 'See the five questions', href: '/journal/how-to-choose-luxury-contractor-las-vegas' },
  },
];

export default function BeforeYouStartPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Before You Start', url: `${siteConfig.url}/before-you-start` },
        ])}
      />

      <CinematicHero
        eyebrow="Before You Start"
        title="Seven things"
        italic="to do first."
        description="A short preparation checklist for homeowners considering a luxury remodel. Walk through these before you ever call a contractor — the first conversation lands deeper when the brief comes with structure."
        images={[kitchenImages[0], bathroomImages[0], customHomeImages[0]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Before You Start' }]}
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="The Preparation Checklist"
            title="Seven decisions."
            description="None of these require committing to a project. All of them make the first conversation faster, deeper, and more useful."
          />

          <div className="mt-20 space-y-16">
            {steps.map((step) => (
              <Reveal key={step.n}>
                <div className="grid items-start gap-10 border-t border-bone/10 pt-12 lg:grid-cols-[auto_1fr_1.6fr] lg:gap-16">
                  <p className="font-display text-6xl text-gold-light lg:text-7xl">
                    {step.n}
                  </p>
                  <h3 className="font-display text-2xl text-bone md:text-3xl">
                    {step.t}
                  </h3>
                  <div>
                    <p className="text-base leading-relaxed text-bone/70 md:text-lg">
                      {step.d}
                    </p>
                    {step.link && (
                      <Link
                        href={step.link.href}
                        className="mt-5 inline-flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-gold transition-colors hover:text-gold-light"
                      >
                        {step.link.label}
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InlineLeadStrip
        title="Ready when you are."
        italic="No matter how prepared."
        description="A senior designer will sit with you whether the brief is fully formed or barely shaped. The conversation is the same either way: walk the home, read the project, respond within one business day."
      />

      {/* Quick next steps */}
      <section className="bg-ink-800 py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Two Paths Forward"
            title="When the prep is done."
          />
          <div className="mt-16 grid gap-px bg-bone/10 md:grid-cols-2">
            <Reveal className="bg-ink-800 p-8 lg:p-12">
              <p className="eyebrow mb-5 !text-bone/45">Faster Path</p>
              <h3 className="font-display text-2xl text-bone md:text-3xl">
                Schedule a consultation.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-bone/65">
                A short multi-step form to reserve a private walkthrough. Best
                if you already have a sense of scope and want a senior
                designer in your home soon.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-gold transition-colors hover:text-gold-light"
              >
                Open the consultation form
                <ArrowRight className="h-3 w-3" />
              </Link>
            </Reveal>
            <Reveal delay={1} className="bg-ink-800 p-8 lg:p-12">
              <p className="eyebrow mb-5 !text-bone/45">Deeper Path</p>
              <h3 className="font-display text-2xl text-bone md:text-3xl">
                Send a project brief.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-bone/65">
                A ten-minute intake with four sections (contact, property,
                project, vision). Best if the prep is done and you want the
                first conversation to land at scope rather than biography.
              </p>
              <Link
                href="/intake"
                className="mt-8 inline-flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-gold transition-colors hover:text-gold-light"
              >
                Open the project brief
                <ArrowRight className="h-3 w-3" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Begin with structure."
        description="Or skip ahead — a senior designer reads every inquiry personally."
        image={customHomeImages[1]}
      />
    </>
  );
}
