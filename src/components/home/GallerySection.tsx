import { SectionHeader } from '../SectionHeader';
import { ImageCard } from '../ImageCard';
import { Reveal } from '../Reveal';
import {
  kitchenImages,
  bathroomImages,
  customHomeImages,
  flooringImages,
} from '@/lib/images';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function GallerySection() {
  // Asymmetric featured-tile layout — one large hero tile + smaller cards
  // surrounding it for editorial cadence.
  return (
    <section className="relative overflow-hidden bg-ink py-28 lg:py-40">
      <div aria-hidden className="glow-amber" />

      <div className="container-luxe">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Selected Work"
            title="Editorial-grade execution."
            description="A glimpse of recent kitchens, bathrooms, and full-home renovations across the Las Vegas metro."
          />
          <Reveal delay={2}>
            <Link href="/projects" className="btn-ghost">
              See all projects
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>

        {/* Featured asymmetric grid:
            - Left column: one large tall hero tile (rows 1-3)
            - Right column: stack of three smaller tiles
            On mobile: simple stack. */}
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-3 md:gap-6 lg:gap-8">
          <Reveal className="md:col-span-2 md:row-span-2">
            <ImageCard image={kitchenImages[0]} aspect="wide" caption className="h-full" />
          </Reveal>
          <Reveal delay={1}>
            <ImageCard image={bathroomImages[0]} aspect="square" caption className="h-full" />
          </Reveal>
          <Reveal delay={2}>
            <ImageCard image={customHomeImages[1]} aspect="square" caption className="h-full" />
          </Reveal>
          <Reveal delay={3}>
            <ImageCard image={kitchenImages[3]} aspect="landscape" caption className="h-full" />
          </Reveal>
          <Reveal delay={4}>
            <ImageCard image={bathroomImages[3]} aspect="landscape" caption className="h-full" />
          </Reveal>
          <Reveal delay={5}>
            <ImageCard image={flooringImages[0]} aspect="landscape" caption className="h-full" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
