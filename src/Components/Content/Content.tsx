import React from 'react';
import Hero from '../Home/Hero/Hero';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import About from '../About/About';
import './Content.scss';

const Content: React.FC = () => {
  return (
    <div className="content-container">
      <div id="hero">
        <Hero />
      </div>
      <div id="projects" className="section-container">
        <Projects />
      </div>
      <div id="stats" className="section-container">
        <Experience />
      </div>
      <div id="about" className="section-container">
        <About />
      </div>
    </div>
  );
};

export default Content;
