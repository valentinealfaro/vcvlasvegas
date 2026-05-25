import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { Monogram } from '@/components/Monogram';
import { CTASection } from '@/components/CTASection';
import { customHomeImages, kitchenImages, bathroomImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'A Letter from the Studio · VCV Vegas',
  description:
    'A personal letter from the VCV Vegas studio principal — why we built the studio, what we believe about residential architecture in Las Vegas, and what we promise to every client.',
  alternates: { canonical: `${siteConfig.url}/letter` },
};

export default function LetterPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Letter', url: `${siteConfig.url}/letter` },
        ])}
      />

      <CinematicHero
        eyebrow="From the Studio"
        title="A letter"
        italic="from the principal."
        description="A personal note from the studio about why VCV Vegas exists, what we believe about residential architecture in this valley, and what we promise to every client who chooses us."
        images={[customHomeImages[1], bathroomImages[0], kitchenImages[0]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Letter' }]}
      />

      <article className="bg-ink py-20 lg:py-28">
        <div className="container-luxe">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/45">
                Dear reader,
              </p>
            </Reveal>

            <Reveal delay={1}>
              <p className="mt-8 text-lg leading-relaxed text-bone/80 md:text-xl">
                <span className="float-left mr-3 mt-1 font-display text-7xl leading-[0.85] text-bone md:text-8xl">
                  L
                </span>
                as Vegas has been waiting for a different kind of remodeling
                studio. The valley is full of contractors — many of them
                capable, most of them honest, almost all of them missing one
                thing. Architecture. Not the kind on paper. The kind a finished
                home actually feels like when you stand inside it.
              </p>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-6 text-lg leading-relaxed text-bone/75 md:text-xl">
                That is why we built VCV Vegas. To run the kind of design-build
                studio that the best Los Angeles, Scottsdale, and Miami firms
                have made standard for decades — and bring that standard, intact,
                to the valley where most of us also live, raise our children, and
                spend the quiet hours of our weekends.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <p className="mt-6 text-lg leading-relaxed text-bone/75 md:text-xl">
                We believe in restraint. We believe in materials that age
                beautifully — honed stone, warm wood, brushed brass, frameless
                glass. We believe a kitchen island is the heart of a home,
                a primary bathroom is its quietest room, and a great room is
                the architecture that holds the rest of the day together.
              </p>
            </Reveal>

            <Reveal delay={4}>
              <p className="mt-6 text-lg leading-relaxed text-bone/75 md:text-xl">
                We believe pre-construction matters more than construction. We
                believe a site that runs quietly is a site that finishes well.
                We believe the senior designer who walks your home at the first
                consultation should be the same person who walks the final
                punch list with you. We believe one studio is worth more than
                six subcontractors managed in parallel.
              </p>
            </Reveal>

            <Reveal delay={5}>
              <p className="mt-6 text-lg leading-relaxed text-bone/75 md:text-xl">
                And we believe — quietly, but firmly — that the right way to
                build a luxury home is the slow way. The phase-by-phase way.
                The drawing-by-drawing way. The dry-laid stone, the
                full-custom millwork, the lighting scenes set before the
                ceilings close up.
              </p>
            </Reveal>

            <Reveal delay={6}>
              <p className="mt-10 font-display text-2xl leading-snug text-bone text-balance md:text-3xl">
                If that is the kind of project you are imagining,
                <span className="italic text-bone"> we should talk.</span>
              </p>
            </Reveal>

            <Reveal delay={7}>
              <p className="mt-10 text-lg leading-relaxed text-bone/75 md:text-xl">
                What we promise — to every client, every project, every time —
                is that the studio you hire on day one is the studio you keep
                through final walkthrough. No bait-and-switch. No staffing
                surprises. No design intent quietly value-engineered out of
                the build. The work is the work, the team is the team, and
                the standard is the standard.
              </p>
            </Reveal>

            <Reveal delay={8}>
              <div className="mt-16 border-t border-bone/10 pt-12">
                <p className="text-lg italic text-bone/85 md:text-xl">
                  With architectural restraint,
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <Monogram size={56} className="text-bone" />
                  <div>
                    <p className="font-display text-2xl text-bone">
                      The VCV Vegas Studio
                    </p>
                    <p className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/45">
                      Las Vegas Metro · {new Date().getFullYear()}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={9}>
              <div className="mt-16 border-t border-bone/10 pt-12">
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/45">
                  Post-script
                </p>
                <p className="mt-4 text-base leading-relaxed text-bone/65 md:text-lg">
                  If the letter resonates, two next steps. The shorter:{' '}
                  <Link
                    href="/contact"
                    className="text-bone underline-offset-4 hover:underline"
                  >
                    schedule a consultation
                  </Link>
                  . The deeper:{' '}
                  <Link
                    href="/intake"
                    className="text-bone underline-offset-4 hover:underline"
                  >
                    send a project brief
                  </Link>
                  . Both reach a senior designer personally, within one business
                  day. Confidential.
                </p>
              </div>
            </Reveal>

            <Reveal delay={10}>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-bone transition-colors hover:text-bone"
                >
                  Begin a conversation
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      <CTASection
        title="Reply to the letter."
        description="A senior designer reads every inquiry personally."
        image={kitchenImages[1]}
      />
    </>
  );
}
