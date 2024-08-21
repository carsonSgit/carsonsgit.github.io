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
  SiCisco,
  SiUnity,
  SiMantine,
  SiGnubash,
  SiPowershell,
} from 'react-icons/si';

const ExperienceTimeline = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }));
  }, [controls]);

  return (
    <div className="experience-grid">
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

      <div className="category-containers">
        <div className="CategoryContainer">
          <h3 className="CategoryTitle">Languages</h3>
          <ul className="TechList programming-languages">
            <li>
              <FaPython /> Python
            </li>
            <li>
              <FaJava /> Java
            </li>
            <li>
              <FaJsSquare /> JavaScript
            </li>
            <li>
              <SiTypescript /> TypeScript
            </li>
            <li>
              <SiCsharp /> C#
            </li>
            <li>
              <SiKotlin /> Kotlin
            </li>
            <li>
              <FaPhp /> PHP
            </li>
            <li>
              <SiPowershell /> PowerShell
            </li>
            <li>
              <SiGnubash /> Bash
            </li>
            <li>
              <FaHtml5 /> HTML
            </li>
            <li>
              <FaCss3Alt /> CSS
            </li>
            <li>
              <SiMicrosoftsqlserver /> MSSQL
            </li>
            <li>
              <SiSqlite /> SQLite
            </li>
            <li>
              <SiMysql /> MySQL
            </li>
          </ul>
        </div>

        <div className="CategoryContainer">
          <h3 className="CategoryTitle">Frameworks & Libraries</h3>
          <ul className="TechList frameworks-libraries">
            <li>
              <SiDotnet /> ASP.NET
            </li>
            <li>
              <SiDotnet /> .NET MAUI
            </li>
            <li>
              <SiDotnet /> WPF
            </li>
            <li>
              <SiXamarin /> Xamarin
            </li>
            <li>
              <FaReact /> React
            </li>
            <li>
              <SiNextdotjs /> Next.js
            </li>
            <li>
              <SiJquery /> jQuery
            </li>
            <li>
              <FaAngular /> Angular
            </li>
            <li>
              <FaBootstrap /> Bootstrap
            </li>
            <li>
              <SiMantine /> Mantine
            </li>
            <li>
              <FaNodeJs /> Node.js
            </li>
            <li>
              <FaSass /> SCSS
            </li>
            <li>
              <SiTailwindcss /> TailwindCSS
            </li>
            <li>
              <SiExpress /> Express.js
            </li>
            <li>
              <SiKeras /> Keras
            </li>
            <li>
              <SiPytorch /> PyTorch
            </li>
            <li>
              <SiScikitlearn /> scikit-learn
            </li>
          </ul>
        </div>

        <div className="CategoryContainer">
          <h3 className="CategoryTitle">Tools</h3>
          <ul className="TechList tools-platforms">
            <li>
              <FaGitAlt /> Git
            </li>
            <li>
              <SiMongodb /> MongoDB
            </li>
            <li>
              <FaDocker /> Docker
            </li>
            <li>
              <SiAzuredevops /> Microsoft Azure
            </li>
            <li>
              <FaAws /> AWS
            </li>
            <li>
              <SiCloudflare /> Cloudflare
            </li>
            <li>
              <SiFirebase /> Firebase
            </li>
            <li>
              <SiVercel /> Vercel
            </li>
            <li>
              <SiNginx /> Nginx
            </li>
            <li>
              <SiUnity /> Unity
            </li>
            <li>
              <SiKubernetes /> Kubernetes
            </li>
            <li>
              <SiPostman /> Postman
            </li>
            <li>
              <SiSwagger /> Swagger
            </li>
            <li>
              <SiJira /> Jira
            </li>
            <li>
              <SiCisco /> Cisco
            </li>
            <li>
              <FaRaspberryPi /> Raspberry Pi
            </li>
            <li>
              <FaFigma /> Figma
            </li>
            <li>
              <SiKubernetes /> GNS3
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
