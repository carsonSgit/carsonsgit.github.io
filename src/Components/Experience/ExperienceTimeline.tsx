import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { education } from '../Data/education';
import { experience } from '../Data/experience';
import { statistics } from '../Data/statistics';
import './ExperienceTimeline.scss';

const ExperienceTimeline = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }));
  }, [controls]);

  return (
    <div className="timeline">
      <motion.div className="particle-background" />

      <div className="timeline-section">
        <h2 className="timeline-section-title">Education</h2>
        {education.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            exit={{ opacity: 0, y: 20 }}
            className="timeline-item"
          >
            <div className="timeline-step education-step"></div>
            <div className="timeline-content">
              <h3>
                {item.title} <span className="timeline-atsign">@ </span>
                <span className="timeline-institution">{item.institution}</span>
              </h3>
              <div className="timeline-date">{item.date}</div>
              <p>{item.description}</p>
              <div className="timeline-stats">
                {Object.entries(statistics[item.statsKey] || {}).map(
                  ([key, value]: [string, number | string]) => (
                    <div key={key} className="stat-item">
                      <strong>{value}</strong>{' '}
                      {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                    </div>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="timeline-section">
        <h2 className="timeline-section-title">Experience</h2>
        {experience.map((item, index) => (
          <motion.div
            key={index}
            custom={index + education.length}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            exit={{ opacity: 0, y: 20 }}
            className="timeline-item"
          >
            <div className="timeline-step experience-step"></div>
            <div className="timeline-content">
              <h3>
                {item.title} <span className="timeline-atsign">@ </span>
                <span className="timeline-company">{item.company}</span>
              </h3>
              <div className="timeline-date">{item.date}</div>
              <p>{item.description}</p>
              <div className="timeline-stats">
                {Object.entries(statistics[item.statsKey] || {}).map(
                  ([key, value]: [string, number | string]) => (
                    <div key={key} className="stat-item">
                      <strong>{value}</strong>{' '}
                      {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                    </div>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
