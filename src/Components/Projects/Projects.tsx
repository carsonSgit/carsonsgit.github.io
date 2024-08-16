// src/components/Projects.tsx
import React from 'react';
import ProjectItem from './ProjectItem';
import { projects } from '../Temp/portfolioProjects';
import './Projects.scss';

const Projects: React.FC = () => {
  return (
    <div className="ProjectsContainer">
      <h1 className="ProjectsTitle">
        <span className="ProjectsTitleAnimated">Notable</span> projects
      </h1>
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
