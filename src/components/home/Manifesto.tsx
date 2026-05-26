import { Reveal } from '../Reveal';

const principles = [
  {
    t: 'Design-Build, One Team',
    d: 'Single point of accountability from concept through completion.',
  },
  {
    t: 'Luxury Specification',
    d: 'Trade-only finishes, hardware, and stone reserved for high-end builds.',
  },
  {
    t: 'White-Glove Process',
    d: 'Cleaner sites, clearer timelines, weekly client briefings.',
  },
  {
    t: 'Vegas Valley Focus',
    d: 'A focused service area means faster decisions and tighter execution.',
  },
];

export function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 lg:py-40">
      <div aria-hidden className="glow-duotone" />
      <div className="container-luxe">
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="sticky top-32">
              <div className="mb-6 flex items-center gap-4">
                <span
                  className="h-px w-12 origin-left bg-gradient-to-r from-gold via-gold to-transparent"
                  style={{ animation: 'hairline-grow 1.2s cubic-bezier(0.16,1,0.3,1) backwards' }}
                />
                <p className="eyebrow !text-bone">Studio Philosophy</p>
                <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              </div>
              <h2 className="font-display text-4xl text-bone md:text-5xl lg:text-6xl">
                Architectural<br />
                <span className="italic text-bone">restraint.</span>
              </h2>
              <span
                aria-hidden
                className="mt-5 block h-px w-24 bg-gradient-to-r from-gold via-gold/40 to-transparent"
              />
            </div>
          </Reveal>

          <div className="space-y-10 text-lg leading-relaxed text-bone/75 md:text-xl">
            <Reveal delay={1}>
              <p className="text-balance">
                We build the way the best architects design — with restraint,
                proportion, and a relentless focus on the details no one
                notices until they’re wrong.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-balance">
                Our craftsmen specialize in modern desert architecture: warm
                stone, frameless glass, sculptural lighting, and the kind of
                cabinetry that disappears into the wall. Every project is led
                by a senior designer from the first measurement to the final
                punch list.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="grid gap-px bg-bone/10 border-y border-bone/10 sm:grid-cols-2">
                {principles.map((b, i) => (
                  <div
                    key={b.t}
                    className="group relative overflow-hidden bg-ink p-6 transition-colors duration-500 hover:bg-ink-700"
                    style={{
                      animation: `fade-up 0.6s cubic-bezier(0.16,1,0.3,1) ${
                        0.08 * i + 0.3
                      }s backwards`,
                    }}
                  >
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
                    {/* Gold corner ticks on hover */}
                    <span aria-hidden className="pointer-events-none absolute left-2 top-2 h-2.5 w-2.5 border-l border-t border-gold/0 transition-colors duration-500 group-hover:border-gold/70" />
                    <span aria-hidden className="pointer-events-none absolute bottom-2 right-2 h-2.5 w-2.5 border-b border-r border-gold/0 transition-colors duration-500 group-hover:border-gold/70" />
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-gold/60 transition-all duration-500 group-hover:bg-gold group-hover:shadow-[0_0_8px_rgba(252,187,0,0.7)]"
                      />
                      <span
                        aria-hidden
                        className="h-px w-6 bg-gold transition-all duration-500 group-hover:w-10"
                      />
                      <p className="font-display text-lg text-bone md:text-xl">
                        {b.t}
                      </p>
                    </div>
                    <p className="mt-3 text-sm text-bone/60 transition-colors duration-500 group-hover:text-bone/80">
                      {b.d}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
