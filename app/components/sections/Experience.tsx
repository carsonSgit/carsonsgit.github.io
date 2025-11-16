import { motion } from "framer-motion";
import type React from "react";
import ExperienceTimeline from "./ExperienceTimeline";
import "../../styles/components.scss";

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

const Experience: React.FC = () => {
	return (
		<motion.div className="experience-page" {...ANIMATION_PROPS}>
			<ExperienceTimeline />
		</motion.div>
	);
};

export default Experience;
