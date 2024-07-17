import React, { useState, useEffect } from 'react';
import './content.css';

const Content: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const imageNames = ['stand1_0.png', 'stand1_1.png', 'stand1_2.png', 'stand1_3.png'];
  const totalImages = imageNames.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        let nextIndex = prevIndex + direction;

        if (nextIndex >= totalImages) {
          nextIndex = totalImages - 2;
          setDirection(-1);
        } else if (nextIndex < 0) {
          nextIndex = 1;
          setDirection(1);
        }

        return nextIndex;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [totalImages, direction]);

  return (
    <div className="ContentContainer">
      <div className="LeftContainer">
        <h1>Hi, I'm Carson</h1>
        <p>I like building cool things.</p>
      </div>
      <div className="RightContainer">
        <img src={`${process.env.PUBLIC_URL}/${imageNames[currentIndex]}`} alt={`stand1_${currentIndex}.png`} width="200" />
      </div>
    </div>
  );
};

export default Content;
