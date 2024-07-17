import React from 'react';
import './content.css';

const Content: React.FC = () => {
  return (
    <div className="ContentContainer">
      <div className="LeftContainer">
        <h1>Hi, I'm Carson</h1>
        <p>I like building cool things.</p>
      </div>
      <div className="RightContainer">
        {/* Add content for the RightContainer if needed */}
      </div>
    </div>
  );
};

export default Content;
