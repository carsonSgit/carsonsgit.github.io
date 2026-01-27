"use client";

import { useCallback, useEffect, useState } from "react";
import type { FoodTile, SnakeSegment } from "../../types/types";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import BackgroundGrid from "./components/BackgroundGrid";
import RootFooter from "./components/RootFooter";
import SnakeGame from "./components/SnakeGame";
import GuideModal from "../../components/shared/GuideModal";
import "./styles/app.scss";
import "./styles/sections.scss";
import "./styles/components.scss";

interface ClassicThemeProps {
	onThemeSelect?: (theme: "classic" | "mono") => void;
}

const ClassicTheme: React.FC<ClassicThemeProps> = ({ onThemeSelect }) => {
	const [isSnakeActive, setIsSnakeActive] = useState(false);
	const [snakeSegments, setSnakeSegments] = useState<SnakeSegment[]>([]);
	const [foodTiles, setFoodTiles] = useState<FoodTile[]>([]);
	const [isGuideOpen, setIsGuideOpen] = useState(false);

	const handleSnakeToggle = useCallback(() => {
		setIsSnakeActive((prev) => !prev);
	}, []);

	const handleSnakeUpdate = useCallback(
		(snake: SnakeSegment[], food: FoodTile[]) => {
			setSnakeSegments(snake);
			setFoodTiles(food);
		},
		[],
	);

	const handleVersionSelect = useCallback(
		(version: "v1" | "v2") => {
			setIsGuideOpen(false);
			const themeMap = { v1: "classic", v2: "mono" } as const;
			onThemeSelect?.(themeMap[version]);
		},
		[onThemeSelect],
	);

	const handleOpenGuide = useCallback(() => {
		setIsGuideOpen(true);
	}, []);

	const handleCloseGuide = useCallback(() => {
		setIsGuideOpen(false);
	}, []);

	// Listen for ? key to open guide
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
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
		<div className="App theme-classic">
			<BackgroundGrid
				snakeSegments={snakeSegments}
				foodTiles={foodTiles}
				isSnakeActive={isSnakeActive}
			/>
			<SnakeGame isActive={isSnakeActive} onSnakeUpdate={handleSnakeUpdate} />
			<div className="FixedSection flex justify-center">
				<div className="container max-w-[100%] justify-center mx-auto">
					<LeftColumn
						isSnakeActive={isSnakeActive}
						onSnakeToggle={handleSnakeToggle}
					/>
					<RightColumn />
				</div>
			</div>
			<RootFooter />

			{/* Guide trigger button */}
			<button
				className="guide-trigger guide-trigger--v1"
				onClick={handleOpenGuide}
				aria-label="Open guide"
				title="Press ? for guide"
			>
				<kbd>?</kbd>
			</button>

			<GuideModal
				isOpen={isGuideOpen}
				onClose={handleCloseGuide}
				onVersionSelect={handleVersionSelect}
				currentVersion="v1"
				theme="v1"
			/>
		</div>
	);
};

export default ClassicTheme;
