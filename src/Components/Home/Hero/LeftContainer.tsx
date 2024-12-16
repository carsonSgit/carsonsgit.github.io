import React from 'react';
import Navbar from '../../Navbar/Navbar'; // Adjust the path if necessary
import './Hero.scss';

const LeftContainer: React.FC = () => {
  return (
    <div className="LeftContainer">
      <h1 className="HeroText">
        Hi, I&#39;m <span className="AnimatedText">Carson</span>
      </h1>
      <h2>Software Developer</h2>
      <Navbar />
    </div>
  );
};

export default LeftContainer;
