'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, ChefHat, Bath, Home, Wrench, Building2, Trees, TrendingUp, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

type ProjectKey =
  | 'kitchen'
  | 'bathroom'
  | 'whole-home'
  | 'general'
  | 'renovation'
  | 'outdoor'
  | 'investor'
  | 'other';

const projectTypes: { key: ProjectKey; label: string; icon: typeof ChefHat }[] = [
  { key: 'kitchen', label: 'Luxury Kitchen', icon: ChefHat },
  { key: 'bathroom', label: 'Spa Bathroom', icon: Bath },
  { key: 'whole-home', label: 'Whole-Home Remodel', icon: Home },
  { key: 'renovation', label: 'Luxury Renovation', icon: Sparkles },
  { key: 'general', label: 'General Contracting', icon: Wrench },
  { key: 'outdoor', label: 'Outdoor Living', icon: Trees },
  { key: 'investor', label: 'Investor / Airbnb', icon: TrendingUp },
  { key: 'other', label: 'Something Else', icon: Building2 },
];

const ranges = [
  { key: 'under-100', label: 'Under $100k' },
  { key: '100-250', label: '$100k – $250k' },
  { key: '250-500', label: '$250k – $500k' },
  { key: '500-1m', label: '$500k – $1M' },
  { key: '1m+', label: '$1M+' },
  { key: 'unsure', label: 'Not Sure Yet' },
];

const timelines = [
  { key: 'asap', label: 'As soon as possible' },
  { key: '3-months', label: 'Within 3 months' },
  { key: '6-months', label: 'Within 6 months' },
  { key: 'flexible', label: 'Flexible' },
];

type FormState = {
  project: ProjectKey | '';
  range: string;
  timeline: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  message: string;
};

const initialState: FormState = {
  project: '',
  range: '',
  timeline: '',
  name: '',
  phone: '',
  email: '',
  city: '',
  message: '',
};

export function ConsultationForm({ variant = 'dark' }: { variant?: 'dark' | 'inset' }) {
  const [step, setStep] = useState(0);
  const [state, setState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 4;
  const progress = ((step + 1) / totalSteps) * 100;

  const update = (k: keyof FormState, v: string) => setState((s) => ({ ...s, [k]: v }));

  const canAdvance = () => {
    if (step === 0) return !!state.project;
    if (step === 1) return !!state.range;
    if (step === 2) return !!state.timeline;
    return false;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start gap-5 py-12"
      >
        <span
          aria-hidden
          className="grid h-14 w-14 place-items-center rounded-full border border-gold/40 bg-gold/10 shadow-[0_0_28px_-6px_rgba(252,187,0,0.6)]"
        >
          <CheckCircle2 className="h-7 w-7 text-ink" />
        </span>
        <div>
          <h3 className="font-display text-4xl text-ink">Thank you.</h3>
          <span aria-hidden className="mt-4 block h-px w-16 bg-gradient-to-r from-gold via-gold/40 to-transparent" />
          <p className="mt-4 max-w-md text-ink/65">
            A senior VCV Vegas designer will personally reach out within one
            business day to schedule your private consultation. Your information
            stays confidential.
          </p>
        </div>
      </motion.div>
    );
  }

  const fieldBase =
    variant === 'inset'
      ? 'w-full border-b border-ink/20 bg-transparent py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none'
      : 'w-full border border-ink/15 bg-bone-50 px-4 py-3 text-ink placeholder:text-ink/40 transition-all duration-300 hover:border-gold/40 focus:border-gold focus:shadow-[0_4px_18px_-6px_rgba(252,187,0,0.35)] focus:outline-none';

  return (
    <div>
      {/* Progress */}
      <div className="mb-8 flex items-center gap-4">
        <div className="relative h-px flex-1 overflow-hidden bg-ink/15">
          <motion.div
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-gold via-gold to-accent shadow-[0_0_8px_rgba(252,187,0,0.6)]"
          />
        </div>
        <div className="flex items-center gap-2">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(252,187,0,0.7)]" />
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-ink/45">
            Step {step + 1} / {totalSteps}
          </p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {step === 0 && (
            <div>
              <p className="eyebrow mb-3 !text-ink">Your Project</p>
              <h3 className="font-display text-3xl text-ink md:text-4xl">
                What kind of project are you considering?
              </h3>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {projectTypes.map(({ key, label, icon: Icon }) => {
                  const active = state.project === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => {
                        update('project', key);
                        setTimeout(() => setStep(1), 250);
                      }}
                      className={cn(
                        'group flex items-center gap-4 border px-5 py-5 text-left transition-all duration-300',
                        active
                          ? 'border-gold bg-gold/5 text-ink'
                          : 'border-ink/15 text-ink/75 hover:border-gold/60 hover:text-ink',
                      )}
                    >
                      <Icon
                        className={cn(
                          'h-5 w-5 shrink-0 transition-colors',
                          active ? 'text-ink' : 'text-ink/45 group-hover:text-ink',
                        )}
                      />
                      <span className="text-sm tracking-wide">{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <p className="eyebrow mb-3 !text-ink">Investment Range</p>
              <h3 className="font-display text-3xl text-ink md:text-4xl">
                What investment range are you working with?
              </h3>
              <p className="mt-3 text-sm text-ink/55">
                Indicative only — final ranges are tied to your home and goals.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {ranges.map((r) => {
                  const active = state.range === r.key;
                  return (
                    <button
                      key={r.key}
                      type="button"
                      onClick={() => {
                        update('range', r.key);
                        setTimeout(() => setStep(2), 200);
                      }}
                      className={cn(
                        'border px-5 py-5 text-left text-sm transition-all duration-300',
                        active
                          ? 'border-gold bg-gold/5 text-ink'
                          : 'border-ink/15 text-ink/75 hover:border-gold/60 hover:text-ink',
                      )}
                    >
                      {r.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="eyebrow mb-3 !text-ink">Timing</p>
              <h3 className="font-display text-3xl text-ink md:text-4xl">
                When would you like to begin?
              </h3>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {timelines.map((t) => {
                  const active = state.timeline === t.key;
                  return (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => {
                        update('timeline', t.key);
                        setTimeout(() => setStep(3), 200);
                      }}
                      className={cn(
                        'border px-5 py-5 text-left text-sm transition-all duration-300',
                        active
                          ? 'border-gold bg-gold/5 text-ink'
                          : 'border-ink/15 text-ink/75 hover:border-gold/60 hover:text-ink',
                      )}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <p className="eyebrow mb-1 !text-ink">Private Details</p>
              <h3 className="font-display text-3xl text-ink md:text-4xl">
                How can we reach you?
              </h3>
              <p className="-mt-1 text-sm text-ink/55">
                Your information stays confidential. Senior designer follow-up within one business day.
              </p>

              <div className="mt-4 grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.28em] text-ink/50">
                    Full Name
                  </span>
                  <input
                    required
                    value={state.name}
                    onChange={(e) => update('name', e.target.value)}
                    className={fieldBase}
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.28em] text-ink/50">
                    Phone
                  </span>
                  <input
                    required
                    type="tel"
                    value={state.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className={fieldBase}
                    placeholder="(702) 000-0000"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.28em] text-ink/50">
                  Email
                </span>
                <input
                  required
                  type="email"
                  value={state.email}
                  onChange={(e) => update('email', e.target.value)}
                  className={fieldBase}
                  placeholder="you@example.com"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.28em] text-ink/50">
                  Neighborhood
                </span>
                <input
                  value={state.city}
                  onChange={(e) => update('city', e.target.value)}
                  className={fieldBase}
                  placeholder="Summerlin, Henderson, The Ridges…"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.28em] text-ink/50">
                  Anything specific you’d like us to know? (optional)
                </span>
                <textarea
                  value={state.message}
                  onChange={(e) => update('message', e.target.value)}
                  rows={4}
                  className={fieldBase}
                  placeholder="Vision, must-haves, photos you’ve saved…"
                />
              </label>

              <button type="submit" className="btn-gold mt-3 w-fit">
                Request Consultation
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Footer navigation */}
      <div className="mt-10 flex items-center justify-between border-t border-ink/10 pt-6">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-ink/55 transition-colors hover:text-ink disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ArrowLeft className="h-3 w-3" />
          Back
        </button>
        {step < 3 && (
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(3, s + 1))}
            disabled={!canAdvance()}
            className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-ink transition-opacity disabled:cursor-not-allowed disabled:opacity-30"
          >
            Continue
            <ArrowRight className="h-3 w-3" />
          </button>
        )}
      </div>
    </div>
  );
}
