'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

type Props = {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  glow?: boolean;
};

export function CountUp({ value, prefix = '', suffix = '', className, glow = false }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px -15% 0px' });
  const reduce = useReducedMotion();

  const motion = useMotionValue(0);
  const spring = useSpring(motion, { stiffness: 50, damping: 18, mass: 1.2 });
  const [display, setDisplay] = useState(reduce ? value : 0);
  const [settled, setSettled] = useState(reduce);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      setSettled(true);
      return;
    }
    if (inView) motion.set(value);
  }, [inView, motion, value, reduce]);

  useEffect(() => {
    const unsub = spring.on('change', (v) => {
      const rounded = Math.round(v);
      setDisplay(rounded);
      if (rounded === value) setSettled(true);
    });
    return () => unsub();
  }, [spring, value]);

  return (
    <span
      ref={ref}
      className={className}
      style={
        glow && settled
          ? { textShadow: '0 0 24px rgba(252, 187, 0, 0.4)', transition: 'text-shadow 0.8s ease-out' }
          : undefined
      }
    >
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
