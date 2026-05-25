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
                <Link href={`/${s.slug}`} className="group block">
                  <ImageCard
                    image={imageMap[s.slug] ?? kitchenImages[0]}
                    aspect="wide"
                    caption={false}
                    className="mb-6"
                  />
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="eyebrow mb-2 !text-bone/45">{s.eyebrow}</p>
                      <h2 className="font-display text-3xl text-bone transition-colors group-hover:text-gold md:text-4xl">
                        {s.title}
                      </h2>
                      <p className="mt-3 max-w-md text-bone/60">{s.summary}</p>
                    </div>
                    <div className="grid h-12 w-12 shrink-0 place-items-center border border-bone/15 transition-all group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
