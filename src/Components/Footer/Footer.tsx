import React from 'react';
import { FaGithub, FaLinkedin, /*FaDev, FaMedium,*/ FaFilePdf } from 'react-icons/fa';
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
        { /*<a href="https://dev.to/carsonsgit" target="_blank" rel="noreferrer">
          <FaDev />
        </a>
        <a
          href="https://medium.com/@carsonspriggs6"
          target="_blank"
          rel="noreferrer"
        >
          <FaMedium /> 
        </a> */ }
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
