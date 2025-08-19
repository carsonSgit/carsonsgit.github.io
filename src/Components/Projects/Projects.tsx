import React from 'react';
import ProjectItem from './ProjectItem';
import { projects } from '../Data/portfolioProjects';
import './Projects.scss';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <motion.div
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
      <div className="ProjectsTitleContainer">
        <h1 className="ProjectsTitle">
          <span className="ProjectsTitleAnimated">Notable</span> projects
        </h1>
      </div>
      <div className="ProjectsContainer">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
