import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Calendar, BookOpen, Hammer, Layers } from 'lucide-react';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { journalPosts } from '@/lib/journal';
import { customHomeImages, kitchenImages, bathroomImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Now · VCV Vegas',
  description:
    'A snapshot of what the VCV Vegas studio is currently doing — booking calendar, active design scope categories, the latest journal note, and the most recent project study.',
  alternates: { canonical: `${siteConfig.url}/now` },
};

const focus = [
  {
    icon: Layers,
    eyebrow: 'Currently in Design',
    title: 'Three commissions in active design.',
    description:
      'A Summerlin whole-home reconfiguration, a Henderson primary suite with wet room, and a Paradise high-rise interior. All led by senior designers; none publicly profiled.',
  },
  {
    icon: Hammer,
    eyebrow: 'Currently in Construction',
    title: 'Two builds running.',
    description:
      'A whole-home renovation entering finish carpentry, and a chef-grade kitchen at stone-fabrication review. Both on published build calendars, both running to schedule.',
  },
];

export default function NowPage() {
  const latestNote = journalPosts[0];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Now', url: `${siteConfig.url}/now` },
        ])}
      />

      <CinematicHero
        eyebrow="The Studio · Now"
        title="What we’re"
        italic="working on right now."
        description="A short, public snapshot of the studio’s current focus. Updated when the work shifts. No specific clients are named — by policy."
        images={[customHomeImages[1], kitchenImages[0], bathroomImages[0], customHomeImages[3]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Now' }]}
      />

      {/* Calendar status */}
      <section className="border-b border-bone/8 bg-ink-800/40 py-20">
        <div className="container-luxe">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center border border-gold/50 bg-gold/10">
                  <Calendar className="h-5 w-5 text-gold" />
                </span>
                <p className="eyebrow !text-gold">Studio Calendar</p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div>
                <p className="font-display text-3xl text-bone text-balance md:text-4xl">
                  Currently booking design consultations for{' '}
                  <span className="italic text-gold-light">Q3 2026</span>.
                </p>
                <p className="mt-4 text-bone/55 md:text-lg">
                  Limited capacity for premium-scope projects. Q4 2026 opens
                  by referral first, public booking second. The Studio
                  Concierge calendar is reviewed personally by a principal.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <Link href="/visit" className="btn-gold !px-5 !py-3 !text-[0.65rem]">
                    Reserve a Slot
                  </Link>
                  <Link
                    href="/intake"
                    className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-bone/65 transition-colors hover:text-gold"
                  >
                    Send a Project Brief
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Studio focus */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Studio Focus"
            title="Where the team is, this season."
            description="Anonymized scope categories — no specific clients, no addresses, no recognizable details. Public out of respect for client privacy."
          />
          <div className="mt-16 grid gap-px bg-bone/10 md:grid-cols-2">
            {focus.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} delay={i % 2} className="bg-ink p-8 lg:p-12">
                  <Icon className="h-6 w-6 text-gold" />
                  <p className="eyebrow mt-6 !text-bone/45">{f.eyebrow}</p>
                  <p className="mt-3 font-display text-2xl text-bone md:text-3xl">
                    {f.title}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-bone/65">
                    {f.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest journal */}
      {latestNote && (
        <section className="bg-ink-800 py-24 lg:py-32">
          <div className="container-luxe">
            <SectionHeader
              eyebrow="Latest from the Journal"
              title="The most recent note."
            />
            <Reveal delay={2}>
              <Link
                href={`/journal/${latestNote.slug}`}
                className="group mt-16 grid gap-8 overflow-hidden border border-bone/10 lg:grid-cols-[1fr_1.2fr]"
              >
                <div className="relative aspect-[4/3] bg-ink-700 lg:aspect-auto">
                  <Image
                    src={latestNote.image.src}
                    alt={latestNote.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <BookOpen className="h-5 w-5 text-gold" />
                  <p className="eyebrow mt-5 !text-bone/45">
                    {latestNote.eyebrow} · {latestNote.read}
                  </p>
                  <p className="mt-3 font-display text-2xl text-bone group-hover:text-gold-light md:text-3xl">
                    {latestNote.title}
                  </p>
                  <p className="mt-4 text-bone/65">{latestNote.summary}</p>
                  <div className="mt-6 flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-gold">
                    Read the note
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:rotate-45" />
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <CTASection
        title="Want in on the calendar?"
        description="A senior designer responds within one business day. Confidential, no pressure."
        image={kitchenImages[1]}
      />
    </>
  );
}
