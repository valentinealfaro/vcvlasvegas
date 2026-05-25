import { Reveal } from '../Reveal';
import { SectionHeader } from '../SectionHeader';

const promises = [
  {
    n: '01',
    t: 'A senior designer leads every project.',
    d: 'No junior team behind the curtain. The designer you meet at the first walkthrough is the designer you keep through the final punch list.',
  },
  {
    n: '02',
    t: 'A published, fixed build calendar.',
    d: 'Long-lead items are ordered before demolition. You see the calendar before the wall comes down — and we keep to it.',
  },
  {
    n: '03',
    t: 'Quiet sites, weekly briefings, white-glove finish.',
    d: 'Cleaner sites than the industry standard. Weekly client check-ins. And the kind of finishing that holds up at close inspection.',
  },
];

export function Testimonials() {
  return (
    <section className="bg-ink py-28 lg:py-40">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Studio Promises"
          title="What every VCV Vegas client expects."
          align="center"
        />
        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {promises.map((p, i) => (
            <Reveal key={p.n} delay={i} className="relative">
              <p className="font-display text-5xl text-gold-light">{p.n}</p>
              <h3 className="mt-6 font-display text-2xl text-bone md:text-[1.65rem]">
                {p.t}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-bone/65">
                {p.d}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
