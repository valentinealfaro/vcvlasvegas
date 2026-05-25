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
            <div className="relative aspect-[4/5] overflow-hidden bg-ink-700">
              <Image
                src={kitchenImages[1].src}
                alt="VCV Vegas Investment Guide"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-12">
                <div className="flex items-center gap-3 text-bone">
                  <BookOpen className="h-5 w-5 text-bone" />
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
              {includes.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-bone/75">
                  <span className="h-px w-4 bg-gold" />
                  {item}
                </li>
              ))}
            </ul>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 flex items-start gap-4 border border-gold/30 bg-gold/5 p-6"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-bone" />
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
