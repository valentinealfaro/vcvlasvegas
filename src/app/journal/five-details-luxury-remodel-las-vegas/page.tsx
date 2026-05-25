import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { InlineLeadStrip } from '@/components/InlineLeadStrip';
import { StickySectionNav } from '@/components/StickySectionNav';
import { kitchenImages, bathroomImages, customHomeImages, flooringImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

const url = `${siteConfig.url}/journal/five-details-luxury-remodel-las-vegas`;
const heroImage = kitchenImages[0];

export const metadata: Metadata = {
  title: 'Five Details That Separate a Luxury Remodel · Journal',
  description:
    'Five quiet architectural details that separate a true luxury remodel from a builder-grade renovation — written from the studio at VCV Vegas.',
  alternates: { canonical: url },
  openGraph: {
    title: 'The five details that quietly separate a luxury remodel',
    description:
      'Five quiet architectural details that separate a true luxury remodel from a builder-grade renovation in Las Vegas.',
    type: 'article',
    images: [heroImage.src],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'The five details that quietly separate a luxury remodel from a builder-grade one',
  description:
    'Five architectural details that separate a true luxury remodel from a builder-grade renovation in Las Vegas.',
  image: heroImage.src,
  author: { '@type': 'Organization', name: siteConfig.name },
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name,
    logo: { '@type': 'ImageObject', url: `${siteConfig.url}/og.jpg` },
  },
  mainEntityOfPage: url,
  datePublished: '2026-04-10',
  dateModified: '2026-05-01',
};

export default function Post() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema,
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Journal', url: `${siteConfig.url}/journal` },
            {
              name: 'Five Details That Separate a Luxury Remodel',
              url,
            },
          ]),
        ]}
      />

      <StickySectionNav
        sections={[
          { id: 'd1', label: 'Plane' },
          { id: 'd2', label: 'Millwork' },
          { id: 'd3', label: 'Lighting' },
          { id: 'd4', label: 'Stone' },
          { id: 'd5', label: 'Weight' },
        ]}
      />

      <PageHero
        eyebrow="Studio Notes · 01"
        title="Five details"
        italic="that quietly separate a luxury remodel."
        description="Walk through any high-end Las Vegas home and the difference between a builder-grade renovation and a designed one almost always comes down to roughly five things. These are them — in the order we usually find them missing."
        image={heroImage}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Journal', href: '/journal' },
          { label: 'Five Details' },
        ]}
      />

      {/* Article body */}
      <article className="bg-ink py-20 lg:py-28">
        <div className="container-luxe">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="text-lg leading-relaxed text-bone/75 md:text-xl">
                <span className="float-left mr-3 mt-1 font-display text-7xl leading-[0.85] text-gold-light md:text-8xl">
                  T
                </span>
                here is a recognizable difference between a remodel that
                photographs well and one that actually feels like architecture
                when you stand inside it. After hundreds of high-end project
                walkthroughs across the Las Vegas valley, the gap almost always
                comes down to roughly five details. Each of them is invisible
                until you notice it — and then, in a different home, you can’t
                stop noticing it.
              </p>
            </Reveal>

            {/* 01 */}
            <section id="d1" className="mt-16 border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">01</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  The plane of the wall continues into the shower.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  In a builder-grade bath, the shower lives in a box. There is a
                  curb. A separate floor tile. A different wall material. The
                  eye reads three rooms inside one bathroom and the space feels
                  smaller than the square footage.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  In a luxury bath, the floor is continuous. The walls are
                  continuous. The drain is linear and recessed into the same
                  stone the floor is made of. The frameless glass partition is
                  the only thing telling you there is a shower. The bathroom
                  reads as one calm architectural plane.
                </p>
              </Reveal>
            </section>

            {/* image break */}
            <Reveal delay={2}>
              <figure className="relative my-14 aspect-[16/10] overflow-hidden bg-ink-700">
                <Image
                  src={bathroomImages[0].src}
                  alt={bathroomImages[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover"
                />
              </figure>
            </Reveal>

            {/* 02 */}
            <section id="d2" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">02</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  The cabinetry is millwork, not a product.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  Stock cabinetry comes in factory increments. Those increments
                  almost never match the room. Fillers appear at the ends.
                  Tops are returned awkwardly to the wall. The fridge sticks
                  forward of the panels around it.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  Full-custom millwork is drawn to the inch of the room it
                  lives in. The cabinetry meets the ceiling. The refrigerator
                  panels are flush with the cabinets to either side of it. The
                  toe-kick disappears under floating lighting. Look closely at
                  any kitchen you love — it’s almost certainly bespoke.
                </p>
              </Reveal>
            </section>

            {/* pull quote */}
            <Reveal delay={2}>
              <figure className="my-14 border-y border-bone/10 py-10">
                <blockquote className="font-display text-3xl leading-tight text-bone text-balance md:text-4xl">
                  “If the cabinets meet the ceiling and the fridge sits flush
                  with its panels, you’re standing in a luxury kitchen. If they
                  don’t, you’re not.”
                </blockquote>
                <figcaption className="mt-6 text-[0.65rem] uppercase tracking-[0.28em] text-gold">
                  — From the studio
                </figcaption>
              </figure>
            </Reveal>

            {/* 03 */}
            <section id="d3" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">03</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  The lighting works in layers.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  Most homes are lit by a single overhead can field on one
                  switch. Everything in the room is either fully on or fully
                  off, at one color temperature, at one intensity.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  A luxury home has at least four lighting layers — ambient
                  ceiling, decorative pendants, task lighting at the counter
                  or vanity, and architectural cove or under-cabinet light at
                  ground level. They live on scenes. They dim warm. They
                  almost never have a switch that turns everything in the room
                  on at once. The room feels different at 7am, 7pm, and
                  midnight — and that is what people are responding to when
                  they say a space feels expensive.
                </p>
              </Reveal>
            </section>

            <Reveal delay={2}>
              <figure className="relative my-14 aspect-[16/10] overflow-hidden bg-ink-700">
                <Image
                  src={kitchenImages[3].src}
                  alt={kitchenImages[3].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover"
                />
              </figure>
            </Reveal>

            {/* 04 */}
            <section id="d4" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">04</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  The stone is book-matched and dry-laid first.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  A stone slab is a piece of geology. No two are identical, the
                  veining matters, and where the cut lands on the slab shows up
                  forever in the finished room. Most kitchens are built by
                  ordering a slab, sending the fabricator a template, and
                  hoping.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  In a luxury build, the slab is selected at the yard, the
                  fabrication is dry-laid in the shop, and the seam location,
                  vein flow, and waterfall miter are all reviewed before the
                  saw ever runs. The result is a stone surface that feels
                  inevitable rather than incidental.
                </p>
              </Reveal>
            </section>

            {/* 05 */}
            <section id="d5" className="mt-12 border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">05</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  The hardware is the right weight.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  Knobs, pulls, hinges, sconces, switch plates, faucets — the
                  things you actually touch every day. Builder-grade hardware
                  is light, hollow, and finished thinly. The difference between
                  a $40 pull and a $200 pull is something you feel before you
                  see it.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  In any luxury home, run your hand across a drawer pull or
                  shut a vanity door. The weight is the answer to whether the
                  rest of the build is real.
                </p>
              </Reveal>
            </section>

            {/* closing */}
            <Reveal delay={2}>
              <div className="my-16 border-y border-bone/10 py-12">
                <h3 className="font-display text-3xl text-bone md:text-4xl">
                  The point.
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  None of these details are about money for its own sake.
                  Each of them is a decision the architect made before the
                  project went into the field, defended through every change
                  order, and protected during the finish phase when most of
                  these things get value-engineered out.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  When a remodel feels expensive, it usually means all five of
                  these decisions were made the right way. When it doesn’t,
                  one of them — sometimes all of them — was traded away.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  Our job is to make sure none of them are.
                </p>
              </div>
            </Reveal>

            {/* Footer / nav */}
            <Reveal delay={3}>
              <div className="flex items-center justify-between border-t border-bone/10 pt-8 text-[0.65rem] uppercase tracking-[0.28em] text-bone/55">
                <Link
                  href="/journal"
                  className="flex items-center gap-3 transition-colors hover:text-gold"
                >
                  <ArrowLeft className="h-4 w-4" />
                  All Notes
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-3 text-gold transition-colors hover:text-gold-light"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      <InlineLeadStrip
        title="Want a remodel built like this?"
        italic="Start with a senior designer."
        description="The team that writes these notes is the team that will lead your project."
      />

      <CTASection
        title="Design your next chapter."
        description="A private consultation with a senior VCV Vegas designer — by appointment."
        image={customHomeImages[0]}
      />
    </>
  );
}
