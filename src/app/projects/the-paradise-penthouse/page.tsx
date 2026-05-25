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
  title: 'The Paradise Penthouse · Project Study',
  description:
    'A representative VCV Vegas high-rise project study — a Strip-view Paradise penthouse renovated under five-star hospitality protocols. Different scope, same studio standard.',
  alternates: {
    canonical: `${siteConfig.url}/projects/the-paradise-penthouse`,
  },
};

const metaData = [
  { label: 'Location', value: 'Paradise · Strip-View High-Rise' },
  { label: 'Scope', value: 'Kitchen · Primary · Powder · Terrace' },
  { label: 'Build Window', value: '4 months' },
  { label: 'Studio Lead', value: 'Senior Designer' },
];

const palette = [
  { label: 'Honed Travertine', tone: '#d8c7a3' },
  { label: 'Smoked Walnut', tone: '#5e4a36' },
  { label: 'Polished Nickel', tone: '#b6b4ad' },
  { label: 'Lacquered Black', tone: '#0e0e0e' },
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
            name: 'The Paradise Penthouse',
            url: `${siteConfig.url}/projects/the-paradise-penthouse`,
          },
        ])}
      />

      <CinematicHero
        eyebrow="Project Study · 03"
        title="The Paradise"
        italic="Penthouse."
        description="A representative VCV Vegas high-rise renovation: a Strip-view Paradise penthouse re-imagined inside the constraints of a service-elevator schedule, a building HOA, and the same finish standard we hold on every project."
        images={[kitchenImages[3], bathroomImages[3], customHomeImages[3], kitchenImages[1]]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
          { label: 'The Paradise Penthouse' },
        ]}
      />

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
        title="A view"
        italic="that wasn’t reaching the rooms."
        body={[
          'A 38th-floor penthouse with one of the strongest Strip-and-Sphere views in Paradise — and a floor plan that put every wall between the view and the rooms that mattered. The kitchen looked at a column. The primary suite faced east into the building next door. The terrace was an afterthought.',
          'The brief was clear and constrained: remove every interior wall that could legally come down, make the view the architecture, and complete the build under the building’s service-elevator schedule and HOA architectural review.',
        ]}
        image={kitchenImages[3]}
      />

      <TwoColumnFeature
        eyebrow="The Approach"
        title="A high-rise"
        italic="is its own discipline."
        body={[
          'Three of the four interior walls came out. The remaining structural column wrapped in book-matched walnut and became a deliberate architectural moment in the new great room. The kitchen relocated to the view-side; the primary suite gained the eastern corner and a wet-room bath finished in honed travertine.',
          'On the operational side, every delivery was scheduled through the service elevator at building-approved windows, dust containment ran 24/7 through HEPA cycling, and our crew wore branded uniforms by HOA agreement. The build finished on its published calendar with zero noise-violation tickets.',
        ]}
        image={bathroomImages[3]}
        reverse
      />

      {/* Materials */}
      <section className="bg-ink-800 py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Material Palette"
            title="A palette tuned to night-side living."
            description="Paradise reads warmer at night than at noon — the palette is chosen for what the rooms feel like under the Strip’s reflected light: warm stone, smoked walnut, deeper accents, polished nickel where brass would feel out of place."
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

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader eyebrow="Gallery" title="The Finished Spaces" />
          <div className="mt-16 grid gap-4 md:grid-cols-3 lg:gap-6">
            <Reveal>
              <ImageCard image={kitchenImages[3]} aspect="tall" caption={false} className="md:row-span-2" />
            </Reveal>
            <Reveal delay={1}>
              <ImageCard image={bathroomImages[3]} aspect="landscape" caption={false} />
            </Reveal>
            <Reveal delay={2}>
              <ImageCard image={kitchenImages[1]} aspect="landscape" caption={false} />
            </Reveal>
            <Reveal delay={3}>
              <ImageCard image={flooringImages[0]} aspect="landscape" caption={false} />
            </Reveal>
            <Reveal delay={4}>
              <ImageCard image={customHomeImages[3]} aspect="landscape" caption={false} />
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
                  The view, finally,<br />
                  <span className="italic text-gold-light">becomes the room.</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="space-y-5 text-lg leading-relaxed text-bone/70">
                <p>
                  The new great room runs the full Strip-side elevation. The
                  kitchen island sits inside the view rather than behind it.
                  The primary suite finally rests on the eastern corner. The
                  terrace is wired into the same scene control as the
                  interior, so the inside and outside dim together at sunset.
                </p>
                <p>
                  Same finish standard, half the build window, none of the
                  noise — high-rise discipline at the studio level.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <InlineLeadStrip
        title="High-rise project?"
        italic="We have the protocols."
        description="A senior designer with high-rise experience walks the unit and responds within one business day. NDAs are standard on high-discretion buildings."
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

      <RelatedProjects currentSlug="the-paradise-penthouse" />

      <CTASection
        title="Renovate at altitude."
        description="A private conversation with a senior designer who has run a high-rise calendar before."
        image={remodelImages[0]}
      />
    </>
  );
}
