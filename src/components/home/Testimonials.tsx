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
    <section className="relative overflow-hidden bg-ink py-28 lg:py-40">
      <div aria-hidden className="glow-duotone" />

      <div className="container-luxe">
        <SectionHeader
          eyebrow="Studio Promises"
          title="What every VCV Vegas client expects."
          align="center"
        />
        <div className="mt-20 grid gap-6 md:grid-cols-3 lg:gap-8">
          {promises.map((p, i) => (
            <Reveal key={p.n} delay={i}>
              <div className="border-gradient h-full">
                <div className="group relative h-full overflow-hidden bg-ink p-8 transition-colors duration-500 hover:bg-ink-700 lg:p-10">
                  {/* Per-card corner sweep */}
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
                  {/* Gold corner ticks — appear on hover */}
                  <span aria-hidden className="pointer-events-none absolute left-4 top-4 h-3 w-3 border-l border-t border-gold/0 transition-colors duration-500 group-hover:border-gold/70" />
                  <span aria-hidden className="pointer-events-none absolute bottom-4 right-4 h-3 w-3 border-b border-r border-gold/0 transition-colors duration-500 group-hover:border-gold/70" />
                  <div className="flex items-baseline gap-4">
                    <p className="font-display text-5xl text-bone transition-all duration-500 group-hover:scale-110 group-hover:origin-left group-hover:[text-shadow:0_0_24px_rgba(252,187,0,0.45)]">
                      {p.n}
                    </p>
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold/40 transition-all duration-500 group-hover:bg-gold group-hover:shadow-[0_0_10px_rgba(252,187,0,0.7)]" />
                  </div>
                  <span
                    aria-hidden
                    className="mt-5 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-16 group-hover:shadow-[0_0_8px_rgba(252,187,0,0.6)]"
                  />
                  <h3 className="mt-6 font-display text-2xl text-bone md:text-[1.65rem]">
                    {p.t}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-bone/65 transition-colors duration-500 group-hover:text-bone/85">
                    {p.d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
