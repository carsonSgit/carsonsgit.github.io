import type React from "react";
import { useEffect, useRef, useCallback } from "react";
import type { FoodTile, SnakeSegment } from "../../../types/types";
import { classicThemeConfig } from "../../../core/types/theme";

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
	const highlightsRef = useRef<Map<string, { x: number; y: number; color: string; createdAt: number }>>(new Map());

	const { gridSize, decayMs, maxTiles, palette } = classicThemeConfig.grid;

	const shouldPrevent = useCallback(() => isSnakeActive, [isSnakeActive]);

	useEffect(() => {
		const highlights = highlightsRef.current;

		const makeKey = (x: number, y: number) => `${x},${y}`;

		const addHighlight = (pageX: number, pageY: number) => {
			const x = Math.floor(pageX / gridSize) * gridSize;
			const y = Math.floor(pageY / gridSize) * gridSize;
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
				if (highlights.size > maxTiles) {
					const sorted = Array.from(highlights.values()).sort(
						(a, b) => a.createdAt - b.createdAt,
					);
					for (let i = 0; i < sorted.length - maxTiles; i++) {
						highlights.delete(makeKey(sorted[i].x, sorted[i].y));
					}
				}
			}
		};

		const renderWithColors = () => {
			const now = Date.now();

			for (const [key, h] of highlights) {
				if (now - h.createdAt > decayMs) highlights.delete(key);
			}

			const tiles = Array.from(highlights.values());

			const hasSnake = snakeSegments.length > 0;
			const hasFood = foodTiles.length > 0;
			const hasHighlights = tiles.length > 0;

			if (!hasHighlights && !hasSnake && !hasFood) {
				const body = document.body;
				body.style.backgroundImage =
					"linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px), " +
					"linear-gradient(0deg, rgba(0,0,0,0.04) 1px, transparent 1px)";
				body.style.backgroundSize = `${gridSize}px ${gridSize}px, ${gridSize}px ${gridSize}px`;
				body.style.backgroundPosition = "0 0, 0 0";
				body.style.backgroundRepeat = "repeat, repeat";
				animationFrameRef.current = null;
				return;
			}

			const images = [
				...foodTiles.map(
					() => `linear-gradient(rgba(255, 0, 0, 0.6), rgba(255, 0, 0, 0.6))`,
				),
				...snakeSegments.map((s) => `linear-gradient(${s.color}, ${s.color})`),
				...tiles.map((t) => `linear-gradient(${t.color}, ${t.color})`),
				"linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
				"linear-gradient(0deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
			].join(",");

			const sizes = [
				...foodTiles.map(() => `${gridSize}px ${gridSize}px`),
				...snakeSegments.map(() => `${gridSize}px ${gridSize}px`),
				...tiles.map(() => `${gridSize}px ${gridSize}px`),
				`${gridSize}px ${gridSize}px`,
				`${gridSize}px ${gridSize}px`,
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
			if (shouldPrevent()) return;

			const target = e.target as HTMLElement;
			if (target.closest("[data-prevent-grid-highlight]")) return;

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
			body.style.backgroundSize = `${gridSize}px ${gridSize}px, ${gridSize}px ${gridSize}px`;
			body.style.backgroundPosition = "0 0, 0 0";
			body.style.backgroundRepeat = "repeat, repeat";
		};
	}, [snakeSegments, foodTiles, shouldPrevent, gridSize, decayMs, maxTiles, palette]);

	return null;
};

export default BackgroundGrid;
