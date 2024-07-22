import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useSpring } from 'react-spring';
import './Projects.scss';

const projects = [
  {
    image: 'DEADWEIGHT.png',
    title: 'DEADWEIGHT',
    languages: 'C#, Unity',
    description: 'DEADWEIGHT is a game developed for the Kenney Jam 2024. It was my first experience working in Unity done in collaboration with <a href="https://github.com/NoahGJAC" target="_blank" rel="noopener noreferrer">NoahGJAC</a> as the first project for our game studio, <a href="https://github.com/Cano-Studios" target="_blank" rel="noopener noreferrer">Cano Studios</a>.',
    github: 'https://github.com/Cano-Studios/DEADWEIGHT',
    website: 'https://cano-studios.itch.io/deadweight',
  },
  {
    image: 'cropcare.png',
    title: 'CSS Art Challenge',
    languages: 'HTML, CSS',
    description: 'I created CSS Art Challenge to help people discover that CSS can be fun and more than just creating basic layouts by competing in monthly challenges and winning prizes!',
    github: 'https://github.com/example/css-art-challenge',
    website: 'https://cssartchallenge.com',
  },
  {
    image: 'project3.png',
    title: 'Bundle, LLC Website',
    languages: 'React, Next.js',
    description: 'A startup consulting website designed to reach potential clients organically through a blog. Working closely with them to identify key metrics and success factors, I created a clean and intuitive design that effectively communicates their value proposition.',
    github: 'https://github.com/example/bundle-website',
    website: 'https://bundlellc.com',
  },
  // Add more projects here
];

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

const ProjectItem: React.FC<{ project: any }> = ({ project }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    config: { tension: 200, friction: 20 }
  });

  return (
    <motion.div
      className="ProjectItem"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${project.image})` }}
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.99 }}
      transition={{ duration: 0.5 }}
      ref={ref}
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.15 },
      }}
    >
      <div className="ProjectContent">
        <h2 className="ProjectTitle">{project.title}</h2>
        <p className="ProjectLanguages">{project.languages}</p>
        <p className="ProjectDescription" dangerouslySetInnerHTML={{ __html: project.description }} />
        <div className="ProjectLinks">
          {project.github && (
            <a href={project.github} className="ProjectLink" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
          )}
          {project.website && (
            <a href={project.website} className="ProjectLink" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Website
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
