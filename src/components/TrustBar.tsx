import { ShieldCheck, BadgeCheck, Hammer, Gem } from 'lucide-react';

const items = [
  { icon: ShieldCheck, label: 'Licensed · Insured · Bonded' },
  { icon: BadgeCheck, label: 'Design-Build Studio' },
  { icon: Hammer, label: 'Trade-Only Specifications' },
  { icon: Gem, label: 'One-Year Service Relationship' },
];

export function TrustBar() {
  return (
    <section className="relative border-y border-bone/8 bg-ink/95">
      <div className="container-luxe">
        <div className="grid grid-cols-2 gap-px bg-bone/10 md:grid-cols-4">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 bg-ink/95 px-6 py-6 text-center md:py-8"
            >
              <Icon className="h-4 w-4 shrink-0 text-gold" aria-hidden />
              <span className="text-[0.7rem] uppercase tracking-[0.24em] text-bone/70 md:text-[0.72rem]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
