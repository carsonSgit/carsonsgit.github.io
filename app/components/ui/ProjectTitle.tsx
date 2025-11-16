import { motion } from "framer-motion";
import type React from "react";
import type { RefObject } from "react";
import "../../styles/components.scss";

interface ProjectTitleProps {
	containerRef: RefObject<HTMLDivElement>;
	animatedText: string;
	staticText: string;
}

const ANIMATION_PROPS = {
	initial: { y: 50, opacity: 0 },
	whileInView: { y: 0, opacity: 1 },
	viewport: { once: true },
	transition: {
		type: "spring" as const,
		stiffness: 100,
		damping: 10,
		mass: 1,
	},
} as const;

const ProjectTitle: React.FC<ProjectTitleProps> = ({
	containerRef,
	animatedText,
	staticText,
}) => {
	return (
		<motion.div {...ANIMATION_PROPS}>
			<div className="ProjectsTitleContainer" ref={containerRef}>
				<h1 className="ProjectsTitle">
					<span className="ProjectsTitleAnimated">{animatedText}</span>{" "}
					{staticText}
				</h1>
			</div>
		</motion.div>
	);
};

export default ProjectTitle;
