import { motion } from "framer-motion";
import type React from "react";
import { SLIDE_UP_ANIMATION } from "../../utils/animations";
import "../../styles/components.scss";

interface ProjectTitleProps {
	animatedText: string;
	staticText: string;
}

const ProjectTitle: React.FC<ProjectTitleProps> = ({
	animatedText,
	staticText,
}) => {
	return (
		<motion.div {...SLIDE_UP_ANIMATION}>
			<div className="ProjectsTitleContainer">
				<h1 className="ProjectsTitle">
					<span className="ProjectsTitleAnimated">{animatedText}</span>{" "}
					{staticText}
				</h1>
			</div>
		</motion.div>
	);
};

export default ProjectTitle;
