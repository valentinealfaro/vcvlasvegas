import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../Reveal';
import { SectionHeader } from '../SectionHeader';
import { kitchenImages, customHomeImages } from '@/lib/images';

const studies = [
  {
    href: '/projects/the-summerlin-residence',
    eyebrow: 'Project Study · 01',
    title: 'The Summerlin',
    italic: 'Residence.',
    scope: 'Kitchen · Primary Suite · Great Room · Patio',
    duration: '5 months',
    image: kitchenImages[0],
  },
  {
    href: '/projects/macdonald-highlands-residence',
    eyebrow: 'Project Study · 02',
    title: 'The MacDonald',
    italic: 'Highlands Residence.',
    scope: 'Kitchen · Primary · Wine Room · Outdoor',
    duration: '7 months',
    image: customHomeImages[1],
  },
];

export function FeaturedStudies() {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="container-luxe">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Project Studies"
            title="A closer look."
            description="Two representative VCV Vegas commissions — opened up, broken down, and walked through end to end."
          />
          <Reveal delay={2}>
            <Link href="/projects" className="btn-ghost">
              All projects
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {studies.map((s, i) => (
            <Reveal key={s.href} delay={i}>
              <Link
                href={s.href}
                className="group relative block aspect-[4/5] w-full overflow-hidden bg-ink-700"
              >
                <Image
                  src={s.image.src}
                  alt={`${s.title} ${s.italic} — featured project study`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />

                {/* Top eyebrow */}
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-8 md:p-10">
                  <p className="eyebrow !text-bone/85">{s.eyebrow}</p>
                  <p className="text-[0.6rem] uppercase tracking-[0.28em] text-bone/55">
                    {s.duration}
                  </p>
                </div>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col p-8 md:p-10">
                  <h3 className="font-display text-3xl text-bone md:text-5xl">
                    {s.title}{' '}
                    <span className="italic text-gold-light">{s.italic}</span>
                  </h3>
                  <p className="mt-3 max-w-md text-bone/75">{s.scope}</p>
                  <div className="mt-5 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.28em] text-gold">
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
