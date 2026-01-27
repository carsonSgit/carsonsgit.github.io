import { useEffect, useRef, useCallback, type RefObject } from "react";
import type { GridConfig } from "../types/theme";

export interface GridHighlight {
	x: number;
	y: number;
	color: string;
	createdAt: number;
}

export interface UseGridHighlightOptions extends Partial<GridConfig> {
	enabled?: boolean;
	renderMode?: "canvas" | "dom";
	canvasRef?: RefObject<HTMLCanvasElement | null>;
	/** Callback to check if highlight should be prevented (e.g., during snake game) */
	shouldPrevent?: () => boolean;
}

const DEFAULT_OPTIONS: Required<Omit<UseGridHighlightOptions, "canvasRef" | "shouldPrevent">> = {
	gridSize: 60,
	decayMs: 1200,
	maxTiles: 50,
	palette: [
		"rgba(167, 139, 250, 0.35)",
		"rgba(94, 234, 212, 0.35)",
		"rgba(147, 197, 253, 0.35)",
	],
	enabled: true,
	renderMode: "canvas",
};

/**
 * Shared hook for grid hover highlight effects
 * Used by BackgroundGrid (V1 - DOM mode) and MonoPortfolio (V2 - Canvas mode)
 */
export function useGridHighlight(options: UseGridHighlightOptions = {}) {
	const {
		gridSize = DEFAULT_OPTIONS.gridSize,
		decayMs = DEFAULT_OPTIONS.decayMs,
		maxTiles = DEFAULT_OPTIONS.maxTiles,
		palette = DEFAULT_OPTIONS.palette,
		enabled = DEFAULT_OPTIONS.enabled,
		renderMode = DEFAULT_OPTIONS.renderMode,
		canvasRef,
		shouldPrevent,
	} = options;

	const highlightsRef = useRef<Map<string, GridHighlight>>(new Map());
	const animationFrameRef = useRef<number | null>(null);

	const makeKey = useCallback((x: number, y: number) => `${x},${y}`, []);

	const getRandomColor = useCallback(
		() => palette[Math.floor(Math.random() * palette.length)],
		[palette]
	);

	const addHighlight = useCallback(
		(pageX: number, pageY: number) => {
			const x = Math.floor(pageX / gridSize) * gridSize;
			const y = Math.floor(pageY / gridSize) * gridSize;
			const key = makeKey(x, y);
			const now = Date.now();
			const highlights = highlightsRef.current;

			const existing = highlights.get(key);
			if (existing) {
				existing.createdAt = now;
			} else {
				highlights.set(key, { x, y, color: getRandomColor(), createdAt: now });
				if (highlights.size > maxTiles) {
					const sorted = Array.from(highlights.entries()).sort(
						(a, b) => a[1].createdAt - b[1].createdAt
					);
					for (let i = 0; i < sorted.length - maxTiles; i++) {
						highlights.delete(sorted[i][0]);
					}
				}
			}
		},
		[gridSize, maxTiles, makeKey, getRandomColor]
	);

	// Canvas rendering function
	const renderCanvas = useCallback(() => {
		const canvas = canvasRef?.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const now = Date.now();
		const highlights = highlightsRef.current;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		let hasActive = false;
		for (const [key, h] of highlights) {
			const age = now - h.createdAt;
			if (age > decayMs) {
				highlights.delete(key);
			} else {
				hasActive = true;
				const opacity = Math.max(0, 1 - age / decayMs);
				const baseColor = h.color.replace(/[\d.]+\)$/, `${opacity * 0.35})`);
				ctx.fillStyle = baseColor;
				ctx.fillRect(h.x, h.y, gridSize, gridSize);
			}
		}

		if (hasActive) {
			animationFrameRef.current = requestAnimationFrame(renderCanvas);
		} else {
			animationFrameRef.current = null;
		}
	}, [canvasRef, decayMs, gridSize]);

	// DOM rendering function (for V1 BackgroundGrid)
	const renderDom = useCallback(
		(
			snakeSegments: { x: number; y: number; color: string }[] = [],
			foodTiles: { x: number; y: number }[] = []
		) => {
			const now = Date.now();
			const highlights = highlightsRef.current;

			for (const [key, h] of highlights) {
				if (now - h.createdAt > decayMs) {
					highlights.delete(key);
				}
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
					() => `linear-gradient(rgba(255, 0, 0, 0.6), rgba(255, 0, 0, 0.6))`
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

			animationFrameRef.current = requestAnimationFrame(() =>
				renderDom(snakeSegments, foodTiles)
			);
		},
		[decayMs, gridSize]
	);

	// Start rendering loop based on mode
	const startRender = useCallback(
		(
			snakeSegments?: { x: number; y: number; color: string }[],
			foodTiles?: { x: number; y: number }[]
		) => {
			if (animationFrameRef.current === null) {
				if (renderMode === "canvas") {
					animationFrameRef.current = requestAnimationFrame(renderCanvas);
				} else {
					animationFrameRef.current = requestAnimationFrame(() =>
						renderDom(snakeSegments, foodTiles)
					);
				}
			}
		},
		[renderMode, renderCanvas, renderDom]
	);

	// Mouse move handler
	useEffect(() => {
		if (!enabled) return;

		const onMouseMove = (e: MouseEvent) => {
			if (shouldPrevent?.()) return;

			const target = e.target as HTMLElement;
			if (target.closest("[data-prevent-grid-highlight]")) return;

			addHighlight(e.pageX, e.pageY);
			startRender();
		};

		window.addEventListener("mousemove", onMouseMove, { passive: true });

		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			if (animationFrameRef.current !== null) {
				cancelAnimationFrame(animationFrameRef.current);
				animationFrameRef.current = null;
			}
		};
	}, [enabled, shouldPrevent, addHighlight, startRender]);

	// Canvas resize handler
	useEffect(() => {
		if (renderMode !== "canvas" || !canvasRef?.current) return;

		const canvas = canvasRef.current;

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

		return () => {
			window.removeEventListener("resize", resizeCanvas);
		};
	}, [renderMode, canvasRef]);

	// Cleanup DOM styles on unmount (for DOM mode)
	useEffect(() => {
		if (renderMode !== "dom") return;

		return () => {
			const body = document.body;
			body.style.backgroundImage =
				`linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px), ` +
				`linear-gradient(0deg, rgba(0,0,0,0.04) 1px, transparent 1px)`;
			body.style.backgroundSize = `${gridSize}px ${gridSize}px, ${gridSize}px ${gridSize}px`;
			body.style.backgroundPosition = "0 0, 0 0";
			body.style.backgroundRepeat = "repeat, repeat";
		};
	}, [renderMode, gridSize]);

	return {
		highlightsRef,
		addHighlight,
		startRender,
		renderDom,
		renderCanvas,
	};
}

export default useGridHighlight;
