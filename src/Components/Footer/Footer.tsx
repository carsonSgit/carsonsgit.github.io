import React from 'react';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="Footer">
      <div className="FooterIcons">
        <a
          href="https://github.com/carsonSgit"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/carsonspriggs"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://drive.google.com/file/d/1LnwciQ2BSjsWtqRVf60DVAOxV5Mg0Y3U/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          aria-label="View my CV"
        >
          <FaFilePdf />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
