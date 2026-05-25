import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { ImageCard } from '@/components/ImageCard';
import { customHomeImages, kitchenImages, bathroomImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About VCV Vegas',
  description:
    'Inside VCV Vegas — a luxury design-build studio expanding into the Las Vegas metro with white-glove project management and architectural finish standards.',
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Studio"
        title="A luxury studio"
        italic="expanding into Las Vegas."
        description="VCV Vegas is a focused design-build studio bringing architectural finish standards, white-glove project management, and trade-only relationships to luxury remodeling across the Las Vegas metro."
        image={customHomeImages[0]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
            <Reveal>
              <div>
                <p className="eyebrow mb-6">Philosophy</p>
                <h2 className="font-display text-4xl text-bone md:text-5xl">
                  Build like the architects you actually <span className="italic text-gold-light">admire.</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="space-y-6 text-lg leading-relaxed text-bone/70">
                <p>
                  We started VCV Vegas because most homeowners in this valley
                  shouldn’t have to choose between great design and great
                  construction. The best studios in Los Angeles, Scottsdale, and
                  Miami have made that pairing standard for decades. Las Vegas
                  is ready.
                </p>
                <p>
                  Our team is built around a small group of senior designers and
                  trade specialists, each personally selected for their work on
                  comparable projects. There is no junior team behind the
                  curtain — the designer you meet is the designer you keep.
                </p>
                <p>
                  We work with restraint, precision, and a long view. The homes
                  we build are meant to age beautifully, hold their value
                  quietly, and bring their owners back to them every evening.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink-800 py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="What We Stand For"
            title="A different kind of contractor."
          />
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              {
                t: 'Architectural Finish',
                d: 'Every joint, reveal, and dimension drawn in advance — and protected through field execution.',
              },
              {
                t: 'Senior-Led Builds',
                d: 'A senior designer leads your project from first walkthrough to final punch list. No hand-offs.',
              },
              {
                t: 'Trade-Only Partners',
                d: 'Stone yards, fabricators, and millwork shops reserved for design-build studios — not retail.',
              },
              {
                t: 'Calm Sites',
                d: 'Cleaner sites, weekly briefings, and a published build calendar. Construction without the chaos.',
              },
              {
                t: 'Long-Term View',
                d: 'We design what will look as good in ten years as the day the keys turn back.',
              },
              {
                t: 'Single Accountability',
                d: 'Design, drawings, permits, trades, and finish — one studio, one project lead, one phone call.',
              },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i % 3}>
                <p className="font-display text-2xl text-bone">{v.t}</p>
                <p className="mt-3 text-base leading-relaxed text-bone/60">
                  {v.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="A Selection of Work"
            title="Recently completed."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <Reveal><ImageCard image={kitchenImages[0]} aspect="portrait" /></Reveal>
            <Reveal delay={1}><ImageCard image={bathroomImages[0]} aspect="portrait" /></Reveal>
            <Reveal delay={2}><ImageCard image={customHomeImages[3]} aspect="portrait" /></Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
