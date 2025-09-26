import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { education } from '../Data/education';
import { experience } from '../Data/experience';
import { statistics } from '../Data/statistics';
import './ExperienceTimeline.scss';

gsap.registerPlugin(ScrollTrigger);

const ExperienceTimeline = () => {
  const [hoveredEducationIndex, setHoveredEducationIndex] = useState<number | null>(null);
  const [hoveredExperienceIndex, setHoveredExperienceIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);

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


  useEffect(() => {
    gsap.set(timelineItemsRef.current, {
      y: 50,
      opacity: 0,
    });

    timelineItemsRef.current.forEach((item, index) => {
      if (item) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none none", 
          },
        });

        tl.to(item, {
          y: 0,
          opacity: 1,
          duration: 0.4, 
          ease: "back.out(1.7)",
          delay: index * 0.05,
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

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
            <div
              key={index}
              ref={(el) => (timelineItemsRef.current[index] = el)}
              className={`timeline-item ${isHovered && hoveredEducationIndex !== index ? '' : ''}`}
              onMouseEnter={() => handleEducationMouseEnter(index)}
              onMouseLeave={handleEducationMouseLeave}
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
            </div>
          ))}
        </div>

          <div className="timeline-section">
            <h1 className="ProjectsTitle">EXPERIENCE 
              <span className="ProjectsTitleAnimated"></span> 
            </h1>
          {experience.map((item, index) => (
            <div
              key={index}
              ref={(el) => (timelineItemsRef.current[education.length + index] = el)}
              className={`timeline-item ${isHovered && hoveredExperienceIndex !== index ? 'faded' : ''}`}
              onMouseEnter={() => handleExperienceMouseEnter(index)}
              onMouseLeave={handleExperienceMouseLeave}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
