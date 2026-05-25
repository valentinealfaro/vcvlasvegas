import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { CinematicHero } from '@/components/CinematicHero';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { kitchenImages, bathroomImages } from '@/lib/images';
import { journalPosts } from '@/lib/journal';
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

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-luxe">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {journalPosts.map((post, i) => (
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
