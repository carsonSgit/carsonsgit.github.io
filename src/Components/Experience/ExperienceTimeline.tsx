import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { education } from '../Data/education';
import { experience } from '../Data/experience';
import { statistics } from '../Data/statistics';
import './ExperienceTimeline.scss';

const ExperienceTimeline = () => {
  const [hoveredEducationIndex, setHoveredEducationIndex] = useState<number | null>(null);
  const [hoveredExperienceIndex, setHoveredExperienceIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleEducationMouseEnter = (index: number): void => {
    setHoveredEducationIndex(index);
  };
  const handleEducationMouseLeave = (): void => {
    setHoveredEducationIndex(null);
  };
  const handleExperienceMouseEnter = (index: number): void => {
    setHoveredExperienceIndex(index);
  };
  const handleExperienceMouseLeave = (): void => {
    setHoveredExperienceIndex(null);
  };

  const animationProps = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      mass: 1,
    },
  };

  return (
    <div
      className="experience-grid"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="timeline">
        <div className="timeline-section">
          <h1 className="ProjectsTitle">EDUCATION
              <span className="ProjectsTitleAnimated"></span> 
            </h1>
          {education.map((item, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${isHovered && hoveredEducationIndex !== index ? '' : ''}`}
              onMouseEnter={() => handleEducationMouseEnter(index)}
              onMouseLeave={handleEducationMouseLeave}
              {...animationProps} 
            >
              <div className="timeline-link">
                <div className="timeline-content">
                  <h3>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="timeline-title-link"
                      style={{
                        '--hover-institution-color': item.hoverColors?.institution || '#00715f'
                      } as React.CSSProperties}
                    >
                    <span className="timeline-role">{item.title}</span>
                    <br />
                    <span className="timeline-institution">{item.institution}</span>
                    </a>
                  </h3>
                  <div className="timeline-date">{item.date}</div>
                  <ul className="timeline-description timeline-education-description">
                    {item.description.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                  </ul>
                  <div className="timeline-stats">
                    {Object.entries(statistics[item.statsKey] || {}).map(
                      ([key, value]) => (
                        <div key={key} className="stat-item">
                          <strong>{value}</strong>{' '}
                          {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

          <div className="timeline-section">
            <h1 className="ProjectsTitle">EXPERIENCE 
              <span className="ProjectsTitleAnimated"></span> 
            </h1>
          {experience.map((item, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${isHovered && hoveredExperienceIndex !== index ? 'faded' : ''}`}
              onMouseEnter={() => handleExperienceMouseEnter(index)}
              onMouseLeave={handleExperienceMouseLeave}
              {...animationProps} 
            >
              <div className="timeline-link">

                <div className="timeline-content">
                  <h3>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="timeline-title-link"
                      style={{
                        '--hover-company-color': item.hoverColors?.company || '#00715f'
                      } as React.CSSProperties}
                    >
                      <span className="timeline-role">{item.title}</span>
                      <br />
                      <span className="timeline-company">{item.company}</span>
                    </a>
                  </h3>
                  <div className="timeline-date">{item.date}</div>
                  <ul className="timeline-description">
                    {item.description.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                  </ul>
                  <div className="timeline-stats">
                    {Object.entries(statistics[item.statsKey] || {}).map(
                      ([key, value]) => (
                        <div key={key} className="stat-item">
                          <strong>{value}</strong>{' '}
                          {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
