import { Reveal } from './Reveal';
import type { ReactNode } from 'react';

type Section = { id?: string; heading: string; body: ReactNode };

export function LegalLayout({
  eyebrow,
  title,
  italic,
  lastUpdated,
  sections,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  lastUpdated: string;
  sections: Section[];
}) {
  return (
    <article className="bg-ink py-32 lg:py-40">
      <div className="container-luxe">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-6">{eyebrow}</p>
            <h1 className="font-display text-4xl text-bone text-balance md:text-5xl">
              {title}
              {italic && (
                <>
                  {' '}
                  <span className="italic text-bone">{italic}</span>
                </>
              )}
            </h1>
            <p className="mt-4 text-[0.65rem] uppercase tracking-[0.28em] text-bone/40">
              Last updated · {lastUpdated}
            </p>
          </Reveal>

          <div className="mt-16 space-y-12">
            {sections.map((s, i) => (
              <Reveal key={s.id ?? s.heading} delay={i % 3}>
                <section id={s.id} className="border-t border-bone/10 pt-10">
                  <h2 className="font-display text-2xl text-bone md:text-3xl">
                    {s.heading}
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-relaxed text-bone/70 md:text-lg">
                    {s.body}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
