import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FaFilePdf, FaGithub } from 'react-icons/fa';
import './About.scss';

const About: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="AboutContainer"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <div className="AboutContentContainer">
        <div className="AboutContent">
          <p className="AboutText">
            Hi, my name is Carson! I&#39;m a recent grad from John Abbott
            College&#39;s Computer Science degree continuing my education over
            at Concordia University!
            <br />
            <br />
            This summer, I interned @{' '}
            <a
              className="hoverLink"
              href="https://www.tailed.ca"
              target="_blank"
              rel="noreferrer"
            >
              Tail&#39;ed
            </a>{' '}
            as a Software Developer, working on the company website using
            TypeScript, React, and Next.js. Alongside that, I also worked on
            some tools for users written in Python (notably, an AI-tool).
            <br />
            <br />
            In my free time, I&#39;m usually working on a personal project,
            learning a new technology, or wallowing in some imposter syndrome.
            Aside from that, my interests are geared towards AI/ML and their
            potential impact on environmental solutions.
            <br />
            <br />
            I&#39;m not hard to track down, but you can find me on{' '}
            <a
              className="hoverLink"
              href="https://linkedin.com/in/carsonspriggs"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{' '}
            or{' '}
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

        <div className="AboutImageContainer">
          <img
            className="AboutImage"
            src={`${process.env.PUBLIC_URL}/aboutImage.webp`}
            alt="At JACHacks"
          />
          <div className="ButtonContainer">
            <a
              href="https://drive.google.com/file/d/1XC7g_OGrxd04_lDYkpcmQb3QXLMMKyQV/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="DownloadCVButton">
                <FaFilePdf className="DownloadIcon" />
                Resume
              </button>
            </a>
            <a
              href="https://github.com/carsonSgit/carsonsgit.github.io"
              target="_blank"
              rel="noreferrer"
            >
              <button className="GitHubButton">
                Repo
                <FaGithub className="GitHubIcon" />
              </button>
            </a>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default About;
