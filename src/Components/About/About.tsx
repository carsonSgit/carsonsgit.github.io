import React from 'react';
import './About.scss';
import { FaPython, FaJava, FaJsSquare, FaReact, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiCsharp, SiSqlite, SiKotlin, SiDotnet, SiXamarin, SiGooglecolab } from 'react-icons/si';

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
          <h2 className="TechnologiesTitle">Technologies I Work With</h2>
          <ul className="TechList">
            <li><FaPython /> Python</li>
            <li><FaJava /> Java</li>
            <li><FaJsSquare /> JavaScript</li>
            <li><SiCsharp /> C#</li>
            <li><SiSqlite /> SQL</li>
            <li><SiKotlin /> Kotlin</li>
            <li><FaReact /> React</li>
            <li><SiDotnet /> ASP.NET, .NET MAUI</li>
            <li><SiXamarin /> Xamarin</li>
            <li><FaGitAlt /> Git, GitHub</li>
            <li><SiGooglecolab /> Google Colab</li>
            <li><FaDocker /> Docker</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
