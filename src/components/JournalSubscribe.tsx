'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import { Reveal } from './Reveal';

export function JournalSubscribe() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative overflow-hidden bg-bone-800/40">
      {/* Top gradient hairline */}
      <div
        aria-hidden
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(252,187,0,0.45) 35%, rgba(59,130,246,0.45) 65%, transparent 100%)',
        }}
      />
      <div aria-hidden className="glow-amber" />

      <div className="container-luxe relative py-14 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="relative grid h-9 w-9 place-items-center overflow-hidden border border-gold/40 bg-gold/5 shadow-[0_0_18px_-4px_rgba(252,187,0,0.45)]">
                    <span aria-hidden className="absolute inset-0 bg-gradient-to-br from-gold/15 to-transparent" />
                    <span aria-hidden className="absolute left-1 top-1 h-1.5 w-1.5 border-l border-t border-gold" />
                    <span aria-hidden className="absolute bottom-1 right-1 h-1.5 w-1.5 border-b border-r border-gold" />
                    <Mail className="relative h-4 w-4 text-ink" aria-hidden />
                  </span>
                  <p className="eyebrow !text-ink">Quarterly Letter</p>
                </div>
                <h3 className="font-display text-2xl text-ink text-balance md:text-3xl">
                  Get the next note in your inbox.
                </h3>
                <p className="mt-3 text-sm text-ink/55">
                  Four letters a year. Design notes, finish specifications,
                  and project studies. Unsubscribe anytime.
                </p>
              </div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex items-center gap-3 overflow-hidden border border-gold/30 bg-gold/5 px-5 py-4 shadow-[0_0_18px_-6px_rgba(252,187,0,0.5)]"
                >
                  <span aria-hidden className="absolute left-2 top-2 h-1.5 w-1.5 border-l border-t border-gold" />
                  <span aria-hidden className="absolute bottom-2 right-2 h-1.5 w-1.5 border-b border-r border-gold" />
                  <span
                    aria-hidden
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold/50 bg-gold/10 shadow-[0_0_12px_-2px_rgba(252,187,0,0.6)]"
                  >
                    <CheckCircle2 className="h-4 w-4 text-ink" />
                  </span>
                  <p className="text-sm text-ink/85">Subscribed.</p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <label className="relative flex-1">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="w-full border border-ink/15 bg-bone/70 py-3 pl-12 pr-4 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
                    />
                  </label>
                  <button type="submit" className="btn-gold sm:shrink-0">
                    Subscribe
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom gradient hairline (reversed) */}
      <div
        aria-hidden
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(59,130,246,0.45) 35%, rgba(252,187,0,0.45) 65%, transparent 100%)',
        }}
      />
    </section>
  );
}
