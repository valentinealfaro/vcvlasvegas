import { Reveal } from '../Reveal';

export function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 lg:py-40">
      <div aria-hidden className="glow-duotone" />
      <div className="container-luxe">
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="sticky top-32">
              <div className="mb-6 flex items-center gap-4">
                <span className="hairline" />
                <p className="eyebrow">Studio Philosophy</p>
              </div>
              <h2 className="font-display text-4xl text-bone md:text-5xl">
                Architectural<br />
                <span className="italic text-bone">restraint.</span>
              </h2>
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
              <div className="grid gap-8 border-t border-bone/10 pt-10 sm:grid-cols-2">
                {[
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
                ].map((b) => (
                  <div key={b.t}>
                    <p className="text-bone font-medium">{b.t}</p>
                    <p className="mt-2 text-base text-bone/60">{b.d}</p>
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
