import React from 'react';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import '../../styles/sections.scss';

const Content: React.FC = () => {
  return (
    <div className="content-container">
      <div id="about" className="section-container">
        <About />
      </div>
      <div id="projects" className="section-container">
        <Projects />
      </div>
      <div id="stats" className="section-container">
        <Experience />
      </div>
    </div>
  );
};

export default Content;

