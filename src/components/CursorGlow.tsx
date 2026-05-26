'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorGlow() {
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 250, damping: 28, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 28, mass: 0.4 });

  useEffect(() => {
    setMounted(true);
    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!supportsHover) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor="hover"]');
      setHovering(!!interactive);
    };
    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over, { passive: true });
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [x, y]);

  if (!mounted || !enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden lg:block"
      >
        {/* Soft amber halo — only visible on interactive hover */}
        <motion.div
          animate={{ opacity: hovering ? 0.5 : 0, scale: hovering ? 1.6 : 0.8 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-gold/40 blur-2xl"
        />
        <motion.div
          animate={{
            scale: hovering ? 1.8 : 1,
            opacity: hovering ? 0.7 : 0.35,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-gold/60 mix-blend-difference"
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden lg:block"
      >
        <motion.div
          animate={{ scale: hovering ? 1.4 : 1 }}
          transition={{ duration: 0.3 }}
          className="-translate-x-1/2 -translate-y-1/2 h-1 w-1 rounded-full bg-gold-light shadow-[0_0_8px_rgba(252,187,0,0.7)]"
        />
      </motion.div>
    </>
  );
}
