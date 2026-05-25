'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { navigation, siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';
import { ServicesMegaMenu } from './ServicesMegaMenu';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-[60] lg:hidden transition-all duration-500',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <div className="absolute inset-0 bg-ink" />
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

          <div className="flex-1 px-6 pt-12">
            <nav className="flex flex-col gap-7">
              {navigation.map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl text-bone transition-colors hover:text-gold"
                  style={{
                    animation: open
                      ? `fade-up 0.6s ${0.05 * idx + 0.1}s cubic-bezier(0.16, 1, 0.3, 1) backwards`
                      : 'none',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="border-t border-bone/10 p-6">
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
    </>
  );
}
