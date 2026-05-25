import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
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
      <PageHero
        eyebrow="Selected Work"
        title="A quiet"
        italic="portfolio."
        description="A curated selection of recent VCV Vegas projects across kitchens, bathrooms, whole-home renovations, and custom builds in the Las Vegas valley."
        image={kitchenImages[1]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
      />

      {/* Featured case study */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Featured Project Study"
            title="A closer look."
            description="A representative VCV Vegas commission — opened up, broken down, and walked through end to end."
          />
          <Reveal delay={2} className="mt-16">
            <Link
              href="/projects/the-summerlin-residence"
              className="group relative block aspect-[16/10] w-full overflow-hidden bg-ink-700"
            >
              <Image
                src={kitchenImages[0].src}
                alt="The Summerlin Residence — featured project study"
                fill
                priority
                sizes="100vw"
                className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
                <p className="eyebrow mb-4 !text-gold-light">Project Study · 01</p>
                <h3 className="font-display text-4xl text-bone md:text-6xl lg:text-7xl">
                  The Summerlin{' '}
                  <span className="italic text-gold-light">Residence.</span>
                </h3>
                <p className="mt-4 max-w-xl text-bone/70">
                  Kitchen · Primary Suite · Great Room · Patio — opened up,
                  re-imagined, and finished to studio standard.
                </p>
                <div className="mt-6 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.28em] text-gold">
                  Read the case study
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </div>
              </div>
            </Link>
          </Reveal>
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
