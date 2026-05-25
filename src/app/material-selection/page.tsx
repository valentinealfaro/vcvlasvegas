import type { Metadata } from 'next';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { InlineLeadStrip } from '@/components/InlineLeadStrip';
import { kitchenImages, bathroomImages, customHomeImages, flooringImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Material Selection · VCV Vegas',
  description:
    'The VCV Vegas material selection process — stone yard visits, dry-lay reviews, sample boxes, and finish-schedule sessions. How luxury Las Vegas remodels are specified before they are built.',
  alternates: { canonical: `${siteConfig.url}/material-selection` },
};

const phases = [
  {
    n: '01',
    t: 'The Studio Sample Library',
    d: 'Your senior designer brings a curated short list of stone, wood, hardware, and lighting selections to the first design session — tuned to the architectural direction we read in the home.',
  },
  {
    n: '02',
    t: 'Trade-Only Yard Visits',
    d: 'Stone, tile, and millwork selections are reviewed at the source. We have standing relationships with the Las Vegas stone yards and trade-only fabricators that hold the inventory worth specifying.',
  },
  {
    n: '03',
    t: 'Slab Selection, by Hand',
    d: 'For book-matched stone, you and your designer walk the yard together. The slab is tagged, photographed, and reserved. Nothing is ordered until you have stood in front of it.',
  },
  {
    n: '04',
    t: 'Dry-Lay Fabrication Review',
    d: 'Before the saw runs, the fabricator dry-lays the slab in the shop with the seam plan, vein flow, and waterfall miter mocked up. You review the layout before stone is cut.',
  },
  {
    n: '05',
    t: 'Sample Boxes',
    d: 'A physical sample box arrives at your home: stone chips, wood species, metal finishes, paint draw-downs, and tile cuts. The room is decided where the room will live.',
  },
  {
    n: '06',
    t: 'The Final Finish Schedule',
    d: 'A single bound document captures every specified material, supplier, lead time, and substitution policy. The field cannot deviate without your written sign-off.',
  },
];

const why = [
  {
    t: 'Stone reads as architecture.',
    d: 'A vein that lands wrong shows up forever. A vein that lands right disappears into the room. The difference is the slab review and the dry lay.',
  },
  {
    t: 'Photos lie.',
    d: 'Honed Calacatta looks identical to four different quartzites in a catalog photo. They are not the same stone, and they will not age the same way.',
  },
  {
    t: 'Substitutions kill design intent.',
    d: 'A finish specified, ordered, and confirmed is the only finish that lands in your home. A finish "comparable" is a finish you did not pick.',
  },
];

export default function MaterialSelectionPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Material Selection', url: `${siteConfig.url}/material-selection` },
        ])}
      />

      <CinematicHero
        eyebrow="Material Selection"
        title="The slab is selected"
        italic="before the saw runs."
        description="Material selection is the most consequential phase of a luxury remodel — and the one most contractors skip. Here is how VCV Vegas runs ours."
        images={[flooringImages[0], kitchenImages[1], bathroomImages[3], customHomeImages[1]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Material Selection' }]}
      />

      {/* Six phases */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="The Selection Process"
            title="Six phases. Every project."
            description="The disciplines that decide what your finished home will feel like — long before the first wall comes down."
          />
          <div className="mt-20 space-y-16">
            {phases.map((p) => (
              <Reveal key={p.n}>
                <div className="grid items-start gap-10 border-t border-bone/10 pt-12 lg:grid-cols-[auto_1fr_2fr] lg:gap-16">
                  <p className="font-display text-6xl text-gold-light lg:text-7xl">
                    {p.n}
                  </p>
                  <h3 className="font-display text-2xl text-bone md:text-3xl">
                    {p.t}
                  </h3>
                  <p className="text-base leading-relaxed text-bone/70 md:text-lg">
                    {p.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-ink-800 py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Why It Matters"
            title="The decisions that don’t show up on the budget."
            description="Material specification is the line item nobody quotes against — and the one that quietly defines whether a remodel reads as architecture or as renovation."
          />
          <div className="mt-16 grid gap-px bg-bone/10 sm:grid-cols-3">
            {why.map((w, i) => (
              <Reveal key={w.t} delay={i} className="bg-ink-800 p-8 lg:p-10">
                <p className="font-display text-3xl text-gold-light">0{i + 1}</p>
                <p className="mt-5 font-display text-xl text-bone md:text-2xl">
                  {w.t}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-bone/65">
                  {w.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InlineLeadStrip
        title="Want to walk a yard with us?"
        italic="By appointment."
        description="Material selection consultations are scheduled privately with a senior designer. Confidential, no pressure."
      />

      <CTASection
        title="Begin with the materials."
        description="A private design consultation, then a senior designer brings the sample short list to your home."
        image={bathroomImages[0]}
      />
    </>
  );
}
