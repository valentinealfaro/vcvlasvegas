import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { Reveal } from '../Reveal';
import { journalPosts } from '@/lib/journal';

export function LatestNote() {
  const latest = journalPosts[0];
  if (!latest) return null;

  return (
    <section className="relative overflow-hidden border-y border-ink/8 bg-bone py-24 lg:py-32">
      <div aria-hidden className="glow-blue" />

      <div className="container-luxe relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.4fr] lg:gap-16">
          <Reveal>
            <div className="flex h-full flex-col justify-center">
              <div className="mb-6 flex items-center gap-3">
                <span className="relative grid h-9 w-9 place-items-center overflow-hidden border border-gold/40 bg-gold/5 shadow-[0_0_18px_-4px_rgba(252,187,0,0.4)]">
                  <span aria-hidden className="absolute inset-0 bg-gradient-to-br from-gold/15 to-transparent" />
                  <span aria-hidden className="absolute left-1 top-1 h-1.5 w-1.5 border-l border-t border-gold" />
                  <span aria-hidden className="absolute bottom-1 right-1 h-1.5 w-1.5 border-b border-r border-gold" />
                  <BookOpen className="relative h-4 w-4 text-ink" />
                </span>
                <p className="eyebrow !text-ink">Latest from the Journal</p>
              </div>
              <div className="flex items-center gap-3">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(252,187,0,0.7)]" />
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-ink/45">
                  {latest.eyebrow} · {latest.read}
                </p>
              </div>
              <h2 className="mt-4 font-display text-4xl text-ink text-balance md:text-5xl">
                {latest.title}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/65 md:text-lg">
                {latest.summary}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href={`/journal/${latest.slug}`}
                  className="btn-ghost"
                >
                  Read the Note
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/journal"
                  className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-ink/55 transition-colors hover:text-ink"
                >
                  All Notes
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <Link
              href={`/journal/${latest.slug}`}
              className="group relative block aspect-[16/10] overflow-hidden bg-bone-700 transition-shadow duration-700 hover:shadow-[0_30px_70px_-20px_rgba(252,187,0,0.30)]"
            >
              <Image
                src={latest.image.src}
                alt={latest.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bone/65 via-bone/15 to-transparent" />
              {/* Amber sweep on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(circle at 12% 100%, rgba(252,187,0,0.22), transparent 55%)',
                }}
              />
              {/* Gold corner ticks */}
              <span aria-hidden className="pointer-events-none absolute left-4 top-4 h-3 w-3 border-l border-t border-gold/50 transition-colors duration-500 group-hover:border-gold" />
              <span aria-hidden className="pointer-events-none absolute right-4 top-4 h-3 w-3 border-r border-t border-gold/50 transition-colors duration-500 group-hover:border-gold" />
              <span aria-hidden className="pointer-events-none absolute bottom-4 left-4 h-3 w-3 border-b border-l border-gold/50 transition-colors duration-500 group-hover:border-gold" />
              <div className="absolute bottom-6 right-6 grid h-12 w-12 place-items-center border border-ink/40 bg-bone/50 text-ink backdrop-blur-md transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink group-hover:shadow-[0_0_24px_-4px_rgba(252,187,0,0.7)]">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
