import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';
import { ImageCard } from '../ImageCard';
import { Reveal } from '../Reveal';
import { bathroomImages, kitchenImages, remodelImages, customHomeImages } from '@/lib/images';

const services = [
  {
    eyebrow: '01',
    title: 'Luxury Kitchen Remodeling',
    summary:
      'Waterfall islands, integrated appliances, and custom cabinetry built for entertaining at Vegas scale.',
    href: '/kitchen-remodeling-las-vegas',
    image: kitchenImages[0],
  },
  {
    eyebrow: '02',
    title: 'Spa Bathroom Remodeling',
    summary:
      'Frameless walk-ins, soaking tubs, floating vanities — a private resort inside your home.',
    href: '/bathroom-remodeling-las-vegas',
    image: bathroomImages[0],
  },
  {
    eyebrow: '03',
    title: 'Full Home Renovations',
    summary:
      'Whole-home remodels that re-engineer flow, light, and finish with a single design-build team.',
    href: '/home-remodeling-las-vegas',
    image: remodelImages[0],
  },
  {
    eyebrow: '04',
    title: 'Luxury Renovations',
    summary:
      'Bespoke finish carpentry, stone, glass, and metal — the bespoke layer beyond a standard remodel.',
    href: '/luxury-renovations-las-vegas',
    image: customHomeImages[0],
  },
];

export function SignatureServices() {
  return (
    <section className="relative bg-ink-800 py-28 lg:py-40">
      <div className="container-luxe">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Signature Services"
            title="A studio for serious remodels."
            description="Every VCV Vegas project is led by a senior designer, executed by trade specialists, and finished to the standard of the city’s most exclusive interiors."
          />
          <Reveal delay={2}>
            <Link href="/services" className="btn-ghost">
              View all services
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i % 2}>
              <div className="border-gradient">
                <Link
                  href={s.href}
                  className="group relative block overflow-hidden bg-ink-800 p-6 transition-colors duration-500 hover:bg-ink-700 lg:p-7"
                >
                  {/* Per-card hover sweep */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background:
                        i % 2 === 0
                          ? 'radial-gradient(circle at 100% 0%, rgba(252,187,0,0.12), transparent 55%)'
                          : 'radial-gradient(circle at 0% 100%, rgba(59,130,246,0.12), transparent 55%)',
                    }}
                  />
                  <ImageCard
                    image={s.image}
                    aspect="wide"
                    caption={false}
                    className="mb-6"
                  />
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="eyebrow mb-2 !text-bone/40">{s.eyebrow}</p>
                      <h3 className="font-display text-3xl text-bone transition-colors group-hover:text-bone md:text-4xl">
                        {s.title}
                      </h3>
                      <p className="mt-3 max-w-md text-bone/60">{s.summary}</p>
                    </div>
                    <div className="grid h-12 w-12 shrink-0 place-items-center border border-bone/15 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                    </div>
                  </div>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
