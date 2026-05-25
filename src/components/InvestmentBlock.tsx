import { Reveal } from './Reveal';

type Row = { label: string; value: string };

export function InvestmentBlock({
  eyebrow = 'Investment & Timeline',
  title,
  description,
  rows,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  rows: Row[];
}) {
  return (
    <section className="bg-ink-800 py-20 lg:py-24">
      <div className="container-luxe">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <div>
              <p className="eyebrow mb-5">{eyebrow}</p>
              <h2 className="font-display text-3xl text-bone md:text-4xl">
                {title}
              </h2>
              {description && (
                <p className="mt-5 max-w-md text-base leading-relaxed text-bone/60">
                  {description}
                </p>
              )}
            </div>
          </Reveal>
          <Reveal delay={1}>
            <dl className="divide-y divide-bone/10 border-y border-bone/10">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[1fr_auto] items-baseline gap-6 py-5 md:grid-cols-[1.2fr_2fr] md:gap-10"
                >
                  <dt className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/45">
                    {row.label}
                  </dt>
                  <dd className="font-display text-xl text-gold-light md:text-2xl">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
