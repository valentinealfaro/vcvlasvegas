import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { journalPosts, topicMeta, type JournalTopic } from '@/lib/journal';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';
import { kitchenImages, customHomeImages, bathroomImages } from '@/lib/images';

const topicKeys = Object.keys(topicMeta) as JournalTopic[];

export function generateStaticParams() {
  return topicKeys.map((topic) => ({ topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const meta = topicMeta[topic as JournalTopic];
  if (!meta) return {};
  return {
    title: `${meta.label} · Journal · VCV Vegas`,
    description: meta.description,
    alternates: { canonical: `${siteConfig.url}/journal/topic/${topic}` },
  };
}

const heroByTopic: Record<JournalTopic, typeof kitchenImages[number][]> = {
  design: [kitchenImages[0], bathroomImages[0], kitchenImages[3]],
  architecture: [customHomeImages[1], customHomeImages[0], customHomeImages[3]],
  studio: [customHomeImages[0], customHomeImages[1], kitchenImages[1]],
};

export default async function TopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  if (!topicKeys.includes(topic as JournalTopic)) notFound();
  const t = topic as JournalTopic;
  const meta = topicMeta[t];
  const posts = journalPosts.filter((p) => p.topic === t);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Journal', url: `${siteConfig.url}/journal` },
          { name: meta.label, url: `${siteConfig.url}/journal/topic/${t}` },
        ])}
      />

      <CinematicHero
        eyebrow={`Journal · ${meta.label}`}
        title="Notes on"
        italic={`${meta.label.toLowerCase()}.`}
        description={meta.description}
        images={heroByTopic[t]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Journal', href: '/journal' },
          { label: meta.label },
        ]}
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <div className="mb-12 flex flex-wrap items-center gap-3">
            <span className="eyebrow !text-bone/45">Filter</span>
            {topicKeys.map((key) => (
              <Link
                key={key}
                href={`/journal/topic/${key}`}
                className={`border px-4 py-2 text-[0.6rem] uppercase tracking-[0.24em] transition-all duration-300 ${
                  key === t
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-bone/15 text-bone/60 hover:border-gold/60 hover:text-bone'
                }`}
              >
                {topicMeta[key].label}
              </Link>
            ))}
            <Link
              href="/journal"
              className="border border-bone/15 px-4 py-2 text-[0.6rem] uppercase tracking-[0.24em] text-bone/60 transition-all duration-300 hover:border-gold/60 hover:text-bone"
            >
              All Notes
            </Link>
          </div>

          {posts.length === 0 ? (
            <p className="font-display text-2xl text-bone/55">
              No notes published in this topic yet.
            </p>
          ) : (
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={i % 2}>
                  <Link href={`/journal/${post.slug}`} className="group block">
                    <figure className="relative aspect-[4/3] overflow-hidden bg-ink-700">
                      <Image
                        src={post.image.src}
                        alt={post.image.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                    </figure>
                    <div className="mt-7">
                      <div className="flex items-center justify-between gap-4 text-[0.65rem] uppercase tracking-[0.28em]">
                        <span className="text-gold">{post.eyebrow}</span>
                        <span className="text-bone/45">{post.read}</span>
                      </div>
                      <h2 className="mt-4 font-display text-3xl text-bone text-balance transition-colors group-hover:text-gold md:text-4xl">
                        {post.title}
                      </h2>
                      <p className="mt-3 max-w-xl text-bone/60">{post.summary}</p>
                      <div className="mt-5 flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-bone/55 group-hover:text-gold">
                        Read the note
                        <ArrowUpRight className="h-3 w-3 transition-transform group-hover:rotate-45" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Talk to the team writing these."
        description="The studio that writes the journal is the studio that will lead your project."
        image={customHomeImages[0]}
      />
    </>
  );
}
