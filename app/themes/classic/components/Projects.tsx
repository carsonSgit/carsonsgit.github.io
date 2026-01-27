import type React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../../../data/portfolioProjects";
import ProjectTitle from "./ProjectTitle";
import { motion } from "framer-motion";
import { SLIDE_UP_ANIMATION } from "../../../utils/animations";

const Projects: React.FC = () => {
	return (
		<>
			<ProjectTitle
				animatedText="Notable"
				staticText="projects"
			/>
			<div className="ProjectsContainer">
				{projects.map((project) => (
					<motion.div key={project.title} {...SLIDE_UP_ANIMATION}>
						<ProjectItem project={project} />
					</motion.div>
				))}
			</div>
		</>
	);
};

export default Projects;
