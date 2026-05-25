import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { InlineLeadStrip } from '@/components/InlineLeadStrip';
import { customHomeImages, kitchenImages, bathroomImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Sample Budgets · VCV Vegas',
  description:
    'Illustrative line-item budget breakdowns for three typical VCV Vegas project scopes — a signature bathroom, a chef-grade kitchen, and a whole-home renovation. Where the budget actually goes.',
  alternates: { canonical: `${siteConfig.url}/sample-budgets` },
};

type Budget = {
  eyebrow: string;
  title: string;
  total: string;
  duration: string;
  image: typeof kitchenImages[number];
  href: string;
  hrefLabel: string;
  lines: { label: string; share: number; notes: string }[];
};

const budgets: Budget[] = [
  {
    eyebrow: 'Illustrative · Signature',
    title: 'A Signature Bathroom',
    total: '$130,000',
    duration: '7 weeks on site',
    image: bathroomImages[0],
    href: '/bathroom-remodeling-las-vegas',
    hrefLabel: 'Explore bathroom remodeling',
    lines: [
      { label: 'Demolition, framing, prep', share: 8, notes: 'Including dust containment and protection' },
      { label: 'Plumbing & electrical rough-in', share: 12, notes: 'Repositioned drain, new circuits' },
      { label: 'Stone — slab, fabrication, install', share: 16, notes: 'Honed Calacatta vanity + shower wall' },
      { label: 'Tile work — floor, walls, shower', share: 14, notes: 'Large-format porcelain, linear drain' },
      { label: 'Custom millwork vanity', share: 13, notes: 'Floating, full-extension, push-latch' },
      { label: 'Plumbing fixtures & hardware', share: 11, notes: 'Brushed brass, thermostatic valve' },
      { label: 'Frameless glass partition', share: 6, notes: '1/2" tempered, site-measured' },
      { label: 'Lighting & electrical finish', share: 7, notes: 'Cove + decorative + task layers' },
      { label: 'Paint, plaster, finish work', share: 5, notes: 'Lime-wash accent wall' },
      { label: 'Project management & overhead', share: 8, notes: 'Senior designer through punch list' },
    ],
  },
  {
    eyebrow: 'Illustrative · Chef-Grade',
    title: "A Chef's Kitchen",
    total: '$250,000',
    duration: '11 weeks on site',
    image: kitchenImages[0],
    href: '/kitchen-remodeling-las-vegas',
    hrefLabel: 'Explore kitchen remodeling',
    lines: [
      { label: 'Demolition & structural work', share: 6, notes: 'Including a flush LVL beam' },
      { label: 'Plumbing & electrical rough-in', share: 7, notes: 'Repositioned sink, new circuits' },
      { label: 'Full-custom millwork cabinetry', share: 26, notes: 'Floor-to-ceiling, integrated pantry' },
      { label: 'Stone — island + perimeter', share: 14, notes: 'Book-matched waterfall island' },
      { label: 'Appliance package', share: 15, notes: 'Integrated paneled refrigeration + Wolf range' },
      { label: 'Backsplash, hood, tile work', share: 5, notes: 'Custom plaster hood, stone slab backsplash' },
      { label: 'Hardware & plumbing fixtures', share: 6, notes: 'Trade-only lines' },
      { label: 'Lighting & electrical finish', share: 7, notes: 'Cove, decorative pendants, task' },
      { label: 'Flooring (if continuing)', share: 4, notes: 'Wide-plank engineered oak' },
      { label: 'Project management & overhead', share: 10, notes: 'Senior designer end-to-end' },
    ],
  },
  {
    eyebrow: 'Illustrative · Whole-Home',
    title: 'A Whole-Home Renovation',
    total: '$1,200,000',
    duration: '6 months on site',
    image: customHomeImages[1],
    href: '/home-remodeling-las-vegas',
    hrefLabel: 'Explore whole-home',
    lines: [
      { label: 'Pre-construction & design', share: 6, notes: 'Drawings, engineering, permits' },
      { label: 'Structural & framing', share: 8, notes: 'Load-bearing wall removal, beams' },
      { label: 'Mechanical, electrical, plumbing', share: 12, notes: 'Whole-home re-rough where required' },
      { label: 'Kitchen (chef-grade)', share: 16, notes: 'Custom millwork + integrated appliances' },
      { label: 'Primary suite + bath', share: 14, notes: 'Wet room, floating vanity, walk-in closet' },
      { label: 'Secondary baths (2)', share: 8, notes: 'Coordinated finish standard' },
      { label: 'Whole-home flooring', share: 6, notes: 'Wide-plank oak + stone in baths' },
      { label: 'Millwork & built-ins (non-kitchen)', share: 5, notes: 'Wet bar, closets, library' },
      { label: 'Architectural glass + doors', share: 5, notes: 'Multi-panel pocket back wall' },
      { label: 'Outdoor patio + kitchen', share: 6, notes: 'Engineered shade, outdoor kitchen' },
      { label: 'Paint, plaster, finish', share: 4, notes: 'Lime-wash + plaster accents' },
      { label: 'Project management & overhead', share: 10, notes: 'Senior designer + dedicated lead' },
    ],
  },
];

function formatAmount(total: string, share: number) {
  const amount = parseInt(total.replace(/[^0-9]/g, ''), 10) * (share / 100);
  if (amount >= 1_000_000) {
    const m = amount / 1_000_000;
    return `$${m % 1 === 0 ? m.toFixed(0) : m.toFixed(1)}M`;
  }
  return `$${Math.round(amount / 1000)}k`;
}

export default function SampleBudgetsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Sample Budgets', url: `${siteConfig.url}/sample-budgets` },
        ])}
      />

      <CinematicHero
        eyebrow="Sample Budgets"
        title="Where the budget"
        italic="actually goes."
        description="Three illustrative line-item breakdowns — a signature bathroom, a chef-grade kitchen, and a whole-home renovation. Indicative percentages and notes only; your project gets its own."
        images={[kitchenImages[0], bathroomImages[0], customHomeImages[1]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Sample Budgets' }]}
      />

      <section className="border-b border-bone/8 bg-ink-800/40 py-12">
        <div className="container-luxe">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-bone/55 md:text-base">
              These breakdowns are illustrative — published to demystify
              where the budget goes on a typical luxury Las Vegas remodel.
              Real project budgets are calibrated to your home, your scope,
              and your specifications, and shared after the private
              consultation.
            </p>
          </Reveal>
        </div>
      </section>

      {budgets.map((budget, gi) => (
        <section
          key={budget.title}
          className={gi % 2 === 0 ? 'bg-ink py-24 lg:py-32' : 'bg-ink-800 py-24 lg:py-32'}
        >
          <div className="container-luxe">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <Reveal>
                <div className="lg:sticky lg:top-32">
                  <div className="relative aspect-[4/5] overflow-hidden bg-ink-700">
                    <Image
                      src={budget.image.src}
                      alt={budget.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                  </div>
                  <p className="eyebrow mt-8 !text-bone/45">{budget.eyebrow}</p>
                  <h2 className="mt-3 font-display text-3xl text-bone md:text-4xl">
                    {budget.title}
                  </h2>
                  <div className="mt-6 flex items-baseline gap-6">
                    <p className="font-display text-5xl text-gold-light md:text-6xl">
                      {budget.total}
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-bone/55">
                    Illustrative · {budget.duration}
                  </p>
                  <div className="mt-8">
                    <Link
                      href={budget.href}
                      className="inline-flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-gold transition-colors hover:text-gold-light"
                    >
                      {budget.hrefLabel}
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={1}>
                <div>
                  <p className="eyebrow mb-6 !text-gold">Line-Item Breakdown</p>
                  <ul className="divide-y divide-bone/10 border-y border-bone/10">
                    {budget.lines.map((line) => (
                      <li
                        key={line.label}
                        className="grid grid-cols-[1fr_auto] items-baseline gap-3 py-4 md:grid-cols-[1fr_auto_auto] md:gap-6"
                      >
                        <div>
                          <p className="font-display text-lg text-bone md:text-xl">
                            {line.label}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-bone/50">
                            {line.notes}
                          </p>
                        </div>
                        <p className="text-[0.65rem] uppercase tracking-[0.24em] text-bone/45 md:order-2">
                          {line.share}%
                        </p>
                        <p className="font-display text-lg text-gold-light md:order-3 md:text-xl">
                          {formatAmount(budget.total, line.share)}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-xs text-bone/40">
                    Percentages are indicative. Real projects vary based on
                    scope, finish tier, structural complexity, and site
                    conditions.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <InlineLeadStrip
        title="Want a budget tied to your home?"
        italic="Start with a walk."
        description="A senior designer walks the project, reads the scope, and responds with a transparent investment range within one business day."
      />

      <CTASection
        title="Begin with the numbers."
        description="Or skip ahead and send the project directly through the intake form."
        image={customHomeImages[0]}
      />
    </>
  );
}
