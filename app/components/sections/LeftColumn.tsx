import React from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';

const ANIMATION_PROPS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    type: "spring" as const,
    stiffness: 300,
    damping: 25,
    mass: 0.3,
    opacity: { duration: 0.3 }
  },
  style: { willChange: 'opacity' }
} as const;

const LeftColumn: React.FC = () => {
  return (
    <motion.div className="left-column" {...ANIMATION_PROPS}>
      <Hero />
    </motion.div>
  );
};

export default LeftColumn;

