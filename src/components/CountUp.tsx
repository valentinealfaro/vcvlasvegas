'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

type Props = {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export function CountUp({ value, prefix = '', suffix = '', className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px -15% 0px' });
  const reduce = useReducedMotion();

  const motion = useMotionValue(0);
  const spring = useSpring(motion, { stiffness: 50, damping: 18, mass: 1.2 });
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    if (inView) motion.set(value);
  }, [inView, motion, value, reduce]);

  useEffect(() => {
    const unsub = spring.on('change', (v) => setDisplay(Math.round(v)));
    return () => unsub();
  }, [spring]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
