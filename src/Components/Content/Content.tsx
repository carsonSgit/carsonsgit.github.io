import React from 'react';
import Hero from '../Home/Hero/Hero';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import About from '../About/About';
import './Content.scss';

const Content: React.FC = () => {
  return (
    <div className="content-container">
      <Hero />
      <div className="section-container">
        <Projects />
        <Experience />
        <About />
      </div>
    </div>
  );
};

export default Content;
