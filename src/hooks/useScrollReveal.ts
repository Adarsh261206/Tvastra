import { useRef } from 'react';
import { useScroll, useTransform, useReducedMotion, type MotionValue } from 'framer-motion';

interface ScrollRevealReturn {
  ref: React.RefObject<HTMLDivElement | null>;
  style: {
    opacity: MotionValue<number>;
    y: MotionValue<number>;
  };
}

export function useScrollReveal(): ScrollRevealReturn {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // When section is centered: opacity 1, y 0
  // When section enters/leaves: subtle fade to 0.8 and shift to -15px
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    shouldReduceMotion ? [1, 1, 1, 1] : [0.8, 1, 1, 0.8]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    shouldReduceMotion ? [0, 0, 0, 0] : [-15, 0, 0, -15]
  );

  return { ref, style: { opacity, y } };
}
