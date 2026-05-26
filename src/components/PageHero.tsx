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
    <section className="relative isolate w-full overflow-hidden bg-ink">
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
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/75 via-ink/50 to-ink" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/30 to-transparent" />

      {/* Ambient duotone glow — amber bottom-left, blue top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 8% 92%, rgba(252,187,0,0.16), transparent 55%), radial-gradient(circle at 92% 8%, rgba(59,130,246,0.13), transparent 55%)',
        }}
      />

      {/* Top gradient hairline announcing the chrome */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(252,187,0,0.4) 35%, rgba(59,130,246,0.4) 65%, transparent 100%)',
        }}
      />

      <div className="container-luxe relative flex min-h-[78svh] flex-col justify-end pt-36 pb-20 lg:min-h-[85svh] lg:pt-44 lg:pb-28">
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-bone/55"
          >
            {breadcrumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-3">
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-bone">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-bone">{c.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <span className="text-bone/30">/</span>
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
            className="font-display text-[2.4rem] leading-[1.05] text-bone text-balance sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {title}
            {italic && (
              <>
                {' '}
                <span className="italic text-bone">{italic}</span>
              </>
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.9 }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-bone/70 md:text-lg"
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
