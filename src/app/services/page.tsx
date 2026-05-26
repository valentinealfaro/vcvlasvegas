import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CinematicHero } from '@/components/CinematicHero';
import { ImageCard } from '@/components/ImageCard';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import {
  bathroomImages,
  kitchenImages,
  remodelImages,
  customHomeImages,
  flooringImages,
} from '@/lib/images';
import { servicesIndex } from '@/lib/site';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Luxury Remodeling Services in Las Vegas',
  description:
    'A complete overview of VCV Vegas luxury remodeling services — kitchens, bathrooms, whole-home renovations, general contracting, outdoor living, and investor builds.',
  alternates: { canonical: `${siteConfig.url}/services` },
};

const imageMap: Record<string, typeof bathroomImages[number]> = {
  'bathroom-remodeling-las-vegas': bathroomImages[2],
  'kitchen-remodeling-las-vegas': kitchenImages[0],
  'home-remodeling-las-vegas': remodelImages[0],
  'general-contractor-las-vegas': customHomeImages[0],
  'luxury-renovations-las-vegas': customHomeImages[1],
  'modern-bathroom-design-las-vegas': bathroomImages[3],
  'outdoor-living-las-vegas': customHomeImages[3],
  'investor-remodels-las-vegas': remodelImages[1],
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Services', url: `${siteConfig.url}/services` },
        ])}
      />
      <CinematicHero
        eyebrow="Studio Services"
        title="Every service"
        italic="under one studio."
        description="VCV Vegas operates as a single design-build studio across kitchens, bathrooms, whole-home renovations, general contracting, and outdoor living."
        images={[flooringImages[3], kitchenImages[0], bathroomImages[0], customHomeImages[0], remodelImages[0]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {servicesIndex.map((s, i) => (
              <Reveal key={s.slug} delay={i % 2}>
                <div className="border-gradient">
                  <Link
                    href={`/${s.slug}`}
                    className="group relative block overflow-hidden bg-ink-800 p-6 transition-colors duration-500 hover:bg-ink-700 lg:p-7"
                  >
                    {/* Per-card hover sweep */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                      style={{
                        background:
                          i % 2 === 0
                            ? 'radial-gradient(circle at 100% 0%, rgba(252,187,0,0.12), transparent 55%)'
                            : 'radial-gradient(circle at 0% 100%, rgba(59,130,246,0.12), transparent 55%)',
                      }}
                    />
                    {/* Gold corner ticks on hover */}
                    <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-gold/0 transition-colors duration-500 group-hover:border-gold/70" />
                    <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-gold/0 transition-colors duration-500 group-hover:border-gold/70" />
                    <ImageCard
                      image={imageMap[s.slug] ?? kitchenImages[0]}
                      aspect="wide"
                      caption={false}
                      className="mb-6"
                    />
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <div className="mb-2 flex items-center gap-3">
                          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold/60 transition-all duration-500 group-hover:bg-gold group-hover:shadow-[0_0_8px_rgba(252,187,0,0.7)]" />
                          <p className="eyebrow !text-bone/45">{s.eyebrow}</p>
                        </div>
                        <h2 className="font-display text-3xl text-bone transition-colors group-hover:text-bone md:text-4xl">
                          {s.title}
                        </h2>
                        <p className="mt-3 max-w-md text-bone/60">{s.summary}</p>
                      </div>
                      <div className="grid h-12 w-12 shrink-0 place-items-center border border-bone/15 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink group-hover:shadow-[0_0_24px_-4px_rgba(252,187,0,0.7)]">
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                      </div>
                    </div>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
