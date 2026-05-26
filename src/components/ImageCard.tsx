import Image from 'next/image';
import type { LuxeImage } from '@/lib/images';
import { cn } from '@/lib/utils';

type Props = {
  image: LuxeImage;
  aspect?: 'portrait' | 'square' | 'landscape' | 'wide' | 'tall';
  priority?: boolean;
  className?: string;
  caption?: boolean;
  sizes?: string;
  cornerTicks?: boolean;
};

const aspectMap = {
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-[16/10]',
  tall: 'aspect-[3/5]',
};

export function ImageCard({
  image,
  aspect = 'portrait',
  priority,
  className,
  caption = true,
  sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
  cornerTicks = false,
}: Props) {
  return (
    <figure className={cn('group relative overflow-hidden bg-bone-700', aspectMap[aspect], className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
      />
      {/* Base bottom-up gradient — always visible for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bone/80 via-bone/0 to-transparent" />
      {/* Amber sweep that lights the bottom-left on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle at 12% 100%, rgba(252,187,0,0.22), transparent 55%)',
        }}
      />
      {cornerTicks && (
        <>
          <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-gold/50 transition-colors duration-500 group-hover:border-gold" />
          <span aria-hidden className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-gold/50 transition-colors duration-500 group-hover:border-gold" />
          <span aria-hidden className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-gold/50 transition-colors duration-500 group-hover:border-gold" />
          <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-gold/50 transition-colors duration-500 group-hover:border-gold" />
        </>
      )}
      {caption && image.caption && (
        <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 lg:p-6">
          <div className="overflow-hidden">
            <p className="font-display text-lg text-ink transition-transform duration-700 ease-out md:text-xl group-hover:-translate-y-1">
              {image.caption}
            </p>
            <span
              aria-hidden
              className="mt-2 block h-px w-0 bg-gold transition-[width] duration-700 ease-out group-hover:w-12"
            />
          </div>
          <span className="h-px flex-1 max-w-12 bg-gold/60 transition-colors duration-500 group-hover:bg-gold" />
        </figcaption>
      )}
    </figure>
  );
}
