import { Reveal } from './Reveal';
import { ImageCard } from './ImageCard';
import type { LuxeImage } from '@/lib/images';
import { cn } from '@/lib/utils';

type Props = {
  eyebrow: string;
  title: string;
  italic?: string;
  body: string[];
  bullets?: string[];
  image: LuxeImage;
  reverse?: boolean;
};

export function TwoColumnFeature({
  eyebrow,
  title,
  italic,
  body,
  bullets,
  image,
  reverse,
}: Props) {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="container-luxe">
        <div
          className={cn(
            'grid items-center gap-12 lg:grid-cols-2 lg:gap-20',
            reverse && 'lg:[&>*:first-child]:order-2',
          )}
        >
          <Reveal>
            <ImageCard image={image} aspect="portrait" caption={false} />
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow mb-6">{eyebrow}</p>
            <h2 className="font-display text-4xl text-bone text-balance md:text-5xl">
              {title}
              {italic && (
                <>
                  {' '}
                  <span className="italic text-bone">{italic}</span>
                </>
              )}
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-bone/70">
              {body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {bullets && (
              <ul className="mt-10 grid gap-4 border-t border-bone/10 pt-8 sm:grid-cols-2">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm text-bone/75"
                  >
                    <span className="mt-2 h-px w-4 shrink-0 bg-gold" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
