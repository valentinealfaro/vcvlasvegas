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
    <section className="overflow-hidden border-y border-bone/8 bg-ink py-7">
      <div className="container-luxe">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[0.62rem] uppercase tracking-[0.32em] text-bone/45 md:gap-x-14">
          {items.map((item, i) => (
            <span key={item} className="flex items-center gap-10">
              {i > 0 && <span className="hidden h-px w-6 bg-gold/40 md:inline-block" aria-hidden />}
              <span className="transition-colors hover:text-bone">{item}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
