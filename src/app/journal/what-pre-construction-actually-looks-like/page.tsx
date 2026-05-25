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
import { customHomeImages, kitchenImages, bathroomImages, flooringImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

const url = `${siteConfig.url}/journal/what-pre-construction-actually-looks-like`;
const heroImage = customHomeImages[1];

export const metadata: Metadata = {
  title: 'What Pre-Construction Actually Looks Like · Journal',
  description:
    'Pre-construction is where a luxury remodel succeeds or fails. Eight weeks of drawings, engineering, permits, and long-lead orders that decide whether the build runs on schedule.',
  alternates: { canonical: url },
  openGraph: {
    title: 'What pre-construction actually looks like',
    description:
      'Eight weeks of pre-construction that decide whether a luxury remodel runs on schedule or unravels.',
    type: 'article',
    images: [heroImage.src],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What pre-construction actually looks like',
  description:
    'How VCV Vegas runs pre-construction — the eight-week phase that decides whether a luxury Las Vegas remodel succeeds.',
  image: heroImage.src,
  author: { '@type': 'Organization', name: siteConfig.name },
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name,
    logo: { '@type': 'ImageObject', url: `${siteConfig.url}/og.jpg` },
  },
  mainEntityOfPage: url,
  datePublished: '2026-05-24',
  dateModified: '2026-05-24',
};

const sections = [
  { id: 'discovery', label: 'Discovery' },
  { id: 'drawings', label: 'Drawings' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'longlead', label: 'Long-Lead' },
  { id: 'calendar', label: 'Calendar' },
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
            { name: 'Pre-Construction', url },
          ]),
        ]}
      />

      <StickySectionNav sections={sections} />

      <PageHero
        eyebrow="Studio Notes · 05"
        title="What pre-construction"
        italic="actually looks like."
        description="Most homeowners think construction begins when the first wall comes down. It doesn't. The eight weeks before demolition are the eight weeks that decide whether the build runs on schedule — or unravels in the field."
        image={heroImage}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Journal', href: '/journal' },
          { label: 'Pre-Construction' },
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
                he most consequential phase of a luxury remodel is the one
                you cannot photograph. Pre-construction is paperwork, drawings,
                phone calls, ordering, and a lot of quiet thinking — and almost
                every later week of the project depends on it being done
                correctly. Skipped, rushed, or badly run, it shows up later as
                a change order. Run properly, the build feels almost
                effortless.
              </p>
            </Reveal>

            <section id="discovery" className="mt-16 border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">01</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  Discovery — the week the project actually starts.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  After the design is signed off, the senior designer goes
                  back to the home — alone — and re-measures every dimension
                  that matters. Wall thicknesses. Ceiling heights. Sightlines
                  from the kitchen to the back glass. The exact center of
                  the existing windows. The square corners that turn out not
                  to be square.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  The drawing set that comes after this week is the source of
                  truth for the rest of the project. Skipping it means the
                  field improvises later — and improvisation is the most
                  expensive thing that happens on a luxury build.
                </p>
              </Reveal>
            </section>

            <Reveal delay={2}>
              <figure className="relative my-14 aspect-[16/10] overflow-hidden bg-ink-700">
                <Image
                  src={kitchenImages[1].src}
                  alt={kitchenImages[1].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover"
                />
              </figure>
            </Reveal>

            <section id="drawings" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">02</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  Drawings — turning design into instructions.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  A construction drawing set for a luxury remodel is thirty
                  to sixty pages — floor plans, elevations, cabinetry
                  schedules, plumbing schedules, electrical schedules,
                  detail drawings of every joint that matters. Every
                  measurement annotated. Every finish specified.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  This is the document that lets the field execute without
                  asking. The trades read it once at intake, once at
                  installation, and rarely need to interpret. The cleaner
                  the set, the calmer the build.
                </p>
              </Reveal>
            </section>

            <Reveal delay={2}>
              <figure className="my-14 border-y border-bone/10 py-10">
                <blockquote className="font-display text-3xl leading-tight text-bone text-balance md:text-4xl">
                  “The cleaner the drawing set, the quieter the job site.
                  Every line we draw in pre-construction is a question we
                  never have to answer in the field.”
                </blockquote>
                <figcaption className="mt-6 text-[0.65rem] uppercase tracking-[0.28em] text-gold">
                  — From the studio
                </figcaption>
              </figure>
            </Reveal>

            <section id="engineering" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">03</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  Engineering — the work no one will ever see.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  Any structural work — a beam where a load-bearing wall
                  used to be, a foundation cut for a new patio door, a
                  re-engineered roof line — is designed by a Nevada-licensed
                  professional engineer before it is built. The calculations
                  are stamped. The drawings are sealed. The permit reflects
                  the engineering.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  This is the line item that does not show up on the
                  cosmetic budget — and it is the line item that decides
                  whether the roof still bears load in twenty years.
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

            <section id="longlead" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">04</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  Long-lead orders — placed before the wall comes down.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  Custom cabinetry: 12 weeks. Book-matched stone slabs: 4–8
                  weeks. Integrated appliances: 6–14 weeks. Architectural
                  glass: 6 weeks. Decorative lighting: 4–10 weeks. None of
                  these arrive faster because the project needs them faster.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  We order every long-lead item during pre-construction, on
                  a published delivery calendar tied to the build schedule.
                  When the wall comes down, everything is already moving
                  toward your house.
                </p>
              </Reveal>
            </section>

            <section id="calendar" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">05</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  The build calendar — published before the first hammer.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  Pre-construction ends with a published calendar showing
                  every trade, every milestone, every inspection, and every
                  delivery from demolition day to final walkthrough. You
                  see the calendar before construction begins. The trades
                  see it. The field lead sees it. The calendar is the
                  project.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  If your contractor cannot show you a calendar at the end
                  of pre-construction, the project has not actually entered
                  construction yet.
                </p>
              </Reveal>
            </section>

            <Reveal delay={2}>
              <div className="my-16 border-y border-bone/10 py-12">
                <h3 className="font-display text-3xl text-bone md:text-4xl">
                  The point.
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  Pre-construction is the eight weeks where the project
                  becomes a project rather than a hope. Drawings are
                  produced. Engineering is coordinated. Permits are pulled.
                  Long-lead items are ordered. A calendar is published.
                  Everything that happens afterward depends on these eight
                  weeks being run with discipline.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  We treat it as the most important phase of every
                  engagement. Most contractors don’t. That is the
                  difference you will feel on the third week of
                  construction — when the rest of the build is moving
                  smoothly because every decision was already made.
                </p>
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="flex items-center justify-between border-t border-bone/10 pt-8 text-[0.65rem] uppercase tracking-[0.28em] text-bone/55">
                <Link href="/journal" className="flex items-center gap-3 transition-colors hover:text-gold">
                  <ArrowLeft className="h-4 w-4" />
                  All Notes
                </Link>
                <Link href="/process" className="flex items-center gap-3 text-gold transition-colors hover:text-gold-light">
                  Read our full process
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      <InlineLeadStrip
        title="Want a project run this way?"
        italic="Start with a private brief."
        description="Send your project to a senior designer — we’ll respond within one business day with initial direction."
      />

      <RelatedServices
        slugs={['home-remodeling-las-vegas', 'general-contractor-las-vegas']}
        description="Pre-construction discipline is what makes a whole-home renovation succeed. Explore the studio’s two largest-scope services."
      />

      <JournalSubscribe />

      <ReadNext currentSlug="what-pre-construction-actually-looks-like" />

      <CTASection
        title="Begin with a brief, not a bid."
        description="The first conversation lands deeper when the project comes with structure."
        image={flooringImages[0]}
      />
    </>
  );
}
