import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Mail, FileText, Image as ImageIcon, Newspaper } from 'lucide-react';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { customHomeImages, kitchenImages, bathroomImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Press · VCV Vegas',
  description:
    'Press and editorial inquiries for VCV Vegas. Brand assets, fact sheet, and project imagery available on request to qualified journalists and editorial outlets.',
  alternates: { canonical: `${siteConfig.url}/press` },
};

const available = [
  {
    icon: FileText,
    t: 'Studio Fact Sheet',
    d: 'A one-page brief covering the studio’s service area, project scope, engagement tiers, and finish standards.',
  },
  {
    icon: ImageIcon,
    t: 'Project Imagery',
    d: 'Selected high-resolution project photography, available for editorial use with attribution and a written agreement.',
  },
  {
    icon: Newspaper,
    t: 'Editorial Interviews',
    d: 'A senior designer is available for editorial interviews on luxury remodeling, finish specifications, and Las Vegas residential architecture.',
  },
];

const beats = [
  'Luxury residential architecture in Las Vegas',
  'Modern desert design and finish specification',
  'Pre-construction discipline and build calendars',
  'Trade-only material partners and stone yard practices',
  'Indoor-outdoor architecture for desert climates',
  'Working with architects and interior designers as a GC',
];

export default function PressPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Press', url: `${siteConfig.url}/press` },
        ])}
      />

      <CinematicHero
        eyebrow="Press & Editorial"
        title="For journalists,"
        italic="editors, and curators."
        description="VCV Vegas welcomes editorial inquiries from qualified journalists and outlets covering luxury residential architecture, design-build practice, and the Las Vegas market. Assets, fact sheet, and senior designer availability on request."
        images={[customHomeImages[0], kitchenImages[0], bathroomImages[0]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Press' }]}
      />

      {/* Press contact */}
      <section className="border-b border-bone/8 bg-ink-800/40 py-20">
        <div className="container-luxe">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center border border-gold/50 bg-gold/10">
                  <Mail className="h-5 w-5 text-gold" />
                </span>
                <p className="eyebrow !text-gold">Press Contact</p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div>
                <p className="font-display text-3xl text-bone text-balance md:text-4xl">
                  Press and editorial requests reach the studio at{' '}
                  <a
                    href={siteConfig.emailHref}
                    className="italic text-gold-light underline-offset-4 hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                  .
                </p>
                <p className="mt-5 text-bone/55 md:text-lg">
                  Please include the outlet, publication date target, and a
                  short outline of the piece. We respond within one business
                  day to qualified inquiries.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <a
                    href={`mailto:${siteConfig.email}?subject=Press%20Inquiry`}
                    className="btn-gold !px-5 !py-3 !text-[0.65rem]"
                  >
                    Open Press Email
                  </a>
                  <a
                    href={siteConfig.phoneHref}
                    className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-bone/65 transition-colors hover:text-gold"
                  >
                    {siteConfig.phone}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Available assets */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Available on Request"
            title="Press assets."
            description="The following are available to qualified journalists, editors, and curators with a written agreement. Send a note and we will arrange access."
          />
          <div className="mt-16 grid gap-px bg-bone/10 md:grid-cols-3">
            {available.map((a, i) => {
              const Icon = a.icon;
              return (
                <Reveal key={a.t} delay={i} className="bg-ink p-8 lg:p-10">
                  <Icon className="h-6 w-6 text-gold" />
                  <p className="mt-6 font-display text-xl text-bone md:text-2xl">
                    {a.t}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-bone/60">
                    {a.d}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial beats */}
      <section className="bg-ink-800 py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Editorial Beats"
            title="Topics the studio can speak to."
            description="Subject-matter areas where a senior designer is available to comment, contribute, or be interviewed."
          />
          <div className="mt-16 grid gap-3 md:grid-cols-2">
            {beats.map((beat, i) => (
              <Reveal key={beat} delay={i % 2}>
                <div className="flex items-start gap-4 border-t border-bone/10 pt-5 text-base text-bone/75 md:text-lg">
                  <span className="mt-2 h-px w-5 shrink-0 bg-gold" />
                  {beat}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Policy */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="eyebrow mb-6">Editorial Policy</p>
              <h2 className="font-display text-3xl text-bone md:text-4xl">
                Honesty, restraint, and confidentiality.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-bone/70">
                We do not pitch unsolicited stories or trade for coverage. We
                do not name specific clients without their explicit written
                consent. Project addresses and identifying details are never
                shared. Studio Concierge engagements are not part of any
                public-facing portfolio by policy.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-bone/70">
                That said — if a piece is right for both sides, the studio is
                happy to make a senior designer available, share project
                imagery with attribution, and contribute on the editorial
                beats listed above.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Reach the studio directly."
        description="One email. One business day. Confidential."
        image={customHomeImages[1]}
      />
    </>
  );
}
