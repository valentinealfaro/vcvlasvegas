import { ImageCard } from './ImageCard';
import type { LuxeImage } from '@/lib/images';

export function ImageRow({
  images,
}: {
  images: LuxeImage[];
}) {
  return (
    <section className="relative bg-ink py-24 lg:py-32">
      <div className="container-luxe">
        <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
          {images.map((img, i) => (
            <ImageCard
              key={i}
              image={img}
              aspect={i === 1 ? 'tall' : 'portrait'}
              caption
              cornerTicks={i === 1}
            />
          ))}
        </div>
        {/* Editorial counter strip below the row */}
        <div className="mt-8 flex items-center justify-center gap-4 text-[0.62rem] uppercase tracking-[0.32em] text-bone/45">
          <span aria-hidden className="h-px w-8 bg-gradient-to-r from-transparent to-gold/60" />
          <span aria-hidden className="h-1 w-1 rounded-full bg-gold shadow-[0_0_6px_rgba(252,187,0,0.6)]" />
          <span>Selected work</span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-accent shadow-[0_0_6px_rgba(59,130,246,0.6)]" />
          <span aria-hidden className="h-px w-8 bg-gradient-to-l from-transparent to-accent/60" />
        </div>
      </div>
    </section>
  );
}
