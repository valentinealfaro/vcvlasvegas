import type { Metadata } from 'next';
import { Check, X } from 'lucide-react';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { InlineLeadStrip } from '@/components/InlineLeadStrip';
import { customHomeImages, bathroomImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Why VCV Vegas',
  description:
    'How VCV Vegas is built — the disciplines, the partners, the standards, and who we are (and aren’t) right for. Honest positioning from the studio.',
  alternates: { canonical: `${siteConfig.url}/why-vcv-vegas` },
};

const doDo = [
  'Lead design and construction as one team',
  'Run sites cleaner than the industry standard',
  'Specify trade-only materials reserved for design-build',
  'Publish a fixed build calendar before demolition',
  'Honor designer drawings without silent substitution',
  'Photograph and document every completed project',
];

const dont = [
  'Compete on lowest bid — that is not our model',
  'Cosmetic flips with paint-and-counter scope',
  'Production-rate or volume-builder work',
  'Properties under our six-figure scope minimum',
  'Projects where design intent will be value-engineered out',
  'Out-of-state work or off-radius properties',
];

const rightFor = [
  {
    t: 'The Owner-Designer.',
    d: 'You know what good looks like and you want a contractor who reads drawings before pricing them. We are the construction arm for your vision.',
  },
  {
    t: 'The Discerning Owner.',
    d: 'You want a single accountable team — design through keys-back — and you are willing to pay for restraint, precision, and a senior designer who stays on your project.',
  },
  {
    t: 'The Returning Owner.',
    d: 'You have remodeled before. You know the difference between an estimate and an investment. You are not surprised when the right team takes the time the work requires.',
  },
  {
    t: 'The Trade Partner.',
    d: 'You are an architect or interior designer in Las Vegas, LA, Scottsdale, or OC introducing a project. We operate around your timeline, your specs, your client.',
  },
];

const notRightFor = [
  {
    t: 'The Lowest-Bid Shopper.',
    d: 'If the deciding factor is price-per-square-foot, we are not the right team. There are excellent value-grade contractors in this market.',
  },
  {
    t: 'The Maximalist.',
    d: 'We build with restraint. If you want a room with eight competing ideas, our studio is not the right home for it.',
  },
  {
    t: 'The Rushed Build.',
    d: 'Architectural finish takes the time architectural finish takes. Projects that need to be cut from a 10-week calendar to a 4-week one are not our work.',
  },
];

export default function WhyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Why VCV Vegas', url: `${siteConfig.url}/why-vcv-vegas` },
        ])}
      />

      <CinematicHero
        eyebrow="Positioning"
        title="Who we’re"
        italic="built for."
        description="A clear read on how VCV Vegas works, what we do not do, and who we are right for. We would rather lose a project at the door than at the punch list."
        images={[customHomeImages[0], customHomeImages[1], bathroomImages[0], customHomeImages[3]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Why VCV Vegas' }]}
      />

      {/* Do / Don't band */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="What We Do · What We Don’t"
            title="An honest read on the studio."
          />
          <div className="mt-16 grid gap-px bg-bone/10 lg:grid-cols-2">
            {/* Do */}
            <Reveal>
              <div className="bg-ink p-8 lg:p-12">
                <p className="eyebrow mb-6 !text-gold">What We Do</p>
                <ul className="space-y-5">
                  {doDo.map((d) => (
                    <li key={d} className="flex items-start gap-4">
                      <span className="mt-1.5 grid h-5 w-5 shrink-0 place-items-center border border-gold/50 bg-gold/10">
                        <Check className="h-3 w-3 text-gold" />
                      </span>
                      <span className="text-base text-bone/80 md:text-lg">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            {/* Don't */}
            <Reveal delay={1}>
              <div className="bg-ink p-8 lg:p-12">
                <p className="eyebrow mb-6 !text-bone/55">What We Don’t Do</p>
                <ul className="space-y-5">
                  {dont.map((d) => (
                    <li key={d} className="flex items-start gap-4">
                      <span className="mt-1.5 grid h-5 w-5 shrink-0 place-items-center border border-bone/15">
                        <X className="h-3 w-3 text-bone/45" />
                      </span>
                      <span className="text-base text-bone/55 md:text-lg">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Right for */}
      <section className="bg-ink-800 py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="The Right Fit"
            title="Who we’re right for."
            description="If one of these reads like you, we should talk."
          />
          <div className="mt-16 grid gap-px bg-bone/10 sm:grid-cols-2">
            {rightFor.map((r, i) => (
              <Reveal key={r.t} delay={i % 2} className="bg-ink-800 p-8 lg:p-10">
                <p className="font-display text-3xl text-gold-light">0{i + 1}</p>
                <p className="mt-5 font-display text-xl text-bone md:text-2xl">
                  {r.t}
                </p>
                <p className="mt-3 text-base leading-relaxed text-bone/65">
                  {r.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InlineLeadStrip
        title="Sounds like you?"
        italic="Start a conversation."
        description="A senior designer will respond within one business day. Confidential, no pressure."
      />

      {/* Not right for */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Be Honest"
            title="Who we’re not right for."
            description="If one of these reads like your project, there are excellent contractors in this market who are a better fit — and we’ll happily point you to them."
          />
          <div className="mt-16 grid gap-px bg-bone/10 sm:grid-cols-3">
            {notRightFor.map((r, i) => (
              <Reveal key={r.t} delay={i % 3} className="bg-ink p-8 lg:p-10">
                <p className="font-display text-2xl text-bone/40">{r.t}</p>
                <p className="mt-3 text-sm leading-relaxed text-bone/50">
                  {r.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing quote */}
      <section className="relative isolate overflow-hidden bg-ink-800 py-28 lg:py-40">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gold/15 blur-[180px]"
        />
        <div className="container-luxe">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <p className="font-display text-7xl leading-none text-gold/40">“</p>
              <blockquote className="mt-6 font-display text-3xl leading-snug text-bone text-balance md:text-5xl">
                We would rather lose a project at the door than at the
                punch list. Both happen — the first one quietly.
              </blockquote>
              <figcaption className="mt-8 text-[0.65rem] uppercase tracking-[0.28em] text-gold">
                — From the studio
              </figcaption>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="If the fit reads right —"
        description="A senior designer will sit with you, walk the project, and respond within one business day."
        image={bathroomImages[0]}
      />
    </>
  );
}
