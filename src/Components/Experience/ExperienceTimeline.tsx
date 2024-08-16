import { motion } from 'framer-motion';
import './ExperienceTimeline.scss';

const ExperienceTimeline = () => (
  <div className="timeline">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="timeline-item"
    >
      <div className="timeline-date">June 2024 - Ongoing</div>
      <div className="timeline-content">
        <h3>SDE Intern</h3>
        <h4>Tail'ed</h4>
        <p>Building the company website & developing an AI product.</p>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="timeline-item"
    >
      <div className="timeline-date">March 2024 - July 2024</div>
      <div className="timeline-content">
        <h3>Director</h3>
        <h4>JACHacks</h4>
        <p>Led the organization of the hackathon, overseeing event planning and execution.</p>
      </div>
    </motion.div>
  </div>
);

export default ExperienceTimeline;
