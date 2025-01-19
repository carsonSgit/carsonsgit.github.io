import React from 'react';
import { FaGithub, FaLink} from 'react-icons/fa';
import { ProjectItemProps } from '../Interfaces/projectItemProps';
import './Projects.scss';
import { motion } from 'framer-motion';

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <motion.div className="ProjectItem"
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
      <div className="ProjectContent">
        <div className="ProjectTitleContainer">
          <h2 className="ProjectTitle">{project.title}</h2>
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
                <FaLink />
              </a>
            )}
          </div>
        </div>
        <div className="ProjectLanguages">
          {project.languages.map((language, index) => (
            <span
              key={index}
              className="ProjectLanguagePill"
              style={{
                backgroundColor: language.backgroundColour
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
      </div>
    </motion.div>
  );
};

export default ProjectItem;
