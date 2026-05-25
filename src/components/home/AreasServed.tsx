import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Reveal } from '../Reveal';
import { siteConfig, cityPages } from '@/lib/site';

export function AreasServed() {
  const profiledSlugs = new Set(cityPages.map((c) => c.city));

  return (
    <section className="relative overflow-hidden border-y border-bone/5 bg-ink py-20 lg:py-28">
      <div aria-hidden className="glow-duotone" />

      <div className="container-luxe">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal>
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center border border-gold/40 bg-gold/5">
                  <MapPin className="h-4 w-4 text-bone" aria-hidden />
                </span>
                <p className="eyebrow !text-bone">Service Area</p>
              </div>
              <h2 className="font-display text-3xl text-bone md:text-4xl">
                Built for the<br />
                <span className="italic text-bone">Las Vegas valley.</span>
              </h2>
              <p className="mt-5 max-w-md text-bone/60">
                Twelve neighborhoods inside the studio's active project radius.
                The first five are profiled with dedicated pages; the rest fall
                under our standing service zone.
              </p>
              <Link
                href="/neighborhoods"
                className="mt-8 inline-flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-bone transition-colors hover:text-bone/80"
              >
                <span>All neighborhoods</span>
                <span aria-hidden className="h-px w-6 bg-gold transition-all duration-500 group-hover:w-10" />
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
                    className={`block border border-bone/15 px-4 py-3 text-[0.7rem] uppercase tracking-[0.22em] transition-all duration-500 ${
                      profiled
                        ? 'cursor-pointer text-bone hover:border-gold hover:bg-gold/5'
                        : 'text-bone/65'
                    }`}
                  >
                    <span className="flex items-center justify-between gap-2">
                      <span>{c}</span>
                      {profiled && (
                        <span
                          aria-hidden
                          className="h-1 w-1 rounded-full bg-gold transition-transform duration-500 hover:scale-150"
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
