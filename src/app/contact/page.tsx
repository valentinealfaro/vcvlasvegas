import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CinematicHero } from '@/components/CinematicHero';
import { ConsultationForm } from '@/components/ConsultationForm';
import { Reveal } from '@/components/Reveal';
import { kitchenImages, bathroomImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Schedule a Consultation · VCV Vegas',
  description:
    'Schedule a private luxury remodeling design consultation with VCV Vegas. Serving Las Vegas, Henderson, Summerlin and the broader Vegas metro.',
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <CinematicHero
        eyebrow="Private Consultation"
        title="Start"
        italic="your remodel."
        description="Tell us about your project and a senior designer will respond within one business day to schedule a private consultation in your Las Vegas home."
        images={[kitchenImages[3], kitchenImages[0], bathroomImages[0], kitchenImages[1]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <div>
                <p className="eyebrow mb-6">Consultation Request</p>
                <h2 className="font-display text-4xl text-bone md:text-5xl">
                  A short form,<br />
                  <span className="italic text-bone">a real conversation.</span>
                </h2>
                <p className="mt-6 max-w-xl text-bone/65">
                  The more you share, the more useful our first call can be.
                  Everything you tell us stays confidential.
                </p>
                <div className="mt-12">
                  <ConsultationForm />
                </div>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <aside className="border border-bone/10 bg-ink-800/60 p-8 lg:p-10">
                <p className="eyebrow mb-6">Direct</p>
                <div className="space-y-7">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/45">
                      Phone
                    </p>
                    <a
                      href={siteConfig.phoneHref}
                      className="mt-2 flex items-center gap-3 font-display text-2xl text-bone transition-colors hover:text-bone"
                    >
                      <Phone className="h-5 w-5 text-bone" />
                      {siteConfig.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/45">
                      Email
                    </p>
                    <a
                      href={siteConfig.emailHref}
                      className="mt-2 flex items-center gap-3 text-bone transition-colors hover:text-bone"
                    >
                      <Mail className="h-5 w-5 text-bone" />
                      {siteConfig.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/45">
                      Service Area
                    </p>
                    <div className="mt-2 flex items-start gap-3 text-bone/80">
                      <MapPin className="mt-1 h-5 w-5 shrink-0 text-bone" />
                      Las Vegas Metro — Summerlin, Henderson, Paradise, Spring Valley, Enterprise, Centennial Hills, Mountains Edge, Silverado Ranch
                    </div>
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/45">
                      Hours
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-bone/80">
                      <Clock className="h-5 w-5 text-bone" />
                      {siteConfig.hours}
                    </div>
                  </div>
                </div>

                <div className="mt-10 border-t border-bone/10 pt-8">
                  <p className="text-sm leading-relaxed text-bone/55">
                    All consultations are by appointment with a senior VCV Vegas
                    designer. We respond within one business day.
                  </p>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
