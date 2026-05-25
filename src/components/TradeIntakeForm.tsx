'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const designPhases = [
  'Schematic Design',
  'Design Development',
  'Construction Documents',
  'Issued for Pricing',
  'In Construction',
  'Pre-engagement / Pitch',
];

const drawingStatus = [
  'Full CD set available',
  'Partial drawings · DD-level',
  'SD-level concept only',
  'Renderings + finish schedule',
  'Verbal scope only at this stage',
];

const roles = [
  'Interior Designer',
  'Architect',
  'Designer + Architect',
  'Developer',
  'Outside GC seeking partnership',
  'Other trade professional',
];

export function TradeIntakeForm() {
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
          <h3 className="font-display text-4xl text-bone">Brief received.</h3>
          <p className="mt-3 max-w-md text-bone/65">
            A senior pre-construction lead will review it personally and
            respond within one business day with a fit assessment and the
            next step. NDA available on request.
          </p>
        </div>
      </motion.div>
    );
  }

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
      className="space-y-10"
    >
      {/* Section 01 - The firm */}
      <section className="border-b border-bone/10 pb-10">
        <p className="eyebrow mb-6 !text-gold">Section 01 · The Firm</p>
        <div className="grid gap-5 md:grid-cols-2">
          <label>
            <span className={labelClass}>Firm name</span>
            <input required name="firm" className={inputClass} placeholder="Studio or practice name" />
          </label>
          <label>
            <span className={labelClass}>Your role</span>
            <select required name="role" className={inputClass} defaultValue="">
              <option value="" disabled>Select your role</option>
              {roles.map((r) => (<option key={r} value={r}>{r}</option>))}
            </select>
          </label>
          <label>
            <span className={labelClass}>Your name</span>
            <input required name="name" className={inputClass} placeholder="Lead contact at the firm" />
          </label>
          <label>
            <span className={labelClass}>Firm location</span>
            <input name="location" className={inputClass} placeholder="LA, Scottsdale, OC, Vegas…" />
          </label>
          <label>
            <span className={labelClass}>Email</span>
            <input required type="email" name="email" className={inputClass} placeholder="you@firm.com" />
          </label>
          <label>
            <span className={labelClass}>Phone</span>
            <input type="tel" name="phone" className={inputClass} placeholder="(000) 000-0000" />
          </label>
          <label className="md:col-span-2">
            <span className={labelClass}>Firm website (optional)</span>
            <input type="url" name="website" className={inputClass} placeholder="https://" />
          </label>
        </div>
      </section>

      {/* Section 02 - The project */}
      <section className="border-b border-bone/10 pb-10">
        <p className="eyebrow mb-6 !text-gold">Section 02 · The Project</p>
        <div className="grid gap-5 md:grid-cols-2">
          <label>
            <span className={labelClass}>Project type</span>
            <input required name="project_type" className={inputClass} placeholder="Kitchen / Bath / Whole-Home / Custom Build" />
          </label>
          <label>
            <span className={labelClass}>Project location</span>
            <input required name="project_location" className={inputClass} placeholder="Neighborhood or city" />
          </label>
          <label>
            <span className={labelClass}>Approx. project value</span>
            <input name="value" className={inputClass} placeholder="$ range or 'Confidential'" />
          </label>
          <label>
            <span className={labelClass}>Client occupied?</span>
            <select name="occupied" className={inputClass} defaultValue="unknown">
              <option value="unknown">Not sure</option>
              <option value="yes">Yes — client will live in home during build</option>
              <option value="no">No — vacant or relocation arranged</option>
            </select>
          </label>
          <label className="md:col-span-2">
            <span className={labelClass}>Design phase</span>
            <select required name="phase" className={inputClass} defaultValue="">
              <option value="" disabled>Select the current phase</option>
              {designPhases.map((p) => (<option key={p} value={p}>{p}</option>))}
            </select>
          </label>
          <label className="md:col-span-2">
            <span className={labelClass}>Drawing status</span>
            <select required name="drawings" className={inputClass} defaultValue="">
              <option value="" disabled>What drawings are available?</option>
              {drawingStatus.map((d) => (<option key={d} value={d}>{d}</option>))}
            </select>
          </label>
        </div>
      </section>

      {/* Section 03 - Engagement */}
      <section className="border-b border-bone/10 pb-10">
        <p className="eyebrow mb-6 !text-gold">Section 03 · The Engagement</p>
        <div className="grid gap-5">
          <label>
            <span className={labelClass}>Target start window</span>
            <input name="start_window" className={inputClass} placeholder="Q3 2026 / Spring 2027 / TBD" />
          </label>
          <label>
            <span className={labelClass}>What would you like from us?</span>
            <select name="ask" className={inputClass} defaultValue="">
              <option value="" disabled>Select the ask</option>
              <option>Pre-construction conversation (no pricing yet)</option>
              <option>Pricing return on a complete CD set</option>
              <option>Budget direction at early DD</option>
              <option>Trade introduction / get-to-know meeting</option>
              <option>Other — describe below</option>
            </select>
          </label>
          <label>
            <span className={labelClass}>Anything else?</span>
            <textarea
              name="notes"
              rows={4}
              className={inputClass}
              placeholder="Discretion notes, NDA timing, prior contractor history, scope sensitivities…"
            />
          </label>
        </div>
      </section>

      {/* Footer */}
      <div>
        <button type="submit" className="btn-gold">
          Send Trade Brief
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
        <p className="mt-4 text-xs text-bone/45">
          Reviewed personally by a senior pre-construction lead.
          Mutual NDA available on request before drawings are shared.
        </p>
      </div>
    </form>
  );
}
