import { motion } from 'framer-motion';
import './ExperienceTimeline.scss';

const ExperienceTimeline = () => (
  <div className="timeline">
    {[
      {
        date: 'June 2024 - Ongoing',
        title: 'SDE Intern',
        company: 'Tail\'ed',
        description: 'Building the company website & developing an AI product.'
      },
      {
        date: 'March 2024 - July 2024',
        title: 'Director',
        company: 'JACHacks',
        description: 'Led the organization of the hackathon, overseeing event planning and execution.'
      }
    ].map((exp, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="timeline-item"
      >
        <div className="timeline-step">
          <div className="timeline-circle" />
        </div>
        <div className="timeline-content">
          <div className="timeline-date">{exp.date}</div>
          <h3>{exp.title}</h3>
          <h4>{exp.company}</h4>
          <p>{exp.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

export default ExperienceTimeline;
