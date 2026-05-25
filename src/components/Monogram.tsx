type Props = {
  className?: string;
  size?: number;
};

export function Monogram({ className, size = 28 }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      role="img"
      aria-label="VCV Vegas monogram"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <text
        x="32"
        y="38"
        textAnchor="middle"
        fontSize="14"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontStyle="italic"
        fontWeight="400"
        fill="currentColor"
        letterSpacing="0.5"
      >
        VCV
      </text>
    </svg>
  );
}
