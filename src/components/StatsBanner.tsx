import { ShieldCheck, Hammer, Calendar, Award } from 'lucide-react';
import { Reveal } from './Reveal';
import { CountUp } from './CountUp';

const stats: { icon: typeof ShieldCheck; value: number; suffix?: string; prefix?: string; label: string; sub: string }[] = [
  {
    icon: ShieldCheck,
    value: 100,
    suffix: '%',
    label: 'Licensed · Insured',
    sub: 'Bonded · NV-PE structural · $2M+ general liability',
  },
  {
    icon: Hammer,
    value: 15,
    suffix: '+',
    label: 'Years In Build',
    sub: 'Combined experience across the studio team',
  },
  {
    icon: Calendar,
    value: 1,
    suffix: ' BD',
    label: 'Response Window',
    sub: 'Every inquiry, every senior designer, every time',
  },
  {
    icon: Award,
    value: 1,
    suffix: '-Source',
    label: 'Design-Build',
    sub: 'Concept through keys-back, under one studio',
  },
];

export function StatsBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-bone py-24 lg:py-32">
      <div aria-hidden className="glow-duotone" />

      <div className="container-luxe">
        <Reveal>
          <div className="border-gradient shadow-[0_16px_50px_-20px_rgba(0,0,0,0.14)]">
            <div className="grid gap-px overflow-hidden bg-ink/10 bg-bone-50 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal
                    key={s.label}
                    delay={i}
                    className="group relative overflow-hidden bg-bone-50 p-8 transition-colors duration-500 hover:bg-bone lg:p-10"
                  >
                    {/* Per-tile subtle gradient sweep on hover — amber / coral / amber / coral */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                      style={{
                        background:
                          i % 2 === 0
                            ? 'radial-gradient(circle at 100% 0%, rgba(252,187,0,0.14), transparent 60%)'
                            : 'radial-gradient(circle at 0% 100%, rgba(249,115,22,0.12), transparent 60%)',
                      }}
                    />
                    {/* Gold corner ticks on hover */}
                    <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-gold/0 transition-colors duration-500 group-hover:border-gold/70" />
                    <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-gold/0 transition-colors duration-500 group-hover:border-gold/70" />
                    <Icon className="h-6 w-6 text-ink transition-all duration-500 group-hover:scale-110 group-hover:text-gold group-hover:drop-shadow-[0_0_8px_rgba(252,187,0,0.7)]" />
                    <p className="mt-8 font-display text-5xl text-ink transition-all duration-500 group-hover:[text-shadow:0_0_28px_rgba(252,187,0,0.45)] md:text-6xl">
                      <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} glow />
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold/60 transition-all duration-500 group-hover:bg-gold group-hover:shadow-[0_0_8px_rgba(252,187,0,0.7)]" />
                      <p className="text-[0.65rem] uppercase tracking-[0.28em] text-ink">
                        {s.label}
                      </p>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink/55 transition-colors duration-500 group-hover:text-ink/80">
                      {s.sub}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
