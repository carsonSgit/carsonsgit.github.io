import React from 'react';
import Navbar from '../ui/Navbar';
import '../../styles/sections.scss';

const Hero: React.FC = () => {
  return (
    <div className="HeroContainer">
      <h1 className="HeroText">
        Hi, I&#39;m <span className="AnimatedText">Carson</span> 
      </h1>
      <h2>Software Developer</h2>
      <Navbar />
    </div>
  );
};

export default Hero;

