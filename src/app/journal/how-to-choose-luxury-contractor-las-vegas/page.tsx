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
import { customHomeImages, kitchenImages, bathroomImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

const url = `${siteConfig.url}/journal/how-to-choose-luxury-contractor-las-vegas`;
const heroImage = customHomeImages[0];

export const metadata: Metadata = {
  title: 'How to Choose a Luxury Contractor in Las Vegas · Journal',
  description:
    'A candid guide to evaluating high-end residential contractors in Las Vegas — what to look for, what to ignore, and the five questions that separate a serious studio from a bidding contractor.',
  alternates: { canonical: url },
  openGraph: {
    title: 'How to choose a luxury contractor in Las Vegas',
    description:
      'What to look for, what to ignore, and the five questions to ask a luxury Las Vegas contractor.',
    type: 'article',
    images: [heroImage.src],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to choose a luxury contractor in Las Vegas',
  description:
    'A studio-written guide to evaluating high-end residential contractors in the Las Vegas market.',
  image: heroImage.src,
  author: { '@type': 'Organization', name: siteConfig.name },
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name,
    logo: { '@type': 'ImageObject', url: `${siteConfig.url}/og.jpg` },
  },
  mainEntityOfPage: url,
  datePublished: '2026-05-20',
  dateModified: '2026-05-24',
};

const sections = [
  { id: 'standard', label: 'Standard' },
  { id: 'questions', label: 'Questions' },
  { id: 'red-flags', label: 'Red Flags' },
  { id: 'after', label: 'After' },
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
            { name: 'How to Choose a Luxury Contractor', url },
          ]),
        ]}
      />

      <StickySectionNav sections={sections} />

      <PageHero
        eyebrow="Studio Notes · 04"
        title="How to choose"
        italic="a luxury contractor in Las Vegas."
        description="A candid guide to evaluating high-end residential contractors in the valley — what to look for, what to ignore, and the five questions that separate a serious studio from a bidding contractor."
        image={heroImage}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Journal', href: '/journal' },
          { label: 'Choose a Luxury Contractor' },
        ]}
      />

      <article className="bg-ink py-20 lg:py-28">
        <div className="container-luxe">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="text-lg leading-relaxed text-bone/75 md:text-xl">
                <span className="float-left mr-3 mt-1 font-display text-7xl leading-[0.85] text-gold-light md:text-8xl">
                  H
                </span>
                iring a contractor for a luxury Las Vegas remodel is the
                single most consequential decision you will make on the
                project — bigger than the floor plan, the finishes, or the
                budget. Get it right and the rest of the work compounds
                quietly. Get it wrong and no architecture survives. Here is
                how to read the difference before the work starts.
              </p>
            </Reveal>

            <section id="standard" className="mt-16 border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">01</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  Read the standard, not the sales pitch.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  Every contractor talks about quality. The serious ones can
                  show it. Ask to see a recent project. Walk it in person.
                  Run your hand along the cabinetry. Look at where the
                  millwork meets the ceiling. Open a drawer. Inspect the
                  caulk line where the stone meets the wall.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  Architectural finish is invisible until you know what you
                  are looking at — and impossible to fake when you do. The
                  best contractors are happy to be inspected at close range.
                  The ones who hedge are telling you something.
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

            <section id="questions" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">02</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  Five questions to ask in the first meeting.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  After the first walkthrough — before you receive any
                  pricing — these five answers tell you almost everything
                  you need to know.
                </p>
                <ol className="mt-8 space-y-6 border-y border-bone/10 py-8">
                  {[
                    {
                      q: 'Who will run my project, daily?',
                      a: 'You want a named senior designer or project lead, not a rotating cast. Their continuity is the project.',
                    },
                    {
                      q: 'Who specifies the materials?',
                      a: 'The right answer is the same senior lead, in writing, with trade-only suppliers. The wrong answer is the supplier rep.',
                    },
                    {
                      q: 'What does long-lead ordering look like before demolition?',
                      a: 'A serious studio orders cabinetry, stone, and appliances before the wall comes down. A bidder orders as they go.',
                    },
                    {
                      q: 'What is your dust and site-protection protocol?',
                      a: 'You want HEPA, ZipWalls, floor protection, daily cleanup. You do not want a verbal answer.',
                    },
                    {
                      q: 'What does the warranty say about the things I cannot see?',
                      a: 'Workmanship for one year is standard. Manufacturer pass-through should be specified. The contractor who hesitates here is the one who will hesitate later.',
                    },
                  ].map((q, i) => (
                    <li key={i}>
                      <p className="font-display text-xl text-gold-light md:text-2xl">
                        {i + 1}. {q.q}
                      </p>
                      <p className="mt-3 text-base leading-relaxed text-bone/65">
                        {q.a}
                      </p>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </section>

            <Reveal delay={2}>
              <figure className="my-14 border-y border-bone/10 py-10">
                <blockquote className="font-display text-3xl leading-tight text-bone text-balance md:text-4xl">
                  “If they can’t name the senior designer on your project
                  in the first meeting, they aren’t one. They’re a bidder.”
                </blockquote>
                <figcaption className="mt-6 text-[0.65rem] uppercase tracking-[0.28em] text-gold">
                  — From the studio
                </figcaption>
              </figure>
            </Reveal>

            <section id="red-flags" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">03</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  Five red flags. Walk away.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <ul className="mt-8 space-y-5">
                  {[
                    'Estimates without a walkthrough. A real contractor cannot price your project from a phone call.',
                    'Pressure to sign at the first meeting. Luxury work runs on trust, not urgency.',
                    'No published build calendar. If they cannot show you a calendar, they cannot run one.',
                    'No engineer on the team. Structural work without an engineer is a lawsuit waiting to happen.',
                    'Lowest bid by a wide margin. The cheapest quote is rarely the cheapest project.',
                  ].map((r) => (
                    <li key={r} className="flex items-start gap-4 text-base text-bone/70 md:text-lg">
                      <span className="mt-2.5 h-px w-5 shrink-0 bg-gold/70" />
                      {r}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </section>

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

            <section id="after" className="border-t border-bone/10 pt-12">
              <Reveal>
                <p className="font-display text-7xl text-gold-light">04</p>
                <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                  What happens after you sign.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  A serious studio spends 4–10 weeks in pre-construction
                  before a wall is touched. Drawings are produced. Engineering
                  is coordinated. Permits are pulled. Long-lead items are
                  ordered. A calendar is published. None of this is glamorous,
                  none of it is fast — but every later week of the project
                  depends on it being done correctly.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  If a contractor wants to start construction within two
                  weeks of contract signing, they are skipping a phase.
                  That phase shows up later — usually as a change order,
                  always as cost.
                </p>
              </Reveal>
            </section>

            <Reveal delay={2}>
              <div className="my-16 border-y border-bone/10 py-12">
                <h3 className="font-display text-3xl text-bone md:text-4xl">
                  The point.
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-bone/70">
                  Choosing the right contractor for a luxury Las Vegas
                  remodel is not about finding the lowest number. It is
                  about finding the team that will protect the architecture
                  through the field — and the only way to read that is from
                  who they bring to the first walkthrough, what they ask
                  before pricing, and how they answer the five questions
                  above.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bone/70">
                  If you can read those four signals, the rest of the
                  project takes care of itself.
                </p>
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="flex items-center justify-between border-t border-bone/10 pt-8 text-[0.65rem] uppercase tracking-[0.28em] text-bone/55">
                <Link href="/journal" className="flex items-center gap-3 transition-colors hover:text-gold">
                  <ArrowLeft className="h-4 w-4" />
                  All Notes
                </Link>
                <Link href="/why-vcv-vegas" className="flex items-center gap-3 text-gold transition-colors hover:text-gold-light">
                  See our positioning
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      <InlineLeadStrip
        title="Use those questions on us."
        italic="Start with a walkthrough."
        description="A senior designer responds within one business day. Confidential."
      />

      <JournalSubscribe />

      <ReadNext currentSlug="how-to-choose-luxury-contractor-las-vegas" />

      <CTASection
        title="Begin a private conversation."
        description="A senior VCV Vegas designer reads every inquiry personally."
        image={customHomeImages[1]}
      />
    </>
  );
}
