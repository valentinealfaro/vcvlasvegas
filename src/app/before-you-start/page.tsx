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

      <section className="bg-bone py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="The Preparation Checklist"
            title="Seven decisions."
            description="None of these require committing to a project. All of them make the first conversation faster, deeper, and more useful."
          />

          <div className="mt-20 space-y-16">
            {steps.map((step) => (
              <Reveal key={step.n}>
                <div className="group grid items-start gap-10 border-t border-ink/10 pt-12 lg:grid-cols-[auto_1fr_1.6fr] lg:gap-16">
                  <div className="flex flex-col gap-3">
                    <p className="font-display text-6xl text-ink [text-shadow:0_0_24px_rgba(252,187,0,0.4)] lg:text-7xl">
                      {step.n}
                    </p>
                    <span aria-hidden className="h-px w-10 bg-gradient-to-r from-gold via-gold/40 to-transparent" />
                  </div>
                  <h3 className="font-display text-2xl text-ink md:text-3xl">
                    {step.t}
                  </h3>
                  <div>
                    <p className="text-base leading-relaxed text-ink/70 md:text-lg">
                      {step.d}
                    </p>
                    {step.link && (
                      <Link
                        href={step.link.href}
                        className="group/link mt-5 inline-flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-ink transition-colors hover:text-ink"
                      >
                        <span className="relative">
                          {step.link.label}
                          <span aria-hidden className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover/link:w-full" />
                        </span>
                        <ArrowUpRight className="h-3 w-3 transition-all duration-500 group-hover/link:rotate-45 group-hover/link:text-gold" />
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
      <section className="bg-bone-800 py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Two Paths Forward"
            title="When the prep is done."
          />
          <div className="mt-16 grid gap-px bg-ink/10 md:grid-cols-2">
            {[
              {
                eyebrow: 'Faster Path',
                title: 'Schedule a consultation.',
                desc: 'A short multi-step form to reserve a private walkthrough. Best if you already have a sense of scope and want a senior designer in your home soon.',
                href: '/contact',
                cta: 'Open the consultation form',
              },
              {
                eyebrow: 'Deeper Path',
                title: 'Send a project brief.',
                desc: 'A ten-minute intake with four sections (contact, property, project, vision). Best if the prep is done and you want the first conversation to land at scope rather than biography.',
                href: '/intake',
                cta: 'Open the project brief',
              },
            ].map((card, i) => (
              <Reveal key={card.eyebrow} delay={i} className="group relative overflow-hidden bg-bone-800 p-8 transition-colors duration-500 hover:bg-bone-700 lg:p-12">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      i % 2 === 0
                        ? 'radial-gradient(circle at 100% 0%, rgba(252,187,0,0.10), transparent 55%)'
                        : 'radial-gradient(circle at 0% 100%, rgba(59,130,246,0.10), transparent 55%)',
                  }}
                />
                <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-gold/0 transition-colors duration-500 group-hover:border-gold/70" />
                <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-gold/0 transition-colors duration-500 group-hover:border-gold/70" />
                <div className="mb-5 flex items-center gap-3">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold/60 transition-all duration-500 group-hover:bg-gold group-hover:shadow-[0_0_8px_rgba(252,187,0,0.7)]" />
                  <p className="eyebrow !text-ink/45">{card.eyebrow}</p>
                </div>
                <h3 className="font-display text-2xl text-ink md:text-3xl">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink/65 transition-colors duration-500 group-hover:text-ink/80">
                  {card.desc}
                </p>
                <Link
                  href={card.href}
                  className="group/link mt-8 inline-flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-ink transition-colors hover:text-ink"
                >
                  <span className="relative">
                    {card.cta}
                    <span aria-hidden className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover/link:w-full" />
                  </span>
                  <ArrowRight className="h-3 w-3 transition-all duration-500 group-hover/link:translate-x-1 group-hover/link:text-gold" />
                </Link>
              </Reveal>
            ))}
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
