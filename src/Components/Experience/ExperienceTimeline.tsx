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
          <h3>Bachelor of Economics</h3>
          <h4>Concordia University</h4>
          <p>Getting necessary prerequisites before transfering to a Bachelors of Computer Science.</p>
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
          <p>Getting necessary prerequisites before transfering to a Bachelors of Computer Science.</p>
        </div>
      </motion.div>
    </div>
  );

export default ExperienceTimeline;