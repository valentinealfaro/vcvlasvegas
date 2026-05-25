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
    <section className="relative overflow-hidden bg-ink-800 py-28 lg:py-40">
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

          <div className="grid gap-6 md:grid-cols-5 md:gap-0">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i}>
                <div className="group relative bg-ink-800 px-2 py-2 md:px-5 lg:px-7">
                  {/* Number badge sitting on the connecting line */}
                  <div className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-2 -top-1 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-gold bg-ink-800 transition-all duration-500 group-hover:scale-125 group-hover:bg-gold md:left-0 md:block"
                      style={{ top: '0.85rem' }}
                    />
                    <p className="font-display text-5xl text-bone transition-colors duration-500 group-hover:text-bone">
                      {s.n}
                    </p>
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-bone">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-bone/55">
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
