import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';
import { journalPosts } from '@/lib/journal';

export function RelatedReading({
  slugs,
  eyebrow = 'From the Journal',
  title = 'Continue reading.',
  description,
}: {
  slugs: string[];
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  const posts = slugs
    .map((s) => journalPosts.find((p) => p.slug === s))
    .filter((p): p is (typeof journalPosts)[number] => Boolean(p));

  if (posts.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-ink-800 py-24 lg:py-32">
      <div aria-hidden className="glow-blue" />

      <div className="container-luxe">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-10">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i}>
              <Link
                href={`/journal/${post.slug}`}
                className="group block transition-transform duration-500 ease-out hover:-translate-y-1"
              >
                <figure className="relative aspect-[16/10] overflow-hidden bg-ink-700 transition-shadow duration-700 group-hover:shadow-[0_25px_60px_-20px_rgba(252,187,0,0.25)]">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background:
                        'radial-gradient(circle at 12% 100%, rgba(252,187,0,0.18), transparent 55%)',
                    }}
                  />
                </figure>
                <div className="mt-6">
                  <div className="flex items-center justify-between gap-4 text-[0.65rem] uppercase tracking-[0.28em]">
                    <span className="text-bone">{post.eyebrow}</span>
                    <span className="text-bone/45">{post.read}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-bone transition-colors group-hover:text-bone md:text-3xl">
                    {post.title}
                  </h3>
                  <span
                    aria-hidden
                    className="mt-3 block h-px w-0 bg-gold transition-all duration-700 ease-out group-hover:w-12"
                  />
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
