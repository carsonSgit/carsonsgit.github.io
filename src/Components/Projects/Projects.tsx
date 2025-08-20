import React, { useRef } from 'react';
import ProjectItem from './ProjectItem';
import { projects } from '../Data/portfolioProjects';
import './Projects.scss';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationProps = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      mass: 1,
    },
  };

  return (
    <>
      <motion.div
      {...animationProps}>
        <div className="ProjectsTitleContainer" ref={containerRef}>
          <h1 className="ProjectsTitle">
            <span className="ProjectsTitleAnimated">Notable</span> projects
          </h1>
        </div>
      </motion.div>
      <div className="ProjectsContainer">
        {projects.map((project, index) => (
          <motion.div
          key={index}
          {...animationProps}
        >
          <ProjectItem project={project} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Projects;
