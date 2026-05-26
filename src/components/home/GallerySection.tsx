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
        <div className="relative mt-16">
          {/* Decorative gold corner frames — film-strip framing */}
          <span aria-hidden className="pointer-events-none absolute -left-3 -top-3 hidden h-6 w-6 border-l border-t border-gold/50 md:block" />
          <span aria-hidden className="pointer-events-none absolute -right-3 -top-3 hidden h-6 w-6 border-r border-t border-gold/50 md:block" />
          <span aria-hidden className="pointer-events-none absolute -bottom-3 -left-3 hidden h-6 w-6 border-b border-l border-gold/50 md:block" />
          <span aria-hidden className="pointer-events-none absolute -bottom-3 -right-3 hidden h-6 w-6 border-b border-r border-gold/50 md:block" />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-3 md:gap-6 lg:gap-8">
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

          {/* Editorial counter strip below the grid */}
          <div className="mt-8 flex items-center justify-center gap-4 text-[0.62rem] uppercase tracking-[0.32em] text-bone/45">
            <span aria-hidden className="h-px w-8 bg-gradient-to-r from-transparent to-gold/60" />
            <span aria-hidden className="h-1 w-1 rounded-full bg-gold shadow-[0_0_6px_rgba(252,187,0,0.6)]" />
            <span>Six of many</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-accent shadow-[0_0_6px_rgba(59,130,246,0.6)]" />
            <span aria-hidden className="h-px w-8 bg-gradient-to-l from-transparent to-accent/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
