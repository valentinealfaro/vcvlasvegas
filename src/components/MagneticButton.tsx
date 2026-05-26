'use client';

import { useRef, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: 'gold' | 'ghost';
  pulse?: boolean;
};

export function MagneticButton({ href, children, className, variant = 'gold', pulse = false }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 180, damping: 18, mass: 0.5 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * 0.25);
    y.set(offsetY * 0.4);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="relative inline-flex"
    >
      {/* Outer ambient glow that swells on hover — gold variant only */}
      {variant === 'gold' && (
        <span
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-0 -z-10 rounded-[1px] blur-2xl transition-opacity duration-700',
            hovered ? 'opacity-60' : 'opacity-0',
          )}
          style={{ background: 'radial-gradient(circle at center, rgba(252,187,0,0.65), transparent 70%)' }}
        />
      )}
      <Link
        ref={ref}
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={cn(
          'relative isolate',
          variant === 'gold' ? 'btn-gold' : 'btn-ghost',
          pulse && variant === 'gold' && 'pulse-amber',
          className,
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}
