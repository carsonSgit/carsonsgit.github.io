import React from 'react';
import './Projects.scss';

const projects = [
  {
    image: 'project1.png', // Replace with the path to your project image/gif
    title: 'Project One',
    languages: 'JavaScript, React',
    description: 'A brief description of Project One.',
  },
  {
    image: 'project2.png',
    title: 'Project Two',
    languages: 'Python, Django',
    description: 'A brief description of Project Two.',
  },
  // Add more projects here
];

const Project: React.FC = () => {
  return (
    <div className="ProjectsContainer">
      {projects.map((project, index) => (
        <div className="ProjectCard" key={index}>
          <img src={`${process.env.PUBLIC_URL}/${project.image}`} alt={project.title} className="ProjectImage" />
          <div className="ProjectDetails">
            <h2 className="ProjectTitle">{project.title}</h2>
            <p className="ProjectLanguages">{project.languages}</p>
            <p className="ProjectDescription">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
