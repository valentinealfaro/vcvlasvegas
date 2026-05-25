import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { InlineLeadStrip } from '@/components/InlineLeadStrip';
import { StickySectionNav } from '@/components/StickySectionNav';
import { ReadNext } from '@/components/ReadNext';
import { JournalSubscribe } from '@/components/JournalSubscribe';
import { RelatedServices } from '@/components/RelatedServices';
import { kitchenImages, remodelImages, customHomeImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

const url = `${siteConfig.url}/journal/opening-up-vegas-floor-plan`;
const heroImage = remodelImages[0];

export const metadata: Metadata = {
  title: 'Opening Up a Typical Vegas Floor Plan · Journal',
  description:
    'How VCV Vegas re-engineers a closed-plan Las Vegas floor plan into a single open great room — without losing the architecture.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Opening up a typical Vegas floor plan',
    description:
      'How VCV Vegas re-engineers a closed-plan Las Vegas home into one open great room.',
    type: 'article',
    images: [heroImage.src],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Opening up a typical Vegas floor plan',
  description:
    'How VCV Vegas re-engineers a closed-plan Las Vegas home into one open great room — without losing the architecture.',
  image: heroImage.src,
  author: { '@type': 'Organization', name: siteConfig.name },
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name,
    logo: { '@type': 'ImageObject', url: `${siteConfig.url}/og.jpg` },
  },
  mainEntityOfPage: url,
  datePublished: '2026-05-08',
  dateModified: '2026-05-15',
};

const sections = [
  { id: 'plan', label: 'The Plan' },
  { id: 'wall', label: 'The Wall' },
  { id: 'kitchen', label: 'The Kitchen' },
  { id: 'sightline', label: 'Sightline' },
  { id: 'patio', label: 'Patio' },
];

export default function Post() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema,
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Journal', url: `${siteConfig.url}/journal` },
            { name: 'Opening Up a Vegas Floor Plan', url },
          ]),
        ]}
      />

      <StickySectionNav sections={sections} />

      <PageHero
        eyebrow="Studio Notes · 03"
        title="Opening up"
        italic="a typical Vegas floor plan."
        description="Almost every home in the valley was built on a closed-plan layout that no longer reads. Here is how we re-engineer the great room without losing the architecture."
        image={heroImage}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Journal', href: '/journal' },
          { label: 'Vegas Floor Plan' },
        ]}
      />

      <article className="bg-ink py-20 lg:py-28">
        <div className="container-luxe">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="text-lg leading-relaxed text-bone/75 md:text-xl">
                <span className="float-left mr-3 mt-1 font-display text-7xl leading-[0.85] text-gold-light md:text-8xl">
                  A
                </span>
                bout eighty percent of the high-end remodel work we do across
                Summerlin, Henderson, and the rest of the valley starts at
                the same wall. It is the wall between the kitchen and the
                great room. When the home was built, that wall made sense —
                kitchens were working rooms and not for company. Twenty years
                later, the wall is the single thing keeping the home from
                feeling like a home today.
              </p>
            </Reveal>

            {/* 01 */}
            <section id="plan" className="mt-16 border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">01</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  Read the plan before you redraw it.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  Before we propose changes, we spend an evening with the
                  floor plan as it is — where the light lands at sunrise and
                  sunset, where people gather, which rooms get used and which
                  do not. Almost every Vegas home has at least one room that
                  the family never sets foot in. That room is usually where
                  the new great room wants to live.
                </p>
              </Reveal>
            </section>

            <Reveal delay={2}>
              <figure className="relative my-14 aspect-[16/10] overflow-hidden bg-ink-700">
                <Image
                  src={remodelImages[0].src}
                  alt={remodelImages[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover"
                />
              </figure>
            </Reveal>

            {/* 02 */}
            <section id="wall" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">02</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  The wall is almost always load-bearing.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  The wall you want to remove is the wall that is holding the
                  roof up. That is fine — it is solvable. We bring in a
                  structural engineer, design a flush LVL or steel beam to
                  carry the load, and detail the ceiling so the beam reads as
                  intentional architecture rather than a remodel patch.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  When the beam is flush, the ceiling plane is continuous,
                  and almost no one realizes a wall used to be there. That
                  is the move you are paying for.
                </p>
              </Reveal>
            </section>

            <Reveal delay={2}>
              <figure className="my-14 border-y border-bone/10 py-10">
                <blockquote className="font-display text-3xl leading-tight text-bone text-balance md:text-4xl">
                  “The best remodels look like nothing changed and like
                  everything changed at the same time.”
                </blockquote>
                <figcaption className="mt-6 text-[0.65rem] uppercase tracking-[0.28em] text-gold">
                  — From the studio
                </figcaption>
              </figure>
            </Reveal>

            {/* 03 */}
            <section id="kitchen" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">03</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  Design the kitchen as part of the room.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  Once the wall is gone, the kitchen is no longer a separate
                  room. It is one end of the great room. That changes
                  everything — the cabinetry has to read as architecture, not
                  appliances; the range hood becomes a sculptural object;
                  the island is the social center of the home.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  We typically run cabinetry to the ceiling, integrate the
                  refrigeration behind cabinet panels, and treat the back
                  cooking wall as a single architectural plane. The
                  appliances disappear. The room reads as one thing.
                </p>
              </Reveal>
            </section>

            <Reveal delay={2}>
              <figure className="relative my-14 aspect-[16/10] overflow-hidden bg-ink-700">
                <Image
                  src={kitchenImages[0].src}
                  alt={kitchenImages[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover"
                />
              </figure>
            </Reveal>

            {/* 04 */}
            <section id="sightline" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">04</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  Protect the long sightline.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  The single best move in any opened-up Vegas remodel is the
                  long sightline — the unbroken view from the front door,
                  across the great room, through the kitchen, and out the
                  back glass to the patio and the view beyond. Once it
                  exists, every other decision in the room is in service of
                  it.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  We hold that line ruthlessly. Cabinetry stops short of it.
                  Lighting steps around it. The hood doesn’t interrupt it.
                  Everything in the room defers to the one architectural
                  move that makes the home feel new.
                </p>
              </Reveal>
            </section>

            {/* 05 */}
            <section id="patio" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">05</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  Finish at the patio, not the back wall.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  In Las Vegas the room shouldn’t end at the back glass — it
                  should end at the far edge of the patio. That means
                  matching the interior floor finish into the exterior where
                  possible, replacing standard sliders with multi-panel
                  glass that pockets fully, and engineering the patio
                  structure so the indoor-outdoor relationship reads as one
                  architectural moment.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  This is what people are responding to when they say a
                  remodeled Vegas home “finally feels like a Vegas home.”
                  The architecture, at last, knows where it is.
                </p>
              </Reveal>
            </section>

            <Reveal delay={2}>
              <div className="my-16 border-y border-bone/10 py-12">
                <h3 className="font-display text-3xl text-bone md:text-4xl">
                  The point.
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  Opening up a typical Vegas floor plan is a structural
                  exercise more than a finish one. Get the beam, the
                  cabinetry, the sightline, and the patio right and the
                  house feels like a new architecture; get them slightly
                  off and it feels like a renovation. The difference is
                  almost entirely in the discipline of the planning phase.
                </p>
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="flex items-center justify-between border-t border-bone/10 pt-8 text-[0.65rem] uppercase tracking-[0.28em] text-bone/55">
                <Link href="/journal" className="flex items-center gap-3 transition-colors hover:text-gold">
                  <ArrowLeft className="h-4 w-4" />
                  All Notes
                </Link>
                <Link href="/home-remodeling-las-vegas" className="flex items-center gap-3 text-gold transition-colors hover:text-gold-light">
                  Explore whole-home remodeling
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      <InlineLeadStrip
        title="Want to open up your home?"
        italic="Start with a walkthrough."
        description="A senior designer will walk your floor plan and respond with scope direction within one business day."
      />

      <RelatedServices
        slugs={['home-remodeling-las-vegas', 'general-contractor-las-vegas']}
        description="Opening up a floor plan is whole-home design-build work. Explore where the studio applies these moves at scale."
      />

      <JournalSubscribe />

      <ReadNext currentSlug="opening-up-vegas-floor-plan" />

      <CTASection
        title="Re-engineer your floor plan."
        description="A private consultation with a senior VCV Vegas designer."
        image={customHomeImages[1]}
      />
    </>
  );
}
