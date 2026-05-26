import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { CinematicHero } from '@/components/CinematicHero';
import { ImageCard } from '@/components/ImageCard';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { SectionHeader } from '@/components/SectionHeader';
import {
  kitchenImages,
  bathroomImages,
  customHomeImages,
  flooringImages,
  remodelImages,
} from '@/lib/images';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Selected Projects · VCV Vegas',
  description:
    'A selection of luxury kitchens, bathrooms, whole-home renovations, and custom builds from VCV Vegas across the Las Vegas metro.',
  alternates: { canonical: `${siteConfig.url}/projects` },
};

const sections = [
  {
    label: 'Kitchens',
    items: kitchenImages,
  },
  {
    label: 'Bathrooms',
    items: bathroomImages,
  },
  {
    label: 'Whole-Home',
    items: remodelImages,
  },
  {
    label: 'Custom Builds',
    items: customHomeImages,
  },
  {
    label: 'Flooring',
    items: flooringImages,
  },
];

export default function ProjectsPage() {
  return (
    <>
      <CinematicHero
        eyebrow="Selected Work"
        title="A quiet"
        italic="portfolio."
        description="A curated selection of recent VCV Vegas projects across kitchens, bathrooms, whole-home renovations, and custom builds in the Las Vegas valley."
        images={[kitchenImages[1], bathroomImages[0], customHomeImages[1], kitchenImages[0], bathroomImages[3]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
      />

      {/* Featured case studies */}
      <section className="bg-bone py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Featured Project Studies"
            title="A closer look."
            description="Representative VCV Vegas commissions — opened up, broken down, and walked through end to end."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {[
              {
                href: '/projects/the-summerlin-residence',
                eyebrow: 'Project Study · 01',
                title: 'The Summerlin',
                italic: 'Residence.',
                scope: 'Kitchen · Primary Suite · Great Room · Patio',
                image: kitchenImages[0],
              },
              {
                href: '/projects/macdonald-highlands-residence',
                eyebrow: 'Project Study · 02',
                title: 'The MacDonald',
                italic: 'Highlands Residence.',
                scope: 'Kitchen · Primary · Wine Room · Outdoor',
                image: customHomeImages[1],
              },
              {
                href: '/projects/the-paradise-penthouse',
                eyebrow: 'Project Study · 03',
                title: 'The Paradise',
                italic: 'Penthouse.',
                scope: 'Kitchen · Primary · Powder · Terrace',
                image: kitchenImages[3],
              },
            ].map((s, i) => (
              <Reveal key={s.href} delay={i}>
                <Link
                  href={s.href}
                  className="group relative block aspect-[4/5] w-full overflow-hidden bg-bone-700 transition-shadow duration-700 group-hover:shadow-[0_30px_80px_-20px_rgba(252,187,0,0.25)]"
                >
                  <Image
                    src={s.image.src}
                    alt={`${s.title} ${s.italic} — featured project study`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bone/85 via-bone/35 to-transparent" />
                  {/* Amber sweep on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background:
                        'radial-gradient(circle at 12% 100%, rgba(252,187,0,0.22), transparent 55%)',
                    }}
                  />
                  {/* Gold corner ticks at all four corners */}
                  <span aria-hidden className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-gold/40 transition-colors duration-500 group-hover:border-gold" />
                  <span aria-hidden className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r border-t border-gold/40 transition-colors duration-500 group-hover:border-gold" />
                  <span aria-hidden className="pointer-events-none absolute bottom-4 left-4 h-4 w-4 border-b border-l border-gold/40 transition-colors duration-500 group-hover:border-gold" />
                  <span aria-hidden className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b border-r border-gold/40 transition-colors duration-500 group-hover:border-gold" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                    <div className="mb-4 flex items-center gap-3">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(252,187,0,0.7)]" />
                      <p className="eyebrow !text-ink">{s.eyebrow}</p>
                    </div>
                    <h3 className="font-display text-3xl text-ink md:text-5xl">
                      {s.title}{' '}
                      <span className="italic text-ink">{s.italic}</span>
                    </h3>
                    <p className="mt-3 max-w-md text-ink/70">{s.scope}</p>
                    <div className="mt-5 inline-flex items-center gap-3 self-start text-[0.7rem] uppercase tracking-[0.28em] text-ink">
                      <span className="relative">
                        Read the case study
                        <span aria-hidden className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                      </span>
                      <ArrowUpRight className="h-4 w-4 transition-all duration-500 group-hover:rotate-45 group-hover:text-gold" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {sections.map((section, sIdx) => (
        <section
          key={section.label}
          className={sIdx % 2 === 0 ? 'bg-bone py-24 lg:py-32' : 'bg-bone-800 py-24 lg:py-32'}
        >
          <div className="container-luxe">
            <SectionHeader eyebrow={`Portfolio · ${section.label}`} title={section.label} />
            <div className="mt-16 grid gap-4 md:grid-cols-3 lg:gap-6">
              {section.items.map((img, i) => (
                <Reveal key={`${section.label}-${i}`} delay={i % 3}>
                  <ImageCard image={img} aspect={i % 4 === 0 ? 'tall' : 'portrait'} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}
