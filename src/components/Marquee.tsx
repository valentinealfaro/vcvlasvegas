import { ImageCard } from './ImageCard';
import type { LuxeImage } from '@/lib/images';

export function ImageRow({
  images,
}: {
  images: LuxeImage[];
}) {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="container-luxe">
        <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
          {images.map((img, i) => (
            <ImageCard
              key={i}
              image={img}
              aspect={i === 1 ? 'tall' : 'portrait'}
              caption
            />
          ))}
        </div>
      </div>
    </section>
  );
}
