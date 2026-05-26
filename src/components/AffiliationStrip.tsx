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
      {/* Top gradient hairline — amber → coral → blue */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(252,187,0,0.6) 30%, rgba(249,115,22,0.6) 50%, rgba(59,130,246,0.6) 70%, transparent 100%)',
        }}
      />
      {/* Bottom gradient hairline — reversed */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(59,130,246,0.6) 30%, rgba(249,115,22,0.6) 50%, rgba(252,187,0,0.6) 70%, transparent 100%)',
        }}
      />
      {/* Soft sunset wash — amber-left, coral-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(252,187,0,0.08), transparent 55%), radial-gradient(ellipse at 80% 50%, rgba(249,115,22,0.06), transparent 55%)',
        }}
      />

      <div className="container-luxe relative">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 md:gap-x-6">
          {items.map((item, i) => (
            <div key={item} className="flex items-center gap-4 md:gap-6">
              {i > 0 && (
                <span
                  aria-hidden
                  className={`hidden h-1 w-1 rounded-full md:inline-block ${i % 2 === 0 ? 'bg-gold/60' : 'bg-coral/60'}`}
                />
              )}
              <span className="group relative flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.32em] text-ink/60 transition-colors duration-500 hover:text-ink">
                <span
                  aria-hidden
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${i % 2 === 0 ? 'bg-gold/60 group-hover:bg-gold group-hover:shadow-[0_0_8px_rgba(252,187,0,0.7)]' : 'bg-coral/60 group-hover:bg-coral group-hover:shadow-[0_0_8px_rgba(249,115,22,0.7)]'}`}
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
