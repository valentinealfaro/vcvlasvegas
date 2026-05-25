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
  title: 'The Finish Library · VCV Vegas',
  description:
    'A curated library of the stone, wood, metal, glass, and lighting selections that quietly define a VCV Vegas luxury remodel in Las Vegas.',
  alternates: { canonical: `${siteConfig.url}/materials` },
};

type Spec = { name: string; spec: string; description: string; tone?: string };

type Group = {
  eyebrow: string;
  title: string;
  italic?: string;
  description: string;
  image: typeof kitchenImages[number];
  specs: Spec[];
};

const groups: Group[] = [
  {
    eyebrow: 'Stone',
    title: 'The first decision,',
    italic: 'and the loudest one.',
    description:
      'Stone is the largest visible material in a luxury kitchen or bathroom — and the one we spend the most time selecting. Slabs are reviewed at the yard, fabrication is dry-laid, and seam locations are decided before the saw runs.',
    image: kitchenImages[0],
    specs: [
      {
        name: 'Calacatta Gold',
        spec: 'Italian Marble · Honed',
        description: 'Warm-veined, used most often on islands and primary-bath vanities.',
        tone: '#eae6dd',
      },
      {
        name: 'White Macaubas',
        spec: 'Quartzite · Honed',
        description: 'Soft white-grey with quiet veining — durable, used on hardworking surfaces.',
        tone: '#dad6c9',
      },
      {
        name: 'Taj Mahal',
        spec: 'Quartzite · Leathered',
        description: 'Warm cream with subtle gold movement — common in transitional homes.',
        tone: '#d5c9a8',
      },
      {
        name: 'Black Mist',
        spec: 'Granite · Honed',
        description: 'Reserved for grounded plinths, fireplaces, and architectural baseboards.',
        tone: '#2a2a2a',
      },
    ],
  },
  {
    eyebrow: 'Wood',
    title: 'Warmth, where',
    italic: 'the stone isn’t.',
    description:
      'Bespoke millwork is what makes a luxury kitchen read as architecture. We work with three principal species — chosen for how they age, how they catch light, and how they pair with our standard stone palette.',
    image: kitchenImages[1],
    specs: [
      {
        name: 'Rift-Sawn White Oak',
        spec: 'Custom Stain · Hand-Finished',
        description: 'Our most-requested cabinetry species. Reads warm, ages quietly, takes hardware beautifully.',
        tone: '#b89773',
      },
      {
        name: 'Smoked Walnut',
        spec: 'European · Hand-Finished',
        description: 'Used on hero islands, libraries, and architectural built-ins. Carries weight without darkness.',
        tone: '#5e4a36',
      },
      {
        name: 'Wide-Plank Engineered Oak',
        spec: '9″ Plank · Matte Sealer',
        description: 'Standard whole-home flooring choice — pre-finished, dimensionally stable for desert humidity swings.',
        tone: '#c4a780',
      },
    ],
  },
  {
    eyebrow: 'Metal',
    title: 'The detail',
    italic: 'you touch every day.',
    description:
      'Hardware, plumbing, lighting fixtures, range hoods, and architectural railings. We specify by hand-weight, not by photograph — the difference between premium and builder-grade is something you feel before you see.',
    image: bathroomImages[3],
    specs: [
      {
        name: 'Brushed Brass',
        spec: 'Living Finish · Lacquered or Unlacquered',
        description: 'Default warm-metal across cabinetry pulls, faucets, and decorative lighting.',
        tone: '#b8945c',
      },
      {
        name: 'Matte Black',
        spec: 'Powder-Coated Steel',
        description: 'Reserved for modern desert palettes and frameless glass partitions.',
        tone: '#1a1a1a',
      },
      {
        name: 'Antique Bronze',
        spec: 'Solid Cast · Patinated',
        description: 'Used on heritage and transitional projects — never plated, always solid.',
        tone: '#3a2e23',
      },
      {
        name: 'Polished Nickel',
        spec: 'Plumbing-Grade · Trade Lines',
        description: 'For projects that want the warmth of brass with the modernity of chrome.',
        tone: '#b6b4ad',
      },
    ],
  },
  {
    eyebrow: 'Glass',
    title: 'Where the room',
    italic: 'releases.',
    description:
      'Frameless shower enclosures, wine-room partitions, multi-panel pocket walls, and architectural railings. Every glass selection is engineered to the room — not ordered from a catalog.',
    image: bathroomImages[0],
    specs: [
      {
        name: 'Frameless 1/2″ Tempered',
        spec: 'Bath Partitions · Wine Rooms',
        description: 'Site-measured, dry-fit, and installed with concealed structural hardware.',
      },
      {
        name: 'Multi-Panel Pocket Glass',
        spec: 'Architectural · 28′ Spans',
        description: 'Indoor-outdoor reveals — the move that makes a Vegas home read as Vegas.',
      },
      {
        name: 'Anti-Vibration Cellar Glass',
        spec: 'Wine Rooms · Climate-Tight',
        description: 'Specified on every cellar build — preserves climate without sacrificing display.',
      },
    ],
  },
  {
    eyebrow: 'Lighting',
    title: 'Four layers,',
    italic: 'one room.',
    description:
      'A luxury home is the result of layered light: architectural cove, ambient ceiling, task at the surface, and decorative on display. Each layer runs on its own dimmer scene.',
    image: customHomeImages[3],
    specs: [
      {
        name: 'Architectural Cove LED',
        spec: 'Warm 2700K · Recessed Channel',
        description: 'Hidden uplight at the cove or under toe-kick — the night-side detail every client loves.',
      },
      {
        name: 'Decorative Pendants',
        spec: 'Trade-Only Lines',
        description: 'Hand-blown, plaster, or metal — chosen as architectural objects, not light fixtures.',
      },
      {
        name: 'Task Strip',
        spec: 'Integrated · Under-Cabinet',
        description: 'CRI 90+ at the counter line for cooking, vanity, and writing surfaces.',
      },
      {
        name: 'Scene Control',
        spec: 'Lutron Caséta or RA3',
        description: 'Every project shipped with at least three programmed scenes — Morning, Evening, Late.',
      },
    ],
  },
  {
    eyebrow: 'Floor',
    title: 'The first plane',
    italic: 'and the last.',
    description:
      'The floor sets the temperature of the entire home. We specify three principal categories — each engineered for desert humidity, sound dampening, and refinish-in-place longevity.',
    image: flooringImages[0],
    specs: [
      {
        name: 'Wide-Plank Engineered Oak',
        spec: '9″ Plank · Matte Sealer',
        description: 'Standard whole-home flooring — warm, durable, refinishable in place.',
      },
      {
        name: 'Large-Format Porcelain',
        spec: '60″ x 120″ Slabs',
        description: 'Stone-look porcelain at architectural scale — fewer grout joints, calmer plane.',
      },
      {
        name: 'Honed Natural Stone',
        spec: 'Calacatta or Limestone',
        description: 'Reserved for bathrooms, foyers, and entry sequences. Always honed, never polished.',
      },
    ],
  },
];

export default function MaterialsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'The Finish Library', url: `${siteConfig.url}/materials` },
        ])}
      />

      <CinematicHero
        eyebrow="The Finish Library"
        title="The materials"
        italic="that hold the work up."
        description="Stone, wood, metal, glass, lighting, and flooring — the curated finish library behind every VCV Vegas project. Trade-only specifications reserved for design-build studios."
        images={[kitchenImages[1], bathroomImages[3], flooringImages[0], customHomeImages[3], bathroomImages[0]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'The Finish Library' }]}
      />

      {groups.map((g, gi) => (
        <section
          key={g.eyebrow}
          className={gi % 2 === 0 ? 'bg-ink py-24 lg:py-32' : 'bg-ink-800 py-24 lg:py-32'}
        >
          <div className="container-luxe">
            <SectionHeader
              eyebrow={`Library · ${g.eyebrow}`}
              title={g.title}
              description={g.description}
            />

            <div className="mt-16 grid gap-px bg-bone/10 md:grid-cols-2 lg:grid-cols-4">
              {g.specs.map((s, i) => (
                <Reveal key={s.name} delay={i % 4} className={gi % 2 === 0 ? 'bg-ink p-8 lg:p-9' : 'bg-ink-800 p-8 lg:p-9'}>
                  {s.tone && (
                    <div
                      className="mb-6 h-20 w-full border border-bone/10"
                      style={{ backgroundColor: s.tone }}
                    />
                  )}
                  <p className="font-display text-xl text-bone md:text-2xl">{s.name}</p>
                  <p className="mt-2 text-[0.6rem] uppercase tracking-[0.24em] text-gold">
                    {s.spec}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-bone/55">
                    {s.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <InlineLeadStrip
        title="See the library in person."
        italic="Private appointment."
        description="A senior designer walks the materials in your home — by appointment, within one business day."
      />

      <CTASection
        title="Build with the right materials."
        description="A private consultation with a senior VCV Vegas designer."
        image={customHomeImages[0]}
      />
    </>
  );
}
