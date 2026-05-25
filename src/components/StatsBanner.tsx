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
    <section className="relative isolate overflow-hidden bg-ink py-24 lg:py-32">
      <div aria-hidden className="glow-duotone" />

      <div className="container-luxe">
        <Reveal>
          <div className="border-gradient">
            <div className="grid gap-px bg-bone/10 bg-ink-800 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal
                    key={s.label}
                    delay={i}
                    className="group relative overflow-hidden bg-ink-800 p-8 transition-colors duration-500 hover:bg-ink-700 lg:p-10"
                  >
                    {/* Per-tile subtle gradient sweep on hover */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                      style={{
                        background:
                          i % 2 === 0
                            ? 'radial-gradient(circle at 100% 0%, rgba(252,187,0,0.12), transparent 60%)'
                            : 'radial-gradient(circle at 0% 100%, rgba(59,130,246,0.12), transparent 60%)',
                      }}
                    />
                    <Icon className="h-6 w-6 text-bone transition-transform duration-500 group-hover:scale-110" />
                    <p className="mt-8 font-display text-5xl text-bone md:text-6xl">
                      <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
                    </p>
                    <p className="mt-4 text-[0.65rem] uppercase tracking-[0.28em] text-bone">
                      {s.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-bone/55">
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
