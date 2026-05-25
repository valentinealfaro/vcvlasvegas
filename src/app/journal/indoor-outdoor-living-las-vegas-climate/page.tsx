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
import { customHomeImages, kitchenImages, bathroomImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

const url = `${siteConfig.url}/journal/indoor-outdoor-living-las-vegas-climate`;
const heroImage = customHomeImages[3];

export const metadata: Metadata = {
  title: 'Indoor-Outdoor Living in a Las Vegas Climate · Journal',
  description:
    'A patio in Las Vegas works for ten months a year — if it is engineered correctly. Six principles for indoor-outdoor architecture that reads as architecture, not as a backyard.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Indoor-outdoor living in a Las Vegas climate',
    description:
      'Six principles for designing a Vegas patio that actually gets used.',
    type: 'article',
    images: [heroImage.src],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Indoor-outdoor living in a Las Vegas climate',
  description:
    'Six architectural principles for designing an outdoor room engineered for the Las Vegas climate.',
  image: heroImage.src,
  author: { '@type': 'Organization', name: siteConfig.name },
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name,
    logo: { '@type': 'ImageObject', url: `${siteConfig.url}/og.jpg` },
  },
  mainEntityOfPage: url,
  datePublished: '2026-05-25',
  dateModified: '2026-05-25',
};

const sections = [
  { id: 'threshold', label: 'Threshold' },
  { id: 'shade', label: 'Shade' },
  { id: 'air', label: 'Air' },
  { id: 'floor', label: 'Floor' },
  { id: 'light', label: 'Light' },
  { id: 'kitchen', label: 'Kitchen' },
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
            { name: 'Indoor-Outdoor Living', url },
          ]),
        ]}
      />

      <StickySectionNav sections={sections} />

      <PageHero
        eyebrow="Studio Notes · 06"
        title="Indoor-outdoor living"
        italic="in a Las Vegas climate."
        description="A patio in Las Vegas works for ten months a year — if it is engineered correctly. Six principles for designing an outdoor room that reads as architecture, not as a backyard."
        image={heroImage}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Journal', href: '/journal' },
          { label: 'Indoor-Outdoor Living' },
        ]}
      />

      <article className="bg-ink py-20 lg:py-28">
        <div className="container-luxe">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="text-lg leading-relaxed text-bone/75 md:text-xl">
                <span className="float-left mr-3 mt-1 font-display text-7xl leading-[0.85] text-gold-light md:text-8xl">
                  T
                </span>
                he single strongest move in modern Vegas residential architecture
                is the threshold between inside and outside. Done right, it
                doubles your living square footage from May through October and
                gives the home its single most photographable moment. Done
                wrong, it’s a slab behind a sliding door that nobody uses. Six
                decisions separate one from the other.
              </p>
            </Reveal>

            <section id="threshold" className="mt-16 border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">01</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  The threshold has to disappear.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  Two glass panels on a track are not indoor-outdoor living.
                  They are doors. A real indoor-outdoor reveal uses multi-panel
                  pocket glass that disappears into the wall, a continuous
                  floor plane that runs from inside to outside without a step,
                  and a ceiling that reads as one architectural surface across
                  the boundary.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  When the threshold disappears, the room expands. When it
                  doesn’t, you have two rooms separated by glass.
                </p>
              </Reveal>
            </section>

            <Reveal delay={2}>
              <figure className="relative my-14 aspect-[16/10] overflow-hidden bg-ink-700">
                <Image
                  src={customHomeImages[3].src}
                  alt={customHomeImages[3].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover"
                />
              </figure>
            </Reveal>

            <section id="shade" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">02</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  Shade is the floor plan.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  In a Vegas summer, an unshaded patio is unusable from late
                  morning to early evening. A shaded patio is comfortable in
                  the same window. The architecture of the patio cover —
                  cantilevered, integrated into the roof line, or a free-
                  standing pergola with engineered shade — decides whether
                  the room exists or not for half the year.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  We treat the shade structure as floor-plan geometry, not as
                  an add-on. It has the same drawing-and-engineering rigor as
                  the interior walls.
                </p>
              </Reveal>
            </section>

            <Reveal delay={2}>
              <figure className="my-14 border-y border-bone/10 py-10">
                <blockquote className="font-display text-3xl leading-tight text-bone text-balance md:text-4xl">
                  “A patio in Las Vegas isn’t designed by the landscape
                  architect. It’s designed by the architect — and the most
                  important line is the shade line.”
                </blockquote>
                <figcaption className="mt-6 text-[0.65rem] uppercase tracking-[0.28em] text-gold">
                  — From the studio
                </figcaption>
              </figure>
            </Reveal>

            <section id="air" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">03</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  Engineer the air movement.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  Two large overhead fans, a misting system tucked into the
                  rafters, and a couple of standing infrared heaters for the
                  cold January evenings. None of these are visible. All of
                  them are engineered in during pre-construction and wired
                  into the same scene controller as the indoor lighting.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  The patio is comfortable at 102°F and at 47°F. That is the
                  ten-month-a-year window.
                </p>
              </Reveal>
            </section>

            <section id="floor" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">04</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  Match the floor across the threshold.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  Where possible, the interior floor finish continues onto the
                  patio. Honed-finish large-format porcelain, exterior-rated,
                  is our most-specified solution — it matches an interior
                  porcelain or stone visually and survives the Vegas sun.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  When the floor continues, the eye reads one room. When the
                  floor changes at the threshold, it reads two.
                </p>
              </Reveal>
            </section>

            <Reveal delay={2}>
              <figure className="relative my-14 aspect-[16/10] overflow-hidden bg-ink-700">
                <Image
                  src={kitchenImages[2].src}
                  alt={kitchenImages[2].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover"
                />
              </figure>
            </Reveal>

            <section id="light" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">05</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  Light the outdoor room like an indoor one.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  Architectural cove lighting integrated into the patio
                  cover. Decorative pendants over the outdoor dining table.
                  Discrete path lighting at floor level. Scene control on the
                  same system as the kitchen. Layers, just as inside.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  The outdoor room should be more inviting at 9pm than at 9am.
                  That is what the lighting is for.
                </p>
              </Reveal>
            </section>

            <section id="kitchen" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">06</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  Build the outdoor kitchen, even if you’re unsure.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  Almost every client who hesitates on the outdoor kitchen
                  uses it more than the indoor one for six months of the
                  year. Sealed stone, ventilated stainless appliance bays,
                  a small fridge, an integrated sink. Designed once,
                  engineered for the climate, and built into the patio
                  architecture.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  We treat it as part of the architecture, not as an
                  accessory.
                </p>
              </Reveal>
            </section>

            <Reveal delay={2}>
              <div className="my-16 border-y border-bone/10 py-12">
                <h3 className="font-display text-3xl text-bone md:text-4xl">
                  The point.
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  Indoor-outdoor living in Las Vegas is not a decorating
                  exercise. It is an architectural one — and almost every
                  decision happens during pre-construction, before the
                  decorative finishes show up. Get those six right and the
                  patio is the room your family will live in for two-thirds
                  of the year. Get them wrong and it remains a backyard.
                </p>
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="flex items-center justify-between border-t border-bone/10 pt-8 text-[0.65rem] uppercase tracking-[0.28em] text-bone/55">
                <Link href="/journal" className="flex items-center gap-3 transition-colors hover:text-gold">
                  <ArrowLeft className="h-4 w-4" />
                  All Notes
                </Link>
                <Link href="/outdoor-living-las-vegas" className="flex items-center gap-3 text-gold transition-colors hover:text-gold-light">
                  Explore outdoor living
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      <InlineLeadStrip
        title="Want an outdoor room engineered like this?"
        italic="Start with a walk."
        description="A senior designer walks the patio with you, reads the lot orientation, and responds with scope direction within one business day."
      />

      <RelatedServices
        slugs={['outdoor-living-las-vegas', 'home-remodeling-las-vegas']}
        description="Outdoor architecture is design-build work. Explore where the studio applies the principles in this note."
      />

      <JournalSubscribe />

      <ReadNext currentSlug="indoor-outdoor-living-las-vegas-climate" />

      <CTASection
        title="Begin your outdoor architecture."
        description="A private consultation with a senior VCV Vegas designer."
        image={bathroomImages[0]}
      />
    </>
  );
}
