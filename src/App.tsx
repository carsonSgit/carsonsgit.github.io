import React from 'react';
import Content from './Components/Content/Content';
import Navbar from './Components/Navbar/Navbar';  // Adjust the import path if needed
import './App.scss';
import './Components/Home/Hero/Hero.scss';

// LeftColumn Component (HeroContainer)
const LeftColumn: React.FC = () => {
  return (
    <div className="left-column">
      <div className="HeroContainer">
        <div className="LeftContainer">
          <h1 className="HeroText">
            Hi, I&#39;m <span className="AnimatedText">Carson</span>
          </h1>
          <h2>Software Developer</h2>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

// RightColumn Component (Content)
const RightColumn: React.FC = () => {
  return (
    <div className="right-column">
      <Content />
    </div>
  );
};

const App: React.FC = () => {
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
