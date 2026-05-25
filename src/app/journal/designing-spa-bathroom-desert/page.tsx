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
import { bathroomImages, kitchenImages, customHomeImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

const url = `${siteConfig.url}/journal/designing-spa-bathroom-desert`;
const heroImage = bathroomImages[0];

export const metadata: Metadata = {
  title: 'Designing a Spa Bathroom for Desert Living · Journal',
  description:
    'Why the best Las Vegas primary baths are built around restraint, not maximalism — and how we engineer wet rooms that read like architecture.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Designing a spa bathroom for desert living',
    description:
      'Why the best Las Vegas primary baths are built around restraint — not maximalism — and how we engineer wet rooms that read like architecture.',
    type: 'article',
    images: [heroImage.src],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Designing a spa bathroom for desert living',
  description:
    'How VCV Vegas designs spa-grade primary bathrooms tuned for the climate, light, and lifestyle of the Las Vegas valley.',
  image: heroImage.src,
  author: { '@type': 'Organization', name: siteConfig.name },
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name,
    logo: { '@type': 'ImageObject', url: `${siteConfig.url}/og.jpg` },
  },
  mainEntityOfPage: url,
  datePublished: '2026-04-22',
  dateModified: '2026-05-04',
};

const sections = [
  { id: 'climate', label: 'Climate' },
  { id: 'restraint', label: 'Restraint' },
  { id: 'wetroom', label: 'Wet Room' },
  { id: 'light', label: 'Light' },
  { id: 'touch', label: 'Touch' },
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
            { name: 'Spa Bathroom Desert', url },
          ]),
        ]}
      />

      <StickySectionNav sections={sections} />

      <PageHero
        eyebrow="Studio Notes · 02"
        title="A spa bathroom"
        italic="for desert living."
        description="Why the best Las Vegas primary baths are built around restraint, not maximalism — and how we engineer wet rooms that read like architecture."
        image={heroImage}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Journal', href: '/journal' },
          { label: 'Spa Bathroom Desert' },
        ]}
      />

      <article className="bg-ink py-20 lg:py-28">
        <div className="container-luxe">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="text-lg leading-relaxed text-bone/75 md:text-xl">
                <span className="float-left mr-3 mt-1 font-display text-7xl leading-[0.85] text-bone md:text-8xl">
                  T
                </span>
                here is a particular kind of bathroom that Las Vegas homes want
                and almost never have. It is not the one with the eight
                shower-heads, the colored LEDs, or the chandelier above the
                tub. It is the one that feels quiet in the morning, warm at
                night, and large in any season. The thing that gets it there
                is not the budget — it is the discipline behind the
                specification.
              </p>
            </Reveal>

            {/* 01 */}
            <section id="climate" className="mt-16 border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-bone">01</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  Start from the climate, not the catalog.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  In Las Vegas the bathroom is a microclimate inside another
                  microclimate. The room is cooler than the outdoor temperature
                  by 20–40 degrees for most of the year, the humidity swings
                  from desert-dry to monsoon, and morning sun coming through
                  the east window can read warm or harsh depending on the
                  glass. The first decisions in any spa bath — floor heat,
                  ventilation, glass, and window orientation — are climate
                  decisions, not aesthetic ones.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  Get those four right and almost every later choice becomes
                  obvious. Get them wrong and no amount of stone hides it.
                </p>
              </Reveal>
            </section>

            <Reveal delay={2}>
              <figure className="relative my-14 aspect-[16/10] overflow-hidden bg-ink-700">
                <Image
                  src={bathroomImages[2].src}
                  alt={bathroomImages[2].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover"
                />
              </figure>
            </Reveal>

            {/* 02 */}
            <section id="restraint" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-bone">02</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  Restraint is the look. Maximalism is the trap.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  The clearest signal of an over-designed bathroom is too many
                  ideas in one room. A dramatic accent wall. A statement
                  mirror. A bold floor tile. A patterned shower wall. Three
                  metals in the hardware. Each thing is fine; together they
                  are noise.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  Every VCV Vegas bath starts with a five-material short list
                  — typically a stone, a millwork wood, a metal finish, a
                  paint or plaster, and a glass. Those five carry the whole
                  room. Everything in the room is one of those five materials
                  or a quiet variation of it. The result feels considered
                  rather than decorated.
                </p>
              </Reveal>
            </section>

            <Reveal delay={2}>
              <figure className="my-14 border-y border-bone/10 py-10">
                <blockquote className="font-display text-3xl leading-tight text-bone text-balance md:text-4xl">
                  “A spa bathroom is what happens when nothing in the room is
                  trying to get your attention.”
                </blockquote>
                <figcaption className="mt-6 text-[0.65rem] uppercase tracking-[0.28em] text-bone">
                  — From the studio
                </figcaption>
              </figure>
            </Reveal>

            {/* 03 */}
            <section id="wetroom" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-bone">03</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  Engineer the wet room as a single envelope.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  The single most quietly luxurious move in modern Vegas bath
                  design is the wet room — a tub placed inside the shower
                  envelope, separated from the rest of the bathroom by one
                  glass partition. The floor reads as one plane. The wall
                  finish does not change at the shower line. The light is
                  uninterrupted from vanity to tub.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  Engineering a wet room is harder than building a separate
                  shower and tub. You waterproof the entire envelope.
                  You manage slope to a linear drain. You vent the room as a
                  single zone. The architectural reward is enormous — and it
                  is one of the rooms our clients consistently say they spend
                  the most time in.
                </p>
              </Reveal>
            </section>

            <Reveal delay={2}>
              <figure className="relative my-14 aspect-[16/10] overflow-hidden bg-ink-700">
                <Image
                  src={bathroomImages[3].src}
                  alt={bathroomImages[3].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover"
                />
              </figure>
            </Reveal>

            {/* 04 */}
            <section id="light" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-bone">04</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  Layer the light. Hide the sources.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  A great bathroom has four lighting layers and almost no
                  visible fixtures. Ambient ceiling on a dimmer for cleaning.
                  Decorative pendants flanking the mirror for the way the
                  face reads in low light. Vanity task lighting integrated
                  into the millwork. And — most importantly — architectural
                  cove lighting at the toe-kick that washes the floor warm
                  through the night.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  The toe-kick light is the detail no one asks for and
                  everyone loves. It eliminates the night-light. It makes the
                  floor feel weightless. And it gives the room a third mode —
                  not on, not off — that turns out to be how it is used most
                  of the time.
                </p>
              </Reveal>
            </section>

            {/* 05 */}
            <section id="touch" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-bone">05</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  Specify what the body actually touches.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  In a primary bath there are six things the body touches
                  every day — the floor, the shower handle, the towel rail,
                  the vanity drawer, the faucet, and the tub edge. Spend
                  carefully on those six and the room will feel expensive
                  forever, regardless of what else changes.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  Honed stone underfoot. A thermostatic shower valve. A solid
                  brass towel bar. Push-latch drawers with full-extension
                  hardware. A weighted faucet. A tub edge wide enough to set
                  a glass on. These are the details people are responding to
                  when they say a bathroom feels like a hotel.
                </p>
              </Reveal>
            </section>

            <Reveal delay={2}>
              <div className="my-16 border-y border-bone/10 py-12">
                <h3 className="font-display text-3xl text-bone md:text-4xl">
                  The point.
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  A spa bathroom is the result of about forty quiet decisions
                  that almost no one will notice individually and everyone
                  will notice collectively. Get them right and the room runs
                  cool in July, warm in January, and quiet at 6am — which is
                  what people mean when they say they want a spa bath in the
                  first place.
                </p>
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="flex items-center justify-between border-t border-bone/10 pt-8 text-[0.65rem] uppercase tracking-[0.28em] text-bone/55">
                <Link href="/journal" className="flex items-center gap-3 transition-colors hover:text-bone">
                  <ArrowLeft className="h-4 w-4" />
                  All Notes
                </Link>
                <Link href="/bathroom-remodeling-las-vegas" className="flex items-center gap-3 text-bone transition-colors hover:text-bone">
                  Explore bathroom remodeling
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      <InlineLeadStrip
        title="Want a bathroom built like this?"
        italic="Start with a senior designer."
        description="A private design consultation in your home — by appointment, within one business day."
      />

      <RelatedServices
        slugs={['bathroom-remodeling-las-vegas', 'modern-bathroom-design-las-vegas']}
        description="The principles in this note apply across two services — explore where they live in the studio's work."
      />

      <JournalSubscribe />

      <ReadNext currentSlug="designing-spa-bathroom-desert" />

      <CTASection
        title="Begin your spa suite."
        description="A private consultation with a senior VCV Vegas designer."
        image={customHomeImages[1]}
      />
    </>
  );
}
