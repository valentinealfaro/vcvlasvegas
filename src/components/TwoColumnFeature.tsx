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
    <section className="bg-bone py-24 lg:py-32">
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
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-gold via-gold to-transparent" />
              <p className="eyebrow !text-ink">{eyebrow}</p>
              <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold shadow-[0_0_10px_rgba(252,187,0,0.7)]" />
            </div>
            <h2 className="font-display text-4xl text-ink text-balance md:text-5xl">
              {title}
              {italic && (
                <>
                  {' '}
                  <span className="italic text-ink">{italic}</span>
                </>
              )}
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/70">
              {body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {bullets && (
              <ul className="mt-10 grid gap-4 border-t border-ink/10 pt-8 sm:grid-cols-2">
                {bullets.map((b, i) => (
                  <li
                    key={b}
                    className="group flex items-start gap-3 text-sm text-ink/75 transition-colors hover:text-ink"
                    style={{
                      animation: `fade-up 0.7s cubic-bezier(0.16,1,0.3,1) ${
                        0.08 * i + 0.2
                      }s backwards`,
                    }}
                  >
                    <span
                      aria-hidden
                      className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-500 ${i % 2 === 0 ? 'bg-gold/70 group-hover:bg-gold group-hover:shadow-[0_0_8px_rgba(252,187,0,0.7)]' : 'bg-accent/70 group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(59,130,246,0.7)]'}`}
                    />
                    <span
                      aria-hidden
                      className="mt-2 h-px w-4 shrink-0 bg-gold/60 transition-all duration-500 group-hover:w-7"
                    />
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
