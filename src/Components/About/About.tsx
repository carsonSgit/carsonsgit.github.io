import React from 'react';
import { motion } from 'framer-motion';
import './About.scss';

const About: React.FC = () => {
  return (
    <motion.div
      className="AboutContainer"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 1
      }}
    >
      <div className="AboutContentContainer">
        <div className="AboutContent">
          <p className='AboutText'>
            Studying Engineering Technology and Applied Sciences @ <a className="hoverLink" id="cU" href="https://mun.ca/" target="_blank" rel="noreferrer">Memorial University of Newfoundland</a> and a CS alumni from <a className="hoverLink" id="jac" href="https://johnabbott.qc.ca/career-programs/computer-science-technology/computer-science-420-b0/" target="_blank" rel="noreferrer">John Abbott College</a>. 
            This summer I'm interning @ <a className="hoverLink" id="intern" href="https://www.fundica.com/" target="_blank" rel="noreferrer">Fundica</a> in downtown Montreal.
            During my free time, I'm probably <i>at</i> or <i>waiting</i> for a <a className='hoverLink' id="status" href="https://devpost.com/carsonSgit?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noreferrer">hackathon</a> to attend. 
            Throughout the 8+ years I've been coding, I've made some pretty <a className='hoverLink' id="hint" href="https://github.com/carsonSgit" target="_blank" rel="noreferrer">cool projects</a>, and I'm always working on improving and learning more.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
