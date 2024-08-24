import React, { useState, useEffect } from 'react';
import { AnimatedImageProps } from '../../Interfaces/animatedImageProps';

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  imageNames,
  hoverImageNames,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hoverIndex, setHoverIndex] = useState(-1);
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
    <img
      src={`${process.env.PUBLIC_URL}/${hoverIndex !== -1 ? hoverImageNames[hoverIndex] : imageNames[currentIndex]}`}
      alt={`Sprite ${currentIndex}`}
      onMouseEnter={() => handleMouseEnter(currentIndex)}
      onMouseLeave={handleMouseLeave}
      width="280"
    />
  );
};

export default AnimatedImage;
