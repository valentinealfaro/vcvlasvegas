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

      <section className="bg-bone py-24 lg:py-32">
        <div className="container-luxe">
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <div>
                <p className="eyebrow mb-6">Consultation Request</p>
                <h2 className="font-display text-4xl text-ink md:text-5xl">
                  A short form,<br />
                  <span className="italic text-ink">a real conversation.</span>
                </h2>
                <p className="mt-6 max-w-xl text-ink/65">
                  The more you share, the more useful our first call can be.
                  Everything you tell us stays confidential.
                </p>
                <div className="mt-12">
                  <ConsultationForm />
                </div>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="border-gradient">
                <aside className="relative overflow-hidden bg-bone-800/60 p-8 lg:p-10">
                  {/* Gold corner ticks */}
                  <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-gold/50" />
                  <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-gold/50" />
                  <div className="mb-6 flex items-center gap-3">
                    <span aria-hidden className="h-px w-8 bg-gradient-to-r from-gold via-gold/40 to-transparent" />
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_10px_rgba(252,187,0,0.7)]" />
                    <p className="eyebrow !text-ink">Direct</p>
                  </div>
                  <div className="space-y-7">
                    <div>
                      <div className="flex items-center gap-3">
                        <span aria-hidden className="h-1 w-1 rounded-full bg-gold/70" />
                        <p className="text-[0.65rem] uppercase tracking-[0.28em] text-ink/45">
                          Phone
                        </p>
                      </div>
                      <a
                        href={siteConfig.phoneHref}
                        className="group mt-2 flex items-center gap-3 font-display text-2xl text-ink transition-all duration-500 hover:[text-shadow:0_0_18px_rgba(252,187,0,0.45)]"
                      >
                        <Phone className="h-5 w-5 text-ink transition-colors duration-500 group-hover:text-gold" />
                        {siteConfig.phone}
                      </a>
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span aria-hidden className="h-1 w-1 rounded-full bg-gold/70" />
                        <p className="text-[0.65rem] uppercase tracking-[0.28em] text-ink/45">
                          Email
                        </p>
                      </div>
                      <a
                        href={siteConfig.emailHref}
                        className="group mt-2 flex items-center gap-3 text-ink transition-colors hover:text-ink"
                      >
                        <Mail className="h-5 w-5 text-ink transition-colors duration-500 group-hover:text-gold" />
                        {siteConfig.email}
                      </a>
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span aria-hidden className="h-1 w-1 rounded-full bg-gold/70" />
                        <p className="text-[0.65rem] uppercase tracking-[0.28em] text-ink/45">
                          Service Area
                        </p>
                      </div>
                      <div className="mt-2 flex items-start gap-3 text-ink/80">
                        <MapPin className="mt-1 h-5 w-5 shrink-0 text-ink" />
                        Las Vegas Metro — Summerlin, Henderson, Paradise, Spring Valley, Enterprise, Centennial Hills, Mountains Edge, Silverado Ranch
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span aria-hidden className="h-1 w-1 rounded-full bg-gold/70" />
                        <p className="text-[0.65rem] uppercase tracking-[0.28em] text-ink/45">
                          Hours
                        </p>
                      </div>
                      <div className="mt-2 flex items-center gap-3 text-ink/80">
                        <Clock className="h-5 w-5 text-ink" />
                        {siteConfig.hours}
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 border-t border-ink/10 pt-8">
                    <p className="text-sm leading-relaxed text-ink/55">
                      All consultations are by appointment with a senior VCV Vegas
                      designer. We respond within one business day.
                    </p>
                  </div>
                </aside>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
