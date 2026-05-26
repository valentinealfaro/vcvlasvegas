import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { ImageCard } from '@/components/ImageCard';
import { CTASection } from '@/components/CTASection';
import { SectionHeader } from '@/components/SectionHeader';
import {
  customHomeImages,
  kitchenImages,
  bathroomImages,
} from '@/lib/images';
import type { LuxeImage } from '@/lib/images';
import { siteConfig, cityPages } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Neighborhoods · VCV Vegas',
  description:
    'Where VCV Vegas builds — Summerlin, Henderson, The Ridges, Paradise, Centennial Hills, and the full Las Vegas metro service area.',
  alternates: { canonical: `${siteConfig.url}/neighborhoods` },
};

const imageBySlug: Record<string, LuxeImage> = {
  'henderson-remodeling': customHomeImages[1],
  'summerlin-remodeling': kitchenImages[0],
  'the-ridges-remodeling': customHomeImages[0],
  'paradise-remodeling': kitchenImages[3],
  'centennial-hills-remodeling': customHomeImages[2],
};

const overviewBySlug: Record<string, string> = {
  'henderson-remodeling':
    'Green Valley, MacDonald Highlands, Anthem, Seven Hills, Lake Las Vegas — bones that have aged into opportunity.',
  'summerlin-remodeling':
    'The Mesa, The Vistas, Red Rock Country Club, Reverence — the valley’s quietest residential architecture.',
  'the-ridges-remodeling':
    'Falcon Ridge, The Pointe, Promontory Pointe — top-of-market refinement, not addition.',
  'paradise-remodeling':
    'Strip-adjacent estates, mid-century moderns, and high-rise condos — three architectures, one studio.',
  'centennial-hills-remodeling':
    'Iron Mountain Ranch, Providence, Skye Canyon — generous lots, ready architecture.',
};

const adjacentAreas = [
  'Enterprise',
  'Spring Valley',
  'North Las Vegas',
  'Green Valley',
  'Mountains Edge',
  'Silverado Ranch',
];

export default function NeighborhoodsPage() {
  return (
    <>
      <CinematicHero
        eyebrow="Service Area"
        title="Where we"
        italic="build."
        description="VCV Vegas serves the full Las Vegas metro. Selected neighborhoods are profiled below — every additional listed area falls inside our active project radius."
        images={[customHomeImages[3], customHomeImages[1], customHomeImages[0], kitchenImages[0]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Neighborhoods' }]}
      />

      <section className="bg-bone py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Featured Neighborhoods"
            title="Where the studio is most active."
          />
          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:gap-12">
            {cityPages.map((c, i) => (
              <Reveal key={c.slug} delay={i % 2}>
                <Link href={`/${c.slug}`} className="group block">
                  <ImageCard
                    image={imageBySlug[c.slug] ?? kitchenImages[0]}
                    aspect="wide"
                    caption={false}
                    className="mb-6"
                  />
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="eyebrow mb-2 !text-ink/45">{c.region}</p>
                      <h2 className="font-display text-3xl text-ink transition-colors group-hover:text-ink md:text-4xl">
                        {c.city}
                      </h2>
                      <p className="mt-3 max-w-md text-ink/60">
                        {overviewBySlug[c.slug]}
                      </p>
                    </div>
                    <div className="grid h-12 w-12 shrink-0 place-items-center border border-ink/15 transition-all group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-bone-800 py-20">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow mb-6">Also Within Our Radius</p>
            <h3 className="font-display text-3xl text-ink md:text-4xl">
              We serve every corner<br />
              <span className="italic text-ink">of the Las Vegas metro.</span>
            </h3>
          </Reveal>
          <Reveal delay={1} className="mt-10 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 lg:grid-cols-6">
            {adjacentAreas.map((a) => (
              <div
                key={a}
                className="flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-ink/65"
              >
                <span className="h-px w-4 bg-gold" />
                {a}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Build where you live."
        description="A senior designer will walk your home — wherever it is in the Las Vegas valley."
        image={bathroomImages[0]}
      />
    </>
  );
}
