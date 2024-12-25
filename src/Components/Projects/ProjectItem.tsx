import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ProjectItemProps } from '../Interfaces/projectItemProps';
import './Projects.scss';

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="ProjectItem"
      initial={{ scale: 1 }}
      animate={{
        scale: inView ? 1 : 0.95,
      }}
      transition={{ duration: 0.6 }}
      ref={ref}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.1, ease: 'linear' },
      }}
    >
      <div className="ProjectContent">
        <h2 className="ProjectTitle">{project.title}</h2>
        <div className="ProjectLanguages">
          {project.languages.map((language, index) => (
            <span
              key={index}
              className="ProjectLanguagePill"
              style={{
                backgroundColor: language.backgroundColour,
                color: language.textColour,
              }}
            >
              {language.name}
            </span>
          ))}
        </div>
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
              <FaGithub />
            </a>
          )}
          {project.website && (
            <a
              href={project.website}
              className="ProjectLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
