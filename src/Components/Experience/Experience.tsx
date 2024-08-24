import React from 'react';
import { motion, useInView } from 'framer-motion';
import ExperienceTimeline from './ExperienceTimeline';

const Experience: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="experience-page"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <ExperienceTimeline />
    </motion.div>
  );
};

export default Experience;
