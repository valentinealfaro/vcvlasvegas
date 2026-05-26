'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { servicesIndex } from '@/lib/site';
import {
  bathroomImages,
  kitchenImages,
  remodelImages,
  customHomeImages,
  flooringImages,
} from '@/lib/images';

const previewMap: Record<string, { src: string; alt: string }> = {
  'bathroom-remodeling-las-vegas': bathroomImages[0],
  'kitchen-remodeling-las-vegas': kitchenImages[0],
  'home-remodeling-las-vegas': remodelImages[0],
  'general-contractor-las-vegas': customHomeImages[0],
  'luxury-renovations-las-vegas': customHomeImages[1],
  'modern-bathroom-design-las-vegas': bathroomImages[3],
  'outdoor-living-las-vegas': customHomeImages[3],
  'investor-remodels-las-vegas': remodelImages[1],
};

export function ServicesMegaMenu() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState<string | null>(null);
  const previewKey = hover ?? servicesIndex[0].slug;
  const preview = previewMap[previewKey] ?? kitchenImages[0];

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setOpen(false);
        setHover(null);
      }}
      className="relative"
    >
      <Link
        href="/services"
        className="link-nav text-[0.72rem] font-medium uppercase tracking-[0.22em] text-bone/75 transition-colors hover:text-bone"
      >
        Services
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[72px] z-40 bg-ink/95 backdrop-blur-xl"
          >
            {/* Top gradient hairline */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  'linear-gradient(to right, transparent 0%, rgba(252,187,0,0.45) 35%, rgba(59,130,246,0.45) 65%, transparent 100%)',
              }}
            />
            {/* Bottom gradient hairline */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
              style={{
                background:
                  'linear-gradient(to right, transparent 0%, rgba(59,130,246,0.45) 35%, rgba(252,187,0,0.45) 65%, transparent 100%)',
              }}
            />
            {/* Ambient duotone glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 10% 100%, rgba(252,187,0,0.06), transparent 55%), radial-gradient(circle at 90% 0%, rgba(59,130,246,0.06), transparent 55%)',
              }}
            />
            <div className="container-luxe relative py-12">
              <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <p className="eyebrow mb-8">Signature Services</p>
                  <ul className="grid grid-cols-2 gap-x-12 gap-y-2">
                    {servicesIndex.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/${s.slug}`}
                          onMouseEnter={() => setHover(s.slug)}
                          className="group relative flex items-center justify-between gap-4 border-b border-transparent py-3 pl-4 transition-all duration-500 hover:border-bone/15 hover:pl-6"
                        >
                          {/* Gold left bar — grows on hover */}
                          <span
                            aria-hidden
                            className="absolute left-0 top-1/2 h-0 w-px -translate-y-1/2 bg-gold transition-all duration-500 group-hover:h-8 group-hover:shadow-[0_0_8px_rgba(252,187,0,0.6)]"
                          />
                          <div>
                            <p className="font-display text-xl text-bone group-hover:text-bone transition-colors md:text-2xl">
                              {s.title}
                            </p>
                            <p className="mt-1 text-xs text-bone/45">{s.eyebrow}</p>
                          </div>
                          <ArrowUpRight className="h-4 w-4 text-bone/30 transition-all duration-500 group-hover:text-bone group-hover:rotate-45" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-gradient hidden lg:block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink-700">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={previewKey}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={preview.src}
                          alt={preview.alt}
                          fill
                          sizes="(max-width: 1280px) 100vw, 35vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                      </motion.div>
                    </AnimatePresence>
                    {/* Gold corner ticks */}
                    <span aria-hidden className="absolute left-3 top-3 h-3 w-3 border-l border-t border-gold/70" />
                    <span aria-hidden className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-gold/70" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-6">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(252,187,0,0.7)]" />
                      <p className="eyebrow !text-bone">Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
