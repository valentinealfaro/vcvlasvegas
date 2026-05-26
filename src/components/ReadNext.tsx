import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';
import { journalPosts } from '@/lib/journal';

export function ReadNext({ currentSlug }: { currentSlug: string }) {
  const others = journalPosts.filter((p) => p.slug !== currentSlug).slice(0, 2);
  if (others.length === 0) return null;

  return (
    <section className="bg-bone-800 py-24 lg:py-32">
      <div className="container-luxe">
        <SectionHeader eyebrow="Continue Reading" title="From the journal." />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-10">
          {others.map((post, i) => (
            <Reveal key={post.slug} delay={i}>
              <Link href={`/journal/${post.slug}`} className="group block">
                <figure className="relative aspect-[16/10] overflow-hidden bg-bone-700 transition-shadow duration-700 group-hover:shadow-[0_25px_60px_-20px_rgba(252,187,0,0.25)]">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bone/50 to-transparent" />
                  {/* Amber sweep on hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background:
                        'radial-gradient(circle at 12% 100%, rgba(252,187,0,0.18), transparent 55%)',
                    }}
                  />
                  {/* Gold corner ticks — appear on hover */}
                  <span aria-hidden className="pointer-events-none absolute left-4 top-4 h-3 w-3 border-l border-t border-gold/0 transition-colors duration-500 group-hover:border-gold" />
                  <span aria-hidden className="pointer-events-none absolute bottom-4 right-4 h-3 w-3 border-b border-r border-gold/0 transition-colors duration-500 group-hover:border-gold" />
                </figure>
                <div className="mt-6">
                  <div className="flex items-center justify-between gap-4 text-[0.65rem] uppercase tracking-[0.28em]">
                    <div className="flex items-center gap-3">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold/60 transition-all duration-500 group-hover:bg-gold group-hover:shadow-[0_0_8px_rgba(252,187,0,0.7)]" />
                      <span className="text-ink">{post.eyebrow}</span>
                    </div>
                    <span className="text-ink/45">{post.read}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-ink transition-colors group-hover:text-ink md:text-3xl">
                    {post.title}
                  </h3>
                  <div className="mt-4 inline-flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-ink/55 transition-colors duration-500 group-hover:text-ink">
                    <span className="relative">
                      Read the note
                      <span aria-hidden className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                    </span>
                    <ArrowUpRight className="h-3 w-3 transition-all duration-500 group-hover:rotate-45 group-hover:text-gold" />
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
