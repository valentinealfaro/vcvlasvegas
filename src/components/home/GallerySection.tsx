import { SectionHeader } from '../SectionHeader';
import { ImageCard } from '../ImageCard';
import { Reveal } from '../Reveal';
import { kitchenImages, bathroomImages, customHomeImages, flooringImages } from '@/lib/images';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function GallerySection() {
  const grid = [
    { img: kitchenImages[1], aspect: 'tall' as const, span: 'row-span-2' },
    { img: bathroomImages[3], aspect: 'landscape' as const, span: '' },
    { img: customHomeImages[0], aspect: 'landscape' as const, span: '' },
    { img: kitchenImages[3], aspect: 'tall' as const, span: 'row-span-2' },
    { img: bathroomImages[0], aspect: 'landscape' as const, span: '' },
    { img: flooringImages[0], aspect: 'landscape' as const, span: '' },
  ];

  return (
    <section className="bg-ink py-28 lg:py-40">
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

        <div className="mt-16 grid gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-6">
          {grid.map((g, i) => (
            <Reveal key={i} delay={i} className={g.span}>
              <ImageCard image={g.img} aspect={g.aspect} caption className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
