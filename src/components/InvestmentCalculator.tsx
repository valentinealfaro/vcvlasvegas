'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bath, Building2, ChefHat, CheckCircle2, Home, Mail, Trees } from 'lucide-react';
import { cn } from '@/lib/utils';

type Project = 'kitchen' | 'bathroom' | 'whole-home' | 'outdoor';
type Finish = 'signature' | 'premium' | 'bespoke';

const projects: { key: Project; label: string; icon: typeof ChefHat; basePerSqft: [number, number]; sqftRange: [number, number]; defaultSqft: number; baseWeeks: [number, number] }[] = [
  {
    key: 'kitchen',
    label: 'Luxury Kitchen',
    icon: ChefHat,
    basePerSqft: [600, 1400],
    sqftRange: [150, 700],
    defaultSqft: 300,
    baseWeeks: [8, 14],
  },
  {
    key: 'bathroom',
    label: 'Spa Bathroom',
    icon: Bath,
    basePerSqft: [550, 1300],
    sqftRange: [80, 400],
    defaultSqft: 180,
    baseWeeks: [6, 10],
  },
  {
    key: 'whole-home',
    label: 'Whole-Home',
    icon: Home,
    basePerSqft: [350, 900],
    sqftRange: [2500, 12000],
    defaultSqft: 5000,
    baseWeeks: [16, 36],
  },
  {
    key: 'outdoor',
    label: 'Outdoor / Patio',
    icon: Trees,
    basePerSqft: [200, 600],
    sqftRange: [400, 3000],
    defaultSqft: 900,
    baseWeeks: [6, 14],
  },
];

const finishMultiplier: Record<Finish, { mult: number; label: string; description: string }> = {
  signature: {
    mult: 1.0,
    label: 'Signature',
    description: 'Trade-only finishes, custom millwork, integrated lighting.',
  },
  premium: {
    mult: 1.35,
    label: 'Premium',
    description: 'Architectural stone, designer hardware, layered lighting scenes.',
  },
  bespoke: {
    mult: 1.8,
    label: 'Bespoke',
    description: 'Book-matched stone, custom metalwork, full architectural design.',
  },
};

function formatCurrency(n: number) {
  if (n >= 1_000_000) {
    const m = n / 1_000_000;
    return `$${m % 1 === 0 ? m.toFixed(0) : m.toFixed(1)}M`;
  }
  return `$${Math.round(n / 1000)}k`;
}

export function InvestmentCalculator() {
  const [project, setProject] = useState<Project>('kitchen');
  const [sqft, setSqft] = useState<number>(300);
  const [finish, setFinish] = useState<Finish>('premium');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const selectedProject = projects.find((p) => p.key === project)!;

  // Reset sqft when project changes
  const setProjectAndSqft = (key: Project) => {
    setProject(key);
    setSqft(projects.find((p) => p.key === key)!.defaultSqft);
  };

  const result = useMemo(() => {
    const [low, high] = selectedProject.basePerSqft;
    const mult = finishMultiplier[finish].mult;
    const rangeLow = sqft * low * mult;
    const rangeHigh = sqft * high * mult;
    return {
      low: rangeLow,
      high: rangeHigh,
      weeks: selectedProject.baseWeeks,
    };
  }, [selectedProject, sqft, finish]);

  return (
    <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
      {/* Inputs */}
      <div>
        <div>
          <p className="eyebrow mb-4 !text-gold">Step 01 · Project Type</p>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {projects.map(({ key, label, icon: Icon }) => {
              const active = project === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setProjectAndSqft(key)}
                  className={cn(
                    'group flex flex-col items-start gap-3 border p-4 text-left transition-all duration-300 lg:p-5',
                    active
                      ? 'border-gold bg-gold/5 text-bone'
                      : 'border-bone/15 text-bone/75 hover:border-gold/60 hover:text-bone',
                  )}
                >
                  <Icon
                    className={cn(
                      'h-5 w-5 transition-colors',
                      active ? 'text-gold' : 'text-bone/45 group-hover:text-gold',
                    )}
                  />
                  <span className="text-xs">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-baseline justify-between">
            <p className="eyebrow !text-gold">Step 02 · Square Footage</p>
            <p className="font-display text-2xl text-bone">
              {sqft.toLocaleString()} <span className="text-base text-bone/40">sqft</span>
            </p>
          </div>
          <input
            type="range"
            min={selectedProject.sqftRange[0]}
            max={selectedProject.sqftRange[1]}
            step={selectedProject.key === 'whole-home' ? 100 : 10}
            value={sqft}
            onChange={(e) => setSqft(parseInt(e.target.value, 10))}
            className="vcv-slider mt-4 w-full"
            aria-label="Project square footage"
          />
          <div className="mt-2 flex justify-between text-[0.6rem] uppercase tracking-[0.22em] text-bone/35">
            <span>{selectedProject.sqftRange[0].toLocaleString()} sqft</span>
            <span>{selectedProject.sqftRange[1].toLocaleString()} sqft</span>
          </div>
        </div>

        <div className="mt-12">
          <p className="eyebrow mb-4 !text-gold">Step 03 · Finish Level</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {(Object.keys(finishMultiplier) as Finish[]).map((k) => {
              const m = finishMultiplier[k];
              const active = finish === k;
              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => setFinish(k)}
                  className={cn(
                    'border p-4 text-left transition-all duration-300',
                    active
                      ? 'border-gold bg-gold/5'
                      : 'border-bone/15 hover:border-gold/60',
                  )}
                >
                  <p
                    className={cn(
                      'font-display text-lg transition-colors',
                      active ? 'text-gold-light' : 'text-bone',
                    )}
                  >
                    {m.label}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-bone/55">
                    {m.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Output */}
      <div className="relative">
        <div className="sticky top-32 border border-bone/10 bg-ink-800/60 p-8 lg:p-10">
          <p className="eyebrow mb-6">Indicative Range</p>

          <motion.div
            key={`${project}-${sqft}-${finish}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-display text-4xl text-bone md:text-6xl">
              {formatCurrency(result.low)}
              <span className="mx-3 text-bone/30">–</span>
              {formatCurrency(result.high)}
            </p>
            <p className="mt-3 text-sm text-bone/55">
              {finishMultiplier[finish].label} {projects.find((p) => p.key === project)!.label} ·{' '}
              {sqft.toLocaleString()} sqft
            </p>
          </motion.div>

          <dl className="mt-10 divide-y divide-bone/10 border-y border-bone/10">
            <div className="flex items-baseline justify-between py-4">
              <dt className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/45">
                Build Window
              </dt>
              <dd className="font-display text-lg text-gold-light">
                {result.weeks[0]}–{result.weeks[1]} weeks
              </dd>
            </div>
            <div className="flex items-baseline justify-between py-4">
              <dt className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/45">
                Long-Lead Order
              </dt>
              <dd className="font-display text-lg text-gold-light">Pre-Construction</dd>
            </div>
            <div className="flex items-baseline justify-between py-4">
              <dt className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/45">
                Studio Lead
              </dt>
              <dd className="font-display text-lg text-gold-light">Senior Designer</dd>
            </div>
          </dl>

          <p className="mt-8 text-xs text-bone/40">
            Indicative only. A precise investment range is shared after your private
            consultation, tied to your home and goals.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 flex items-start gap-4 border border-gold/30 bg-gold/5 p-5"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <div>
                <p className="font-display text-lg text-bone">On its way.</p>
                <p className="mt-1 text-xs text-bone/65">
                  Your detailed breakdown arrives within one business day.
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
                Send me the detailed breakdown
              </p>
              <label className="relative block">
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
              <button type="submit" className="btn-gold mt-3 w-full">
                Send Breakdown
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
