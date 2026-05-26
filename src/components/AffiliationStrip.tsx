const items = [
  'Licensed Nevada Contractor',
  'Bonded & Insured',
  'Design-Build Studio',
  'NKBA Principles',
  'Trade-Only Specifications',
  'One-Year Service',
];

export function AffiliationStrip() {
  return (
    <section className="relative overflow-hidden bg-bone py-9">
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
      {/* Soft ambient amber glow at the band's heart */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(252,187,0,0.05), transparent 60%)',
        }}
      />

      <div className="container-luxe relative">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 md:gap-x-6">
          {items.map((item, i) => (
            <div key={item} className="flex items-center gap-4 md:gap-6">
              {i > 0 && (
                <span
                  aria-hidden
                  className="hidden h-1 w-1 rounded-full bg-gold/60 md:inline-block"
                />
              )}
              <span className="group relative flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.32em] text-ink/55 transition-colors duration-500 hover:text-ink">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-gold/50 transition-all duration-500 group-hover:bg-gold group-hover:shadow-[0_0_8px_rgba(252,187,0,0.7)]"
                />
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
