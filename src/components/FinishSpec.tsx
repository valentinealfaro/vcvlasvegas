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
    <section className="bg-ink-800 py-24 lg:py-32">
      <div className="container-luxe">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="mt-16 grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-3">
          {specs.map((s, i) => (
            <Reveal key={s.label} delay={i % 3} className="bg-ink-800 p-8 lg:p-10">
              <p className="font-display text-2xl text-gold-light">
                {s.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-bone/65">
                {s.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
