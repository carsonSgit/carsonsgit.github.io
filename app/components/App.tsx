import React, { useRef } from 'react';
import LeftColumn from './sections/LeftColumn';
import RightColumn from './sections/RightColumn';
import RootFooter from './ui/RootFooter';
import BackgroundGrid from './ui/BackgroundGrid';
import '../styles/app.scss';

const App = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="App" ref={rootRef}>
      <BackgroundGrid />
      <div className="FixedSection">
        <div className="container">
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
      <RootFooter />
    </div>
  );
};

export default App;
