import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import './ExperienceTimeline.scss';

type Statistics = {
  [key: string]: {
    [key: string]: number | string;
    } | null;
};

const ExperienceTimeline = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }));
  }, [controls]);

  const education = [
    {
      date: 'September 2024 - Ongoing',
      title: 'Bachelors of Economics',
      institution: 'Concordia University',
      description: 'Continuing my education exploring the world of economics and finance to bridge the gap between tech and business.',
      statsKey: 'Economics'
    },
    {
      date: 'August 2021 - May 2024',
      title: 'Computer Science DEC',
      institution: 'John Abbott College',
      description: 'Graduated with a focus on software/app/mobile development, including programming and IoT.',
      statsKey: 'Academics'
    }
  ];

  const experience = [
    {
      date: 'June 2024 - Ongoing',
      title: 'SDE Intern',
      company: 'Tail\'ed',
      description: 'Building the company website & developing an AI product.',
      statsKey: 'SDE Intern'
    },
    {
      date: 'March 2024 - Ongoing',
      title: 'Head Delegate Montreal',
      company: 'Canadian University Software Engineering Conference (CUSEC)',
      description: 'Leading the delegation of post-secondary students across Montreal for the annual conference.',
      statsKey: 'Head Delegate Montreal'
    },
    {
      date: 'January 2024 - May 2024',
      title: 'IT Intern',
      company: 'Town of Kirkland',
      description: 'Delivered technical support to government employees and received training in cybersecurity under the Cybersecurity Analyst of the municipality.',
      statsKey: 'IT Intern'
    },
    {
      date: 'March 2024 - July 2024',
      title: 'Director',
      company: 'JACHacks',
      description: 'Led the organization of the hackathon, overseeing event planning and execution.',
      statsKey: 'Director'
    },
    {
      date: 'February 2024 - April 2024',
      title: 'R&D Fellowship',
      company: 'AI Launch Lab',
      description: 'Learned under PhDs while developing TradeMind for my fellowship project.',
      statsKey: 'R&D Fellowship'
    }
  ];

  const statistics: Statistics = {
    'SDE Intern': {
      productsMade: 3,
      languagesAndFrameworksUsed: 5,
    },
    'Head Delegate Montreal': {
      schools: '10+'
    },
    'IT Intern': {
      supportCasesResolved: '100+',
      cybersecurityVulnerabilitiesResolved: '4500+'
    },
    'Director': {
      attendees: '130+'
    },
    'R&D Fellowship': {
      inProgramHistory: 'Best project'
    },
    'Academics': {
      inFinalSemester: '4.0 GPA',
      outstandingAcademicImprovementAward: 'Awarded the',
      semesterlyAwardedScholarship: '$1500',
      capstoneProjectInProgramHistory: 'Best'
    },
    'Economics': null // I have no stats yet
  };

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
              <h3>{item.title} <span className="timeline-atsign">@ </span><span className="timeline-institution">{item.institution}</span></h3>
              <div className="timeline-date">{item.date}</div>
              <p>{item.description}</p>
              <div className="timeline-stats">
                {Object.entries(statistics[item.statsKey] || {}).map(([key, value]: [string, number | string]) => (
                  <div key={key} className="stat-item">
                    <strong>{value}</strong> {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                  </div>
                ))}
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
              <h3>{item.title} <span className="timeline-atsign">@ </span><span className="timeline-company">{item.company}</span></h3>
              <div className="timeline-date">{item.date}</div>
              <p>{item.description}</p>
              <div className="timeline-stats">
                {Object.entries(statistics[item.statsKey] || {}).map(([key, value]: [string, number | string]) => (
                  <div key={key} className="stat-item">
                    <strong>{value}</strong> {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
