import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { Reveal } from '../Reveal';
import { journalPosts } from '@/lib/journal';

export function LatestNote() {
  const latest = journalPosts[0];
  if (!latest) return null;

  return (
    <section className="border-y border-bone/8 bg-ink py-24 lg:py-32">
      <div className="container-luxe">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.4fr] lg:gap-16">
          <Reveal>
            <div className="flex h-full flex-col justify-center">
              <div className="mb-6 flex items-center gap-3">
                <BookOpen className="h-4 w-4 text-bone" />
                <p className="eyebrow !text-bone">Latest from the Journal</p>
              </div>
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/45">
                {latest.eyebrow} · {latest.read}
              </p>
              <h2 className="mt-4 font-display text-4xl text-bone text-balance md:text-5xl">
                {latest.title}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-bone/65 md:text-lg">
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
                  className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-bone/55 transition-colors hover:text-bone"
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
              className="group relative block aspect-[16/10] overflow-hidden bg-ink-700"
            >
              <Image
                src={latest.image.src}
                alt={latest.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/15 to-transparent" />
              <div className="absolute bottom-6 right-6 grid h-12 w-12 place-items-center border border-bone/40 bg-ink/50 text-bone backdrop-blur-md transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
