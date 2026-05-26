type Variant = 'duotone' | 'amber' | 'blue';

const palettes: Record<Variant, string> = {
  duotone:
    'linear-gradient(to right, transparent 0%, rgba(252,187,0,0.55) 25%, rgba(59,130,246,0.55) 75%, transparent 100%)',
  amber:
    'linear-gradient(to right, transparent 0%, rgba(252,187,0,0.7) 50%, transparent 100%)',
  blue:
    'linear-gradient(to right, transparent 0%, rgba(59,130,246,0.7) 50%, transparent 100%)',
};

/**
 * A 1px gradient hairline used to mark transitions between sections.
 * Drop between two <section> elements anywhere a divider would be quiet.
 * When `centerDot` is true, a small glowing gold dot sits over the hairline.
 */
export function SectionDivider({
  variant = 'duotone',
  centerDot = false,
  className,
}: {
  variant?: Variant;
  centerDot?: boolean;
  className?: string;
}) {
  if (!centerDot) {
    return (
      <div
        aria-hidden
        className={`h-px w-full ${className ?? ''}`}
        style={{ background: palettes[variant] }}
      />
    );
  }

  return (
    <div aria-hidden className={`relative h-3 w-full ${className ?? ''}`}>
      <div
        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2"
        style={{ background: palettes[variant] }}
      />
      <span
        className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-gold/80 bg-bone shadow-[0_0_10px_rgba(252,187,0,0.6)]"
      />
    </div>
  );
}
