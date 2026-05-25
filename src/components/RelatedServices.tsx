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
    <section className="bg-ink py-24 lg:py-32">
      <div className="container-luxe">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-10">
          {services.map((s, i) => {
            const img = imageBySlug[s.slug] ?? flooringImages[0];
            return (
              <Reveal key={s.slug} delay={i}>
                <Link href={`/${s.slug}`} className="group block">
                  <figure className="relative aspect-[16/10] overflow-hidden bg-ink-700">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                  </figure>
                  <div className="mt-6">
                    <p className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/45">
                      {s.eyebrow}
                    </p>
                    <h3 className="mt-3 font-display text-2xl text-bone transition-colors group-hover:text-gold md:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm text-bone/60">{s.summary}</p>
                    <div className="mt-5 flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-gold">
                      Explore the service
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover:rotate-45" />
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
