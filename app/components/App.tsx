import { useCallback, useEffect, useState } from "react";
import type { FoodTile, SnakeSegment } from "../types/types";
import LeftColumn from "./sections/LeftColumn";
import RightColumn from "./sections/RightColumn";
import BackgroundGrid from "./ui/BackgroundGrid";
import RootFooter from "./ui/RootFooter";
import SnakeGame from "./ui/SnakeGame";
import MonoPortfolio from "./v2/MonoPortfolio";
import GuideModal from "./v2/GuideModal";
import "../styles/app.scss";

type AppView = "v1" | "v2";

const App = () => {
	const [view, setView] = useState<AppView>("v2");
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

	const handleVersionSelect = useCallback((version: "v1" | "v2") => {
		setIsGuideOpen(false);
		setView(version);
	}, []);

	const handleOpenGuide = useCallback(() => {
		setIsGuideOpen(true);
	}, []);

	const handleCloseGuide = useCallback(() => {
		setIsGuideOpen(false);
	}, []);

	// Listen for ? key to open guide in v1 view
	useEffect(() => {
		if (view !== "v1") return;

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
	}, [view, isGuideOpen, handleOpenGuide]);

	if (view === "v2") {
		return <MonoPortfolio onVersionSelect={handleVersionSelect} />;
	}

	return (
		<div className="App">
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

export default App;
