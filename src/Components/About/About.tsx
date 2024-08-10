import React from 'react';
import './About.scss';
import {
  FaPython, FaJava, FaJsSquare, FaReact, FaGitAlt, FaDocker, FaHtml5, FaCss3Alt, FaAws, FaNodeJs, FaSass, FaPhp, FaMarkdown,
  FaAngular, FaBootstrap, FaFigma, FaRaspberryPi
} from 'react-icons/fa';
import {
  SiCsharp, SiSqlite, SiKotlin, SiDotnet, SiXamarin, SiTypescript, SiJquery, SiNextdotjs, SiAzuredevops, SiFirebase, SiVercel,
  SiCloudflare, SiExpress, SiTailwindcss, SiNginx, SiMongodb, SiMysql, SiMicrosoftsqlserver, SiCanva, SiGimp, SiKeras, SiPytorch, SiScikitlearn,
  SiPostman, SiSwagger, SiJira, SiGradle, SiKubernetes, SiArduino, SiCisco, SiUnity
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
          <ul className="TechList">
            <li><FaPython /> Python</li>
            <li><FaJava /> Java</li>
            <li><FaJsSquare /> JavaScript</li>
            <li><SiTypescript /> TypeScript</li>
            <li><SiCsharp /> C#</li>
            <li><SiSqlite /> SQLite</li>
            <li><SiKotlin /> Kotlin</li>
            <li><SiDotnet /> ASP.NET, .NET MAUI</li>
            <li><FaReact /> React</li>
            <li><SiNextdotjs /> Next.js</li>
            <li><SiJquery /> jQuery</li>
            <li><SiXamarin /> Xamarin</li>
            <li><FaGitAlt /> Git</li>
            <li><FaDocker /> Docker</li>
            <li><SiUnity /> Unity</li>
            <li><SiAzuredevops /> Microsoft Azure</li>
            <li><FaHtml5 /> HTML5</li>
            <li><FaCss3Alt /> CSS3</li>
            <li><FaMarkdown /> Markdown</li>
            <li><FaPhp /> PHP</li>
            <li>PowerShell</li>
            <li><FaAws /> AWS</li>
            <li><SiCloudflare /> Cloudflare</li>
            <li><SiFirebase /> Firebase</li>
            <li><SiVercel /> Vercel</li>
            <li><FaAngular /> Angular</li>
            <li><FaBootstrap /> Bootstrap</li>
            <li><SiExpress /> Express.js</li>
            <li>Mantine</li>
            <li><FaNodeJs /> Node.js</li>
            <li><FaSass /> SASS</li>
            <li><SiTailwindcss /> TailwindCSS</li>
            <li><SiNginx /> Nginx</li>
            <li><SiMongodb /> MongoDB</li>
            <li><SiMicrosoftsqlserver /> Microsoft SQL Server</li>
            <li><SiMysql /> MySQL</li>
            <li><SiCanva /> Canva</li>
            <li><FaFigma /> Figma</li>
            <li><SiGimp /> Gimp</li>
            <li><SiKeras /> Keras</li>
            <li><SiPytorch /> PyTorch</li>
            <li><SiScikitlearn /> scikit-learn</li>
            <li><SiPostman /> Postman</li>
            <li><SiSwagger /> Swagger</li>
            <li><SiJira /> Jira</li>
            <li><SiGradle /> Gradle</li>
            <li><SiKubernetes /> Kubernetes</li>
            <li><SiArduino /> Arduino</li>
            <li><SiCisco /> Cisco</li>
            <li><FaRaspberryPi /> Raspberry Pi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
