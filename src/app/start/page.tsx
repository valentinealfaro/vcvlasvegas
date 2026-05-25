import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Calculator, Sparkles, Calendar } from 'lucide-react';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { ConsultationForm } from '@/components/ConsultationForm';
import { TrustBar } from '@/components/TrustBar';
import { kitchenImages, bathroomImages, customHomeImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Start Your Las Vegas Luxury Remodel · VCV Vegas',
  description:
    'Three ways to start a luxury remodel with VCV Vegas — calculate your range, find your style, or schedule a private consultation. A senior designer responds within one business day.',
  alternates: { canonical: `${siteConfig.url}/start` },
};

const paths = [
  {
    icon: Calculator,
    eyebrow: 'Path 01',
    title: 'Calculate the Range',
    description:
      'A three-step estimator tuned to real VCV Vegas project data. Indicative range and build window in seconds. Detailed breakdown by email.',
    href: '/investment',
    cta: 'Launch the Calculator',
  },
  {
    icon: Sparkles,
    eyebrow: 'Path 02',
    title: 'Find Your Style',
    description:
      'A 90-second interactive style profile — architecture, material warmth, light, and scope. Recommended palette and direction at the end.',
    href: '/style',
    cta: 'Take the Quiz',
  },
  {
    icon: Calendar,
    eyebrow: 'Path 03',
    title: 'Skip Ahead',
    description:
      'You already know your scope. Send the project to a senior designer directly and we’ll respond within one business day. Form below.',
    href: '#consult',
    cta: 'Send the Project',
  },
];

export default function StartPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Start', url: `${siteConfig.url}/start` },
        ])}
      />

      <CinematicHero
        eyebrow="Begin"
        title="Three ways"
        italic="to start."
        description="Whether you want the number, the style direction, or just a senior designer in your home — every entry is welcome. Pick the one that fits where you are."
        images={[kitchenImages[0], bathroomImages[0], customHomeImages[0], kitchenImages[1], bathroomImages[3]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Start' }]}
      />

      <TrustBar />

      {/* Three paths */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {paths.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i}>
                  <Link
                    href={p.href}
                    className="group flex h-full flex-col justify-between gap-12 border border-bone/15 p-8 transition-all duration-500 hover:border-gold hover:bg-ink-700 lg:p-10"
                  >
                    <div>
                      <Icon className="h-6 w-6 text-bone transition-colors group-hover:text-bone" />
                      <p className="eyebrow mt-6 !text-bone/45">{p.eyebrow}</p>
                      <p className="mt-3 font-display text-3xl text-bone group-hover:text-bone md:text-4xl">
                        {p.title}
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-bone/60">
                        {p.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.28em] text-bone">
                      {p.cta}
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover:rotate-45" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct consultation form */}
      <section id="consult" className="border-y border-bone/8 bg-ink-800 py-24 lg:py-32">
        <div className="container-luxe">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="text-center">
                <p className="eyebrow mb-6 justify-center">Direct Path</p>
                <h2 className="font-display text-4xl text-bone md:text-5xl">
                  Send the project<br />
                  <span className="italic text-bone">to a senior designer.</span>
                </h2>
                <p className="mt-6 text-bone/65">
                  A 60-second form. A one-business-day response. Confidential.
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="mt-14 border border-bone/10 bg-ink-800/40 p-8 md:p-10">
                <ConsultationForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final assurance */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="font-display text-3xl text-bone md:text-4xl">
                A senior designer reads every inquiry.<br />
                <span className="italic text-bone">No salespeople. No marketing cadence.</span>
              </p>
              <p className="mt-6 text-bone/55">
                One email. One conversation. Confidential.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
