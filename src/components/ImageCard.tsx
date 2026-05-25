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
}: Props) {
  return (
    <figure className={cn('group relative overflow-hidden bg-ink-700', aspectMap[aspect], className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent" />
      {caption && image.caption && (
        <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 lg:p-6">
          <p className="font-display text-lg text-bone md:text-xl">
            {image.caption}
          </p>
          <span className="h-px flex-1 max-w-12 bg-gold/60" />
        </figcaption>
      )}
    </figure>
  );
}
