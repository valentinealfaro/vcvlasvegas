'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import type { LuxeImage } from '@/lib/images';
import { siteConfig } from '@/lib/site';

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: string;
  italic?: string;
  description: string;
  image: LuxeImage;
  breadcrumbs?: Crumb[];
  ctaLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  italic,
  description,
  image,
  breadcrumbs,
  ctaLabel = 'Schedule Consultation',
}: Props) {
  return (
    <section className="relative isolate w-full overflow-hidden bg-bone">
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      {/* Sunlight wash — image bleeds through top/center, bg returns at bottom */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bone/25 via-bone/10 to-bone" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bone/90 via-bone/35 to-transparent" />
      {/* Coral sunset tint */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 mix-blend-overlay opacity-25"
        style={{
          background:
            'linear-gradient(to top, rgba(249,115,22,0.18) 0%, transparent 40%, rgba(252,187,0,0.10) 100%)',
        }}
      />

      {/* Ambient duotone glow — amber bottom-left, coral top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 8% 92%, rgba(252,187,0,0.22), transparent 55%), radial-gradient(circle at 92% 8%, rgba(249,115,22,0.18), transparent 55%)',
        }}
      />

      {/* Top gradient hairline announcing the chrome */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(252,187,0,0.55) 35%, rgba(249,115,22,0.55) 65%, transparent 100%)',
        }}
      />

      <div className="container-luxe relative flex min-h-[78svh] flex-col justify-end pt-36 pb-20 lg:min-h-[85svh] lg:pt-44 lg:pb-28">
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-ink/55"
          >
            {breadcrumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-3">
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-ink">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ink">{c.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <span className="text-ink/30">/</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-6 flex items-center gap-4"
          >
            <span
              aria-hidden
              className="h-px w-10 bg-gradient-to-r from-gold via-gold/40 to-transparent"
            />
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_12px_rgba(252,187,0,0.7)]" />
            <p className="eyebrow">{eyebrow}</p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[2.4rem] leading-[1.05] text-ink text-balance [text-shadow:0_2px_20px_rgba(250,247,242,0.6)] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {title}
            {italic && (
              <>
                {' '}
                <span className="italic text-ink">{italic}</span>
              </>
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.9 }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.9 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="/contact" className="btn-gold">
              {ctaLabel}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a href={siteConfig.phoneHref} className="btn-ghost">
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.phone}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
