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

const GRID_SIZE = 60;
const DECAY_MS = 1200;
const MAX_TILES = 50;

const COLOR_PALETTE = [
	"rgba(167, 139, 250, 0.35)", // purple (ai)
	"rgba(94, 234, 212, 0.35)",  // teal (cv)
	"rgba(147, 197, 253, 0.35)", // blue (ts)
	"rgba(110, 231, 183, 0.35)", // green (py)
	"rgba(134, 239, 172, 0.35)", // lime (csharp)
	"rgba(252, 211, 77, 0.35)",  // yellow (hardware)
	"rgba(125, 211, 252, 0.35)", // cyan (azure)
	"rgba(163, 230, 53, 0.35)",  // lime-green (iot)
	"rgba(251, 191, 36, 0.35)",  // amber (ml)
	"rgba(252, 165, 165, 0.35)", // red (threejs)
	"rgba(249, 168, 212, 0.35)", // pink (rtmp)
	"rgba(216, 180, 254, 0.35)", // violet (neuro)
	"rgba(103, 232, 249, 0.35)", // sky (rnd)
];

interface GridHighlight {
	x: number;
	y: number;
	color: string;
	createdAt: number;
}

const MonoPortfolio: React.FC<MonoPortfolioProps> = ({ onVersionSelect }) => {
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

		// Resize canvas to match document
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
			onVersionSelect?.(version);
		},
		[onVersionSelect]
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
		<div className="mono-portfolio-wrapper">
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

export default MonoPortfolio;
