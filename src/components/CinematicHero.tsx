'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import type { LuxeImage } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { MagneticButton } from './MagneticButton';

const ROTATION_MS = 6500;

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: string;
  italic?: string;
  description: string;
  images: LuxeImage[];
  breadcrumbs?: Crumb[];
  ctaLabel?: string;
  ctaHref?: string;
};

export function CinematicHero({
  eyebrow,
  title,
  italic,
  description,
  images,
  breadcrumbs,
  ctaLabel = 'Schedule Consultation',
  ctaHref = '/contact',
}: Props) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || images.length < 2) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      ROTATION_MS,
    );
    return () => window.clearInterval(id);
  }, [reduce, images.length]);

  const active = images[index];
  const words = title.split(' ');

  return (
    <section className="relative isolate w-full overflow-hidden bg-ink">
      {/* Crossfading Ken Burns gallery */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
              scale: { duration: ROTATION_MS / 1000 + 1, ease: 'linear' },
            }}
            className="absolute inset-0"
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/72 via-ink/55 to-ink" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />

      {/* Ambient amber + blue franchise glow */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.42 }}
        transition={{ delay: 1.2, duration: 2.5 }}
        className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-[420px] w-[420px] rounded-full bg-gold blur-[160px] md:h-[560px] md:w-[560px]"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.28 }}
        transition={{ delay: 1.4, duration: 2.5 }}
        className="pointer-events-none absolute -right-32 -top-24 -z-10 h-[380px] w-[380px] rounded-full bg-accent-light blur-[180px] md:h-[560px] md:w-[560px]"
      />

      <div className="container-luxe relative flex min-h-[88svh] flex-col justify-end pt-36 pb-24 lg:min-h-[92svh] lg:pt-44 lg:pb-28">
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
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="eyebrow mb-6"
          >
            {eyebrow}
          </motion.p>

          {/* Kinetic title with word-by-word reveal */}
          <h1 className="font-display text-[2.6rem] leading-[1.05] text-bone text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block overflow-hidden pb-[0.05em]">
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  initial={reduce ? { y: 0, opacity: 1 } : { y: '110%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.7 + i * 0.06,
                    duration: 0.95,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mr-[0.25em] inline-block"
                >
                  {w}
                </motion.span>
              ))}
            </span>
            {italic && (
              <span className="block overflow-hidden pb-[0.05em]">
                {italic.split(' ').map((w, i) => (
                  <motion.span
                    key={i}
                    initial={reduce ? { y: 0, opacity: 1 } : { y: '110%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.7 + (words.length + i) * 0.06,
                      duration: 0.95,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="mr-[0.25em] inline-block italic text-bone"
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
            )}
          </h1>

          <motion.p
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.9 }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-bone/70 md:text-lg"
          >
            {description}
          </motion.p>

          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href={ctaHref}>
              {ctaLabel}
              <ArrowRight className="h-3.5 w-3.5" />
            </MagneticButton>
            <a href={siteConfig.phoneHref} className="btn-ghost">
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.phone}
            </a>
          </motion.div>
        </div>

        {/* Image rotation dots */}
        {images.length > 1 && !reduce && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="absolute bottom-8 right-6 lg:right-16"
          >
            <div className="flex items-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show image ${i + 1}`}
                  className="group p-1"
                >
                  <span
                    className={`block h-px transition-all duration-700 ${
                      i === index ? 'w-10 bg-gold' : 'w-5 bg-bone/30 group-hover:bg-bone/60'
                    }`}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
