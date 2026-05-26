import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';
import { servicesIndex } from '@/lib/site';
import {
  bathroomImages,
  kitchenImages,
  remodelImages,
  customHomeImages,
  flooringImages,
} from './../lib/images';
import type { LuxeImage } from '@/lib/images';

const imageBySlug: Record<string, LuxeImage> = {
  'bathroom-remodeling-las-vegas': bathroomImages[0],
  'kitchen-remodeling-las-vegas': kitchenImages[0],
  'home-remodeling-las-vegas': remodelImages[0],
  'general-contractor-las-vegas': customHomeImages[0],
  'luxury-renovations-las-vegas': customHomeImages[1],
  'modern-bathroom-design-las-vegas': bathroomImages[3],
  'outdoor-living-las-vegas': customHomeImages[3],
  'investor-remodels-las-vegas': remodelImages[1],
};

export function RelatedServices({
  slugs,
  eyebrow = 'See the Work',
  title = 'Explore the studio.',
  description,
}: {
  slugs: string[];
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  const services = slugs
    .map((s) => servicesIndex.find((sv) => sv.slug === s))
    .filter((s): s is (typeof servicesIndex)[number] => Boolean(s));

  if (services.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div aria-hidden className="glow-amber" />

      <div className="container-luxe">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-10">
          {services.map((s, i) => {
            const img = imageBySlug[s.slug] ?? flooringImages[0];
            return (
              <Reveal key={s.slug} delay={i}>
                <Link
                  href={`/${s.slug}`}
                  className="group block transition-transform duration-500 ease-out hover:-translate-y-1"
                >
                  <figure className="relative aspect-[16/10] overflow-hidden bg-ink-700 transition-shadow duration-700 group-hover:shadow-[0_25px_60px_-20px_rgba(252,187,0,0.25)]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                      style={{
                        background:
                          'radial-gradient(circle at 12% 100%, rgba(252,187,0,0.18), transparent 55%)',
                      }}
                    />
                    {/* Gold corner ticks — appear on hover */}
                    <span aria-hidden className="pointer-events-none absolute left-4 top-4 h-3 w-3 border-l border-t border-gold/0 transition-colors duration-500 group-hover:border-gold" />
                    <span aria-hidden className="pointer-events-none absolute bottom-4 right-4 h-3 w-3 border-b border-r border-gold/0 transition-colors duration-500 group-hover:border-gold" />
                  </figure>
                  <div className="mt-6">
                    <div className="flex items-center gap-3">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold/60 transition-all duration-500 group-hover:bg-gold group-hover:shadow-[0_0_8px_rgba(252,187,0,0.7)]" />
                      <p className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/45">
                        {s.eyebrow}
                      </p>
                    </div>
                    <h3 className="mt-3 font-display text-2xl text-bone transition-colors group-hover:text-bone md:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm text-bone/60">{s.summary}</p>
                    <span
                      aria-hidden
                      className="mt-3 block h-px w-0 bg-gold transition-all duration-700 ease-out group-hover:w-12 group-hover:shadow-[0_0_8px_rgba(252,187,0,0.6)]"
                    />
                    <div className="mt-4 inline-flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-bone">
                      <span className="relative">
                        Explore the service
                        <span aria-hidden className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                      </span>
                      <ArrowUpRight className="h-3 w-3 transition-all duration-500 group-hover:rotate-45 group-hover:text-gold" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
