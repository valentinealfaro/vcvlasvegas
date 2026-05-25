'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import { Reveal } from './Reveal';

export function JournalSubscribe() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="border-y border-bone/10 bg-ink-800/40">
      <div className="container-luxe py-14 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="eyebrow mb-4">Quarterly Letter</p>
                <h3 className="font-display text-2xl text-bone text-balance md:text-3xl">
                  Get the next note in your inbox.
                </h3>
                <p className="mt-3 text-sm text-bone/55">
                  Four letters a year. Design notes, finish specifications,
                  and project studies. Unsubscribe anytime.
                </p>
              </div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 border border-gold/30 bg-gold/5 px-5 py-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-bone" />
                  <p className="text-sm text-bone/75">Subscribed.</p>
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
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-bone/40" />
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="w-full border border-bone/15 bg-ink/70 py-3 pl-12 pr-4 text-sm text-bone placeholder:text-bone/40 focus:border-gold focus:outline-none"
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
    </section>
  );
}
