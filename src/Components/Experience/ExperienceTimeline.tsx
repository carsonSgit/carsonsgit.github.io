import { education } from '../Data/education';
import { experience } from '../Data/experience';
import { statistics } from '../Data/statistics';
import './ExperienceTimeline.scss';

const ExperienceTimeline = () => {

  return (
    <div className="experience-grid">
      <div className="timeline">

        <div className="timeline-section">
          <h2 className="timeline-section-title">Education</h2>
          {education.map((item, index) => (
            <div
              key={index}
              className="timeline-item"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-link"
              >
                <div className="timeline-step education-step"></div>

                <div className="timeline-content">
                  <h3>
                    <span className="timeline-role">{item.title}</span> <span className="timeline-atsign">• </span>
                    <span className="timeline-institution">{item.institution}</span>
                  </h3>
                  <div className="timeline-date">{item.date}</div>
                  <p className="timeline-education-description">{item.description}</p>
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
              </a>
            </div>
          ))}
        </div>
        <div className="timeline-section">
          {experience.map((item, index) => (
            <div
              key={index}
              className="timeline-item"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-link"
              >
                <div className="timeline-step experience-step"></div>

                <div className="timeline-content">
                  <h3>
                    <span className="timeline-role">{item.title}</span> <span className="timeline-atsign">• </span>
                    <span className="timeline-company">{item.company}</span>
                  </h3>
                  <div className="timeline-date">{item.date}</div>
                  <ul className="timeline-description">
                    {item.description.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                  </ul>
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
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
