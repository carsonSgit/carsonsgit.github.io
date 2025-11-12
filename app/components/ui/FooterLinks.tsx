import React from 'react';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';

const FooterLinks: React.FC = () => {
  return (
    <div className="footer-section links-section">
      <h4 className="footer-title">LINKS</h4>
      <div className="footer-links-list">
        <a
          href="https://github.com/carsonSgit"
          target="_blank"
          rel="noreferrer"
          className="footer-link-item"
        >
          <FaGithub className="link-icon" />
          <span className="link-text">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/carsonspriggs"
          target="_blank"
          rel="noreferrer"
          className="footer-link-item"
        >
          <FaLinkedin className="link-icon" />
          <span className="link-text">LinkedIn</span>
        </a>
        <a
          href="https://devpost.com/carsonSgit?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
          target="_blank"
          rel="noreferrer"
          className="footer-link-item"
        >
          <SiDevpost className="link-icon" />
          <span className="link-text">Devpost</span>
        </a>
        <a
          href="https://drive.google.com/file/d/1GgcJwxiAON-9YTvuM6vi1hQmuCVQgDg1/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="footer-link-item"
        >
          <FaFilePdf className="link-icon" />
          <span className="link-text">Resume</span>
        </a>
      </div>
    </div>
  );
};

export default FooterLinks;

