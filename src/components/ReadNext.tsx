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
    <section className="bg-ink-800 py-24 lg:py-32">
      <div className="container-luxe">
        <SectionHeader eyebrow="Continue Reading" title="From the journal." />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-10">
          {others.map((post, i) => (
            <Reveal key={post.slug} delay={i}>
              <Link href={`/journal/${post.slug}`} className="group block">
                <figure className="relative aspect-[16/10] overflow-hidden bg-ink-700">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                </figure>
                <div className="mt-6">
                  <div className="flex items-center justify-between gap-4 text-[0.65rem] uppercase tracking-[0.28em]">
                    <span className="text-bone">{post.eyebrow}</span>
                    <span className="text-bone/45">{post.read}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-bone transition-colors group-hover:text-bone md:text-3xl">
                    {post.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-bone/55 group-hover:text-bone">
                    Read the note
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:rotate-45" />
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
