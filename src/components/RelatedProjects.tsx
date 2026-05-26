import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';
import { kitchenImages, customHomeImages } from '@/lib/images';

const projects = [
  {
    slug: 'the-summerlin-residence',
    eyebrow: 'Project Study · 01',
    title: 'The Summerlin',
    italic: 'Residence.',
    scope: 'Kitchen · Primary · Great Room · Patio',
    duration: '5 months',
    image: kitchenImages[0],
  },
  {
    slug: 'macdonald-highlands-residence',
    eyebrow: 'Project Study · 02',
    title: 'The MacDonald',
    italic: 'Highlands Residence.',
    scope: 'Kitchen · Primary · Wine Room · Outdoor',
    duration: '7 months',
    image: customHomeImages[1],
  },
  {
    slug: 'the-paradise-penthouse',
    eyebrow: 'Project Study · 03',
    title: 'The Paradise',
    italic: 'Penthouse.',
    scope: 'Kitchen · Primary · Powder · Terrace',
    duration: '4 months',
    image: kitchenImages[3],
  },
];

export function RelatedProjects({ currentSlug }: { currentSlug: string }) {
  const others = projects.filter((p) => p.slug !== currentSlug);
  if (others.length === 0) return null;

  return (
    <section className="bg-bone-800 py-24 lg:py-32">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="More Project Studies"
          title="Another commission."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {others.map((p, i) => (
            <Reveal key={p.slug} delay={i}>
              <Link
                href={`/projects/${p.slug}`}
                className="group relative block aspect-[4/5] w-full overflow-hidden bg-bone-700 transition-shadow duration-700 group-hover:shadow-[0_30px_80px_-20px_rgba(252,187,0,0.25)]"
              >
                <Image
                  src={p.image.src}
                  alt={`${p.title} ${p.italic} — featured project study`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bone/85 via-bone/35 to-transparent" />
                {/* Amber sweep on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(circle at 12% 100%, rgba(252,187,0,0.22), transparent 55%)',
                  }}
                />
                {/* Gold corner ticks — always faintly visible, glow on hover */}
                <span aria-hidden className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-gold/40 transition-colors duration-500 group-hover:border-gold" />
                <span aria-hidden className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r border-t border-gold/40 transition-colors duration-500 group-hover:border-gold" />
                <span aria-hidden className="pointer-events-none absolute bottom-4 left-4 h-4 w-4 border-b border-l border-gold/40 transition-colors duration-500 group-hover:border-gold" />
                <span aria-hidden className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b border-r border-gold/40 transition-colors duration-500 group-hover:border-gold" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-8 md:p-10">
                  <div className="flex items-center gap-3">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(252,187,0,0.7)]" />
                    <p className="eyebrow !text-ink/85">{p.eyebrow}</p>
                  </div>
                  <p className="text-[0.6rem] uppercase tracking-[0.28em] text-ink/55">
                    {p.duration}
                  </p>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex flex-col p-8 md:p-10">
                  <h3 className="font-display text-3xl text-ink md:text-5xl">
                    {p.title}{' '}
                    <span className="italic text-ink">{p.italic}</span>
                  </h3>
                  <p className="mt-3 max-w-md text-ink/75">{p.scope}</p>
                  <div className="mt-5 inline-flex items-center gap-3 self-start text-[0.7rem] uppercase tracking-[0.28em] text-ink">
                    <span className="relative">
                      Read the study
                      <span aria-hidden className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-all duration-500 group-hover:rotate-45 group-hover:text-gold" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
