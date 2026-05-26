import type { Metadata } from 'next';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { IntakeForm } from '@/components/IntakeForm';
import { CTASection } from '@/components/CTASection';
import { customHomeImages, kitchenImages, bathroomImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Project Brief Intake · VCV Vegas',
  description:
    'Send a complete project brief to VCV Vegas. The intake form is built for serious prospects who want the first conversation to land deeper than a quick consultation.',
  alternates: { canonical: `${siteConfig.url}/intake` },
};

const why = [
  {
    t: 'A deeper first conversation.',
    d: 'When the brief lands ahead of the walkthrough, the meeting starts at scope, not at biography.',
  },
  {
    t: 'A senior designer reviewing.',
    d: 'No assistant or salesperson reads the brief — your project goes straight to the lead who will run it.',
  },
  {
    t: 'A written response.',
    d: 'You receive a written reply within one business day with initial direction and the next step.',
  },
];

export default function IntakePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Project Brief', url: `${siteConfig.url}/intake` },
        ])}
      />

      <CinematicHero
        eyebrow="Project Brief"
        title="Send the project."
        italic="A senior designer reads it."
        description="The intake form below is built for serious prospects. Spend ten minutes on the brief and the first conversation lands at scope, not at biography. A senior designer responds within one business day."
        images={[customHomeImages[0], kitchenImages[0], bathroomImages[0], customHomeImages[1]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Project Brief' }]}
      />

      {/* Why the long form */}
      <section className="bg-ink-800 py-20 lg:py-24">
        <div className="container-luxe">
          <div className="grid gap-px bg-bone/10 md:grid-cols-3">
            {why.map((w, i) => (
              <Reveal key={w.t} delay={i} className="group relative overflow-hidden bg-ink-800 p-8 transition-colors duration-500 hover:bg-ink-700 lg:p-10">
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
                  {w.t}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-bone/60 transition-colors duration-500 group-hover:text-bone/80">
                  {w.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The intake form */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <span aria-hidden className="h-px w-12 bg-gradient-to-r from-gold via-gold/40 to-transparent" />
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_10px_rgba(252,187,0,0.7)]" />
                  <p className="eyebrow !text-bone">The Brief</p>
                </div>
                <h2 className="font-display text-4xl text-bone md:text-5xl">
                  Four short sections.<br />
                  <span className="italic text-bone">About ten minutes.</span>
                </h2>
                <p className="mt-6 text-bone/65">
                  Contact, the property, the project, the vision. The deeper
                  the brief, the better our first response can be.
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="mt-14 border-gradient">
                <div className="bg-ink-800/40 p-8 md:p-10">
                  <IntakeForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Prefer a quick conversation first?"
        description="The shorter consultation form lives at /contact — designed to schedule a private walkthrough in 60 seconds."
        image={bathroomImages[0]}
      />
    </>
  );
}
