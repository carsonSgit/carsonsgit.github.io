import React from 'react';
import ProjectItem from './ProjectItem';
import { projects } from '../Data/portfolioProjects';
import './Projects.scss';

const Projects: React.FC = () => {
  return (
    <div role="region" aria-labelledby="projects-title">
      <h1 id="projects-title" className="ProjectsTitle">
        <span className="ProjectsTitleAnimated">Notable</span> projects
      </h1>
      <div className="ProjectsContainer" aria-label="List of notable projects">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
