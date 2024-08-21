import React from 'react';
import './About.scss';

const About: React.FC = () => {
  return (
    <div className="AboutContainer">
      <div className="AboutContentContainer">
        <div className="AboutContent">
          <p className="AboutText">
            Hi, my name is Carson! I'm a recent grad from John Abbott College's
            Computer Science degree continuing my education over at Concordia
            University!
            <br />
            <br />
            This summer, I interned @{' '}
            <a
              className="hoverLink"
              href="https://www.tailed.ca/en"
              target="_blank"
              rel="noreferrer"
            >
              Tail'ed
            </a>{' '}
            as a Software Developer, working on the company website using
            TypeScript, React, and Next.js. Alongside that, I also worked on
            some tools for users written in Python (notably, an AI-tool).
            <br />
            <br />
            In my free time, I'm usually working on a personal project, learning
            a new technology, or wallowing in some imposter syndrome. Aside from
            that, my interests are geared towards AI/ML and their potential
            impact on environmental solutions.
            <br />
            <br />
            I'm not hard to track down, but you can find me on{' '}
            <a
              className="hoverLink"
              href="https://linkedin.com/in/carsonspriggs"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            ,{' '}
            <a
              className="hoverLink"
              href="https://github.com/carsonSgit"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            . I also dabble in a bit of writing on my{' '}
            <a
              className="hoverLink"
              href="https://dev.to/carsonsgit"
              target="_blank"
              rel="noreferrer"
            >
              Dev.to
            </a>{' '}
            and{' '}
            <a
              className="hoverLink"
              href="https://medium.com/@carsonspriggs6"
              target="_blank"
              rel="noreferrer"
            >
              Medium
            </a>{' '}
            pages.
          </p>
        </div>

        {/*<div className="AboutImageContainer">
          <img
            className="AboutImage"
            src={`${process.env.PUBLIC_URL}/carson.webp`}
            alt="Carson"
          />
        </div>*/}
      </div>
    </div>
  );
};

export default About;