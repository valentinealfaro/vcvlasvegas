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
          <div className="mb-6 flex items-center gap-4">
            {align !== 'center' && <span className="hairline" />}
            <p className="eyebrow !text-gold">{eyebrow}</p>
          </div>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2 className="font-display text-4xl text-bone text-balance md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={2}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-bone/65 md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
