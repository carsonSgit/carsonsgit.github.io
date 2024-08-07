import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useSpring } from 'react-spring';
import { Project } from './data/portfolioProjects';
import './Projects.scss';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    config: { tension: 200, friction: 20 },
  });

  return (
    <motion.div
      className="ProjectItem"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/${project.image})`,
      }}
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
        <p
          className="ProjectDescription"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
        <div className="ProjectLinks">
          {project.github && (
            <a
              href={project.github}
              className="ProjectLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          )}
          {project.website && (
            <a
              href={project.website}
              className="ProjectLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt /> Website
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
