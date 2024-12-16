import React from 'react';
import Content from './Components/Content/Content';
import './App.scss';
import Hero from './Components/Home/Hero/Hero';

const LeftColumn = () => {
  return (
    <div className="left-column">
      <Hero />
    </div>
  );
};

const RightColumn = () => {
  return (
    <div className="right-column">
      <Content />
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <div className="FixedSection">
        <div className="container">
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
    </div>
  );
};

export default App;
