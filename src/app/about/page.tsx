import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { ImageCard } from '@/components/ImageCard';
import { InlineLeadStrip } from '@/components/InlineLeadStrip';
import {
  customHomeImages,
  kitchenImages,
  bathroomImages,
  remodelImages,
} from '@/lib/images';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About · VCV Vegas',
  description:
    'Inside VCV Vegas — a luxury design-build studio bringing architectural finish standards, trade-only partners, and white-glove project management to the Las Vegas metro.',
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <CinematicHero
        eyebrow="The Studio"
        title="A luxury studio"
        italic="quietly expanding into Las Vegas."
        description="VCV Vegas is a focused design-build studio bringing architectural finish standards, trade-only material partners, and white-glove project management to luxury remodeling across the Las Vegas metro."
        images={[customHomeImages[0], kitchenImages[0], bathroomImages[0], customHomeImages[3], customHomeImages[1]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      {/* Opening manifesto */}
      <section className="bg-ink py-24 lg:py-36">
        <div className="container-luxe">
          <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div>
                <p className="eyebrow mb-6">Philosophy</p>
                <h2 className="font-display text-4xl text-bone md:text-6xl">
                  Build like the architects you<br />
                  <span className="italic text-bone">actually admire.</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="space-y-6 text-lg leading-relaxed text-bone/70 md:text-xl">
                <p>
                  We started VCV Vegas because most homeowners in this valley
                  shouldn’t have to choose between great design and great
                  construction. The best studios in Los Angeles, Scottsdale, and
                  Miami have made that pairing standard for decades. Las Vegas
                  is ready.
                </p>
                <p>
                  Our team is built around a small group of senior designers and
                  trade specialists, each personally selected for their work on
                  comparable projects. There is no junior team behind the
                  curtain — the designer you meet is the designer you keep.
                </p>
                <p>
                  We work with restraint, precision, and a long view. The homes
                  we build are meant to age beautifully, hold their value
                  quietly, and bring their owners back to them every evening.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cinematic split image band */}
      <section className="bg-ink">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          {[customHomeImages[1], kitchenImages[1], bathroomImages[0]].map((img, i) => (
            <Reveal key={i} delay={i}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Numbers band */}
      <section className="relative overflow-hidden border-y border-bone/8 bg-ink py-20">
        <div aria-hidden className="glow-duotone" />
        <div className="container-luxe">
          <div className="grid gap-12 md:grid-cols-4">
            {[
              { n: '15+', l: 'Combined Years In High-End Build' },
              { n: '6', l: 'Senior Designers & Project Leads' },
              { n: '7-Figure', l: 'Project Capacity' },
              { n: '1', l: 'Year Service Relationship Standard' },
            ].map((stat, i) => (
              <Reveal key={stat.l} delay={i}>
                <div className="group relative pl-4">
                  <span
                    aria-hidden
                    className="absolute inset-y-1 left-0 w-px bg-bone/15 transition-all duration-500 group-hover:bg-gold group-hover:shadow-[0_0_8px_rgba(252,187,0,0.6)]"
                  />
                  <p className="font-display text-5xl text-bone transition-all duration-500 group-hover:[text-shadow:0_0_24px_rgba(252,187,0,0.45)] md:text-6xl">
                    {stat.n}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span aria-hidden className="h-1 w-1 rounded-full bg-gold/0 transition-all duration-500 group-hover:bg-gold group-hover:shadow-[0_0_6px_rgba(252,187,0,0.7)]" />
                    <p className="max-w-[18ch] text-sm uppercase tracking-[0.22em] text-bone/55 transition-colors duration-500 group-hover:text-bone/80">
                      {stat.l}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="What We Stand For"
            title="Six principles that govern the work."
          />
          <div className="mt-20 grid gap-px bg-bone/10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: 'Senior-Led',
                d: 'A senior designer leads every project from first walkthrough to final punch list. No hand-offs, no losing the original vision.',
              },
              {
                t: 'Architectural Finish',
                d: 'Every joint, reveal, and dimension drawn before the project enters the field — and protected through every change order.',
              },
              {
                t: 'Trade-Only Partners',
                d: 'Stone yards, fabricators, and millwork shops reserved for design-build studios — not retail. The quiet half of luxury.',
              },
              {
                t: 'Calm Sites',
                d: 'Cleaner sites, weekly briefings, and a published build calendar. Construction without the chaos.',
              },
              {
                t: 'Long-Term View',
                d: 'We specify what will look as good in ten years as the day the keys turn back. Not what photographs well in the showroom.',
              },
              {
                t: 'Single Accountability',
                d: 'Design, drawings, permits, trades, and finish — one studio, one project lead, one phone call. End to end.',
              },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i % 3} className="group relative overflow-hidden bg-ink p-8 transition-colors duration-500 hover:bg-ink-700 lg:p-10">
                {/* Hover sweep */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      i % 2 === 0
                        ? 'radial-gradient(circle at 100% 0%, rgba(252,187,0,0.10), transparent 55%)'
                        : 'radial-gradient(circle at 0% 100%, rgba(59,130,246,0.10), transparent 55%)',
                  }}
                />
                {/* Gold corner ticks on hover */}
                <span aria-hidden className="pointer-events-none absolute left-2 top-2 h-2.5 w-2.5 border-l border-t border-gold/0 transition-colors duration-500 group-hover:border-gold/70" />
                <span aria-hidden className="pointer-events-none absolute bottom-2 right-2 h-2.5 w-2.5 border-b border-r border-gold/0 transition-colors duration-500 group-hover:border-gold/70" />
                <div className="flex items-baseline gap-4">
                  <p className="font-display text-3xl text-bone transition-all duration-500 group-hover:[text-shadow:0_0_20px_rgba(252,187,0,0.4)]">0{i + 1}</p>
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold/60 transition-all duration-500 group-hover:bg-gold group-hover:shadow-[0_0_8px_rgba(252,187,0,0.7)]" />
                </div>
                <span aria-hidden className="mt-3 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-14 group-hover:shadow-[0_0_8px_rgba(252,187,0,0.6)]" />
                <p className="mt-5 font-display text-xl text-bone md:text-2xl">
                  {v.t}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-bone/60 transition-colors duration-500 group-hover:text-bone/80">
                  {v.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder pull quote */}
      <section className="relative isolate overflow-hidden bg-ink-800 py-28 lg:py-40">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gold/15 blur-[180px]"
        />
        <div className="container-luxe">
          <div className="relative mx-auto max-w-4xl">
            {/* Decorative gold corner frames around the pull quote */}
            <span aria-hidden className="pointer-events-none absolute -left-3 -top-3 hidden h-6 w-6 border-l border-t border-gold/50 md:block" />
            <span aria-hidden className="pointer-events-none absolute -right-3 -top-3 hidden h-6 w-6 border-r border-t border-gold/50 md:block" />
            <span aria-hidden className="pointer-events-none absolute -bottom-3 -left-3 hidden h-6 w-6 border-b border-l border-gold/50 md:block" />
            <span aria-hidden className="pointer-events-none absolute -bottom-3 -right-3 hidden h-6 w-6 border-b border-r border-gold/50 md:block" />
            <Reveal>
              <p className="font-display text-7xl leading-none text-gold/60 [text-shadow:0_0_24px_rgba(252,187,0,0.4)]">“</p>
              <blockquote className="mt-6 font-display text-3xl leading-snug text-bone text-balance md:text-5xl">
                The brief we give every senior designer is to build the home
                they would want to walk into ten years from now. That single
                instruction does most of the work.
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-bone">
                <span aria-hidden className="h-px w-8 bg-gold" />
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(252,187,0,0.7)]" />
                From the studio
              </figcaption>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Recently completed */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="A Selection of Work"
              title="Recently in the studio."
            />
            <Reveal delay={2}>
              <Link href="/projects" className="btn-ghost">
                See all projects
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <Reveal>
              <ImageCard image={kitchenImages[0]} aspect="portrait" />
            </Reveal>
            <Reveal delay={1}>
              <ImageCard image={bathroomImages[0]} aspect="portrait" />
            </Reveal>
            <Reveal delay={2}>
              <ImageCard image={customHomeImages[3]} aspect="portrait" />
            </Reveal>
          </div>
        </div>
      </section>

      <InlineLeadStrip
        title="Meet the team behind the work."
        italic="Privately, by appointment."
        description="A senior designer will sit with you, walk your home, and respond with direction within one business day."
      />

      <CTASection
        title="Begin a conversation with the studio."
        description="By appointment with a senior VCV Vegas designer."
        image={remodelImages[0]}
      />
    </>
  );
}
