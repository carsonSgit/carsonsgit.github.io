import React from 'react';
import './About.scss';
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
  FaMarkdown,
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

const About: React.FC = () => {
  return (
    <div className="AboutContainer">
      <div className="AboutContentContainer">
        <div className="AboutContent">
          <p className="AboutText">
            Hi, my name is Carson! I'm a recent grad from John Abbott College's
            Computer Science degree continuing my education over at Concordia
            University!
            <br />
            <br />
            This summer, I interned @{' '}
            <a
              className="hoverLink"
              href="https://www.tailed.ca/en"
              target="_blank"
              rel="noreferrer"
            >
              Tail'ed
            </a>{' '}
            as a Software Developer, working on the company website using
            TypeScript, React, and Next.js. Alongside that, I also worked on
            some tools for users written in Python (notably, an AI-tool).
            <br />
            <br />
            In my free time, I'm usually working on a personal project, learning
            a new technology, or wallowing in some imposter syndrome. Aside from
            that, my interests are geared towards AI/ML and their potential
            impact on environmental solutions.
            <br />
            <br />
            I'm not hard to track down, but you can find me on{' '}
            <a
              className="hoverLink"
              href="www.linkedin.com/in/carsonspriggs"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            ,{' '}
            <a
              className="hoverLink"
              href="https://github.com/carsonSgit"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            . I also dabble in a bit of writing on my{' '}
            <a
              className="hoverLink"
              href="https://dev.to/carsonsgit"
              target="_blank"
              rel="noreferrer"
            >
              Dev.to
            </a>{' '}
            and{' '}
            <a
              className="hoverLink"
              href="https://medium.com/@carsonspriggs6"
              target="_blank"
              rel="noreferrer"
            >
              Medium
            </a>{' '}
            pages.
          </p>
        </div>

        <div className="Technologies">
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
                <FaMarkdown /> Markdown
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
            <h3 className="CategoryTitle">Tools & Platforms</h3>
            <ul className="TechList tools-platforms">
              <li>
                <FaGitAlt /> Git
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
                <SiMongodb /> MongoDB
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
