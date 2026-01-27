"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Intro from "./Intro";
import ProjectList from "./ProjectList";
import ExperienceList from "./ExperienceList";
import EducationList from "./EducationList";
import KeyboardShortcuts from "./KeyboardShortcuts";
import AsciiFooter from "./AsciiFooter";
import GuideModal from "./GuideModal";
import { useVimNavigation } from "./useVimNavigation";
import "../../styles/v2.scss";

interface MonoPortfolioProps {
	onVersionSelect?: (version: "v1" | "v2") => void;
}

const MonoPortfolio: React.FC<MonoPortfolioProps> = ({ onVersionSelect }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isGuideOpen, setIsGuideOpen] = useState(false);

	useVimNavigation({ containerRef, disabled: isGuideOpen });

	const handleOpenGuide = useCallback(() => {
		setIsGuideOpen(true);
	}, []);

	const handleCloseGuide = useCallback(() => {
		setIsGuideOpen(false);
	}, []);

	const handleVersionSelect = useCallback(
		(version: "v1" | "v2") => {
			setIsGuideOpen(false);
			onVersionSelect?.(version);
		},
		[onVersionSelect]
	);

	// Listen for ? key to open guide (only when guide is closed)
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			// Don't trigger if typing in an input
			if (
				e.target instanceof HTMLInputElement ||
				e.target instanceof HTMLTextAreaElement
			) {
				return;
			}

			if (e.key === "?" && !isGuideOpen) {
				e.preventDefault();
				handleOpenGuide();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isGuideOpen, handleOpenGuide]);

	return (
		<div className="mono-portfolio-wrapper">
			<div className="mono-portfolio" ref={containerRef}>
				<a href="#main-content" className="skip-link">
					Skip to content
				</a>

				{/* Guide trigger hint */}
				<button
					className="guide-trigger"
					onClick={handleOpenGuide}
					aria-label="Open guide"
					title="Press ? for guide"
				>
					<kbd>?</kbd>
				</button>

				<main id="main-content">
					<Intro />

					<hr />

					<ProjectList />

					<hr />

					<ExperienceList />

					<hr />

					<EducationList />

					<hr />

					<KeyboardShortcuts />

					<hr />

					<AsciiFooter />
				</main>
			</div>

			<GuideModal
				isOpen={isGuideOpen}
				onClose={handleCloseGuide}
				onVersionSelect={handleVersionSelect}
				currentVersion="v2"
			/>
		</div>
	);
};

export default MonoPortfolio;
