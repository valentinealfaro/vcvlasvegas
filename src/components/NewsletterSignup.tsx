'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

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
        className="flex items-center gap-3 text-sm text-bone"
      >
        <CheckCircle2 className="h-4 w-4" />
        Subscribed. The next letter arrives soon.
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <label className="relative flex-1">
        <input
          required
          type="email"
          name="email"
          placeholder="you@example.com"
          className="w-full border-b border-bone/20 bg-transparent py-3 pr-4 text-sm text-bone placeholder:text-bone/40 focus:border-gold focus:outline-none"
          aria-label="Email address"
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 border border-bone/20 px-5 py-3 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-bone transition-all duration-500 hover:border-gold hover:text-bone sm:shrink-0"
      >
        Subscribe
        <ArrowRight className="h-3 w-3" />
      </button>
    </form>
  );
}
