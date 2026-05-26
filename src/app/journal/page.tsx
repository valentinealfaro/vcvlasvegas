import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { kitchenImages, bathroomImages } from '@/lib/images';
import { journalPosts, topicMeta, type JournalTopic } from '@/lib/journal';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Journal · VCV Vegas',
  description:
    'Notes from the studio — design thinking, finish specifications, and the quiet details behind luxury remodeling in Las Vegas.',
  alternates: { canonical: `${siteConfig.url}/journal` },
};

export default function JournalIndex() {
  return (
    <>
      <CinematicHero
        eyebrow="The Journal"
        title="Notes"
        italic="from the studio."
        description="Design thinking, finish specifications, and the quiet details behind luxury remodeling in Las Vegas. Written by senior designers from our team."
        images={[kitchenImages[1], bathroomImages[0], kitchenImages[0], bathroomImages[2]]}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Journal' }]}
      />

      <section className="bg-bone py-24 lg:py-32">
        <div className="container-luxe">
          <div className="mb-12 flex flex-wrap items-center gap-3">
            <span className="eyebrow !text-ink/45">Browse by</span>
            {(Object.keys(topicMeta) as JournalTopic[]).map((key) => (
              <Link
                key={key}
                href={`/journal/topic/${key}`}
                className="border border-ink/15 px-4 py-2 text-[0.6rem] uppercase tracking-[0.24em] text-ink/60 transition-all duration-300 hover:border-gold/60 hover:text-ink"
              >
                {topicMeta[key].label}
              </Link>
            ))}
          </div>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {journalPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i % 2}>
                <Link href={`/journal/${post.slug}`} className="group block">
                  <figure className="relative aspect-[4/3] overflow-hidden bg-bone-700">
                    <Image
                      src={post.image.src}
                      alt={post.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bone/40 to-transparent" />
                  </figure>
                  <div className="mt-7">
                    <div className="flex items-center justify-between gap-4 text-[0.65rem] uppercase tracking-[0.28em]">
                      <span className="text-ink">{post.eyebrow}</span>
                      <span className="text-ink/45">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                        {' · '}
                        {post.read}
                      </span>
                    </div>
                    <h2 className="mt-4 font-display text-3xl text-ink text-balance transition-colors group-hover:text-ink md:text-4xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-ink/60">{post.summary}</p>
                    <div className="mt-5 flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-ink/55 group-hover:text-ink">
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

      <CTASection
        title="Talk to the people who write this."
        description="The team designing our notes is the same team that will lead your project."
        image={bathroomImages[0]}
      />
    </>
  );
}
