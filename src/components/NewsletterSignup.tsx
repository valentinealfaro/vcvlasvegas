'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 text-sm text-ink"
      >
        <span
          aria-hidden
          className="grid h-7 w-7 place-items-center rounded-full border border-gold/40 bg-gold/10 shadow-[0_0_18px_-4px_rgba(252,187,0,0.6)]"
        >
          <CheckCircle2 className="h-4 w-4 text-ink" />
        </span>
        Subscribed. The next letter arrives soon.
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row sm:items-center"
    >
      <label className="relative flex-1">
        <input
          required
          type="email"
          name="email"
          placeholder="you@example.com"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="peer w-full border-b border-ink/20 bg-transparent py-3 pr-4 text-sm text-ink placeholder:text-ink/40 focus:border-transparent focus:outline-none"
          aria-label="Email address"
        />
        {/* Animated gradient underline — gold to blue, expands from center on focus */}
        <span
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 -bottom-px h-px origin-center transition-transform duration-500 ease-out ${focused ? 'scale-x-100' : 'scale-x-0'}`}
          style={{
            background:
              'linear-gradient(to right, rgba(252,187,0,0.8) 0%, rgba(59,130,246,0.8) 100%)',
          }}
        />
      </label>
      <button
        type="submit"
        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden border border-ink/20 px-5 py-3 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-ink transition-all duration-500 hover:border-gold hover:text-ink sm:shrink-0"
      >
        {/* Diagonal gold shimmer sweep on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        />
        <span className="relative">Subscribe</span>
        <ArrowRight className="relative h-3 w-3 transition-transform duration-500 group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
