import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { StyleQuiz } from '@/components/StyleQuiz';
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

      <PageHero
        eyebrow="Find Your Style"
        title="Four questions."
        italic="One palette."
        description="A short interactive profile that points us toward your direction — the architecture, the warmth, the light, and the scope. Takes about 90 seconds."
        image={bathroomImages[0]}
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
              <Reveal key={w.t} delay={i} className="bg-ink-800 p-8 lg:p-10">
                <p className="font-display text-3xl text-gold-light">0{i + 1}</p>
                <p className="mt-5 font-display text-xl text-bone md:text-2xl">
                  {w.t}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-bone/60">
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
