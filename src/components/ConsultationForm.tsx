'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicesIndex } from '@/lib/site';

export function ConsultationForm({ variant = 'dark' }: { variant?: 'dark' | 'inset' }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fieldBase =
    variant === 'inset'
      ? 'w-full border-b border-bone/20 bg-transparent py-3 text-bone placeholder:text-bone/40 focus:border-gold focus:outline-none'
      : 'w-full border border-bone/15 bg-ink-700/50 px-4 py-3 text-bone placeholder:text-bone/40 focus:border-gold focus:outline-none';

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-5 py-12">
        <CheckCircle2 className="h-10 w-10 text-gold" />
        <div>
          <h3 className="font-display text-3xl text-bone">Thank you.</h3>
          <p className="mt-2 text-bone/65">
            A senior designer will reach out within one business day to schedule
            your private consultation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.28em] text-bone/50">
            Full Name
          </span>
          <input required name="name" className={fieldBase} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.28em] text-bone/50">
            Phone
          </span>
          <input
            required
            type="tel"
            name="phone"
            className={fieldBase}
            placeholder="(702) 000-0000"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.28em] text-bone/50">
          Email
        </span>
        <input
          required
          type="email"
          name="email"
          className={fieldBase}
          placeholder="you@example.com"
        />
      </label>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.28em] text-bone/50">
            Project Type
          </span>
          <select required name="project" className={fieldBase} defaultValue="">
            <option value="" disabled>
              Choose a service
            </option>
            {servicesIndex.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="other">Something else</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.28em] text-bone/50">
            Neighborhood
          </span>
          <input name="city" className={fieldBase} placeholder="Summerlin, Henderson…" />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.28em] text-bone/50">
          Tell us about your project
        </span>
        <textarea
          name="message"
          rows={5}
          className={fieldBase}
          placeholder="Scope, timing, design direction…"
        />
      </label>
      <button type="submit" className="btn-gold mt-2 w-fit">
        Request Consultation
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
      <p className="text-xs text-bone/40">
        We respond within one business day. Your details remain confidential.
      </p>
    </form>
  );
}
