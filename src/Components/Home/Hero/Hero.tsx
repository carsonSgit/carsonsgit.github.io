import React from 'react';
import LeftContainer from './LeftContainer';
// import RightContainer from './RightContainer';
import './Hero.scss';

const Hero: React.FC = () => {
  return (
    <div className="HeroContainer">
      <LeftContainer />
      { /* <RightContainer /> */ }
    </div>
  );
};

export default Hero;
