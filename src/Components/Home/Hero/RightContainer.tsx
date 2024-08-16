import React from 'react';
import AnimatedImage from './AnimatedImage';
import { imageNames, hoverImageNames } from '../../Temp/imageNames';
import './Hero.scss';

const RightContainer: React.FC = () => {
  return (
    <div className="RightContainer">
      <AnimatedImage
        imageNames={imageNames}
        hoverImageNames={hoverImageNames}
      />
    </div>
  );
};

export default RightContainer;
