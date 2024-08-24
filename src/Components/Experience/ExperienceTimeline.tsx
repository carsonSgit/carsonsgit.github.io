import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { education } from '../Data/education';
import { experience } from '../Data/experience';
import { statistics } from '../Data/statistics';
import './ExperienceTimeline.scss';
import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaNodeJs,
  FaSass,
  FaPhp,
  FaAngular,
  FaBootstrap,
  FaFigma,
  FaRaspberryPi,
} from 'react-icons/fa';
import {
  SiCsharp,
  SiSqlite,
  SiKotlin,
  SiDotnet,
  SiXamarin,
  SiTypescript,
  SiJquery,
  SiNextdotjs,
  SiAzuredevops,
  SiFirebase,
  SiVercel,
  SiCloudflare,
  SiExpress,
  SiTailwindcss,
  SiNginx,
  SiMongodb,
  SiMysql,
  SiMicrosoftsqlserver,
  SiKeras,
  SiPytorch,
  SiScikitlearn,
  SiPostman,
  SiSwagger,
  SiJira,
  SiKubernetes,
  SiUnity,
  SiGnubash,
  SiPowershell,
} from 'react-icons/si';

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
    <div className="experience-grid">
      <div className="timeline" aria-label="Experience Timeline">
        <motion.div className="particle-background" />

        <div className="timeline-section">
          <h2 className="timeline-section-title" id="education">Education</h2>
          {education.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              exit={{ opacity: 0, y: 20 }}
              className="timeline-item"
              aria-labelledby={`education-item-${index}`}
            >
              <div className="timeline-step education-step" aria-hidden="true"></div>
              <div className="timeline-content">
                <h3 id={`education-item-${index}`}>
                  {item.title} <span className="timeline-atsign">@ </span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="timeline-institution"
                    aria-label={`Link to ${item.institution}`}
                  >
                    {item.institution}
                  </a>
                </h3>
                <div className="timeline-date" aria-label="Date of education">{item.date}</div>
                <p>{item.description}</p>
                <div className="timeline-stats" aria-label="Statistics related to education">
                  {Object.entries(statistics[item.statsKey] || {}).map(
                    ([key, value]: [string, number | string]) => (
                      <div key={key} className="stat-item" aria-label={`${key.replace(/([A-Z])/g, ' $1').toLowerCase()}: ${value}`}>
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
          <h2 className="timeline-section-title" id="experience">Experience</h2>
          {experience.map((item, index) => (
            <motion.div
              key={index}
              custom={index + education.length}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              exit={{ opacity: 0, y: 20 }}
              className="timeline-item"
              aria-labelledby={`experience-item-${index}`}
            >
              <div className="timeline-step experience-step" aria-hidden="true"></div>
              <div className="timeline-content">
                <h3 id={`experience-item-${index}`}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={`Link to ${item.title} at ${item.company}`}>
                    {item.title} <span className="timeline-atsign">@ </span>
                    <span className="timeline-company">{item.company}</span>
                  </a>
                </h3>
                <div className="timeline-date" aria-label="Date of experience">{item.date}</div>
                <p>{item.description}</p>
                <div className="timeline-stats" aria-label="Statistics related to experience">
                  {Object.entries(statistics[item.statsKey] || {}).map(
                    ([key, value]: [string, number | string]) => (
                      <div key={key} className="stat-item" aria-label={`${key.replace(/([A-Z])/g, ' $1').toLowerCase()}: ${value}`}>
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

      <div className="category-containers" aria-label="Technical skills">
        <div className="CategoryContainer">
          <h3 className="CategoryTitle">Languages</h3>
          <ul className="TechList programming-languages" role="list">
            <li role="listitem" aria-label="Python"><FaPython /> Python</li>
            <li role="listitem" aria-label="Java"><FaJava /> Java</li>
            <li role="listitem" aria-label="JavaScript"><FaJsSquare /> JavaScript</li>
            <li role="listitem" aria-label="TypeScript"><SiTypescript /> TypeScript</li>
            <li role="listitem" aria-label="C#"><SiCsharp /> C#</li>
            <li role="listitem" aria-label="Kotlin"><SiKotlin /> Kotlin</li>
            <li role="listitem" aria-label="PHP"><FaPhp /> PHP</li>
            <li role="listitem" aria-label="PowerShell"><SiPowershell /> PowerShell</li>
            <li role="listitem" aria-label="Bash"><SiGnubash /> Bash</li>
            <li role="listitem" aria-label="HTML"><FaHtml5 /> HTML</li>
            <li role="listitem" aria-label="CSS"><FaCss3Alt /> CSS</li>
            <li role="listitem" aria-label="MSSQL"><SiMicrosoftsqlserver /> MSSQL</li>
            <li role="listitem" aria-label="SQLite"><SiSqlite /> SQLite</li>
            <li role="listitem" aria-label="MySQL"><SiMysql /> MySQL</li>
          </ul>
        </div>

        <div className="CategoryContainer">
          <h3 className="CategoryTitle">Frameworks & Libraries</h3>
          <ul className="TechList frameworks-libraries" role="list">
            <li role="listitem" aria-label="ASP.NET"><SiDotnet /> ASP.NET</li>
            <li role="listitem" aria-label=".NET MAUI"><SiDotnet /> .NET MAUI</li>
            <li role="listitem" aria-label="WPF"><SiDotnet /> WPF</li>
            <li role="listitem" aria-label="Xamarin"><SiXamarin /> Xamarin</li>
            <li role="listitem" aria-label="React"><FaReact /> React</li>
            <li role="listitem" aria-label="Next.js"><SiNextdotjs /> Next.js</li>
            <li role="listitem" aria-label="jQuery"><SiJquery /> jQuery</li>
            <li role="listitem" aria-label="Angular"><FaAngular /> Angular</li>
            <li role="listitem" aria-label="Bootstrap"><FaBootstrap /> Bootstrap</li>
            <li role="listitem" aria-label="Node.js"><FaNodeJs /> Node.js</li>
            <li role="listitem" aria-label="Firebase"><SiFirebase /> Firebase</li>
            <li role="listitem" aria-label="MongoDB"><SiMongodb /> MongoDB</li>
            <li role="listitem" aria-label="SCSS"><FaSass /> SCSS</li>
            <li role="listitem" aria-label="TailwindCSS"><SiTailwindcss /> TailwindCSS</li>
            <li role="listitem" aria-label="Express.js"><SiExpress /> Express.js</li>
            <li role="listitem" aria-label="Keras"><SiKeras /> Keras</li>
            <li role="listitem" aria-label="PyTorch"><SiPytorch /> PyTorch</li>
            <li role="listitem" aria-label="scikit-learn"><SiScikitlearn /> scikit-learn</li>
          </ul>
        </div>

        <div className="CategoryContainer">
          <h3 className="CategoryTitle">Tools</h3>
          <ul className="TechList tools-platforms" role="list">
            <li role="listitem" aria-label="Git"><FaGitAlt /> Git</li>
            <li role="listitem" aria-label="Docker"><FaDocker /> Docker</li>
            <li role="listitem" aria-label="AWS"><FaAws /> AWS</li>
            <li role="listitem" aria-label="Azure DevOps"><SiAzuredevops /> Azure DevOps</li>
            <li role="listitem" aria-label="Postman"><SiPostman /> Postman</li>
            <li role="listitem" aria-label="Swagger"><SiSwagger /> Swagger</li>
            <li role="listitem" aria-label="Jira"><SiJira /> Jira</li>
            <li role="listitem" aria-label="Figma"><FaFigma /> Figma</li>
            <li role="listitem" aria-label="Cloudflare"><SiCloudflare /> Cloudflare</li>
            <li role="listitem" aria-label="Vercel"><SiVercel /> Vercel</li>
            <li role="listitem" aria-label="Nginx"><SiNginx /> Nginx</li>
            <li role="listitem" aria-label="Raspberry Pi"><FaRaspberryPi /> Raspberry Pi</li>
            <li role="listitem" aria-label="Kubernetes"><SiKubernetes /> Kubernetes</li>
            <li role="listitem" aria-label="Unity"><SiUnity /> Unity</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
