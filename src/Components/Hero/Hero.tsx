import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Hero.scss';
// import Footer from '../Footer/Footer';
// import AnimatedImage from './AnimatedImage';
// import { imageNames, hoverImageNames } from '../../Data/imageNames';

const Hero: React.FC = () => {
  return (
    <div className="HeroContainer">
      <h1 className="HeroText">
            Hi, I&#39;m <span className="AnimatedText">Carson</span> 
          </h1>
          <h2>Software Developer</h2>
          <Navbar />

          { /* <AnimatedImage imageNames={imageNames} hoverImageNames={hoverImageNames}/> */ }
    </div>
  );
};

export default Hero;
