import type { Metadata } from 'next';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import dynamic from 'next/dynamic';

const StyleQuiz = dynamic(
  () => import('@/components/StyleQuiz').then((m) => m.StyleQuiz),
  {
    loading: () => (
      <div className="h-[560px] w-full animate-pulse border border-bone/10 bg-ink-800/40" aria-label="Loading style quiz" />
    ),
  },
);
import { kitchenImages, bathroomImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Find Your Style · VCV Vegas',
  description:
    'A short interactive style profile — four questions, a recommended design direction, and a sample palette for your luxury Las Vegas remodel.',
  alternates: { canonical: `${siteConfig.url}/style` },
};

const why = [
  {
    t: 'Faster first conversation.',
    d: 'When we know your direction before we sit down, the consultation lands deeper, faster.',
  },
  {
    t: 'A palette to react to.',
    d: 'Your profile comes back with sample materials and project examples that match.',
  },
  {
    t: 'No commitment.',
    d: 'The quiz is private. The follow-up is one email. No newsletter, no marketing cadence.',
  },
];

export default function StylePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Find Your Style', url: `${siteConfig.url}/style` },
        ])}
      />

      <CinematicHero
        eyebrow="Find Your Style"
        title="Four questions."
        italic="One palette."
        description="A short interactive profile that points us toward your direction — the architecture, the warmth, the light, and the scope. Takes about 90 seconds."
        images={[bathroomImages[0], kitchenImages[0], bathroomImages[3], kitchenImages[1]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Find Your Style' }]}
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <StyleQuiz />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-bone/8 bg-ink-800 py-20">
        <div className="container-luxe">
          <div className="grid gap-px bg-bone/10 md:grid-cols-3">
            {why.map((w, i) => (
              <Reveal key={w.t} delay={i} className="group relative overflow-hidden bg-ink-800 p-8 transition-colors duration-500 hover:bg-ink-700 lg:p-10">
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
                <span aria-hidden className="pointer-events-none absolute left-2 top-2 h-2.5 w-2.5 border-l border-t border-gold/0 transition-colors duration-500 group-hover:border-gold/70" />
                <span aria-hidden className="pointer-events-none absolute bottom-2 right-2 h-2.5 w-2.5 border-b border-r border-gold/0 transition-colors duration-500 group-hover:border-gold/70" />
                <div className="flex items-baseline gap-4">
                  <p className="font-display text-3xl text-bone transition-all duration-500 group-hover:[text-shadow:0_0_20px_rgba(252,187,0,0.4)]">0{i + 1}</p>
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold/60 transition-all duration-500 group-hover:bg-gold group-hover:shadow-[0_0_8px_rgba(252,187,0,0.7)]" />
                </div>
                <span aria-hidden className="mt-3 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-14 group-hover:shadow-[0_0_8px_rgba(252,187,0,0.6)]" />
                <p className="mt-5 font-display text-xl text-bone md:text-2xl">
                  {w.t}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-bone/60 transition-colors duration-500 group-hover:text-bone/80">
                  {w.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Already know your style?"
        description="Skip the quiz and schedule a private consultation directly with a senior designer."
        image={kitchenImages[0]}
      />
    </>
  );
}
