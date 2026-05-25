'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Mail, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

type StyleKey = 'modern-desert' | 'transitional' | 'mediterranean' | 'hollywood-regency';
type Warmth = 'cool' | 'balanced' | 'warm' | 'rich';
type Light = 'natural' | 'layered' | 'dramatic' | 'quiet';
type Scope = 'single' | 'multi' | 'whole-home' | 'custom-build';

type Answers = {
  style: StyleKey | '';
  warmth: Warmth | '';
  light: Light | '';
  scope: Scope | '';
};

const styles: { key: StyleKey; label: string; description: string; tones: string[] }[] = [
  {
    key: 'modern-desert',
    label: 'Modern Desert',
    description: 'Honed stone, warm wood, frameless glass. Restrained, architectural.',
    tones: ['#f4f1ec', '#c9c4bb', '#a89c8a', '#1a1a1a'],
  },
  {
    key: 'transitional',
    label: 'Transitional',
    description: 'Modern bones with classic warmth. Brushed brass, soft millwork, layered fabrics.',
    tones: ['#f4f1ec', '#d8d1c2', '#b8945c', '#5e4a36'],
  },
  {
    key: 'mediterranean',
    label: 'Mediterranean',
    description: 'Plaster, terracotta, hand-forged iron. Warm, tactile, anchored.',
    tones: ['#e8dcc4', '#c4a780', '#8a6e3f', '#3a2e23'],
  },
  {
    key: 'hollywood-regency',
    label: 'Hollywood Regency',
    description: 'Lacquer, polished metal, dark wood. Glamorous, layered, theatrical.',
    tones: ['#1a1a1a', '#3a2e23', '#b8945c', '#d4b483'],
  },
];

const warmths: { key: Warmth; label: string; description: string }[] = [
  { key: 'cool', label: 'Cool & Crisp', description: 'Whites, greys, polished nickel, glass.' },
  { key: 'balanced', label: 'Balanced', description: 'Bone, soft warm whites, mixed metals.' },
  { key: 'warm', label: 'Warm & Honeyed', description: 'Bone, walnut, brushed brass, plaster.' },
  { key: 'rich', label: 'Rich & Deep', description: 'Smoked oak, bronze, dark stone, lacquer.' },
];

const lights: { key: Light; label: string; description: string }[] = [
  { key: 'natural', label: 'Natural & Open', description: 'Lots of glass, indoor-outdoor flow.' },
  { key: 'layered', label: 'Layered & Ambient', description: 'Four lighting scenes per room.' },
  { key: 'dramatic', label: 'Dramatic & Cinematic', description: 'Cove lighting, accent washes, contrast.' },
  { key: 'quiet', label: 'Quiet & Intimate', description: 'Low ambient, decorative pendants, calm.' },
];

const scopes: { key: Scope; label: string; description: string }[] = [
  { key: 'single', label: 'Single Room', description: 'Kitchen, bath, or one signature space.' },
  { key: 'multi', label: 'Multi-Room', description: 'Two or three coordinated rooms.' },
  { key: 'whole-home', label: 'Whole-Home', description: 'Entire residence renovated together.' },
  { key: 'custom-build', label: 'New Construction', description: 'Custom architectural build.' },
];

export function StyleQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    style: '',
    warmth: '',
    light: '',
    scope: '',
  });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 5;
  const progress = ((step + 1) / totalSteps) * 100;

  const update = <K extends keyof Answers>(k: K, v: Answers[K]) => {
    setAnswers((s) => ({ ...s, [k]: v }));
    setTimeout(() => setStep((s) => s + 1), 280);
  };

  const reset = () => {
    setStep(0);
    setAnswers({ style: '', warmth: '', light: '', scope: '' });
    setEmail('');
    setSubmitted(false);
  };

  const selectedStyle = styles.find((s) => s.key === answers.style);

  return (
    <div className="border border-bone/10 bg-ink-800/40 p-6 md:p-10">
      {/* Progress */}
      <div className="mb-8 flex items-center gap-4">
        <div className="relative h-px flex-1 overflow-hidden bg-bone/15">
          <motion.div
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-0 h-full bg-gold"
          />
        </div>
        <p className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/45">
          {step >= totalSteps - 1 ? 'Profile' : `Step ${step + 1} / ${totalSteps - 1}`}
        </p>
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
              <p className="eyebrow mb-3 !text-bone">Question 01 · Architecture</p>
              <h3 className="font-display text-3xl text-bone md:text-4xl">
                Which language speaks to you?
              </h3>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {styles.map((s) => (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => update('style', s.key)}
                    className={cn(
                      'group border border-bone/15 p-5 text-left transition-all duration-300 hover:border-gold',
                      answers.style === s.key && 'border-gold bg-gold/5',
                    )}
                  >
                    <div className="mb-4 flex gap-1">
                      {s.tones.map((t, i) => (
                        <span
                          key={i}
                          className="h-5 w-5 border border-bone/10"
                          style={{ backgroundColor: t }}
                        />
                      ))}
                    </div>
                    <p className="font-display text-xl text-bone group-hover:text-bone">
                      {s.label}
                    </p>
                    <p className="mt-2 text-xs leading-snug text-bone/55">
                      {s.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <p className="eyebrow mb-3 !text-bone">Question 02 · Material Warmth</p>
              <h3 className="font-display text-3xl text-bone md:text-4xl">
                How warm should the rooms feel?
              </h3>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {warmths.map((w) => (
                  <button
                    key={w.key}
                    type="button"
                    onClick={() => update('warmth', w.key)}
                    className={cn(
                      'border border-bone/15 p-5 text-left transition-all duration-300 hover:border-gold',
                      answers.warmth === w.key && 'border-gold bg-gold/5',
                    )}
                  >
                    <p className="font-display text-xl text-bone">{w.label}</p>
                    <p className="mt-2 text-xs text-bone/55">{w.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="eyebrow mb-3 !text-bone">Question 03 · Light</p>
              <h3 className="font-display text-3xl text-bone md:text-4xl">
                What kind of light do you want to live in?
              </h3>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {lights.map((l) => (
                  <button
                    key={l.key}
                    type="button"
                    onClick={() => update('light', l.key)}
                    className={cn(
                      'border border-bone/15 p-5 text-left transition-all duration-300 hover:border-gold',
                      answers.light === l.key && 'border-gold bg-gold/5',
                    )}
                  >
                    <p className="font-display text-xl text-bone">{l.label}</p>
                    <p className="mt-2 text-xs text-bone/55">{l.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <p className="eyebrow mb-3 !text-bone">Question 04 · Project Scope</p>
              <h3 className="font-display text-3xl text-bone md:text-4xl">
                How much of the home are we touching?
              </h3>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {scopes.map((s) => (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => update('scope', s.key)}
                    className={cn(
                      'border border-bone/15 p-5 text-left transition-all duration-300 hover:border-gold',
                      answers.scope === s.key && 'border-gold bg-gold/5',
                    )}
                  >
                    <p className="font-display text-xl text-bone">{s.label}</p>
                    <p className="mt-2 text-xs text-bone/55">{s.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <p className="eyebrow mb-3 !text-bone">Your Style Profile</p>
              <h3 className="font-display text-4xl text-bone md:text-5xl">
                {selectedStyle?.label}{' '}
                <span className="italic text-bone">·</span>{' '}
                {warmths.find((w) => w.key === answers.warmth)?.label}
              </h3>
              <p className="mt-4 max-w-xl text-bone/65">
                Your profile points toward a {selectedStyle?.label.toLowerCase()} home with
                {' '}
                {warmths.find((w) => w.key === answers.warmth)?.label.toLowerCase()} materials,
                {' '}
                {lights.find((l) => l.key === answers.light)?.label.toLowerCase()} light, and a
                {' '}
                {scopes.find((s) => s.key === answers.scope)?.label.toLowerCase()} scope. Send the
                full direction by email below — sample palettes, recommended materials, and
                project examples that match.
              </p>

              {selectedStyle && (
                <div className="mt-8 border-y border-bone/10 py-7">
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/45">
                    Sample Palette
                  </p>
                  <div className="mt-4 flex gap-2">
                    {selectedStyle.tones.map((t, i) => (
                      <span
                        key={i}
                        className="h-16 flex-1 border border-bone/10"
                        style={{ backgroundColor: t }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-8 flex items-start gap-4 border border-gold/30 bg-gold/5 p-6"
                >
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-bone" />
                  <div>
                    <p className="font-display text-xl text-bone">
                      Your style direction is on its way.
                    </p>
                    <p className="mt-1 text-sm text-bone/65">
                      A senior designer will follow up within one business day with
                      sample palettes and project examples that match your profile.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="mt-8"
                >
                  <p className="mb-3 text-[0.65rem] uppercase tracking-[0.28em] text-bone/55">
                    Send the full direction
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <label className="relative flex-1">
                      <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-bone/40" />
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full border border-bone/15 bg-ink/70 py-3 pl-12 pr-4 text-sm text-bone placeholder:text-bone/40 focus:border-gold focus:outline-none"
                      />
                    </label>
                    <button type="submit" className="btn-gold sm:shrink-0">
                      Send Direction
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </form>
              )}

              <button
                type="button"
                onClick={reset}
                className="mt-8 flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-bone/55 transition-colors hover:text-bone"
              >
                <RotateCcw className="h-3 w-3" />
                Start Over
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Footer nav (only on questions, not result) */}
      {step < 4 && (
        <div className="mt-10 flex items-center justify-between border-t border-bone/10 pt-6">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-bone/55 transition-colors hover:text-bone disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowLeft className="h-3 w-3" />
            Back
          </button>
          <p className="text-[0.6rem] uppercase tracking-[0.22em] text-bone/35">
            Tap a card to continue
          </p>
        </div>
      )}
    </div>
  );
}
