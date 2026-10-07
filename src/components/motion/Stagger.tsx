import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { stagger, revealUp, viewport } from './motion';

export default function Stagger({ children, className = '', delay = 0 }: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{ delayChildren: delay }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={revealUp}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
