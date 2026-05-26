'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, CheckCircle2, Mail } from 'lucide-react';
import { Reveal } from './Reveal';
import { kitchenImages } from '@/lib/images';

const includes = [
  'Investment ranges by project scope',
  'Material specifications worth budgeting for',
  'Timeline expectations from contract to keys',
  'Questions to ask any luxury contractor',
];

export function LeadMagnet() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative isolate overflow-hidden bg-ink-800 py-24 lg:py-32">
      {/* Franchise duotone — amber bottom-left, blue top-right */}
      <div aria-hidden className="glow-duotone" />

      <div className="container-luxe">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="border-gradient">
              <div className="relative aspect-[4/5] overflow-hidden bg-ink-700">
                <Image
                  src={kitchenImages[1].src}
                  alt="VCV Vegas Investment Guide"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
                {/* Gold corner ticks */}
                <span aria-hidden className="pointer-events-none absolute left-4 top-4 h-3 w-3 border-l border-t border-gold/60" />
                <span aria-hidden className="pointer-events-none absolute right-4 top-4 h-3 w-3 border-r border-t border-gold/60" />
                <span aria-hidden className="pointer-events-none absolute bottom-4 left-4 h-3 w-3 border-b border-l border-gold/60" />
                <span aria-hidden className="pointer-events-none absolute bottom-4 right-4 h-3 w-3 border-b border-r border-gold/60" />
                <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-12">
                  <div className="flex items-center gap-3 text-bone">
                    <span className="relative grid h-9 w-9 place-items-center overflow-hidden border border-gold/40 bg-gold/5 shadow-[0_0_18px_-4px_rgba(252,187,0,0.45)] backdrop-blur-md">
                      <span aria-hidden className="absolute inset-0 bg-gradient-to-br from-gold/15 to-transparent" />
                      <span aria-hidden className="absolute left-1 top-1 h-1.5 w-1.5 border-l border-t border-gold" />
                      <span aria-hidden className="absolute bottom-1 right-1 h-1.5 w-1.5 border-b border-r border-gold" />
                      <BookOpen className="relative h-4 w-4 text-bone" />
                    </span>
                    <p className="eyebrow !text-bone/85">Studio Brief · 2026</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl text-bone md:text-5xl">
                      The Las Vegas
                      <br />
                      <span className="italic text-bone">Luxury Remodel</span>
                      <br />
                      Investment Guide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <p className="eyebrow mb-6">Complimentary Guide</p>
            <h2 className="font-display text-4xl text-bone text-balance md:text-5xl">
              What a luxury remodel<br />
              <span className="italic text-bone">actually costs.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-bone/65 md:text-lg">
              A short, candid guide from our studio — investment ranges, timeline
              realities, and the specifications that quietly separate a luxury
              remodel from a builder-grade one in the Las Vegas market.
            </p>

            <ul className="mt-8 space-y-3 border-y border-bone/10 py-7">
              {includes.map((item, i) => (
                <li key={item} className="group flex items-center gap-3 text-sm text-bone/75 transition-colors duration-500 hover:text-bone">
                  <span
                    aria-hidden
                    className={`h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-500 ${i % 2 === 0 ? 'bg-gold/70 group-hover:bg-gold group-hover:shadow-[0_0_8px_rgba(252,187,0,0.7)]' : 'bg-accent/70 group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(59,130,246,0.7)]'}`}
                  />
                  <span aria-hidden className="h-px w-4 bg-gold/60 transition-all duration-500 group-hover:w-8" />
                  {item}
                </li>
              ))}
            </ul>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative mt-8 flex items-start gap-4 overflow-hidden border border-gold/30 bg-gold/5 p-6 shadow-[0_0_30px_-12px_rgba(252,187,0,0.45)]"
              >
                <span aria-hidden className="absolute left-2 top-2 h-2 w-2 border-l border-t border-gold" />
                <span aria-hidden className="absolute bottom-2 right-2 h-2 w-2 border-b border-r border-gold" />
                <span
                  aria-hidden
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/50 bg-gold/10 shadow-[0_0_18px_-4px_rgba(252,187,0,0.6)]"
                >
                  <CheckCircle2 className="h-5 w-5 text-bone" />
                </span>
                <div>
                  <p className="font-display text-xl text-bone">
                    On its way.
                  </p>
                  <p className="mt-1 text-sm text-bone/65">
                    The guide will arrive in your inbox within one business day.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <label className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-bone/40" />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full border border-bone/15 bg-ink/70 py-4 pl-12 pr-4 text-bone placeholder:text-bone/40 focus:border-gold focus:outline-none"
                  />
                </label>
                <button type="submit" className="btn-gold">
                  Request Guide
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>
            )}
            <p className="mt-4 text-xs text-bone/40">
              Your information stays confidential. No newsletter. One email.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
