import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Projects.scss';

const projects = [
  {
    image: 'temp1.png',
    title: 'Project Alpha',
    languages: 'JavaScript, React',
    description: 'This is a temporary project description to illustrate the use of placeholder text for a project. It provides some context about the project and its features.',
    github: 'https://github.com/username/project-alpha',
    website: 'https://projectalpha.com'
  },
  {
    image: 'temp2.png',
    title: 'Project Beta',
    languages: 'HTML, CSS',
    description: 'This placeholder description is for another project example. It demonstrates how to fill out project details with generic information.',
    github: 'https://github.com/username/project-beta',
    website: ''
  },
  {
    image: 'temp3.png',
    title: 'Project Gamma',
    languages: 'React, Next.js',
    description: 'Here is a temporary description for a different project. It shows how to provide project details and links in a placeholder format.',
    github: 'https://github.com/username/project-gamma',
    website: 'https://projectgamma.com'
  },
  // Add more projects here
];


const Projects: React.FC = () => {
  return (
    <div className="ProjectsContainer">
      <h1 className="ProjectsTitle">A collection of my favorite works</h1>
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </div>
  );
};

const ProjectItem: React.FC<{ project: any }> = ({ project }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fade = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
  });

  return (
    <animated.div className="ProjectItem" style={fade} ref={ref}>
      <div className="ProjectImageContainer">
        <img src={`${process.env.PUBLIC_URL}/${project.image}`} alt={project.title} className="ProjectImage" />
      </div>
      <div className="ProjectContent">
        <h2 className="ProjectTitle">{project.title}</h2>
        <p className="ProjectLanguages">{project.languages}</p>
        <p className="ProjectDescription">{project.description}</p>
        <div className="ProjectLinks">
          {project.github && (
            <a href={project.github} className="ProjectLink" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          )}
          {project.website && (
            <a href={project.website} className="ProjectLink" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faExternalLinkAlt} /> Website
            </a>
          )}
        </div>
      </div>
    </animated.div>
  );
};

export default Projects;