import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Reveal } from '../Reveal';
import { siteConfig, cityPages } from '@/lib/site';

export function AreasServed() {
  const profiledSlugs = new Set(cityPages.map((c) => c.city));

  return (
    <section className="relative overflow-hidden border-y border-ink/5 bg-bone py-20 lg:py-28">
      <div aria-hidden className="glow-duotone" />

      <div className="container-luxe">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal>
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="relative grid h-9 w-9 place-items-center overflow-hidden border border-gold/40 bg-gold/5 shadow-[0_0_18px_-4px_rgba(252,187,0,0.4)]">
                  <span aria-hidden className="absolute inset-0 bg-gradient-to-br from-gold/15 to-transparent" />
                  <span aria-hidden className="absolute left-1 top-1 h-1.5 w-1.5 border-l border-t border-gold" />
                  <span aria-hidden className="absolute bottom-1 right-1 h-1.5 w-1.5 border-b border-r border-gold" />
                  <MapPin className="relative h-4 w-4 text-ink" aria-hidden />
                </span>
                <p className="eyebrow !text-ink">Service Area</p>
              </div>
              <h2 className="font-display text-3xl text-ink md:text-4xl">
                Built for the<br />
                <span className="italic text-ink">Las Vegas valley.</span>
              </h2>
              <p className="mt-5 max-w-md text-ink/60">
                Twelve neighborhoods inside the studio's active project radius.
                The first five are profiled with dedicated pages; the rest fall
                under our standing service zone.
              </p>
              <Link
                href="/neighborhoods"
                className="group mt-8 inline-flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-ink transition-colors hover:text-ink/80"
              >
                <span>All neighborhoods</span>
                <span aria-hidden className="h-px w-6 bg-gold transition-all duration-500 group-hover:w-12 group-hover:shadow-[0_0_8px_rgba(252,187,0,0.6)]" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
              {siteConfig.serviceArea.map((c, i) => {
                const profiled = profiledSlugs.has(c);
                const slug = cityPages.find((cp) => cp.city === c)?.slug;
                const inner = (
                  <span
                    className={`group relative block overflow-hidden border border-ink/15 px-4 py-3 text-[0.7rem] uppercase tracking-[0.22em] transition-all duration-500 ${
                      profiled
                        ? 'cursor-pointer text-ink hover:border-gold hover:bg-gold/5'
                        : 'text-ink/65'
                    }`}
                  >
                    {profiled && (
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                      />
                    )}
                    <span className="relative flex items-center justify-between gap-2">
                      <span>{c}</span>
                      {profiled && (
                        <span
                          aria-hidden
                          className="h-1.5 w-1.5 rounded-full bg-gold/60 transition-all duration-500 group-hover:bg-gold group-hover:shadow-[0_0_8px_rgba(252,187,0,0.7)]"
                        />
                      )}
                    </span>
                  </span>
                );
                return (
                  <li
                    key={c}
                    style={{
                      animation: `fade-up 0.7s cubic-bezier(0.16,1,0.3,1) ${
                        0.05 * i
                      }s backwards`,
                    }}
                  >
                    {profiled && slug ? <Link href={`/${slug}`}>{inner}</Link> : inner}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
