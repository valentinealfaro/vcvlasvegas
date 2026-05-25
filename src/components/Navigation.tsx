'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X, ArrowUpRight } from 'lucide-react';
import { navigation, siteConfig, servicesIndex } from '@/lib/site';
import { cn } from '@/lib/utils';
import { ServicesMegaMenu } from './ServicesMegaMenu';
import { heroGalleryImages } from '@/lib/images';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [previewIdx, setPreviewIdx] = useState(0);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const id = window.setInterval(
      () => setPreviewIdx((i) => (i + 1) % heroGalleryImages.length),
      3000,
    );
    return () => window.clearInterval(id);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-ink/85 backdrop-blur-xl border-b border-bone/5'
            : 'bg-transparent',
        )}
      >
        <div className="container-luxe flex items-center justify-between py-5 lg:py-6">
          <Link
            href="/"
            className="group flex items-baseline gap-2 text-bone"
            aria-label="VCV Vegas Home"
          >
            <span className="font-display text-2xl tracking-tight lg:text-[1.65rem]">
              VCV
            </span>
            <span className="font-sans text-[0.62rem] uppercase tracking-[0.4em] text-gold transition-colors group-hover:text-gold-light">
              Vegas
            </span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {navigation.map((item) =>
              item.href === '/services' ? (
                <ServicesMegaMenu key={item.href} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-bone/75 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-bone/75 transition-colors hover:text-gold"
            >
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.phone}
            </a>
            <Link href="/contact" className="btn-gold !px-5 !py-3 !text-[0.65rem]">
              Consultation
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="lg:hidden text-bone"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Cinematic mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Background image with crossfade */}
            <div className="absolute inset-0">
              <AnimatePresence>
                <motion.div
                  key={previewIdx}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={heroGalleryImages[previewIdx].src}
                    alt={heroGalleryImages[previewIdx].alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/75 to-ink" />

            <div className="relative flex h-full flex-col">
              <div className="container-luxe flex items-center justify-between py-5">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-2 text-bone"
                >
                  <span className="font-display text-2xl tracking-tight">VCV</span>
                  <span className="font-sans text-[0.62rem] uppercase tracking-[0.4em] text-gold">
                    Vegas
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-bone"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="container-luxe flex-1 overflow-y-auto pt-8 pb-32">
                <p className="eyebrow mb-6 !text-bone/60">Navigate</p>
                <nav>
                  <ul className="flex flex-col gap-5">
                    {navigation.map((item, idx) => (
                      <li key={item.href}>
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.55,
                            delay: 0.1 + idx * 0.05,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="group flex items-center justify-between border-b border-bone/10 pb-4 font-display text-3xl text-bone transition-colors hover:text-gold"
                          >
                            {item.label}
                            <ArrowUpRight className="h-5 w-5 text-bone/30 transition-all group-hover:rotate-45 group-hover:text-gold" />
                          </Link>
                        </motion.div>
                      </li>
                    ))}
                  </ul>
                </nav>

                <p className="eyebrow mb-5 mt-12 !text-bone/60">Signature Services</p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {servicesIndex.slice(0, 6).map((s, idx) => (
                    <li key={s.slug}>
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + idx * 0.04,
                        }}
                      >
                        <Link
                          href={`/${s.slug}`}
                          onClick={() => setOpen(false)}
                          className="block text-sm text-bone/70 transition-colors hover:text-gold"
                        >
                          {s.title}
                        </Link>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute inset-x-0 bottom-0 border-t border-bone/10 bg-ink/95 backdrop-blur-xl">
                <div className="container-luxe py-6">
                  <a
                    href={siteConfig.phoneHref}
                    onClick={() => setOpen(false)}
                    className="mb-3 flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-gold"
                  >
                    <Phone className="h-4 w-4" />
                    {siteConfig.phone}
                  </a>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="btn-gold w-full"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
