import type { Metadata } from 'next';
import Link from 'next/link';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { customHomeImages, kitchenImages } from '@/lib/images';
import { siteConfig, servicesIndex, cityPages } from '@/lib/site';
import { journalPosts } from '@/lib/journal';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Site Index · VCV Vegas',
  description:
    'A complete index of every page on the VCV Vegas site — services, neighborhoods, project studies, journal notes, studio pages, and conversion paths.',
  alternates: { canonical: `${siteConfig.url}/site-index` },
};

const sections: { title: string; eyebrow: string; links: { label: string; href: string }[] }[] = [
  {
    eyebrow: 'Studio',
    title: 'The Studio',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'A Letter from the Studio', href: '/letter' },
      { label: 'Why VCV Vegas', href: '/why-vcv-vegas' },
      { label: 'Now', href: '/now' },
      { label: 'Our Process', href: '/process' },
      { label: 'Standards', href: '/standards' },
      { label: 'Material Selection', href: '/material-selection' },
    ],
  },
  {
    eyebrow: 'Services',
    title: 'Services',
    links: servicesIndex.map((s) => ({ label: s.title, href: `/${s.slug}` })),
  },
  {
    eyebrow: 'Engagement',
    title: 'How to Work With Us',
    links: [
      { label: 'Engagement Tiers', href: '/engagement' },
      { label: 'Studio Concierge', href: '/concierge' },
      { label: 'For Architects & Designers', href: '/for-architects-and-designers' },
      { label: 'By Appointment', href: '/visit' },
      { label: 'Project Brief Intake', href: '/intake' },
      { label: 'Contact', href: '/contact' },
      { label: 'Start Here', href: '/start' },
    ],
  },
  {
    eyebrow: 'Neighborhoods',
    title: 'Service Area',
    links: [
      { label: 'All Neighborhoods', href: '/neighborhoods' },
      ...cityPages.map((c) => ({ label: c.city, href: `/${c.slug}` })),
    ],
  },
  {
    eyebrow: 'Editorial',
    title: 'Project Studies & Journal',
    links: [
      { label: 'All Projects', href: '/projects' },
      { label: 'The Summerlin Residence', href: '/projects/the-summerlin-residence' },
      { label: 'The MacDonald Highlands Residence', href: '/projects/macdonald-highlands-residence' },
      { label: 'The Journal', href: '/journal' },
      ...journalPosts.map((p) => ({ label: p.title, href: `/journal/${p.slug}` })),
    ],
  },
  {
    eyebrow: 'Resources',
    title: 'Tools & References',
    links: [
      { label: 'Studio Resources Index', href: '/resources' },
      { label: 'Investment Calculator', href: '/investment' },
      { label: '2026 Cost Guide', href: '/luxury-remodel-cost-las-vegas' },
      { label: 'Find Your Style', href: '/style' },
      { label: 'The Finish Library', href: '/materials' },
      { label: 'Lookbook', href: '/lookbook' },
      { label: 'FAQ', href: '/faq' },
      { label: 'RSS Feed', href: '/feed.xml' },
    ],
  },
];

export default function SiteIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Site Index', url: `${siteConfig.url}/site-index` },
        ])}
      />

      <CinematicHero
        eyebrow="Site Index"
        title="Every page,"
        italic="in one place."
        description="A complete table of contents for the VCV Vegas site — the studio, the services, the neighborhoods, the editorial, and the tools. Built for thorough readers."
        images={[customHomeImages[0], kitchenImages[0], customHomeImages[1]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Site Index' }]}
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Table of Contents"
            title="The site at a glance."
            description="Roughly fifty pages organized into six categories. Click anything to jump straight in."
          />

          <div className="mt-16 grid gap-px bg-bone/10 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, i) => (
              <Reveal key={section.title} delay={i % 3} className="bg-ink p-8 lg:p-10">
                <p className="eyebrow mb-3">{section.eyebrow}</p>
                <h2 className="font-display text-2xl text-bone md:text-3xl">
                  {section.title}
                </h2>
                <ul className="mt-6 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="link-quiet text-sm leading-relaxed text-bone/70 transition-colors hover:text-bone"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Found what you needed?"
        description="A senior designer responds to every inquiry within one business day."
        image={kitchenImages[1]}
      />
    </>
  );
}
