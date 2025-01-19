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
          <p className="AboutText">
            I'm a recent CS grad from John Abbott College, currently continuing my studies at Concordia University where I'm taking some missing prerequisites before transferring into a BCompSc. I've been coding for 7 years, with a recent focus on the implementations of AI and Machine Learning.
          </p>
          <p className='AboutText'>
            Recently, as a Software Engineering Intern at <a className="hoverLink" href="https://www.tailed.ca" target="_blank" rel="noreferrer">Tail&#39;ed</a>, I worked on the company’s website using TypeScript, React, and Next.js, and developed + shipped an AI product that uses Python and a Vector DB to improve students' ability to stand out.
          </p>
          <p className='AboutText'>
            Over the last four years, I’ve gained diverse experience, from interning at a <a className="hoverLink" href="https://www.tailed.ca" target="_blank" rel="noreferrer">startup</a> and <a className="hoverLink" href="https://www.ville.kirkland.qc.ca/" target="_blank" rel="noreferrer">local government</a>, to contributing at a <a className="hoverLink" href="https://www.linkedin.com/company/cusec/" target="_blank" rel="noreferrer">tech conference</a> and directing my school's <a className="hoverLink" href="https://www.linkedin.com/company/jachacks" target="_blank" rel="noreferrer">hackathon</a>. These experiences have given me valuable insights into the tech industry.
          </p>
          <p className='AboutText'>
            If I'm not coding, I'm probably with my cats, at the gym, listening to music, or doomscrolling...
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
