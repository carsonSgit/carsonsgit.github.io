import React from 'react';
import './About.scss';
import {
  FaPython, FaJava, FaJsSquare, FaReact, FaGitAlt, FaDocker, FaHtml5, FaCss3Alt, FaAws, FaNodeJs, FaSass, FaPhp, FaMarkdown,
  FaAngular, FaBootstrap, FaFigma, FaRaspberryPi, FaDatabase 
} from 'react-icons/fa';
import {
  SiCsharp, SiSqlite, SiKotlin, SiDotnet, SiXamarin, SiTypescript, SiJquery, SiNextdotjs, SiAzuredevops, SiFirebase, SiVercel,
  SiCloudflare, SiExpress, SiTailwindcss, SiNginx, SiMongodb, SiMysql, SiMicrosoftsqlserver, SiCanva, SiGimp, SiKeras, SiPytorch, SiScikitlearn,
  SiPostman, SiSwagger, SiJira, SiGradle, SiKubernetes, SiArduino, SiCisco, SiUnity, SiMantine, SiGnubash, SiPowershell
} from 'react-icons/si';

const About: React.FC = () => {
  return (
    <div className="AboutContainer">
      <h1 className="AboutTitle">About Me</h1>
      <div className="AboutContentContainer">
        <div className="AboutContent">
          <p>
            Hi, I'm Carson! I'm a passionate software developer currently working as a Junior Software Engineer. 
            I love building cool things and exploring the world of machine learning. I'm also an active participant in hackathons, 
            constantly seeking opportunities to enhance my skills and make an impact.
          </p>
        </div>

        <div className="Technologies">
          <h2 className="TechnologiesTitle">TechStack</h2>

          <div className="CategoryContainer">
            <h3 className="CategoryTitle">Languages</h3>
            <ul className="TechList programming-languages">
              <li><FaPython /> Python</li>
              <li><FaJava /> Java</li>
              <li><FaJsSquare /> JavaScript</li>
              <li><SiTypescript /> TypeScript</li>
              <li><SiCsharp /> C#</li>
              <li><SiKotlin /> Kotlin</li>
              <li><FaPhp /> PHP</li>
              <li><SiPowershell /> PowerShell</li>
              <li><SiGnubash /> Bash</li>
              <li><FaMarkdown /> Markdown</li>
              <li><FaHtml5 /> HTML</li>
              <li><FaCss3Alt /> CSS</li>
              <li><SiMicrosoftsqlserver /> MSSQL</li>
              <li><SiSqlite /> SQLite</li>
              <li><SiMysql /> MySQL</li>
            </ul>
          </div>

          <div className="CategoryContainer">
            <h3 className="CategoryTitle">Frameworks & Libraries</h3>
            <ul className="TechList frameworks-libraries">
              <li><SiDotnet /> ASP.NET</li>
              <li><SiDotnet /> .NET MAUI</li>
              <li><SiDotnet /> WPF</li>
              <li><SiXamarin /> Xamarin</li>
              <li><FaReact /> React</li>
              <li><SiNextdotjs /> Next.js</li>
              <li><SiJquery /> jQuery</li>
              <li><FaAngular /> Angular</li>
              <li><FaBootstrap /> Bootstrap</li>
              <li><SiMantine /> Mantine</li>
              <li><FaNodeJs /> Node.js</li>
              <li><FaSass /> SCSS</li>
              <li><SiTailwindcss /> TailwindCSS</li>
              <li><SiExpress /> Express.js</li>
              <li><SiKeras /> Keras</li>
              <li><SiPytorch /> PyTorch</li>
              <li><SiScikitlearn /> scikit-learn</li>
            </ul>
          </div>

          <div className="CategoryContainer">
            <h3 className="CategoryTitle">Tools & Platforms</h3>
            <ul className="TechList tools-platforms">
              <li><FaGitAlt /> Git</li>
              <li><FaDocker /> Docker</li>
              <li><SiAzuredevops /> Microsoft Azure</li>
              <li><FaAws /> AWS</li>
              <li><SiCloudflare /> Cloudflare</li>
              <li><SiFirebase /> Firebase</li>
              <li><SiVercel /> Vercel</li>
              <li><SiNginx /> Nginx</li>
              <li><SiUnity /> Unity</li>
              <li><SiKubernetes /> Kubernetes</li>
              <li><SiPostman /> Postman</li>
              <li><SiSwagger /> Swagger</li>
              <li><SiJira /> Jira</li>
              <li><SiGradle /> Gradle</li>
              <li><SiArduino /> Arduino</li>
              <li><SiCisco /> Cisco</li>
              <li><FaRaspberryPi /> Raspberry Pi</li>
              <li><SiCanva /> Canva</li>
              <li><FaFigma /> Figma</li>
              <li><SiGimp /> Gimp</li>
              <li><SiMongodb /> MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
