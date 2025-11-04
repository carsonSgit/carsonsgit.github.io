import React, { useRef } from 'react';
import ProjectItem from '../../components/ui/ProjectItem';
import ProjectTitle from '../ui/ProjectTitle';
import { projects } from '../../data/portfolioProjects';
import '../../styles/sections.scss';
import { motion } from 'framer-motion';

const ANIMATION_PROPS = {
  initial: { y: 50, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: {
    type: 'spring' as const,
    stiffness: 100,
    damping: 10,
    mass: 1,
  },
} as const;

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <ProjectTitle containerRef={containerRef as React.RefObject<HTMLDivElement>} animatedText="Notable" staticText="projects" />
      <div className="ProjectsContainer">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            {...ANIMATION_PROPS}
          >
            <ProjectItem project={project} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Projects;

