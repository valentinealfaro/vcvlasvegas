const items = [
  'Luxury Kitchens',
  'Spa Bathrooms',
  'Whole-Home Renovation',
  'Architectural Build',
  'Custom Millwork',
  'Outdoor Living',
  'Wine Rooms',
  'High-Rise Interiors',
  'Investor Repositioning',
  'Trade-Only Specification',
];

export function ServiceMarquee() {
  // Duplicate items so the animation loops seamlessly
  const loop = [...items, ...items];

  return (
    <section className="relative border-y border-bone/8 overflow-hidden bg-ink-800/40 py-8">
      {/* Fade edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink-800 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink-800 to-transparent"
      />

      <div className="flex w-max animate-marquee items-center gap-12 md:gap-16">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-12 md:gap-16">
            <span className="font-display text-3xl text-bone/85 md:text-4xl lg:text-5xl">
              {item}
            </span>
            <span
              aria-hidden
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
