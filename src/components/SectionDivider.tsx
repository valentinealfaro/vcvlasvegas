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
 */
export function SectionDivider({
  variant = 'duotone',
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`h-px w-full ${className ?? ''}`}
      style={{ background: palettes[variant] }}
    />
  );
}
