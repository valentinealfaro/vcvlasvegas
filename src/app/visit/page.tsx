import type { Metadata } from 'next';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { ConsultationForm } from '@/components/ConsultationForm';
import { CTASection } from '@/components/CTASection';
import { customHomeImages, bathroomImages, kitchenImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'By Appointment · VCV Vegas',
  description:
    'Private design consultations with VCV Vegas — by appointment, in your home, across the Las Vegas metro. A senior designer walks the project with you.',
  alternates: { canonical: `${siteConfig.url}/visit` },
};

const expect = [
  {
    t: 'A senior designer in your home.',
    d: 'No salespeople, no junior associates. The person you meet is the person who will lead your project.',
  },
  {
    t: 'A focused 60–90 minutes.',
    d: 'A walk of the home, a conversation about how you live, and a candid first read of scope, timeline, and investment range.',
  },
  {
    t: 'Honest direction. No pressure.',
    d: 'You leave with a clear sense of what the project could be — and whether VCV Vegas is the right team for it.',
  },
  {
    t: 'Follow-up within 24 hours.',
    d: 'A written summary of the conversation, suggested next steps, and answers to anything we didn’t resolve in the room.',
  },
];

export default function VisitPage() {
  return (
    <>
      <CinematicHero
        eyebrow="Private Consultation"
        title="By"
        italic="appointment."
        description="The VCV Vegas studio consults privately, in your home, across the Las Vegas metro. A senior designer responds within one business day."
        images={[customHomeImages[2], customHomeImages[0], bathroomImages[0], kitchenImages[0]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'By Appointment' }]}
      />

      {/* What to expect */}
      <section className="bg-bone py-24 lg:py-32">
        <div className="container-luxe">
          <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div className="sticky top-32">
                <p className="eyebrow mb-6">The Visit</p>
                <h2 className="font-display text-4xl text-ink md:text-5xl">
                  What a first<br />
                  <span className="italic text-ink">consultation looks like.</span>
                </h2>
              </div>
            </Reveal>
            <div className="space-y-12">
              {expect.map((e, i) => (
                <Reveal key={e.t} delay={i}>
                  <div className="group grid gap-6 border-t border-ink/10 pt-8 sm:grid-cols-[auto_1fr] sm:gap-10">
                    <div className="flex flex-col gap-2">
                      <p className="font-display text-4xl text-ink [text-shadow:0_0_20px_rgba(252,187,0,0.4)]">
                        0{i + 1}
                      </p>
                      <span aria-hidden className="h-px w-8 bg-gradient-to-r from-gold via-gold/40 to-transparent" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-ink md:text-3xl">
                        {e.t}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-ink/65">
                        {e.d}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Logistics card */}
      <section className="border-y border-ink/8 bg-bone-800/40">
        <div className="container-luxe py-20">
          <div className="grid gap-px bg-ink/10 md:grid-cols-3">
            {[
              { icon: MapPin, t: 'Where', d: 'In your home, across the Las Vegas metro.' },
              { icon: Clock, t: 'When', d: 'Monday – Saturday, by appointment.' },
              { icon: Calendar, t: 'How', d: 'Schedule below. We respond within one business day.' },
            ].map(({ icon: Icon, t, d }, i) => (
              <div key={t} className="group relative overflow-hidden bg-bone-800/60 p-8 transition-colors duration-500 hover:bg-bone-700 lg:p-10">
                {/* Per-card hover sweep */}
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
                <span className="relative grid h-10 w-10 place-items-center overflow-hidden border border-gold/40 bg-gold/5 shadow-[0_0_18px_-4px_rgba(252,187,0,0.45)]">
                  <span aria-hidden className="absolute inset-0 bg-gradient-to-br from-gold/15 to-transparent" />
                  <span aria-hidden className="absolute left-1 top-1 h-1.5 w-1.5 border-l border-t border-gold" />
                  <span aria-hidden className="absolute bottom-1 right-1 h-1.5 w-1.5 border-b border-r border-gold" />
                  <Icon className="relative h-4 w-4 text-ink" />
                </span>
                <div className="mt-5 flex items-center gap-3">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold/60 transition-all duration-500 group-hover:bg-gold group-hover:shadow-[0_0_8px_rgba(252,187,0,0.7)]" />
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-ink/45">
                    {t}
                  </p>
                </div>
                <p className="mt-2 font-display text-xl text-ink">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section className="bg-bone py-24 lg:py-32">
        <div className="container-luxe">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="text-center">
                <div className="mb-6 flex items-center justify-center gap-3">
                  <span aria-hidden className="h-px w-10 bg-gradient-to-r from-transparent via-gold to-transparent" />
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_10px_rgba(252,187,0,0.7)]" />
                  <p className="eyebrow !text-ink">Schedule</p>
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_10px_rgba(252,187,0,0.7)]" />
                  <span aria-hidden className="h-px w-10 bg-gradient-to-r from-transparent via-gold to-transparent" />
                </div>
                <h2 className="font-display text-4xl text-ink md:text-5xl">
                  Request your<br />
                  <span className="italic text-ink">private consultation.</span>
                </h2>
                <p className="mt-6 text-ink/65">
                  Senior-designer response within one business day. Confidential.
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="mt-14 border-gradient">
                <div className="bg-bone-800/40 p-8 md:p-10">
                  <ConsultationForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Begin a conversation."
        description="One business day. One senior designer. One project."
        image={bathroomImages[0]}
      />
    </>
  );
}
