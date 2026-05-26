import { ShieldCheck, BadgeCheck, Hammer, Gem } from 'lucide-react';

const items = [
  { icon: ShieldCheck, label: 'Licensed · Insured · Bonded' },
  { icon: BadgeCheck, label: 'Design-Build Studio' },
  { icon: Hammer, label: 'Trade-Only Specifications' },
  { icon: Gem, label: 'One-Year Service Relationship' },
];

export function TrustBar() {
  return (
    <section className="relative border-y border-ink/8 bg-bone/95">
      <div className="container-luxe py-7">
        <div className="border-gradient">
          <div className="grid grid-cols-2 gap-px bg-ink/10 bg-bone/95 md:grid-cols-4">
            {items.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group relative flex items-center justify-center gap-3 overflow-hidden bg-bone/95 px-6 py-6 text-center transition-colors duration-500 hover:bg-bone-700 md:py-7"
              >
                {/* Diagonal gold shimmer sweep on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/8 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                />
                <Icon
                  className="relative h-4 w-4 shrink-0 text-ink transition-all duration-500 group-hover:scale-110 group-hover:text-gold group-hover:drop-shadow-[0_0_6px_rgba(252,187,0,0.7)]"
                  aria-hidden
                />
                <span className="relative text-[0.7rem] uppercase tracking-[0.24em] text-ink/70 transition-colors duration-500 group-hover:text-ink md:text-[0.72rem]">
                  {label}
                </span>
                {/* Bottom gold underline that grows on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-500 group-hover:w-2/3"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
