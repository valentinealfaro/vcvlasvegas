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
import {
  customHomeImages,
  bathroomImages,
  kitchenImages,
  flooringImages,
  remodelImages,
} from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'The MacDonald Highlands Residence · Project Study',
  description:
    'A representative VCV Vegas project study — a Henderson MacDonald Highlands estate re-imagined with a chef’s kitchen, spa suite, and architectural outdoor living.',
  alternates: {
    canonical: `${siteConfig.url}/projects/macdonald-highlands-residence`,
  },
};

const metaData = [
  { label: 'Location', value: 'MacDonald Highlands · Henderson' },
  { label: 'Scope', value: 'Kitchen · Primary · Wine Room · Outdoor' },
  { label: 'Build Window', value: '7 months' },
  { label: 'Studio Lead', value: 'Senior Designer' },
];

const palette = [
  { label: 'White Macaubas', tone: '#eae6dd' },
  { label: 'Smoked Oak', tone: '#5e4a36' },
  { label: 'Matte Bronze', tone: '#3a2e23' },
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
            name: 'The MacDonald Highlands Residence',
            url: `${siteConfig.url}/projects/macdonald-highlands-residence`,
          },
        ])}
      />

      <CinematicHero
        eyebrow="Project Study · 02"
        title="The MacDonald"
        italic="Highlands Residence."
        description="A representative VCV Vegas commission in Henderson — a course-frontage estate re-imagined as a chef’s kitchen, a wine room, a spa primary, and an outdoor great room engineered for the long Henderson view."
        images={[customHomeImages[1], kitchenImages[2], bathroomImages[3], kitchenImages[0], customHomeImages[3]]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
          { label: 'MacDonald Highlands' },
        ]}
      />

      {/* Project metadata strip */}
      <section className="border-b border-bone/8 bg-ink-800/40">
        <div className="container-luxe">
          <div className="grid gap-px bg-bone/10 md:grid-cols-4">
            {metaData.map((m) => (
              <div key={m.label} className="bg-ink-800/40 px-6 py-8 lg:px-8">
                <p className="text-[0.6rem] uppercase tracking-[0.28em] text-bone/45">
                  {m.label}
                </p>
                <p className="mt-3 font-display text-xl text-bone md:text-2xl">
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TwoColumnFeature
        eyebrow="The Brief"
        title="A house"
        italic="finally looking out."
        body={[
          'The home was a six-bedroom custom built in 2008, on a lot oriented to one of the strongest Strip-and-mountain views in MacDonald Highlands. Inside, almost none of that view was reaching the rooms that mattered. The kitchen looked at a wall. The primary suite faced east into another house. The patio was a slab.',
          'The brief: re-engineer the floor plan and the exterior to make the lot do the work the architect originally drew it for.',
        ]}
        image={kitchenImages[2]}
      />

      <TwoColumnFeature
        eyebrow="The Approach"
        title="Move the kitchen."
        italic="Open the back wall."
        body={[
          'We relocated the kitchen to the back of the home, re-engineered the load-bearing wall as a flush beam, and replaced the rear elevation with a 28-foot multi-panel glass wall that pockets into the architecture.',
          'The primary suite gained the eastern wing entirely — a sitting room, a wet-room bath, and a walk-in closet that opens directly to the secondary patio. Downstairs, the under-stair niche became a 380-bottle climate-controlled wine room with a brass display wall.',
        ]}
        image={bathroomImages[3]}
        reverse
      />

      {/* Materials */}
      <section className="bg-ink-800 py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Material Palette"
            title="A warmer five-tone."
            description="The Henderson light reads warmer than Summerlin’s — the palette is tuned accordingly: lighter stone, smokier wood, deeper bronze, brass for the moments that catch the late sun."
          />
          <Reveal delay={2}>
            <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
              {palette.map((p) => (
                <div key={p.label}>
                  <div
                    className="aspect-square w-full border border-bone/10"
                    style={{ backgroundColor: p.tone }}
                  />
                  <p className="mt-4 text-[0.65rem] uppercase tracking-[0.24em] text-bone/65">
                    {p.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader eyebrow="Gallery" title="The Finished Spaces" />
          <div className="mt-16 grid gap-4 md:grid-cols-3 lg:gap-6">
            <Reveal>
              <ImageCard image={customHomeImages[1]} aspect="tall" caption={false} className="md:row-span-2" />
            </Reveal>
            <Reveal delay={1}>
              <ImageCard image={kitchenImages[0]} aspect="landscape" caption={false} />
            </Reveal>
            <Reveal delay={2}>
              <ImageCard image={bathroomImages[0]} aspect="landscape" caption={false} />
            </Reveal>
            <Reveal delay={3}>
              <ImageCard image={kitchenImages[3]} aspect="landscape" caption={false} />
            </Reveal>
            <Reveal delay={4}>
              <ImageCard image={flooringImages[0]} aspect="landscape" caption={false} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="bg-ink-800 py-24 lg:py-32">
        <div className="container-luxe">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div>
                <p className="eyebrow mb-6">The Outcome</p>
                <h2 className="font-display text-4xl text-bone md:text-5xl">
                  The view, finally<br />
                  <span className="italic text-gold-light">reaching the rooms.</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="space-y-5 text-lg leading-relaxed text-bone/70">
                <p>
                  The new kitchen island looks out over the Strip-and-mountain
                  horizon the home was built around. The primary suite finally
                  rests on the eastern wing the floor plan always wanted. The
                  patio doubles the living square footage from May through
                  October.
                </p>
                <p>
                  Henderson’s best home is now the one that finally sees its
                  own lot.
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

      <section className="bg-ink py-16">
        <div className="container-luxe">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.28em] text-bone/55 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            All Projects
          </Link>
        </div>
      </section>

      <CTASection
        title="Build at the standard of the address."
        description="The first conversation is the most important one. By appointment with a senior VCV Vegas designer."
        image={remodelImages[0]}
      />
    </>
  );
}
