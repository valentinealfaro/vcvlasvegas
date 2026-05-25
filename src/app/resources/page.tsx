import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  Calculator,
  Sparkles,
  BookOpen,
  FileText,
  Layers,
  Images,
  HelpCircle,
  Wrench,
} from 'lucide-react';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { customHomeImages, kitchenImages, bathroomImages, flooringImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Resources · VCV Vegas',
  description:
    'Every studio tool and reference surface in one place — Investment Calculator, Style Quiz, Cost Guide, Material Selection, Finish Library, Lookbook, Journal, and FAQ.',
  alternates: { canonical: `${siteConfig.url}/resources` },
};

type Resource = {
  icon: typeof Calculator;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  image: typeof kitchenImages[number];
  group: 'interactive' | 'reference' | 'editorial';
};

const resources: Resource[] = [
  {
    icon: Calculator,
    eyebrow: 'Interactive · 90s',
    title: 'Investment Calculator',
    description:
      'A three-step estimator tuned to real VCV Vegas project data. Indicative range and build window in seconds, detailed breakdown by email.',
    href: '/investment',
    image: kitchenImages[0],
    group: 'interactive',
  },
  {
    icon: Sparkles,
    eyebrow: 'Interactive · 90s',
    title: 'Find Your Style',
    description:
      'A four-question style profile — architecture, material warmth, light, and scope. Sample palette and direction at the end.',
    href: '/style',
    image: bathroomImages[3],
    group: 'interactive',
  },
  {
    icon: FileText,
    eyebrow: 'Reference · Read',
    title: '2026 Cost Guide',
    description:
      'An honest, studio-written guide to luxury remodel pricing across the Las Vegas valley. Ranges, drivers, real-cost references, FAQs.',
    href: '/luxury-remodel-cost-las-vegas',
    image: customHomeImages[0],
    group: 'reference',
  },
  {
    icon: Wrench,
    eyebrow: 'Reference · Process',
    title: 'Material Selection',
    description:
      'How the studio specifies materials — yard visits, slab selection, dry-lay fabrication review, sample boxes, finish schedule.',
    href: '/material-selection',
    image: flooringImages[0],
    group: 'reference',
  },
  {
    icon: Layers,
    eyebrow: 'Reference · Library',
    title: 'The Finish Library',
    description:
      'Curated stone, wood, metal, glass, lighting, and floor selections that show up in every VCV Vegas project.',
    href: '/materials',
    image: kitchenImages[1],
    group: 'reference',
  },
  {
    icon: Images,
    eyebrow: 'Reference · Visual',
    title: 'The Lookbook',
    description:
      'A magazine-style multi-column gallery of completed rooms, materials, and architectural moments.',
    href: '/lookbook',
    image: kitchenImages[3],
    group: 'reference',
  },
  {
    icon: BookOpen,
    eyebrow: 'Editorial · Long-Read',
    title: 'The Journal',
    description:
      'Studio notes on luxury remodeling — finish details, spa bathroom design, opening up floor plans, contractor selection, pre-construction.',
    href: '/journal',
    image: customHomeImages[1],
    group: 'editorial',
  },
  {
    icon: HelpCircle,
    eyebrow: 'Reference · Q&A',
    title: 'FAQ',
    description:
      'Direct answers to the most common questions — investment, timeline, process, neighborhoods, materials, warranty.',
    href: '/faq',
    image: bathroomImages[0],
    group: 'reference',
  },
];

const groups: { key: Resource['group']; label: string; title: string; description: string }[] = [
  {
    key: 'interactive',
    label: 'Interactive Tools',
    title: 'Try a tool.',
    description:
      'Two short interactive surfaces tuned to real studio data. Both return a personalized response by email.',
  },
  {
    key: 'reference',
    label: 'Reference Material',
    title: 'Read the references.',
    description:
      'Six studio-written reference surfaces covering cost, materials, process, and visual standards.',
  },
  {
    key: 'editorial',
    label: 'Editorial',
    title: 'Studio notes.',
    description:
      'Five long-form essays from the studio on design, materials, and the disciplines behind a luxury build.',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Resources', url: `${siteConfig.url}/resources` },
        ])}
      />

      <CinematicHero
        eyebrow="Studio Resources"
        title="Every tool and"
        italic="reference, in one place."
        description="An index of every interactive surface, reference document, and editorial note the studio has published. Built for prospects researching a luxury Las Vegas remodel."
        images={[kitchenImages[0], customHomeImages[0], bathroomImages[0], flooringImages[0]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Resources' }]}
      />

      {groups.map((group, gi) => (
        <section
          key={group.key}
          className={gi % 2 === 0 ? 'bg-ink py-24 lg:py-32' : 'bg-ink-800 py-24 lg:py-32'}
        >
          <div className="container-luxe">
            <SectionHeader
              eyebrow={group.label}
              title={group.title}
              description={group.description}
            />
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
              {resources
                .filter((r) => r.group === group.key)
                .map((r, i) => {
                  const Icon = r.icon;
                  return (
                    <Reveal key={r.href} delay={i % 2}>
                      <Link
                        href={r.href}
                        className="group relative block h-full overflow-hidden border border-bone/15 bg-ink transition-all duration-500 hover:border-gold"
                      >
                        <div className="grid lg:grid-cols-[1.1fr_1fr]">
                          <div className="p-8 lg:p-10">
                            <Icon className="h-6 w-6 text-gold transition-colors group-hover:text-gold-light" />
                            <p className="eyebrow mt-6 !text-bone/45">{r.eyebrow}</p>
                            <p className="mt-3 font-display text-2xl text-bone group-hover:text-gold-light md:text-3xl">
                              {r.title}
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-bone/60">
                              {r.description}
                            </p>
                            <div className="mt-6 flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-gold">
                              Open
                              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:rotate-45" />
                            </div>
                          </div>
                          <div className="relative aspect-[4/3] lg:aspect-auto">
                            <Image
                              src={r.image.src}
                              alt={r.image.alt}
                              fill
                              sizes="(max-width: 1024px) 100vw, 25vw"
                              className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-ink/60" />
                          </div>
                        </div>
                      </Link>
                    </Reveal>
                  );
                })}
            </div>
          </div>
        </section>
      ))}

      <CTASection
        title="Ready to put the tools down?"
        description="When the research is done, a senior designer is available — by private appointment, within one business day."
        image={customHomeImages[1]}
      />
    </>
  );
}
