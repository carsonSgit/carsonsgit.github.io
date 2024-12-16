import React from 'react';
import { motion, useInView } from 'framer-motion';
// import { FaFilePdf, FaGithub } from 'react-icons/fa';
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
            I’m a passionate developer with a strong focus on crafting innovative, 
            user-centric solutions that combine thoughtful design with solid engineering. 
            My work thrives at the intersection of technology and creativity, 
            where I strive to build seamless experiences that are as performant as they are visually striking.
          </p>
            
            
            <p className='AboutText'>
            Recently, I worked as a Software Engineering Intern at <a className="hoverLink" href="https://www.tailed.ca" target="_blank" rel="noreferrer">Tail&#39;ed</a>{' '},
            where I worked on building and optimizing the company’s 
            website using TypeScript, React, and Next.js. 
            I also contributed to developing user-facing tools, 
            including an AI-driven application built in Python leveraging a Vector DB, 
            aiming to solve real-world problems faced by students looking for internships/positions with modern technology.
            </p>
            <p className='AboutText'>
              Over the past four years, I’ve gained hands-on experience across a variety of environments — 
              from interning at a 
              <a className="hoverLink" href="https://www.tailed.ca" target="_blank" rel="noreferrer"> startup </a> 
              and 
              <a className="hoverLink" href="https://www.ville.kirkland.qc.ca/" target="_blank" rel="noreferrer"> local government</a>, 
              to working at a 
              <a className="hoverLink" href="https://www.linkedin.com/company/cusec/" target="_blank" rel="noreferrer"> tech conference </a> 
              and directing my school’s 
              <a className="hoverLink" href="https://www.linkedin.com/company/jachacks" target="_blank" rel="noreferrer"> hackathon</a>, 
              I've had the opportunity to see the tech industry from many different angles and grow immensely through such experiences.
            </p>

            <p className='AboutText'>
            In my free time I'm probably hanging out with my cats, at the gym, listening to music, or thinking about my next project.
            
          </p>
        </div>

        { /* <div className="AboutImageContainer">
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
        */ }
      </div>
    </motion.div>
  );
};

export default About;
