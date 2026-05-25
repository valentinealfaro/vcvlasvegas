import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
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
      <PageHero
        eyebrow="Lookbook"
        title="A visual"
        italic="standard."
        description="A magazine-grade selection of finishes, materials, and rooms from VCV Vegas. No commentary — just the spaces."
        image={kitchenImages[3]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Lookbook' }]}
      />

      <section className="bg-ink py-16 lg:py-24">
        <div className="container-luxe">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-6">
            {lookbook.map(({ image, aspect }, i) => (
              <Reveal key={i} className="mb-4 break-inside-avoid lg:mb-6">
                <figure className={`relative overflow-hidden bg-ink-700 ${aspectClass[aspect]}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.04]"
                  />
                </figure>
              </Reveal>
            ))}
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
