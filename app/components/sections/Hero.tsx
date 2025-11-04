import React from 'react';
import Navbar from '../ui/Navbar';
import '../../styles/sections.scss';

const Hero: React.FC = () => {
  return (
    <div className="HeroContainer">
      <h1 className="text-4xl font-bold mb-2">
        Hi, I'm Carson 
      </h1>
      <h2 className="text-2xl font-regular mb-4">Software Developer</h2>
      <Navbar />
    </div>
  );
};

export default Hero;

