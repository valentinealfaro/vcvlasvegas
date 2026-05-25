'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, Phone } from 'lucide-react';
import { heroGalleryImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';

export function Hero() {
  const reduce = useReducedMotion();
  const heroImage = heroGalleryImages[0];

  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-ink">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/55 to-ink" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />

      <div className="container-luxe relative flex min-h-[100svh] flex-col justify-between pt-32 pb-28 lg:pt-40 lg:pb-32">
        {/* Top eyebrow row */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hidden items-center justify-between lg:flex"
        >
          <div className="flex items-center gap-4">
            <span className="hairline" />
            <p className="eyebrow !text-bone/70">
              EST. Las Vegas Metro · Luxury Design-Build
            </p>
          </div>
          <p className="eyebrow !text-bone/50">
            Kitchens · Baths · Whole-Home
          </p>
        </motion.div>

        {/* Main headline */}
        <div className="max-w-5xl">
          <motion.h1
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[2.6rem] leading-[1.02] text-bone text-balance sm:text-6xl md:text-7xl lg:text-[6rem]"
          >
            Luxury remodeling
            <br />
            <span className="italic text-gold-light">designed for</span>
            <br />
            Las&nbsp;Vegas living.
          </motion.h1>

          <motion.p
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.9 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-bone/70 md:text-lg"
          >
            VCV Vegas builds architectural kitchens, spa-inspired bathrooms, and
            whole-home renovations for discerning homeowners across the Las
            Vegas valley — from Summerlin and Henderson to Paradise and
            Mountains Edge.
          </motion.p>

          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link href="/contact" className="btn-gold">
              Schedule Consultation
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a href={siteConfig.phoneHref} className="btn-ghost">
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.phone}
            </a>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1.2 }}
          className="flex items-end justify-between gap-6"
        >
          <div className="hidden items-center gap-3 text-bone/55 md:flex">
            <ArrowDown className="h-4 w-4 animate-pulse text-gold" />
            <span className="text-[0.65rem] uppercase tracking-[0.32em]">
              Discover
            </span>
          </div>
          <div className="grid grid-cols-3 gap-6 text-bone/70 md:gap-12">
            {[
              { n: '100%', l: 'Licensed & Insured' },
              { n: '7-Figure', l: 'Project Capacity' },
              { n: 'Design-Build', l: 'Single Source Team' },
            ].map((stat) => (
              <div key={stat.l} className="border-l border-bone/15 pl-4">
                <p className="font-display text-2xl text-bone md:text-3xl">
                  {stat.n}
                </p>
                <p className="mt-1 text-[0.6rem] uppercase tracking-[0.24em] text-bone/50">
                  {stat.l}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
