"use client";

import { motion } from "framer-motion";
import type React from "react";
import "../../styles/sections.scss";
import { LinkPreview } from "../ui/link-preview";

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

const About: React.FC = () => {
	return (
		<motion.div className="AboutContainer" {...ANIMATION_PROPS}>
			<div className="AboutContentContainer">
				<div className="AboutContent">
					<p className="AboutText">
						Studying Engineering Technology and Applied Sciences @{" "}
						<LinkPreview url="https://mun.ca/" className="hoverLink">
							<span id="mU">Memorial University of Newfoundland</span>
						</LinkPreview>{" "}
						and a CS alumni from{" "}
						<LinkPreview
							url="https://johnabbott.qc.ca/career-programs/computer-science-technology/computer-science-420-b0/"
							className="hoverLink"
						>
							<span id="jac">John Abbott College</span>
						</LinkPreview>
						. This summer I'm interning @{" "}
						<LinkPreview url="https://www.fundica.com/" className="hoverLink">
							<span id="intern">Fundica</span>
						</LinkPreview>{" "}
						in downtown Montreal. During my free time, I'm probably <i>at</i> or{" "}
						<i>waiting</i> for a{" "}
						<LinkPreview
							url="https://devpost.com/carsonSgit?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
							className="hoverLink"
						>
							<span id="status">hackathon</span>
						</LinkPreview>{" "}
						to attend. Throughout the 8+ years I've been coding, I've made some
						pretty{" "}
						<LinkPreview
							url="https://github.com/carsonSgit"
							className="hoverLink"
						>
							<span id="hint">cool projects</span>
						</LinkPreview>{" "}
						, and I'm always working on improving and learning more.
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
