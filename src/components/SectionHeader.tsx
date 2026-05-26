import { Reveal } from './Reveal';
import { cn } from '@/lib/utils';

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: Props) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <div
            className={cn(
              'mb-6 flex items-center gap-4',
              align === 'center' && 'justify-center',
            )}
          >
            {align !== 'center' && (
              <span
                aria-hidden
                className="h-px w-12 origin-left bg-gradient-to-r from-gold via-gold to-transparent"
                style={{
                  animation: 'fade-up 0.9s cubic-bezier(0.16,1,0.3,1) backwards, hairline-grow 1.2s cubic-bezier(0.16,1,0.3,1) backwards',
                }}
              />
            )}
            {align === 'center' && (
              <span
                aria-hidden
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold shadow-[0_0_10px_rgba(252,187,0,0.7)]"
              />
            )}
            <p className="eyebrow !text-ink">{eyebrow}</p>
            <span
              aria-hidden
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold shadow-[0_0_10px_rgba(252,187,0,0.7)]"
            />
            {align === 'center' && (
              <span
                aria-hidden
                className="h-px w-12 bg-gradient-to-l from-gold via-gold to-transparent"
                style={{
                  animation: 'fade-up 0.9s cubic-bezier(0.16,1,0.3,1) backwards, hairline-grow 1.2s cubic-bezier(0.16,1,0.3,1) backwards',
                }}
              />
            )}
          </div>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2 className="font-display text-4xl text-ink text-balance md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={1}>
        <div
          aria-hidden
          className={cn(
            'mt-5 h-px w-24 bg-gradient-to-r from-gold via-gold/40 to-transparent',
            align === 'center' && 'mx-auto bg-gradient-to-r from-transparent via-gold to-transparent',
          )}
        />
      </Reveal>
      {description && (
        <Reveal delay={2}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/65 md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
