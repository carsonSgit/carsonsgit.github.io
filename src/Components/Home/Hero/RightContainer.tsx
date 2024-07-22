import React from 'react';
import AnimatedImage from './AnimatedImage';
import './Hero.scss';

const imageNames = [
  'idleSprite0.png',
  'idleSprite1.png',
  'idleSprite2.png',
  'idleSprite3.png',
];
const hoverImageNames = [
  'hoverIdleSprite0.png',
  'hoverIdleSprite1.png',
  'hoverIdleSprite2.png',
  'hoverIdleSprite3.png',
];

const RightContainer: React.FC = () => {
  return (
    <div className="RightContainer">
      <AnimatedImage imageNames={imageNames} hoverImageNames={hoverImageNames} />
    </div>
  );
};

export default RightContainer;
