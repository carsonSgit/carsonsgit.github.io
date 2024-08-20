// src/components/Projects.tsx
import React from 'react';
import ProjectItem from './ProjectItem';
import { projects } from '../Data/portfolioProjects';
import './Projects.scss';

const Projects: React.FC = () => {
  return (
    <div>
      <h1 className="ProjectsTitle">
        <span className="ProjectsTitleAnimated">Notable</span> projects
      </h1>
      <div className="ProjectsContainer">
        
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
