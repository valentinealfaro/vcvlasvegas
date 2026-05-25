import type { Metadata } from 'next';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { InlineLeadStrip } from '@/components/InlineLeadStrip';
import { customHomeImages, kitchenImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Standards · VCV Vegas',
  description:
    'Build standards, credentials, and the disciplines behind every VCV Vegas project — licensing, insurance, engineering, materials, warranty.',
  alternates: { canonical: `${siteConfig.url}/standards` },
};

const pillars = [
  {
    n: '01',
    t: 'Licensing & Compliance',
    d: 'VCV Vegas operates as a licensed and insured Nevada general contractor. All projects are permitted through the appropriate jurisdiction — City of Las Vegas, City of Henderson, Clark County, or the relevant municipality.',
    rows: [
      { l: 'Nevada Licensed General Contractor', v: 'Active' },
      { l: 'General Liability', v: '$2M+' },
      { l: 'Workers Comp', v: 'Active' },
      { l: 'Bonded', v: 'Yes' },
    ],
  },
  {
    n: '02',
    t: 'Engineering & Permitting',
    d: 'Structural changes are designed by a Nevada-licensed engineer and reviewed before construction. Drawings, calculations, and permits are submitted by our pre-construction team — not by the client.',
    rows: [
      { l: 'Structural Engineering', v: 'NV-licensed PE' },
      { l: 'MEP Coordination', v: 'In-house' },
      { l: 'Permit Submittal', v: 'Managed' },
      { l: 'Inspection Calls', v: 'Managed' },
    ],
  },
  {
    n: '03',
    t: 'Material Specification',
    d: 'Every finish, stone, hardware, and lighting selection is specified in writing and matched to a known supplier. We do not substitute mid-project without your sign-off, and we do not order from sources we cannot stand behind.',
    rows: [
      { l: 'Trade-Only Suppliers', v: 'Primary' },
      { l: 'Stone Selection', v: 'On-yard, by client' },
      { l: 'Dry-Lay Fabrication', v: 'Standard' },
      { l: 'Substitution Policy', v: 'No, without sign-off' },
    ],
  },
  {
    n: '04',
    t: 'Site Discipline',
    d: 'Dust containment, floor protection, daily cleanup, and weekly walk-throughs are not extras. They are how our sites run, every day. Our crews wear branded uniforms and follow a published code of conduct on every job.',
    rows: [
      { l: 'Dust Containment', v: 'ZipWalls + HEPA' },
      { l: 'Floor Protection', v: 'Full coverage' },
      { l: 'Daily Cleanup', v: 'Standard' },
      { l: 'Client Briefings', v: 'Weekly' },
    ],
  },
  {
    n: '05',
    t: 'Warranty & Service',
    d: 'A one-year service relationship follows every completed project. We address punch-list items, settle small adjustments, and stand behind the work for a full year after the final walkthrough.',
    rows: [
      { l: 'Workmanship Warranty', v: '1 Year' },
      { l: 'Manufacturer Pass-Through', v: 'Per spec' },
      { l: 'Punch-List Service', v: 'Scheduled' },
      { l: 'Follow-Up Inspection', v: '6-month' },
    ],
  },
];

export default function StandardsPage() {
  return (
    <>
      <CinematicHero
        eyebrow="The Standards"
        title="How we hold"
        italic="the line."
        description="What you can expect from a VCV Vegas project — licensing, engineering, materials, site discipline, and warranty. The disciplines that hold the rest of the work up."
        images={[customHomeImages[0], customHomeImages[1], customHomeImages[3], kitchenImages[0]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Standards' }]}
      />

      <section className="bg-ink py-20 lg:py-28">
        <div className="container-luxe">
          <div className="space-y-20">
            {pillars.map((p) => (
              <Reveal key={p.n}>
                <div className="grid gap-10 border-t border-bone/10 pt-14 lg:grid-cols-[auto_1.2fr_1fr] lg:gap-16">
                  <p className="font-display text-6xl text-gold-light lg:text-7xl">
                    {p.n}
                  </p>
                  <div>
                    <h2 className="font-display text-3xl text-bone md:text-4xl">
                      {p.t}
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-bone/70">
                      {p.d}
                    </p>
                  </div>
                  <div className="self-center">
                    <dl className="divide-y divide-bone/10 border-y border-bone/10">
                      {p.rows.map((row) => (
                        <div
                          key={row.l}
                          className="flex items-center justify-between gap-6 py-3"
                        >
                          <dt className="text-[0.65rem] uppercase tracking-[0.22em] text-bone/50">
                            {row.l}
                          </dt>
                          <dd className="text-sm text-gold-light">{row.v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InlineLeadStrip
        title="Hold us to it."
        italic="Schedule a private consultation."
        description="A senior designer will walk your project, your timeline, and our standards in detail."
      />

      <CTASection
        title="The standard your project deserves."
        description="By appointment with a senior VCV Vegas designer."
        image={kitchenImages[0]}
      />
    </>
  );
}
