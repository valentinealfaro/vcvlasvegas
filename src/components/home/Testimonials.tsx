import { Reveal } from '../Reveal';
import { SectionHeader } from '../SectionHeader';

const quotes = [
  {
    q: 'The most quietly capable team we’ve worked with. Our primary suite feels like a five-star resort and the build itself was almost serene.',
    a: 'Homeowner · Summerlin',
  },
  {
    q: 'VCV Vegas treated our renovation like an architecture project, not a contractor job. Worth every dollar.',
    a: 'Homeowner · Henderson',
  },
  {
    q: 'We hired them for a kitchen and ended up redoing the whole main floor. The level of finish made everything else in the house look tired.',
    a: 'Homeowner · Paradise',
  },
];

export function Testimonials() {
  return (
    <section className="bg-ink py-28 lg:py-40">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Client Voices"
          title="Quiet confidence from quiet clients."
          align="center"
        />
        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={i} delay={i} className="relative">
              <span className="absolute -top-4 left-0 font-display text-7xl leading-none text-gold/30">
                “
              </span>
              <p className="pt-10 font-display text-2xl leading-snug text-bone/85 md:text-[1.55rem]">
                {q.q}
              </p>
              <p className="mt-6 text-[0.7rem] uppercase tracking-[0.28em] text-gold">
                {q.a}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
