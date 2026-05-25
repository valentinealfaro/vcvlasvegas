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
    <section className="bg-ink-800 py-24 lg:py-32">
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
                className="group relative block aspect-[4/5] w-full overflow-hidden bg-ink-700"
              >
                <Image
                  src={p.image.src}
                  alt={`${p.title} ${p.italic} — featured project study`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-8 md:p-10">
                  <p className="eyebrow !text-bone/85">{p.eyebrow}</p>
                  <p className="text-[0.6rem] uppercase tracking-[0.28em] text-bone/55">
                    {p.duration}
                  </p>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex flex-col p-8 md:p-10">
                  <h3 className="font-display text-3xl text-bone md:text-5xl">
                    {p.title}{' '}
                    <span className="italic text-bone">{p.italic}</span>
                  </h3>
                  <p className="mt-3 max-w-md text-bone/75">{p.scope}</p>
                  <div className="mt-5 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.28em] text-bone">
                    Read the study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
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
