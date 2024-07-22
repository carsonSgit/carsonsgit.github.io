import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.scss';

const LeftContainer: React.FC = () => {
  return (
    <div className="LeftContainer">
      <h1 className="HeroText">
        Hi, I'm <span className="AnimatedText">Carson</span>
      </h1>
      <p>
        <Typewriter
          words={[
            'I like building cool things.',
            "Soft dev @ Tail'ed.",
            'ML explorer.',
            'Leetcode noob.',
            'GitHub fanatic.',
            '',
          ]}
          loop={false}
          cursor
          cursorStyle=""
          typeSpeed={100}
          deleteSpeed={70}
          delaySpeed={500}
        />
      </p>
    </div>
  );
};

export default LeftContainer;
