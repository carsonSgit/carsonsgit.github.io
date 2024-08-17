import React from 'react';
import { FaGithub, FaLinkedin, FaDev, FaMedium } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="Footer">
      <div className="FooterIcons">
        <a href="https://github.com/carsonSgit" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/carsonspriggs" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://dev.to/carsonsgit" target="_blank" rel="noreferrer">
          <FaDev />
        </a>
        <a href="https://medium.com/@carsonspriggs6" target="_blank" rel="noreferrer">
          <FaMedium />
        </a>
      </div>
      <div className="FooterText">
        Coded and Designed by @carsonSgit
      </div>
    </footer>
  );
};

export default Footer;
