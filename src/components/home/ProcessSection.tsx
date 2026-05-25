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
    <section className="relative bg-ink-800 py-28 lg:py-40">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="The VCV Process"
          title="A calm, controlled build."
          description="Luxury isn’t just materials — it’s how the project feels from week one to keys-back. Here’s how we keep yours quiet."
        />

        <div className="mt-20 grid gap-px bg-bone/10 md:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i} className="bg-ink-800 p-8 md:p-9">
              <p className="font-display text-5xl text-gold-light">{s.n}</p>
              <h3 className="mt-6 font-display text-2xl text-bone">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-bone/55">
                {s.d}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
