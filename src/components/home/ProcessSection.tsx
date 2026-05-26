import { SectionHeader } from '../SectionHeader';
import { Reveal } from '../Reveal';

const steps = [
  {
    n: '01',
    t: 'Private Discovery',
    d: 'A senior designer visits your home, walks the property, and listens to how you live before we draw anything.',
  },
  {
    n: '02',
    t: 'Design Direction',
    d: 'Architectural concept, material palette, and a transparent investment range — refined together until it feels right.',
  },
  {
    n: '03',
    t: 'Production Drawings',
    d: 'Trade-quality construction drawings, finish schedules, and a fixed build calendar before a single tile is ordered.',
  },
  {
    n: '04',
    t: 'White-Glove Build',
    d: 'Site protection, weekly client briefings, and a single project lead from demolition to final walkthrough.',
  },
  {
    n: '05',
    t: 'Quiet Reveal',
    d: 'Final styling, professional photography for your records, and a one-year service relationship.',
  },
];

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-bone-800 py-28 lg:py-40">
      <div aria-hidden className="glow-duotone" />

      <div className="container-luxe">
        <SectionHeader
          eyebrow="The VCV Process"
          title="A calm, controlled build."
          description="Luxury isn’t just materials — it’s how the project feels from week one to keys-back. Here’s how we keep yours quiet."
        />

        {/* Connecting timeline (desktop) — a gradient line that runs across
            the top of the row of phases, evoking the build calendar */}
        <div className="relative mt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px md:block"
            style={{
              background:
                'linear-gradient(to right, transparent 0%, rgba(252,187,0,0.85) 8%, rgba(252,187,0,0.55) 50%, rgba(59,130,246,0.55) 92%, transparent 100%)',
            }}
          />
          {/* Timeline endcaps — gold dots at each end of the line */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-1 top-12 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_10px_rgba(252,187,0,0.8)] md:block"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute right-1 top-12 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_10px_rgba(59,130,246,0.8)] md:block"
          />

          <div className="grid gap-6 md:grid-cols-5 md:gap-0">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i}>
                <div className="group relative bg-bone-800 px-2 py-2 md:px-5 lg:px-7">
                  {/* Number badge sitting on the connecting line */}
                  <div className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-2 -top-1 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-gold bg-bone-800 transition-all duration-500 group-hover:scale-125 group-hover:bg-gold group-hover:shadow-[0_0_16px_rgba(252,187,0,0.7)] md:left-0 md:block"
                      style={{ top: '0.85rem' }}
                    />
                    <p className="font-display text-5xl text-ink transition-all duration-500 group-hover:[text-shadow:0_0_24px_rgba(252,187,0,0.45)]">
                      {s.n}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <span
                      aria-hidden
                      className="h-px w-5 bg-gold transition-all duration-500 group-hover:w-9"
                    />
                    <h3 className="font-display text-2xl text-ink">{s.t}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/55 transition-colors duration-500 group-hover:text-ink/80">
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
