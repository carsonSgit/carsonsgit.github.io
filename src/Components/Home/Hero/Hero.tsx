import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hoverIndex, setHoverIndex] = useState(-1);
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
  const totalImages = imageNames.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        let nextIndex = prevIndex + direction;
        if (nextIndex >= totalImages) {
          nextIndex = totalImages - 1;
          setDirection(-1);
        } else if (nextIndex < 0) {
          nextIndex = 0;
          setDirection(1);
        }
        return nextIndex;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [totalImages, direction]);

  useEffect(() => {
    let hoverInterval: NodeJS.Timeout | null = null;
    if (hoverIndex !== -1) {
      hoverInterval = setInterval(() => {
        setHoverIndex(prevIndex => {
          let nextIndex = prevIndex + direction;
          if (nextIndex >= totalImages) {
            nextIndex = totalImages - 1;
            setDirection(-1);
          } else if (nextIndex < 0) {
            nextIndex = 0;
            setDirection(1);
          }
          return nextIndex;
        });
      }, 500);
    }
    return () => {
      if (hoverInterval) clearInterval(hoverInterval);
    };
  }, [hoverIndex, totalImages, direction]);

  const handleMouseEnter = (index: number) => setHoverIndex(index);
  const handleMouseLeave = () => setHoverIndex(-1);

  return (
    <div className="HeroContainer">
      <div className="LeftContainer">
        <h1 className='HeroText'>
          Hi, I'm <span className="AnimatedText">Carson</span>
        </h1>
        <p>
          <Typewriter
            words={['I like building cool things.', 'Soft dev @ Tail\'ed.', 'ML explorer.', 'Leetcode noob.', 'GitHub fanatic.', '']}
            loop={false}
            cursor
            cursorStyle=''
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={500}
          />
          </p>
      </div>
      <div className="RightContainer">
        <img
          src={`${process.env.PUBLIC_URL}/${hoverIndex !== -1 ? hoverImageNames[hoverIndex] : imageNames[currentIndex]}`}
          alt={`Sprite ${currentIndex}`}
          onMouseEnter={() => handleMouseEnter(currentIndex)}
          onMouseLeave={handleMouseLeave}
          width="280"
        />
      </div>
    </div>
  );
};

export default Hero;