import { motion } from "framer-motion";
import type React from "react";
import Content from "./Content";

const ANIMATION_PROPS = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	transition: {
		type: "spring" as const,
		stiffness: 300,
		damping: 25,
		mass: 0.3,
		opacity: { duration: 0.3 },
	},
	style: { willChange: "opacity" },
} as const;

const RightColumn: React.FC = () => {
	return (
		<motion.div className="right-column" {...ANIMATION_PROPS}>
			<Content />
		</motion.div>
	);
};

export default RightColumn;
