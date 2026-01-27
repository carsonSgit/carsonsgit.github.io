import { useCallback, useEffect, useRef, useState } from "react";

export interface KeyboardNavOptions {
	containerRef: React.RefObject<HTMLElement | null>;
	disabled?: boolean;
	enableZoom?: boolean;
	enableVimBindings?: boolean;
}

export interface KeyboardNavReturn {
	zoomLevel: number;
	zoomIn: () => void;
	zoomOut: () => void;
	focusDown: () => void;
	focusUp: () => void;
	focusLeft: () => void;
	focusRight: () => void;
	focusFirst: () => void;
	focusLast: () => void;
}

const ZOOM_LEVELS = [0.8, 0.9, 1.0, 1.1, 1.2];
const ZOOM_DEFAULT_INDEX = 2;
const ZOOM_STORAGE_KEY = "portfolio-zoom";

/**
 * Base keyboard navigation hook
 * Provides common keyboard navigation functionality that can be extended by themes
 */
export function useKeyboardNav({
	containerRef,
	disabled = false,
	enableZoom = true,
	enableVimBindings = false,
}: KeyboardNavOptions): KeyboardNavReturn {
	const lastKeyRef = useRef<string>("");
	const lastKeyTimeRef = useRef<number>(0);

	// Zoom state
	const [zoomIndex, setZoomIndex] = useState<number>(() => {
		if (typeof window === "undefined") return ZOOM_DEFAULT_INDEX;
		const stored = localStorage.getItem(ZOOM_STORAGE_KEY);
		if (stored) {
			const parsed = Number.parseInt(stored, 10);
			if (parsed >= 0 && parsed < ZOOM_LEVELS.length) {
				return parsed;
			}
		}
		return ZOOM_DEFAULT_INDEX;
	});

	// Apply zoom on mount and when zoomIndex changes
	useEffect(() => {
		if (enableZoom && containerRef.current) {
			const scale = ZOOM_LEVELS[zoomIndex];
			containerRef.current.style.transform = scale === 1 ? "" : `scale(${scale})`;
		}
		localStorage.setItem(ZOOM_STORAGE_KEY, zoomIndex.toString());
	}, [enableZoom, zoomIndex, containerRef]);

	const focusElement = useCallback((element: HTMLElement) => {
		element.focus();
		element.scrollIntoView({ behavior: "smooth", block: "nearest" });
	}, []);

	const getNavigationElements = useCallback((): HTMLElement[] => {
		if (!containerRef.current) return [];
		return Array.from(
			containerRef.current.querySelectorAll<HTMLElement>(
				'[tabindex="0"], a[href], button:not([disabled]), [role="listitem"]'
			)
		);
	}, [containerRef]);

	const getCurrentIndex = useCallback((): number => {
		const elements = getNavigationElements();
		const active = document.activeElement as HTMLElement;
		return elements.indexOf(active);
	}, [getNavigationElements]);

	const focusDown = useCallback(() => {
		const elements = getNavigationElements();
		const currentIdx = getCurrentIndex();
		const nextIdx = currentIdx < elements.length - 1 ? currentIdx + 1 : 0;
		if (elements[nextIdx]) {
			focusElement(elements[nextIdx]);
		}
	}, [getNavigationElements, getCurrentIndex, focusElement]);

	const focusUp = useCallback(() => {
		const elements = getNavigationElements();
		const currentIdx = getCurrentIndex();
		const prevIdx = currentIdx > 0 ? currentIdx - 1 : elements.length - 1;
		if (elements[prevIdx]) {
			focusElement(elements[prevIdx]);
		}
	}, [getNavigationElements, getCurrentIndex, focusElement]);

	const focusLeft = useCallback(() => {
		// Default implementation - can be overridden by theme
		focusUp();
	}, [focusUp]);

	const focusRight = useCallback(() => {
		// Default implementation - can be overridden by theme
		focusDown();
	}, [focusDown]);

	const focusFirst = useCallback(() => {
		const elements = getNavigationElements();
		if (elements.length > 0) {
			focusElement(elements[0]);
		}
	}, [getNavigationElements, focusElement]);

	const focusLast = useCallback(() => {
		const elements = getNavigationElements();
		if (elements.length > 0) {
			focusElement(elements[elements.length - 1]);
		}
	}, [getNavigationElements, focusElement]);

	const zoomIn = useCallback(() => {
		setZoomIndex((prev) => Math.min(prev + 1, ZOOM_LEVELS.length - 1));
	}, []);

	const zoomOut = useCallback(() => {
		setZoomIndex((prev) => Math.max(prev - 1, 0));
	}, []);

	// Basic keyboard handling
	useEffect(() => {
		if (disabled) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (
				e.target instanceof HTMLInputElement ||
				e.target instanceof HTMLTextAreaElement
			) {
				return;
			}

			const now = Date.now();

			// Zoom controls (always enabled if enableZoom)
			if (enableZoom) {
				if (e.key === "+" || e.key === "=") {
					e.preventDefault();
					zoomIn();
					return;
				}
				if (e.key === "-") {
					e.preventDefault();
					zoomOut();
					return;
				}
			}

			// Basic vim-like navigation (if enabled)
			if (enableVimBindings) {
				switch (e.key) {
					case "j":
					case "k":
						e.preventDefault();
						e.key === "j" ? focusDown() : focusUp();
						break;
					case "h":
						e.preventDefault();
						focusLeft();
						break;
					case "l":
						e.preventDefault();
						focusRight();
						break;
					case "g":
						if (lastKeyRef.current === "g" && now - lastKeyTimeRef.current < 500) {
							e.preventDefault();
							focusFirst();
							window.scrollTo({ top: 0, behavior: "smooth" });
							lastKeyRef.current = "";
							return;
						}
						lastKeyRef.current = "g";
						lastKeyTimeRef.current = now;
						return;
					case "G":
						e.preventDefault();
						focusLast();
						window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
						break;
				}
			}

			// Arrow key navigation (always enabled)
			switch (e.key) {
				case "ArrowDown":
					e.preventDefault();
					focusDown();
					break;
				case "ArrowUp":
					e.preventDefault();
					focusUp();
					break;
				case "ArrowLeft":
					e.preventDefault();
					focusLeft();
					break;
				case "ArrowRight":
					e.preventDefault();
					focusRight();
					break;
				case "Home":
					e.preventDefault();
					focusFirst();
					break;
				case "End":
					e.preventDefault();
					focusLast();
					break;
			}

			if (e.key !== "g") {
				lastKeyRef.current = e.key;
				lastKeyTimeRef.current = now;
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [
		disabled,
		enableZoom,
		enableVimBindings,
		focusDown,
		focusUp,
		focusLeft,
		focusRight,
		focusFirst,
		focusLast,
		zoomIn,
		zoomOut,
	]);

	return {
		zoomLevel: ZOOM_LEVELS[zoomIndex],
		zoomIn,
		zoomOut,
		focusDown,
		focusUp,
		focusLeft,
		focusRight,
		focusFirst,
		focusLast,
	};
}

export default useKeyboardNav;
