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
      <section className="bg-ink py-24 lg:py-32">
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
                  className="group relative block aspect-[4/5] w-full overflow-hidden bg-ink-700"
                >
                  <Image
                    src={s.image.src}
                    alt={`${s.title} ${s.italic} — featured project study`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                    <p className="eyebrow mb-4 !text-bone">{s.eyebrow}</p>
                    <h3 className="font-display text-3xl text-bone md:text-5xl">
                      {s.title}{' '}
                      <span className="italic text-bone">{s.italic}</span>
                    </h3>
                    <p className="mt-3 max-w-md text-bone/70">{s.scope}</p>
                    <div className="mt-5 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.28em] text-bone">
                      Read the case study
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
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
          className={sIdx % 2 === 0 ? 'bg-ink py-24 lg:py-32' : 'bg-ink-800 py-24 lg:py-32'}
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
