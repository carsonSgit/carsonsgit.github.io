import React from 'react';
import { FaGithub, FaLink} from 'react-icons/fa';
import { ProjectItemProps } from '../../types/projects';
import '../../styles/components.scss';
import '../../styles/sections.scss';

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className="ProjectItem">
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
    </div>
  );
};

export default ProjectItem;

