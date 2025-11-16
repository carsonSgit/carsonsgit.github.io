import type React from "react";
import { useEffect, useRef } from "react";
import type { FoodTile, Highlight, SnakeSegment } from "../../types/types";

interface BackgroundGridProps {
	snakeSegments?: SnakeSegment[];
	foodTiles?: FoodTile[];
	isSnakeActive?: boolean;
}

const BackgroundGrid: React.FC<BackgroundGridProps> = ({
	snakeSegments = [],
	foodTiles = [],
	isSnakeActive = false,
}) => {
	const animationFrameRef = useRef<number | null>(null);
	const highlightsRef = useRef<Map<string, Highlight>>(new Map());

	useEffect(() => {
		const GRID_SIZE = 100;
		const DECAY_MS = 1500;
		const MAX_TILES = 50;

		const highlights = highlightsRef.current;

		const palette = [
			"rgba(50, 206, 162, 0.35)",
			"rgba(95, 204, 45, 0.35)",
			"rgba(24, 167, 95, 0.35)",
			"rgba(35, 114, 84, 0.35)",
			"rgba(68, 172, 108, 0.35)",
		];

		const makeKey = (x: number, y: number) => `${x},${y}`;

		const addHighlight = (pageX: number, pageY: number) => {
			const x = Math.floor(pageX / GRID_SIZE) * GRID_SIZE;
			const y = Math.floor(pageY / GRID_SIZE) * GRID_SIZE;
			const key = makeKey(x, y);
			const now = Date.now();
			const base = palette[Math.floor(Math.random() * palette.length)];
			const alpha = 0.32 + Math.random() * 0.3;
			const color = base.replace(/0\.35\)/, `${alpha})`);
			const existing = highlights.get(key);
			if (existing) {
				existing.createdAt = now;
			} else {
				highlights.set(key, { x, y, color, createdAt: now });
				if (highlights.size > MAX_TILES) {
					const sorted = Array.from(highlights.values()).sort(
						(a, b) => a.createdAt - b.createdAt,
					);
					for (let i = 0; i < sorted.length - MAX_TILES; i++) {
						highlights.delete(makeKey(sorted[i].x, sorted[i].y));
					}
				}
			}
		};

		const renderWithColors = () => {
			const now = Date.now();
			const highlights = highlightsRef.current;

			highlights.forEach((h, key) => {
				if (now - h.createdAt > DECAY_MS) highlights.delete(key);
			});

			const tiles = Array.from(highlights.values());

			// Add snake and food tiles when active
			const hasSnake = snakeSegments.length > 0;
			const hasFood = foodTiles.length > 0;
			const hasHighlights = tiles.length > 0;

			if (!hasHighlights && !hasSnake && !hasFood) {
				const body = document.body;
				body.style.backgroundImage =
					"linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px), " +
					"linear-gradient(0deg, rgba(0,0,0,0.04) 1px, transparent 1px)";
				body.style.backgroundSize = `${GRID_SIZE}px ${GRID_SIZE}px, ${GRID_SIZE}px ${GRID_SIZE}px`;
				body.style.backgroundPosition = "0 0, 0 0";
				body.style.backgroundRepeat = "repeat, repeat";
				animationFrameRef.current = null;
				return;
			}

			const images = [
				// Food tiles (rendered first, below snake)
				...foodTiles.map(
					() => `linear-gradient(rgba(255, 0, 0, 0.6), rgba(255, 0, 0, 0.6))`,
				),
				...snakeSegments.map((s) => `linear-gradient(${s.color}, ${s.color})`),

				// Hover highlights (when not in snake mode)
				...tiles.map((t) => `linear-gradient(${t.color}, ${t.color})`),
				// Grid lines
				"linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
				"linear-gradient(0deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
			].join(",");

			const sizes = [
				...foodTiles.map(() => `${GRID_SIZE}px ${GRID_SIZE}px`),
				...snakeSegments.map(() => `${GRID_SIZE}px ${GRID_SIZE}px`),
				...tiles.map(() => `${GRID_SIZE}px ${GRID_SIZE}px`),
				`${GRID_SIZE}px ${GRID_SIZE}px`,
				`${GRID_SIZE}px ${GRID_SIZE}px`,
			].join(",");

			const positions = [
				...foodTiles.map((f) => `${f.x}px ${f.y}px`),
				...snakeSegments.map((s) => `${s.x}px ${s.y}px`),
				...tiles.map((t) => `${t.x}px ${t.y}px`),
				"0 0",
				"0 0",
			].join(",");

			const repeats = [
				...foodTiles.map(() => "no-repeat"),
				...snakeSegments.map(() => "no-repeat"),
				...tiles.map(() => "no-repeat"),
				"repeat",
				"repeat",
			].join(",");

			const body = document.body;
			body.style.backgroundImage = images;
			body.style.backgroundSize = sizes;
			body.style.backgroundPosition = positions;
			body.style.backgroundRepeat = repeats;

			animationFrameRef.current = requestAnimationFrame(renderWithColors);
		};

		const onMouseMove = (e: MouseEvent) => {
			if (isSnakeActive) {
				return;
			}

			const target = e.target as HTMLElement;
			if (target.closest("[data-prevent-grid-highlight]")) {
				return;
			}

			addHighlight(e.pageX, e.pageY);

			if (animationFrameRef.current === null) {
				animationFrameRef.current = requestAnimationFrame(renderWithColors);
			}
		};

		window.addEventListener("mousemove", onMouseMove, { passive: true });

		if (
			(snakeSegments.length > 0 || foodTiles.length > 0) &&
			animationFrameRef.current === null
		) {
			animationFrameRef.current = requestAnimationFrame(renderWithColors);
		}

		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			if (animationFrameRef.current !== null) {
				cancelAnimationFrame(animationFrameRef.current);
				animationFrameRef.current = null;
			}
			const body = document.body;
			body.style.backgroundImage =
				"linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px), " +
				"linear-gradient(0deg, rgba(0,0,0,0.04) 1px, transparent 1px)";
			body.style.backgroundSize = `${GRID_SIZE}px ${GRID_SIZE}px, ${GRID_SIZE}px ${GRID_SIZE}px`;
			body.style.backgroundPosition = "0 0, 0 0";
			body.style.backgroundRepeat = "repeat, repeat";
		};
	}, [snakeSegments, foodTiles, isSnakeActive]);

	return null;
};

export default BackgroundGrid;
