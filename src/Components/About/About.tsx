import React from 'react';
import './About.scss';

const About: React.FC = () => {
  return (
    <div className="AboutContainer">
      <h1 className="AboutTitle">About Me</h1>
      <div className="AboutContent">
        <p>
          Hi, I'm Carson! I'm a passionate software developer currently working as a Junior Software Engineer. 
          I love building cool things and exploring the world of machine learning. I'm also an active participant in hackathons, 
          constantly seeking opportunities to enhance my skills and make an impact.
        </p>
        <p>
          In my free time, I work on indie game development, collaborate on open-source projects, 
          and dive into Leetcode challenges to sharpen my problem-solving abilities. 
          I believe in continuous learning and strive to stay up-to-date with the latest technologies.
        </p>
        <p>
          My journey into software development began with a technical DEC in Computer Science from John Abbott College, 
          and I'm now pursuing further studies in economics to meet the prerequisites for a BCompSc at Concordia University. 
          My ultimate goal is to contribute to meaningful projects and grow as a developer.
        </p>
      </div>
    </div>
  );
};

export default About;
