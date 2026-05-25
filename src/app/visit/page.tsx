import type { Metadata } from 'next';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { ConsultationForm } from '@/components/ConsultationForm';
import { CTASection } from '@/components/CTASection';
import { customHomeImages, bathroomImages } from '@/lib/images';
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
      <PageHero
        eyebrow="Private Consultation"
        title="By"
        italic="appointment."
        description="The VCV Vegas studio consults privately, in your home, across the Las Vegas metro. A senior designer responds within one business day."
        image={customHomeImages[2]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'By Appointment' }]}
      />

      {/* What to expect */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div className="sticky top-32">
                <p className="eyebrow mb-6">The Visit</p>
                <h2 className="font-display text-4xl text-bone md:text-5xl">
                  What a first<br />
                  <span className="italic text-gold-light">consultation looks like.</span>
                </h2>
              </div>
            </Reveal>
            <div className="space-y-12">
              {expect.map((e, i) => (
                <Reveal key={e.t} delay={i}>
                  <div className="grid gap-6 border-t border-bone/10 pt-8 sm:grid-cols-[auto_1fr] sm:gap-10">
                    <p className="font-display text-4xl text-gold-light">
                      0{i + 1}
                    </p>
                    <div>
                      <h3 className="font-display text-2xl text-bone md:text-3xl">
                        {e.t}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-bone/65">
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
      <section className="border-y border-bone/8 bg-ink-800/40">
        <div className="container-luxe py-20">
          <div className="grid gap-px bg-bone/10 md:grid-cols-3">
            {[
              { icon: MapPin, t: 'Where', d: 'In your home, across the Las Vegas metro.' },
              { icon: Clock, t: 'When', d: 'Monday – Saturday, by appointment.' },
              { icon: Calendar, t: 'How', d: 'Schedule below. We respond within one business day.' },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="bg-ink-800/60 p-8 lg:p-10">
                <Icon className="h-5 w-5 text-gold" />
                <p className="mt-5 text-[0.65rem] uppercase tracking-[0.28em] text-bone/45">
                  {t}
                </p>
                <p className="mt-2 font-display text-xl text-bone">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="text-center">
                <p className="eyebrow mb-6 justify-center">Schedule</p>
                <h2 className="font-display text-4xl text-bone md:text-5xl">
                  Request your<br />
                  <span className="italic text-gold-light">private consultation.</span>
                </h2>
                <p className="mt-6 text-bone/65">
                  Senior-designer response within one business day. Confidential.
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

      <CTASection
        title="Begin a conversation."
        description="One business day. One senior designer. One project."
        image={bathroomImages[0]}
      />
    </>
  );
}
