import type { Metadata } from 'next';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { kitchenImages, bathroomImages, customHomeImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Our Process · VCV Vegas',
  description:
    'The VCV Vegas design-build process — from private discovery to quiet reveal. White-glove project management for luxury Las Vegas remodels.',
  alternates: { canonical: `${siteConfig.url}/process` },
};

const phases = [
  {
    n: '01',
    t: 'Private Discovery',
    d: 'A senior designer walks your home, listens to how you live, and takes the measurements that quietly inform every later decision. No drawings yet — just the right questions.',
    detail: ['Walkthrough + measurement', 'Lifestyle conversation', 'Scope direction', 'Initial budget framing'],
  },
  {
    n: '02',
    t: 'Design Direction',
    d: 'Concept design, material palette, and a transparent investment range. Refined together until it feels right — before any production drawings start.',
    detail: ['Concept floor plans', 'Material + finish palette', 'Investment range', 'Architectural narrative'],
  },
  {
    n: '03',
    t: 'Production Drawings',
    d: 'Trade-quality construction drawings, finish schedules, and a fixed build calendar. Long-lead items ordered before a single tile is touched.',
    detail: ['Full construction set', 'Finish + plumbing schedules', 'Engineering coordination', 'Permit submittal'],
  },
  {
    n: '04',
    t: 'White-Glove Build',
    d: 'Site protection, weekly client briefings, dedicated project lead, and a single phone call for the duration. Construction without the chaos.',
    detail: ['Dust + site protection', 'Weekly briefings', 'Trade coordination', 'Inspection management'],
  },
  {
    n: '05',
    t: 'Quiet Reveal',
    d: 'Final styling, professional photography for your records, and a one-year service relationship to make sure the finish ages the way it should.',
    detail: ['Punch list + final detail', 'Styling + photography', 'Owner walkthrough', 'One-year service'],
  },
];

export default function ProcessPage() {
  return (
    <>
      <CinematicHero
        eyebrow="The VCV Process"
        title="A calm,"
        italic="controlled build."
        description="Luxury isn’t just the finishes — it’s how the project feels from week one to keys-back. Here’s how we make that happen."
        images={[kitchenImages[2], bathroomImages[0], customHomeImages[1], kitchenImages[0]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Process' }]}
      />

      <section className="bg-bone py-24 lg:py-32">
        <div className="container-luxe">
          <div className="space-y-24">
            {phases.map((phase) => (
              <Reveal key={phase.n}>
                <div className="grid gap-12 border-t border-ink/10 pt-16 lg:grid-cols-[auto_1fr_1fr] lg:gap-16">
                  <p className="font-display text-7xl text-ink lg:text-8xl">
                    {phase.n}
                  </p>
                  <div>
                    <h2 className="font-display text-4xl text-ink md:text-5xl">
                      {phase.t}
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-ink/70">
                      {phase.d}
                    </p>
                  </div>
                  <ul className="space-y-3 self-center text-sm uppercase tracking-[0.18em] text-ink/65">
                    {phase.detail.map((d) => (
                      <li key={d} className="flex items-center gap-3">
                        <span className="h-px w-5 bg-gold" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Start your project the right way."
        description="The first conversation is the most important one. Let’s have it."
        image={bathroomImages[0]}
      />
    </>
  );
}
