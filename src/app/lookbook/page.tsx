import type { Metadata } from 'next';
import Image from 'next/image';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import {
  bathroomImages,
  kitchenImages,
  customHomeImages,
  flooringImages,
  remodelImages,
} from '@/lib/images';
import { siteConfig } from '@/lib/site';
import type { LuxeImage } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Lookbook · VCV Vegas',
  description:
    'A visual lookbook of luxury kitchens, spa bathrooms, and architectural interiors from VCV Vegas across the Las Vegas valley.',
  alternates: { canonical: `${siteConfig.url}/lookbook` },
};

// A curated mix designed to read as a magazine spread, not a portfolio grid.
const lookbook: { image: LuxeImage; aspect: 'tall' | 'wide' | 'square' | 'portrait' }[] = [
  { image: kitchenImages[0], aspect: 'wide' },
  { image: bathroomImages[0], aspect: 'tall' },
  { image: customHomeImages[0], aspect: 'portrait' },
  { image: kitchenImages[3], aspect: 'square' },
  { image: bathroomImages[3], aspect: 'wide' },
  { image: kitchenImages[2], aspect: 'tall' },
  { image: customHomeImages[3], aspect: 'portrait' },
  { image: flooringImages[0], aspect: 'wide' },
  { image: bathroomImages[2], aspect: 'square' },
  { image: customHomeImages[1], aspect: 'portrait' },
  { image: remodelImages[0], aspect: 'wide' },
  { image: bathroomImages[5], aspect: 'tall' },
  { image: kitchenImages[1], aspect: 'square' },
  { image: customHomeImages[5], aspect: 'portrait' },
  { image: bathroomImages[4], aspect: 'wide' },
  { image: flooringImages[2], aspect: 'tall' },
];

const aspectClass = {
  tall: 'aspect-[3/5]',
  wide: 'aspect-[16/10]',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
};

export default function LookbookPage() {
  return (
    <>
      <CinematicHero
        eyebrow="Lookbook"
        title="A visual"
        italic="standard."
        description="A magazine-grade selection of finishes, materials, and rooms from VCV Vegas. No commentary — just the spaces."
        images={[kitchenImages[3], bathroomImages[0], customHomeImages[0], kitchenImages[0], bathroomImages[3]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Lookbook' }]}
      />

      <section className="bg-ink py-16 lg:py-24">
        <div className="container-luxe">
          {/* Editorial header strip above the masonry */}
          <div className="mb-12 flex items-center justify-between gap-6 border-b border-bone/10 pb-6">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-10 bg-gradient-to-r from-gold via-gold/40 to-transparent" />
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(252,187,0,0.7)]" />
              <p className="eyebrow !text-bone">Studio Selects · 2026</p>
            </div>
            <p className="text-[0.6rem] uppercase tracking-[0.28em] text-bone/45 tabular-nums">
              {lookbook.length} frames
            </p>
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-6">
            {lookbook.map(({ image, aspect }, i) => (
              <Reveal key={i} className="mb-4 break-inside-avoid lg:mb-6">
                <figure className={`group relative overflow-hidden bg-ink-700 transition-shadow duration-700 hover:shadow-[0_25px_60px_-20px_rgba(252,187,0,0.25)] ${aspectClass[aspect]}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                  />
                  {/* Amber sweep on hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background:
                        'radial-gradient(circle at 12% 100%, rgba(252,187,0,0.18), transparent 55%)',
                    }}
                  />
                  {/* Gold corner ticks — appear on hover */}
                  <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-gold/0 transition-colors duration-500 group-hover:border-gold" />
                  <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-gold/0 transition-colors duration-500 group-hover:border-gold" />
                </figure>
              </Reveal>
            ))}
          </div>

          {/* Editorial closing counter strip */}
          <div className="mt-12 flex items-center justify-center gap-4 text-[0.62rem] uppercase tracking-[0.32em] text-bone/45">
            <span aria-hidden className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
            <span aria-hidden className="h-1 w-1 rounded-full bg-gold shadow-[0_0_6px_rgba(252,187,0,0.6)]" />
            <span>End of selects</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-accent shadow-[0_0_6px_rgba(59,130,246,0.6)]" />
            <span aria-hidden className="h-px w-12 bg-gradient-to-l from-transparent to-accent/60" />
          </div>
        </div>
      </section>

      <CTASection
        title="Take the lookbook home."
        description="A senior designer will translate your favorite references into a real plan. By private consultation."
        image={kitchenImages[0]}
      />
    </>
  );
}
