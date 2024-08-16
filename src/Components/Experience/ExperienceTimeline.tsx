import { motion, useAnimation, useScroll } from 'framer-motion';
import { useEffect } from 'react';
import './ExperienceTimeline.scss';

const ExperienceTimeline = () => {
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
    <div className="timeline">
      <motion.div className="particle-background" />
      {[
        {
          date: 'June 2024 - Ongoing',
          title: 'SDE Intern',
          company: 'Tail\'ed',
          description: 'Building the company website & developing an AI product.'
        },
        {
          date: 'March 2024 - Ongoing',
          title: 'Head Delegate Montreal',
          company: 'Canadian University Software Engineering Conference (CUSEC)',
          description: 'Leading the delegation of post-secondary students across Montreal for the annual conference.'
        },
        {
          date: 'January 2024 - May 2024',
          title: 'IT Intern',
          company: 'Town of Kirkland',
          description: 'Delivered technical support to government employees and received training in cybersecurity under the Cybersecurity Analyst of the municipality.'
        },
        {
          date: 'March 2024 - July 2024',
          title: 'Director',
          company: 'JACHacks',
          description: 'Led the organization of the hackathon, overseeing event planning and execution.'
        },
        {
          date: 'February 2024 - April 2024',
          title: 'R&D Fellowship',
          company: 'AI Launch Lab',
          description: 'Learned under PhDs while developing TradeMind for my fellowship project.'
        }
      ].map((exp, index) => (
        <motion.div
          key={index}
          custom={index}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          exit={{ opacity: 0, y: 20 }}
          className="timeline-item"
        >
          <div className="timeline-step">
            
          </div>
          <div className="timeline-content">
            <h3>{exp.title} <span className="timeline-atsign">@ </span><span className="timeline-company">{exp.company}</span></h3>
            <div className="timeline-date">{exp.date}</div>
            <p>{exp.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
