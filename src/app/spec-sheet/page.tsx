import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Monogram } from '@/components/Monogram';
import { PrintButton } from '@/components/PrintButton';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Specification Sheet · VCV Vegas',
  description:
    'A single-document specification sheet summarizing how VCV Vegas specifies a luxury Las Vegas remodel — print-friendly, save-as-PDF ready.',
  alternates: { canonical: `${siteConfig.url}/spec-sheet` },
};

const sections = [
  {
    h: 'Studio Engagement',
    rows: [
      { l: 'Engagement Model', r: 'Design-Build · Single Source' },
      { l: 'Project Lead', r: 'Senior Designer · End-to-End' },
      { l: 'Pre-Construction', r: '6 – 10 weeks' },
      { l: 'Service Area', r: 'Las Vegas Metro' },
      { l: 'Warranty', r: '1-Year Workmanship Standard' },
    ],
  },
  {
    h: 'Investment Ranges',
    rows: [
      { l: 'Signature Bathroom', r: '$80,000 – $180,000 · 6 – 10 weeks' },
      { l: 'Architectural Bath', r: '$100,000 – $220,000 · 7 – 11 weeks' },
      { l: 'Chef-Grade Kitchen', r: '$150,000 – $350,000+ · 8 – 14 weeks' },
      { l: 'Whole-Home Renovation', r: '$500,000 – $2,000,000+ · 4 – 9 months' },
      { l: 'Outdoor / Patio', r: '$60,000 – $250,000 · 6 – 14 weeks' },
      { l: 'Studio Concierge', r: '$1,000,000+ · Custom Calendar' },
    ],
  },
  {
    h: 'Specification Standards',
    rows: [
      { l: 'Stone', r: 'Honed natural stone · Slab-selected · Dry-laid pre-cut' },
      { l: 'Cabinetry', r: 'Full-custom millwork · Inset doors · Push-latch hardware' },
      { l: 'Appliances', r: 'Sub-Zero · Wolf · Miele · Thermador · Integrated paneling' },
      { l: 'Flooring', r: '9″ wide-plank engineered oak · Large-format porcelain · Honed stone' },
      { l: 'Hardware', r: 'Brushed brass · Matte black · Polished nickel · Antique bronze' },
      { l: 'Glass', r: 'Frameless 1/2″ tempered · Multi-panel pocket walls' },
      { l: 'Lighting', r: 'Four-layer scenes · 2700K · Lutron Caséta or RA3' },
      { l: 'Plumbing', r: 'Trade-only lines · Thermostatic valves · Hand-weight selection' },
    ],
  },
  {
    h: 'Site Disciplines',
    rows: [
      { l: 'Dust Containment', r: 'ZipWalls + HEPA cycling' },
      { l: 'Floor Protection', r: 'Full coverage, service-entry to room' },
      { l: 'Daily Cleanup', r: 'Standard' },
      { l: 'Crew Standard', r: 'Branded uniform · published code of conduct' },
      { l: 'Client Briefings', r: 'Weekly · written summary' },
      { l: 'Build Calendar', r: 'Published before demolition' },
    ],
  },
  {
    h: 'Licensing & Insurance',
    rows: [
      { l: 'Nevada General Contractor', r: 'Licensed · Active' },
      { l: 'General Liability', r: '$2,000,000+' },
      { l: 'Workers Compensation', r: 'Active' },
      { l: 'Bond', r: 'Active' },
      { l: 'Structural Engineering', r: 'NV-licensed PE · per project' },
      { l: 'Permitting', r: 'Managed by pre-construction team' },
    ],
  },
  {
    h: 'Contact',
    rows: [
      { l: 'Studio', r: siteConfig.name },
      { l: 'Phone', r: siteConfig.phone },
      { l: 'Email', r: siteConfig.email },
      { l: 'Web', r: siteConfig.url.replace(/^https?:\/\//, '') },
      { l: 'Hours', r: siteConfig.hours },
    ],
  },
];

export default function SpecSheetPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Spec Sheet', url: `${siteConfig.url}/spec-sheet` },
        ])}
      />

      {/* On-screen header / no-print */}
      <section className="no-print border-b border-bone/10 bg-ink-800/40 pt-32 pb-12">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow mb-4">Specification Sheet</p>
            <h1 className="font-display text-3xl text-bone text-balance md:text-4xl">
              A single-document overview of{' '}
              <span className="italic text-gold-light">how the studio specifies a build.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-bone/55">
              Print this page or save it as PDF for a one-document studio
              reference. The print stylesheet renders the document on a
              white background, in black type, with gold accents.
            </p>
            <div className="mt-6">
              <PrintButton />
            </div>
          </Reveal>
        </div>
      </section>

      {/* The printable document */}
      <article className="print-page bg-ink py-20 lg:py-28">
        <div className="container-luxe">
          <div className="mx-auto max-w-3xl">
            {/* Document header */}
            <header className="flex items-end justify-between gap-6 border-b border-bone/15 pb-8">
              <div className="flex items-center gap-4">
                <Monogram size={56} className="text-gold print-gold" />
                <div>
                  <p className="font-display text-2xl text-bone">{siteConfig.name}</p>
                  <p className="text-[0.62rem] uppercase tracking-[0.32em] text-bone/55">
                    Specification Sheet · {new Date().getFullYear()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-bone/55">
                  Luxury Design-Build
                </p>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.28em] text-bone/55">
                  Las Vegas Metro
                </p>
              </div>
            </header>

            {/* Sections */}
            <div className="mt-12 space-y-12">
              {sections.map((section) => (
                <section key={section.h}>
                  <h2 className="font-display text-xl text-gold-light print-gold">
                    {section.h}
                  </h2>
                  <dl className="mt-4 divide-y divide-bone/10 border-y border-bone/10">
                    {section.rows.map((row) => (
                      <div
                        key={row.l}
                        className="grid grid-cols-[1fr_2fr] items-baseline gap-6 py-3"
                      >
                        <dt className="text-[0.6rem] uppercase tracking-[0.22em] text-bone/55">
                          {row.l}
                        </dt>
                        <dd className="text-sm text-bone md:text-base">{row.r}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              ))}
            </div>

            <footer className="mt-16 border-t border-bone/15 pt-6 text-[0.58rem] uppercase tracking-[0.28em] text-bone/45">
              © {new Date().getFullYear()} {siteConfig.legalName} · Specifications
              indicative. Final spec calibrated to project.
            </footer>
          </div>
        </div>
      </article>

      {/* On-screen footer / no-print */}
      <section className="no-print border-t border-bone/10 bg-ink py-16">
        <div className="container-luxe">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="font-display text-2xl text-bone md:text-3xl">
                Ready to apply the spec to your project?
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="btn-gold">
                  Schedule Consultation
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/intake" className="btn-ghost">
                  Send a Project Brief
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

