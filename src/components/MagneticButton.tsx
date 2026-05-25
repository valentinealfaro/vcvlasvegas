'use client';

import { useRef, type ReactNode } from 'react';
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
  };

  return (
    <motion.div style={{ x: sx, y: sy }} className="relative inline-flex">
      <Link
        ref={ref}
        href={href}
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
