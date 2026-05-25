import type { Metadata } from 'next';
import Link from 'next/link';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { kitchenImages, bathroomImages, customHomeImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Glossary · VCV Vegas',
  description:
    'A practical glossary of luxury remodeling terminology — wet rooms, book-matched stone, dry-laid fabrication, pocket glass, and the rest of the vocabulary behind a serious build.',
  alternates: { canonical: `${siteConfig.url}/glossary` },
};

type Entry = { term: string; meaning: string; link?: { label: string; href: string } };

const groups: { letter: string; entries: Entry[] }[] = [
  {
    letter: 'A',
    entries: [
      {
        term: 'Architectural Cove',
        meaning:
          'A concealed channel near the ceiling that hides an LED strip and washes the room in indirect light. The reason high-end rooms read warm at night without visible fixtures.',
      },
      {
        term: 'Architectural Review',
        meaning:
          'The submission and approval process required by HOAs in master-planned communities (Summerlin, The Ridges, MacDonald Highlands) before exterior work can begin.',
      },
    ],
  },
  {
    letter: 'B',
    entries: [
      {
        term: 'Book-Matched Stone',
        meaning:
          'Two adjacent stone slabs cut from the same block and mirrored so their veining flows symmetrically across the seam. Used on islands, fireplaces, and feature walls.',
      },
      {
        term: 'Build Calendar',
        meaning:
          'The document published at the end of pre-construction listing every trade, milestone, inspection, and delivery from demolition day to final walkthrough.',
        link: { label: 'See the studio process', href: '/process' },
      },
    ],
  },
  {
    letter: 'C',
    entries: [
      {
        term: 'Curbless Walk-In',
        meaning:
          'A shower with no transition lip at the entry — the bathroom floor runs continuously into the shower, with a linear drain handling water management.',
      },
      {
        term: 'Cove Lighting',
        meaning:
          'See Architectural Cove. The detail no one asks for and almost every client loves once they have it.',
      },
    ],
  },
  {
    letter: 'D',
    entries: [
      {
        term: 'Design-Build',
        meaning:
          'An engagement model in which a single studio handles both the design and the construction. Eliminates handoffs between designer and contractor.',
        link: { label: 'See engagement tiers', href: '/engagement' },
      },
      {
        term: 'Dry-Lay',
        meaning:
          'The practice of laying out fabricated stone in the shop before installation so the seam locations, vein flow, and waterfall miters can be reviewed and approved before final cut.',
      },
    ],
  },
  {
    letter: 'F',
    entries: [
      {
        term: 'Finish Schedule',
        meaning:
          'The bound document captured during pre-construction listing every specified material, supplier, lead time, and substitution policy. The field is held to it.',
      },
      {
        term: 'Floating Vanity',
        meaning:
          'A wall-hung bathroom vanity with no legs touching the floor — visually lighter, technically harder to engineer, and almost always paired with under-cabinet wash lighting.',
      },
      {
        term: 'Frameless Glass',
        meaning:
          'A shower enclosure or partition made of tempered glass with no metal frame around the edges. Site-measured, dry-fit, and installed with concealed structural hardware.',
      },
    ],
  },
  {
    letter: 'H',
    entries: [
      {
        term: 'Honed Finish',
        meaning:
          'A matte stone finish — smooth to the touch but not reflective. Standard on luxury bathrooms because honed stone reads as architecture; polished reads as decoration.',
      },
    ],
  },
  {
    letter: 'I',
    entries: [
      {
        term: 'Integrated Appliances',
        meaning:
          'Refrigerators, dishwashers, and refrigerator drawers faced with matching cabinetry panels so they disappear into the millwork. The defining move in a luxury kitchen.',
      },
    ],
  },
  {
    letter: 'L',
    entries: [
      {
        term: 'Linear Drain',
        meaning:
          'A long, narrow shower drain that runs along the wall or threshold instead of in the center of the floor. Enables single-slope curbless showers.',
      },
      {
        term: 'Long-Lead Items',
        meaning:
          'Specifications with delivery windows long enough that they must be ordered during pre-construction — typically custom cabinetry (12 weeks), stone slabs (4–8), appliances (6–14), architectural glass (6), decorative lighting (4–10).',
        link: { label: 'Read the pre-construction note', href: '/journal/what-pre-construction-actually-looks-like' },
      },
    ],
  },
  {
    letter: 'M',
    entries: [
      {
        term: 'Multi-Panel Pocket Glass',
        meaning:
          'A wall of sliding glass panels that disappear fully into a wall pocket when opened. The architectural move that makes indoor-outdoor living possible.',
      },
    ],
  },
  {
    letter: 'P',
    entries: [
      {
        term: 'Pre-Construction',
        meaning:
          'The 6–10 week phase between contract signing and demolition during which drawings, engineering, permits, and long-lead orders are completed. The most consequential phase of a luxury build.',
        link: { label: 'Read the pre-construction note', href: '/journal/what-pre-construction-actually-looks-like' },
      },
    ],
  },
  {
    letter: 'S',
    entries: [
      {
        term: 'Scene Control',
        meaning:
          'A lighting system (Lutron Caséta, RA3, or equivalent) that lets the room recall preset combinations of dimmer levels across multiple layers — Morning, Evening, Late.',
      },
      {
        term: 'Slab Selection',
        meaning:
          'The practice of walking the stone yard with your senior designer to choose the specific physical slab that will be fabricated into your countertop or feature wall.',
      },
    ],
  },
  {
    letter: 'T',
    entries: [
      {
        term: 'Trade-Only Materials',
        meaning:
          'Stone yards, fabricators, millwork shops, and hardware lines reserved for design-build studios — not available to the general public. The quiet half of luxury specification.',
        link: { label: 'See the finish library', href: '/materials' },
      },
    ],
  },
  {
    letter: 'W',
    entries: [
      {
        term: 'Waterfall Edge',
        meaning:
          'A stone countertop whose vertical end falls to the floor in continuous stone — the slab is mitered at 45 degrees so the vein flows around the corner.',
      },
      {
        term: 'Wet Room',
        meaning:
          'A bathroom design in which the tub and walk-in shower share a single waterproof envelope behind one glass partition — the most quietly sophisticated move in modern bath design.',
        link: { label: 'Read the spa-bath note', href: '/journal/designing-spa-bathroom-desert' },
      },
      {
        term: 'White-Glove Build',
        meaning:
          'A site discipline defined by dust containment, floor protection, daily cleanup, branded crews, weekly client briefings, and a published build calendar. The minimum at the luxury level; the exception almost everywhere else.',
      },
    ],
  },
];

export default function GlossaryPage() {
  // Build DefinedTerm JSON-LD for SEO
  const definedTerms = groups.flatMap((g) =>
    g.entries.map((e) => ({
      '@type': 'DefinedTerm',
      name: e.term,
      description: e.meaning,
    })),
  );

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Glossary', url: `${siteConfig.url}/glossary` },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'DefinedTermSet',
            name: 'VCV Vegas Luxury Remodeling Glossary',
            description:
              'A practical glossary of terminology used in luxury residential remodeling.',
            hasDefinedTerm: definedTerms,
          },
        ]}
      />

      <CinematicHero
        eyebrow="Studio Glossary"
        title="The vocabulary"
        italic="of a serious build."
        description="The terms that come up in design and construction conversations at the luxury level — defined directly, with cross-links into the studio's working pages."
        images={[kitchenImages[1], bathroomImages[0], customHomeImages[0]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Glossary' }]}
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="A — Z"
            title="Twenty-five terms,"
            description="The vocabulary every client picks up by the end of a luxury remodel. We define them up-front, in writing, so the early conversations land deeper."
          />

          <div className="mt-16 space-y-16">
            {groups.map((group) => (
              <Reveal key={group.letter}>
                <div className="grid gap-8 border-t border-bone/10 pt-10 lg:grid-cols-[auto_1fr] lg:gap-16">
                  <p className="font-display text-7xl text-bone lg:text-8xl">
                    {group.letter}
                  </p>
                  <dl className="space-y-8">
                    {group.entries.map((entry) => (
                      <div key={entry.term}>
                        <dt className="font-display text-2xl text-bone md:text-3xl">
                          {entry.term}
                        </dt>
                        <dd className="mt-3 text-base leading-relaxed text-bone/70 md:text-lg">
                          {entry.meaning}
                        </dd>
                        {entry.link && (
                          <Link
                            href={entry.link.href}
                            className="mt-4 inline-flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.28em] text-bone transition-colors hover:text-bone"
                          >
                            {entry.link.label}
                            <span aria-hidden>→</span>
                          </Link>
                        )}
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Use any of these words with confidence."
        description="A senior designer reads every inquiry. The first conversation lands deeper when the vocabulary is shared."
        image={customHomeImages[1]}
      />
    </>
  );
}
