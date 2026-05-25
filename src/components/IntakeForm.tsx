'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicesIndex } from '@/lib/site';

const ranges = [
  '$100k – $250k',
  '$250k – $500k',
  '$500k – $1M',
  '$1M – $2M',
  '$2M+',
  'Not sure',
];

const timelines = [
  'Within 3 months',
  'Within 6 months',
  '6 – 12 months',
  '12+ months',
  'Flexible',
];

const stylePrefs = [
  'Modern Desert',
  'Transitional',
  'Mediterranean',
  'Hollywood Regency',
  'Contemporary',
  'Open to direction',
];

export function IntakeForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start gap-5 py-12"
      >
        <CheckCircle2 className="h-12 w-12 text-gold" />
        <div>
          <h3 className="font-display text-4xl text-bone">Project received.</h3>
          <p className="mt-3 max-w-md text-bone/65">
            A senior VCV Vegas designer will review the brief personally and
            respond within one business day. Your information stays confidential.
          </p>
        </div>
      </motion.div>
    );
  }

  const sectionClass = 'border-b border-bone/10 pb-10';
  const labelClass =
    'mb-2 block text-[0.62rem] uppercase tracking-[0.28em] text-bone/55';
  const inputClass =
    'w-full border border-bone/15 bg-ink-700/50 px-4 py-3 text-bone placeholder:text-bone/40 focus:border-gold focus:outline-none';

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-12"
    >
      {/* Section 01 */}
      <section className={sectionClass}>
        <p className="eyebrow mb-6 !text-gold">Section 01 · Contact</p>
        <div className="grid gap-5 md:grid-cols-2">
          <label>
            <span className={labelClass}>Full Name</span>
            <input required name="name" className={inputClass} placeholder="Your name" />
          </label>
          <label>
            <span className={labelClass}>Phone</span>
            <input required type="tel" name="phone" className={inputClass} placeholder="(702) 000-0000" />
          </label>
          <label className="md:col-span-2">
            <span className={labelClass}>Email</span>
            <input required type="email" name="email" className={inputClass} placeholder="you@example.com" />
          </label>
          <label>
            <span className={labelClass}>How should we address you?</span>
            <input name="address_as" className={inputClass} placeholder="First name preferred" />
          </label>
          <label>
            <span className={labelClass}>Preferred contact method</span>
            <select name="contact_method" className={inputClass} defaultValue="email">
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="text">Text</option>
            </select>
          </label>
        </div>
      </section>

      {/* Section 02 */}
      <section className={sectionClass}>
        <p className="eyebrow mb-6 !text-gold">Section 02 · The Property</p>
        <div className="grid gap-5 md:grid-cols-2">
          <label>
            <span className={labelClass}>Neighborhood</span>
            <input name="neighborhood" className={inputClass} placeholder="Summerlin, The Ridges, Henderson…" />
          </label>
          <label>
            <span className={labelClass}>Address (optional)</span>
            <input name="address" className={inputClass} placeholder="Confidential" />
          </label>
          <label>
            <span className={labelClass}>Year built (approx.)</span>
            <input name="year_built" className={inputClass} placeholder="2008" />
          </label>
          <label>
            <span className={labelClass}>Approximate square footage</span>
            <input name="sqft" className={inputClass} placeholder="4,200 sqft" />
          </label>
          <label className="md:col-span-2">
            <span className={labelClass}>Current use</span>
            <select name="current_use" className={inputClass} defaultValue="primary">
              <option value="primary">Primary residence</option>
              <option value="second">Second / vacation home</option>
              <option value="investment">Investment / STR</option>
              <option value="new">New purchase</option>
            </select>
          </label>
        </div>
      </section>

      {/* Section 03 */}
      <section className={sectionClass}>
        <p className="eyebrow mb-6 !text-gold">Section 03 · The Project</p>
        <div className="grid gap-5">
          <label>
            <span className={labelClass}>Project type</span>
            <select required name="project_type" className={inputClass} defaultValue="">
              <option value="" disabled>Choose a service direction</option>
              {servicesIndex.map((s) => (
                <option key={s.slug} value={s.title}>{s.title}</option>
              ))}
              <option value="other">Something else</option>
            </select>
          </label>
          <label>
            <span className={labelClass}>Investment range</span>
            <select required name="range" className={inputClass} defaultValue="">
              <option value="" disabled>Select a range</option>
              {ranges.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </label>
          <label>
            <span className={labelClass}>Timeline</span>
            <select required name="timeline" className={inputClass} defaultValue="">
              <option value="" disabled>Select a timeline</option>
              {timelines.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </label>
          <label>
            <span className={labelClass}>Architectural direction</span>
            <select name="style" className={inputClass} defaultValue="">
              <option value="" disabled>Select a direction</option>
              {stylePrefs.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>
        </div>
      </section>

      {/* Section 04 */}
      <section className={sectionClass}>
        <p className="eyebrow mb-6 !text-gold">Section 04 · The Vision</p>
        <div className="grid gap-5">
          <label>
            <span className={labelClass}>Tell us what your home is missing.</span>
            <textarea
              name="vision"
              rows={4}
              className={inputClass}
              placeholder="What feels off? What would you change? What rooms do you spend the most time in?"
            />
          </label>
          <label>
            <span className={labelClass}>Links to inspiration (Pinterest, IG saves, magazine images)</span>
            <textarea
              name="references"
              rows={3}
              className={inputClass}
              placeholder="Paste links or describe references"
            />
          </label>
          <label>
            <span className={labelClass}>Outside designers or architects involved?</span>
            <input name="outside_team" className={inputClass} placeholder="Firm names, or 'None'" />
          </label>
        </div>
      </section>

      <div>
        <button type="submit" className="btn-gold">
          Submit Project Brief
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
        <p className="mt-4 text-xs text-bone/45">
          A senior designer reviews every brief personally. Response within one business day.
          Your information stays confidential.
        </p>
      </div>
    </form>
  );
}
