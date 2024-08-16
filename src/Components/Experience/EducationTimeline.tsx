
import { motion, useAnimation, useScroll } from 'framer-motion';
import { useEffect } from 'react';
import './EducationTimeline.scss';

const EducationTimeline = () => {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }));
  }, [controls]);

  return (
    <div className="education-timeline">
      <motion.div className="particle-background" />
      {[
        {
          date: 'September 2024 - Present',
          title: 'Bachelors of Economics',
          institution: 'Concordia University',
          description: 'Continuing my education exploring the world of economics and finance to bridge the gap between tech and business.'
        },
        {
          date: 'August 2021 - May 2024',
          title: 'Computer Science DEC',
          institution: 'John Abbott College',
          description: 'Graduated with a focus on software/app/mobile development, including programming and IoT.'
        }
      ].map((edu, index) => (
        <motion.div
          key={index}
          custom={index}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          exit={{ opacity: 0, y: 20 }}
          className="timeline-item"
        >
          <div className="timeline-step"></div>
          <div className="timeline-content">
            <h3>{edu.title} <span className="timeline-atsign">@ </span><span className="timeline-institution">{edu.institution}</span></h3>
            <div className="timeline-date">{edu.date}</div>
            <p>{edu.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EducationTimeline;