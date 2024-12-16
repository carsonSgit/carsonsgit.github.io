import React from 'react';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';  // Adjust the import path if needed
import './App.scss';
import './Components/Home/Hero/Hero.scss';

const App: React.FC = () => {

  return (
    <div className="App">
      <div className="FixedSection">
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
      <div className="ScrollableContent">
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default App;
