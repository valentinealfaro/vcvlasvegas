import type { Metadata } from 'next';
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
