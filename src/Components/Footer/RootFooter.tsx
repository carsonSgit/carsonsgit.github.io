import React from 'react';
import { FaGithub, FaLinkedin, FaFilePdf, FaMapMarkerAlt } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import './RootFooter.scss';

const RootFooter = () => {
  return (
    <footer className="root-footer" id="links">
      <div className="root-footer-container">
        <div className="footer-main">
          <div className="footer-left-column">
            <div className="footer-section brand-section">
              <h3 className="footer-brand">CARSONSGIT</h3>
              <p className="footer-tagline">Software & QA</p>
              <p className="footer-description">
                Passionate about impact, quality, and innovation for good.
              </p>
              <div className="footer-location">
                <FaMapMarkerAlt />
                <span>Montreal, QC</span>
              </div>
            </div>
          </div>

          <div className="footer-right-column">
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
                  href="https://drive.google.com/file/d/1szKkdtBrg0s7XmvujozgV5G1UnuUO7Iu/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link-item"
                >
                  <FaFilePdf className="link-icon" />
                  <span className="link-text">Resume</span>
                </a>
              </div>
            </div>
          </div>


        </div>

      </div>
    </footer>
  );
};

export default RootFooter;