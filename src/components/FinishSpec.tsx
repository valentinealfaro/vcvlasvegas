import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

type Spec = { label: string; description: string };

export function FinishSpec({
  eyebrow,
  title,
  description,
  specs,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  specs: Spec[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink-800 py-24 lg:py-32">
      <div aria-hidden className="glow-amber" />

      <div className="container-luxe">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="mt-16 grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-3">
          {specs.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i % 3}
              className="group relative overflow-hidden bg-ink-800 p-8 transition-colors duration-500 hover:bg-ink-700 lg:p-10"
            >
              {/* Index counter — quietly numbered */}
              <p className="text-[0.6rem] uppercase tracking-[0.28em] text-bone/40">
                {String(i + 1).padStart(2, '0')}
              </p>
              {/* Corner gradient sweep on hover */}
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
              <p className="mt-4 font-display text-2xl text-bone">
                {s.label}
              </p>
              <span
                aria-hidden
                className="mt-4 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-16"
              />
              <p className="mt-4 text-sm leading-relaxed text-bone/65 transition-colors duration-500 group-hover:text-bone/85">
                {s.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
