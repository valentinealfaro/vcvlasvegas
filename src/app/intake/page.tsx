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
              <Reveal key={w.t} delay={i} className="bg-ink-800 p-8 lg:p-10">
                <p className="font-display text-3xl text-gold-light">0{i + 1}</p>
                <p className="mt-5 font-display text-xl text-bone md:text-2xl">
                  {w.t}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-bone/60">
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
                <p className="eyebrow mb-6">The Brief</p>
                <h2 className="font-display text-4xl text-bone md:text-5xl">
                  Four short sections.<br />
                  <span className="italic text-gold-light">About ten minutes.</span>
                </h2>
                <p className="mt-6 text-bone/65">
                  Contact, the property, the project, the vision. The deeper
                  the brief, the better our first response can be.
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="mt-14 border border-bone/10 bg-ink-800/40 p-8 md:p-10">
                <IntakeForm />
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
