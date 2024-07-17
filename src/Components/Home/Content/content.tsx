import React, { useState, useEffect } from 'react';
import './content.css';

const Content: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hoverIndex, setHoverIndex] = useState(0);
  const imageNames = ['stand1_0.png', 'stand1_1.png', 'stand1_2.png', 'stand1_3.png'];
  const hoverImageNames = ['hover_stand1_0.png', 'hover_stand1_1.png', 'hover_stand1_2.png', 'hover_stand1_3.png'];
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
    }, 500); // Interval time in milliseconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [totalImages, direction]); // Dependencies for useEffect

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(0); // Reset to default image when not hovered
  };

  return (
    <div className="ContentContainer">
      <div className="LeftContainer">
        <h1>Hi, I'm Carson</h1>
        <p>I like building cool things.</p>
      </div>
      <div className="RightContainer">
        <img
          src={`${process.env.PUBLIC_URL}/${
            hoverIndex !== 0 ? hoverImageNames[hoverIndex - 1] : imageNames[currentIndex]
          }`}
          alt={`stand1_${currentIndex}.png`}
          onMouseEnter={() => handleMouseEnter(currentIndex + 1)}
          onMouseLeave={handleMouseLeave}
          width="200"
        />
      </div>
    </div>
  );
};

export default Content;
