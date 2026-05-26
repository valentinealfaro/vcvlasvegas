import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { CinematicHero } from '@/components/CinematicHero';
import { TwoColumnFeature } from '@/components/TwoColumnFeature';
import { ImageCard } from '@/components/ImageCard';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { InlineLeadStrip } from '@/components/InlineLeadStrip';
import { SectionHeader } from '@/components/SectionHeader';
import { RelatedProjects } from '@/components/RelatedProjects';
import {
  kitchenImages,
  bathroomImages,
  customHomeImages,
  flooringImages,
  remodelImages,
} from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'The Summerlin Residence · Project Study',
  description:
    'A representative VCV Vegas project study — a Summerlin residence reimagined with a chef’s kitchen, spa primary suite, and indoor-outdoor great room.',
  alternates: {
    canonical: `${siteConfig.url}/projects/the-summerlin-residence`,
  },
};

const metaData = [
  { label: 'Location', value: 'Summerlin · Las Vegas, NV' },
  { label: 'Scope', value: 'Kitchen · Primary Suite · Great Room · Patio' },
  { label: 'Build Window', value: '5 months' },
  { label: 'Studio Lead', value: 'Senior Designer' },
];

const palette = [
  { label: 'Honed Calacatta', tone: '#f4f1ec' },
  { label: 'Warm Walnut', tone: '#7a5a3e' },
  { label: 'Matte Black', tone: '#1a1a1a' },
  { label: 'Brushed Brass', tone: '#b8945c' },
  { label: 'Bone Plaster', tone: '#d8d1c2' },
];

export default function CaseStudyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Projects', url: `${siteConfig.url}/projects` },
          {
            name: 'The Summerlin Residence',
            url: `${siteConfig.url}/projects/the-summerlin-residence`,
          },
        ])}
      />

      <CinematicHero
        eyebrow="Project Study · 01"
        title="The Summerlin"
        italic="Residence."
        description="A representative VCV Vegas commission: a Summerlin residence re-imagined as an open-plan great room, a chef’s kitchen, and a primary suite that reads like a private resort. Indicative of the scope and standard of our typical Vegas-valley project."
        images={[kitchenImages[0], bathroomImages[0], customHomeImages[3], flooringImages[0], kitchenImages[1]]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
          { label: 'The Summerlin Residence' },
        ]}
      />

      {/* Project metadata strip */}
      <section className="border-b border-ink/8 bg-bone-800/40">
        <div className="container-luxe">
          <div className="grid gap-px bg-ink/10 md:grid-cols-4">
            {metaData.map((m) => (
              <div key={m.label} className="bg-bone-800/40 px-6 py-8 lg:px-8">
                <p className="text-[0.6rem] uppercase tracking-[0.28em] text-ink/45">
                  {m.label}
                </p>
                <p className="mt-3 font-display text-xl text-ink md:text-2xl">
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TwoColumnFeature
        eyebrow="The Brief"
        title="Open the house."
        italic="Quiet the finishes."
        body={[
          'The original plan was a typical Summerlin layout — three closed-off rooms where one great room wanted to live, a working kitchen that didn’t want to be seen, and a primary suite without a single architectural moment.',
          'The brief was simple: open the house, quiet the finishes, and make the primary suite something they’d come home to.',
        ]}
        image={kitchenImages[1]}
      />

      <TwoColumnFeature
        eyebrow="The Approach"
        title="One studio"
        italic="from sketch to keys."
        body={[
          'We re-engineered the load-bearing wall between the kitchen and the great room to create a single 38-foot sightline from the front door through to the patio.',
          'The kitchen runs along a long stone island with a waterfall return; the cooking wall lives behind it, faced in matching cabinetry so the kitchen reads as architecture, not appliances.',
          'In the primary suite, we re-cut the layout to give the bath the full corner — a curbless wet room, a freestanding tub, and a floating walnut vanity that catches the morning light from the east.',
        ]}
        image={bathroomImages[0]}
        reverse
      />

      {/* Materials palette */}
      <section className="bg-bone-800 py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Material Palette"
            title="Restraint, in five tones."
            description="A short list of materials, used everywhere — the simplest way to make a remodel read like architecture instead of a renovation."
          />
          <Reveal delay={2}>
            <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
              {palette.map((p) => (
                <div key={p.label}>
                  <div
                    className="aspect-square w-full border border-ink/10"
                    style={{ backgroundColor: p.tone }}
                  />
                  <p className="mt-4 text-[0.65rem] uppercase tracking-[0.24em] text-ink/65">
                    {p.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cinematic gallery */}
      <section className="bg-bone py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader eyebrow="Gallery" title="The Finished Spaces" />
          <div className="mt-16 grid gap-4 md:grid-cols-3 lg:gap-6">
            <Reveal>
              <ImageCard image={kitchenImages[0]} aspect="tall" caption={false} className="md:row-span-2" />
            </Reveal>
            <Reveal delay={1}>
              <ImageCard image={bathroomImages[0]} aspect="landscape" caption={false} />
            </Reveal>
            <Reveal delay={2}>
              <ImageCard image={customHomeImages[3]} aspect="landscape" caption={false} />
            </Reveal>
            <Reveal delay={3}>
              <ImageCard image={flooringImages[0]} aspect="landscape" caption={false} />
            </Reveal>
            <Reveal delay={4}>
              <ImageCard image={kitchenImages[3]} aspect="landscape" caption={false} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="bg-bone-800 py-24 lg:py-32">
        <div className="container-luxe">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div>
                <p className="eyebrow mb-6">The Outcome</p>
                <h2 className="font-display text-4xl text-ink md:text-5xl">
                  A home that reads as<br />
                  <span className="italic text-ink">architecture.</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="space-y-5 text-lg leading-relaxed text-ink/70">
                <p>
                  The new great room holds eight at the island, twelve at the
                  table, and twenty under the patio — without crowding the
                  light. The primary suite is the room they spend their
                  evenings in. The home, ultimately, finally feels like the
                  view it was given.
                </p>
                <p>
                  This is the standard of every VCV Vegas commission.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <InlineLeadStrip
        title="Want a project study like this?"
        italic="Start with a private consultation."
        description="Tell us about your home and what it’s missing — a senior designer responds within one business day."
      />

      <section className="bg-bone py-16">
        <div className="container-luxe">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.28em] text-ink/55 transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            All Projects
          </Link>
        </div>
      </section>

      <RelatedProjects currentSlug="the-summerlin-residence" />

      <CTASection
        title="Commission your own."
        description="The first conversation is the most important one. By appointment with a senior VCV Vegas designer."
        image={remodelImages[0]}
      />
    </>
  );
}
