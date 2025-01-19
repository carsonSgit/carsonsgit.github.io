import React from 'react';
import ExperienceTimeline from './ExperienceTimeline';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {

  return (
    <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ 
      type: "spring",
      stiffness: 100,
      damping: 10,
      mass: 1
    }}

      className="experience-page"
    >
      <ExperienceTimeline />
    </motion.div>
  );
};

export default Experience;
