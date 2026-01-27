"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Intro from "./components/Intro";
import ProjectList from "./components/ProjectList";
import ExperienceList from "./components/ExperienceList";
import EducationList from "./components/EducationList";
import KeyboardShortcuts from "./components/KeyboardShortcuts";
import AsciiFooter from "./components/AsciiFooter";
import GuideModal from "../../components/shared/GuideModal";
import { useVimNavigation } from "./hooks/useVimNavigation";
import { monoThemeConfig } from "../../core/types/theme";
import "./styles/v2.scss";

interface MonoThemeProps {
	onThemeSelect?: (theme: "classic" | "mono") => void;
}

const { gridSize: GRID_SIZE, decayMs: DECAY_MS, maxTiles: MAX_TILES, palette: COLOR_PALETTE } = monoThemeConfig.grid;

interface GridHighlight {
	x: number;
	y: number;
	color: string;
	createdAt: number;
}

const MonoTheme: React.FC<MonoThemeProps> = ({ onThemeSelect }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const highlightsRef = useRef<Map<string, GridHighlight>>(new Map());
	const animationFrameRef = useRef<number | null>(null);
	const [isGuideOpen, setIsGuideOpen] = useState(false);

	useVimNavigation({ containerRef, disabled: isGuideOpen });

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resizeCanvas = () => {
			const docHeight = Math.max(
				document.body.scrollHeight,
				document.documentElement.scrollHeight
			);
			canvas.width = window.innerWidth;
			canvas.height = docHeight;
		};

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		const makeKey = (x: number, y: number) => `${x},${y}`;
		const getRandomColor = () => COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];

		const addHighlight = (pageX: number, pageY: number) => {
			const x = Math.floor(pageX / GRID_SIZE) * GRID_SIZE;
			const y = Math.floor(pageY / GRID_SIZE) * GRID_SIZE;
			const key = makeKey(x, y);
			const now = Date.now();
			const highlights = highlightsRef.current;

			const existing = highlights.get(key);
			if (existing) {
				existing.createdAt = now;
			} else {
				highlights.set(key, { x, y, color: getRandomColor(), createdAt: now });
				if (highlights.size > MAX_TILES) {
					const sorted = Array.from(highlights.entries()).sort(
						(a, b) => a[1].createdAt - b[1].createdAt
					);
					for (let i = 0; i < sorted.length - MAX_TILES; i++) {
						highlights.delete(sorted[i][0]);
					}
				}
			}
		};

		const render = () => {
			const now = Date.now();
			const highlights = highlightsRef.current;

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			let hasActive = false;
			for (const [key, h] of highlights) {
				const age = now - h.createdAt;
				if (age > DECAY_MS) {
					highlights.delete(key);
				} else {
					hasActive = true;
					const opacity = Math.max(0, 1 - age / DECAY_MS);
					const baseColor = h.color.replace(/[\d.]+\)$/, `${opacity * 0.35})`);
					ctx.fillStyle = baseColor;
					ctx.fillRect(h.x, h.y, GRID_SIZE, GRID_SIZE);
				}
			}

			if (hasActive) {
				animationFrameRef.current = requestAnimationFrame(render);
			} else {
				animationFrameRef.current = null;
			}
		};

		const onMouseMove = (e: MouseEvent) => {
			addHighlight(e.pageX, e.pageY);

			if (animationFrameRef.current === null) {
				animationFrameRef.current = requestAnimationFrame(render);
			}
		};

		window.addEventListener("mousemove", onMouseMove, { passive: true });

		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("resize", resizeCanvas);
			if (animationFrameRef.current !== null) {
				cancelAnimationFrame(animationFrameRef.current);
				animationFrameRef.current = null;
			}
		};
	}, []);

	const handleOpenGuide = useCallback(() => {
		setIsGuideOpen(true);
	}, []);

	const handleCloseGuide = useCallback(() => {
		setIsGuideOpen(false);
	}, []);

	const handleVersionSelect = useCallback(
		(version: "v1" | "v2") => {
			setIsGuideOpen(false);
			const themeMap = { v1: "classic", v2: "mono" } as const;
			onThemeSelect?.(themeMap[version]);
		},
		[onThemeSelect]
	);

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
		<div className="mono-portfolio-wrapper theme-mono">
			<canvas
				ref={canvasRef}
				className="grid-hover-canvas"
				aria-hidden="true"
			/>
			<div className="mono-portfolio" ref={containerRef}>
				<a href="#main-content" className="skip-link">
					Skip to content
				</a>

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

export default MonoTheme;
