import React, { useRef, useState, useCallback } from 'react';
import LeftColumn from './sections/LeftColumn';
import RightColumn from './sections/RightColumn';
import RootFooter from './ui/RootFooter';
import BackgroundGrid from './ui/BackgroundGrid';
import SnakeGame from './ui/SnakeGame';
import { SnakeSegment, FoodTile } from '../types/types';
import '../styles/app.scss';

const App = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isSnakeActive, setIsSnakeActive] = useState(false);
  const [snakeSegments, setSnakeSegments] = useState<SnakeSegment[]>([]);
  const [foodTiles, setFoodTiles] = useState<FoodTile[]>([]);

  const handleSnakeToggle = useCallback(() => {
    setIsSnakeActive((prev) => !prev);
  }, []);

  const handleSnakeUpdate = useCallback((snake: SnakeSegment[], food: FoodTile[]) => {
    setSnakeSegments(snake);
    setFoodTiles(food);
  }, []);

  return (
    <div className="App" ref={rootRef}>
      <BackgroundGrid 
        snakeSegments={snakeSegments} 
        foodTiles={foodTiles} 
        isSnakeActive={isSnakeActive}
      />
      <SnakeGame 
        isActive={isSnakeActive} 
        onSnakeUpdate={handleSnakeUpdate}
      />
      <div className="FixedSection flex justify-center">
        <div className="container max-w-[100%] justify-center mx-auto">
          <LeftColumn 
            isSnakeActive={isSnakeActive}
            onSnakeToggle={handleSnakeToggle}
          />
          <RightColumn />
        </div>
      </div>
      <RootFooter />
    </div>
  );
};

export default App;
