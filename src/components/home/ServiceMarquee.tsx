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
    <section className="relative overflow-hidden bg-bone-800/40 py-9">
      {/* Top gradient hairline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(252,187,0,0.45) 35%, rgba(59,130,246,0.45) 65%, transparent 100%)',
        }}
      />
      {/* Bottom gradient hairline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(59,130,246,0.45) 35%, rgba(252,187,0,0.45) 65%, transparent 100%)',
        }}
      />

      {/* Fade edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-bone-800 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-bone-800 to-transparent"
      />

      <div className="flex w-max animate-marquee items-center gap-12 md:gap-16">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-12 md:gap-16">
            <span className="font-display text-3xl text-ink/85 transition-colors duration-500 hover:text-ink hover:[text-shadow:0_0_20px_rgba(252,187,0,0.4)] md:text-4xl lg:text-5xl">
              {item}
            </span>
            <span
              aria-hidden
              className={`h-1.5 w-1.5 shrink-0 rounded-full ${i % 2 === 0 ? 'bg-gold shadow-[0_0_8px_rgba(252,187,0,0.6)]' : 'bg-accent shadow-[0_0_8px_rgba(59,130,246,0.6)]'}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
