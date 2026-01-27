import { useCallback, useEffect, useRef, useState } from "react";

interface UseVimNavigationOptions {
	containerRef: React.RefObject<HTMLElement | null>;
	disabled?: boolean;
}

const ZOOM_LEVELS = [0.8, 0.9, 1.0, 1.1, 1.2];
const ZOOM_DEFAULT_INDEX = 2;
const ZOOM_STORAGE_KEY = "mono-portfolio-zoom";

export function useVimNavigation({ containerRef, disabled = false }: UseVimNavigationOptions) {
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
		if (containerRef.current) {
			const scale = ZOOM_LEVELS[zoomIndex];
			containerRef.current.style.transform = scale === 1 ? "" : `scale(${scale})`;
		}
		localStorage.setItem(ZOOM_STORAGE_KEY, zoomIndex.toString());
	}, [zoomIndex, containerRef]);

	const getNavigationRows = useCallback((): HTMLElement[][] => {
		if (!containerRef.current) return [];
		const rows: HTMLElement[][] = [];

		const intro = containerRef.current.querySelector(".intro");
		if (intro) {
			const title = intro.querySelector("h1");
			const subtitle = intro.querySelector(".intro__subtitle");
			const about = intro.querySelector(".intro__about");
			const socialLinks = Array.from(
				intro.querySelectorAll<HTMLElement>(".intro__links .bracket-link")
			);

			if (title) rows.push([title as HTMLElement]);
			if (subtitle) rows.push([subtitle as HTMLElement]);
			if (about) rows.push([about as HTMLElement]);
			if (socialLinks.length > 0) rows.push(socialLinks);
		}

		const projectItems = containerRef.current.querySelectorAll<HTMLElement>(
			".section-list__item[role='listitem']"
		);
		for (const item of projectItems) {
			rows.push([item]);
		}

		const expEduItems = containerRef.current.querySelectorAll<HTMLElement>(
			"section:not(:first-child) .section-list__item[role='listitem']"
		);
		const existingItems = new Set(rows.flat());
		for (const item of expEduItems) {
			if (!existingItems.has(item)) {
				rows.push([item]);
			}
		}

		return rows;
	}, [containerRef]);

	const getSubgroupLinks = useCallback((): HTMLElement[] => {
		const active = document.activeElement as HTMLElement;
		const activePanel = active?.closest(".detail-panel--open");
		if (activePanel) {
			return Array.from(
				activePanel.querySelectorAll<HTMLElement>(".detail-panel__links a"),
			);
		}
		const openPanel = containerRef.current?.querySelector(".detail-panel--open");
		if (!openPanel) return [];
		return Array.from(
			openPanel.querySelectorAll<HTMLElement>(".detail-panel__links a"),
		);
	}, [containerRef]);

	const getCurrentPosition = useCallback((): { row: number; col: number } => {
		const rows = getNavigationRows();
		const active = document.activeElement as HTMLElement;

		for (let rowIdx = 0; rowIdx < rows.length; rowIdx++) {
			const colIdx = rows[rowIdx].indexOf(active);
			if (colIdx !== -1) {
				return { row: rowIdx, col: colIdx };
			}
		}
		return { row: -1, col: -1 };
	}, [getNavigationRows]);

	const focusElement = useCallback((element: HTMLElement) => {
		element.focus();
		element.scrollIntoView({ behavior: "smooth", block: "nearest" });
	}, []);

	const focusDown = useCallback(() => {
		const rows = getNavigationRows();
		const { row, col } = getCurrentPosition();

		if (row === -1) {
			if (rows.length > 0 && rows[0].length > 0) {
				focusElement(rows[0][0]);
			}
			return;
		}

		const nextRow = row < rows.length - 1 ? row + 1 : 0;
		const nextRowElements = rows[nextRow];
		const nextCol = Math.min(col, nextRowElements.length - 1);
		focusElement(nextRowElements[nextCol]);
	}, [getNavigationRows, getCurrentPosition, focusElement]);

	const focusUp = useCallback(() => {
		const rows = getNavigationRows();
		const { row, col } = getCurrentPosition();

		if (row === -1) {
			if (rows.length > 0) {
				const lastRow = rows[rows.length - 1];
				focusElement(lastRow[lastRow.length - 1]);
			}
			return;
		}

		const prevRow = row > 0 ? row - 1 : rows.length - 1;
		const prevRowElements = rows[prevRow];
		const prevCol = Math.min(col, prevRowElements.length - 1);
		focusElement(prevRowElements[prevCol]);
	}, [getNavigationRows, getCurrentPosition, focusElement]);

	const focusRight = useCallback(() => {
		const rows = getNavigationRows();
		const { row, col } = getCurrentPosition();

		if (row === -1) return;

		const currentRow = rows[row];
		if (col < currentRow.length - 1) {
			focusElement(currentRow[col + 1]);
		}
	}, [getNavigationRows, getCurrentPosition, focusElement]);

	const focusLeft = useCallback(() => {
		const rows = getNavigationRows();
		const { row, col } = getCurrentPosition();

		if (row === -1) return;

		const currentRow = rows[row];
		if (col > 0) {
			focusElement(currentRow[col - 1]);
		}
	}, [getNavigationRows, getCurrentPosition, focusElement]);

	const focusNextInSubgroup = useCallback(() => {
		const links = getSubgroupLinks();
		const active = document.activeElement as HTMLElement;
		const currentIdx = links.indexOf(active);
		if (currentIdx !== -1 && currentIdx < links.length - 1) {
			links[currentIdx + 1].focus();
		}
	}, [getSubgroupLinks]);

	const focusPrevInSubgroup = useCallback(() => {
		const links = getSubgroupLinks();
		const active = document.activeElement as HTMLElement;
		const currentIdx = links.indexOf(active);
		if (currentIdx > 0) {
			links[currentIdx - 1].focus();
		}
	}, [getSubgroupLinks]);


	const focusFirst = useCallback(() => {
		const rows = getNavigationRows();
		if (rows.length > 0 && rows[0].length > 0) {
			focusElement(rows[0][0]);
		}
	}, [getNavigationRows, focusElement]);

	const focusLast = useCallback(() => {
		const rows = getNavigationRows();
		if (rows.length > 0) {
			const lastRow = rows[rows.length - 1];
			focusElement(lastRow[lastRow.length - 1]);
		}
	}, [getNavigationRows, focusElement]);

	const zoomIn = useCallback(() => {
		setZoomIndex((prev) => Math.min(prev + 1, ZOOM_LEVELS.length - 1));
	}, []);

	const zoomOut = useCallback(() => {
		setZoomIndex((prev) => Math.max(prev - 1, 0));
	}, []);

	const isInSubgroupLink = useCallback((): boolean => {
		const active = document.activeElement as HTMLElement;
		return active?.closest(".detail-panel__links") !== null;
	}, []);

	const getParentListItem = useCallback((): HTMLElement | null => {
		const active = document.activeElement as HTMLElement;
		return active?.closest(".section-list__item") as HTMLElement | null;
	}, []);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (disabled) return;

			if (
				e.target instanceof HTMLInputElement ||
				e.target instanceof HTMLTextAreaElement
			) {
				return;
			}

			const now = Date.now();
			const isInContainer = containerRef.current?.contains(
				document.activeElement,
			);

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

			const active = document.activeElement as HTMLElement;
			const inSubgroupLink = isInSubgroupLink();

			if (inSubgroupLink) {
				switch (e.key) {
					case "l": {
						e.preventDefault();
						const links = getSubgroupLinks();
						const currentIdx = links.indexOf(active);
						if (currentIdx !== -1 && currentIdx < links.length - 1) {
							links[currentIdx + 1].focus();
						} else {
							const parentItem = getParentListItem();
							if (parentItem) {
								parentItem.click();
								parentItem.focus();
								setTimeout(() => focusDown(), 0);
							}
						}
						return;
					}
					case "j": {
						e.preventDefault();
						const links = getSubgroupLinks();
						const currentIdx = links.indexOf(active);
						if (currentIdx > 0) {
							links[currentIdx - 1].focus();
						} else {
							const parentItem = getParentListItem();
							if (parentItem) {
								parentItem.focus();
							}
						}
						return;
					}
					case "k": {
						e.preventDefault();
						const parentItem = getParentListItem();
						if (parentItem) {
							parentItem.click();
							parentItem.focus();
							setTimeout(() => focusDown(), 0);
						}
						return;
					}
					case "i": {
						e.preventDefault();
						const parentItem = getParentListItem();
						if (parentItem) {
							parentItem.click();
							parentItem.focus();
							setTimeout(() => focusUp(), 0);
						}
						return;
					}
					case "q":
					case "Escape": {
						e.preventDefault();
						const parentItem = getParentListItem();
						if (parentItem) {
							parentItem.click();
							parentItem.focus();
						}
						return;
					}
					case "Enter":
					case " ":
						return;
				}
			}

			switch (e.key) {
				case "k":
					e.preventDefault();
					if (active?.getAttribute("aria-expanded") === "true") {
						active.click();
					}
					focusDown();
					break;
				case "i":
					e.preventDefault();
					if (active?.getAttribute("aria-expanded") === "true") {
						active.click();
					}
					focusUp();
					break;
				case "l":
					if (isInContainer && active) {
						const isExpanded = active.getAttribute("aria-expanded") === "true";
						const isListItem = active.getAttribute("role") === "listitem";

						if (isListItem) {
							if (isExpanded) {
								e.preventDefault();
								const links = getSubgroupLinks();
								if (links.length > 0) {
									links[0].focus();
								} else {
									active.click();
									focusDown();
								}
							} else {
								e.preventDefault();
								active.click();
							}
						} else {
							e.preventDefault();
							focusRight();
						}
					}
					break;
				case "j":
					if (isInContainer && active) {
						const isExpanded = active.getAttribute("aria-expanded") === "true";
						const isListItem = active.getAttribute("role") === "listitem";

						if (isListItem && isExpanded) {
							e.preventDefault();
							active.click();
						} else if (!isListItem) {
							e.preventDefault();
							focusLeft();
						}
					}
					break;
				case "q":
				case "Escape":
					if (isInContainer && active) {
						if (active.getAttribute("aria-expanded") === "true") {
							e.preventDefault();
							active.click();
						}
					}
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
				default:
					if (e.key >= "1" && e.key <= "4") {
						e.preventDefault();
						const sectionIndex = Number.parseInt(e.key) - 1;
						const sections = containerRef.current?.querySelectorAll("section");
						if (sections && sections[sectionIndex]) {
							const section = sections[sectionIndex];
							section.scrollIntoView({ behavior: "smooth", block: "start" });
							const firstFocusable = section.querySelector<HTMLElement>(
								'[tabindex="0"], a[href]'
							);
							firstFocusable?.focus();
						}
					}
			}

			if (e.key !== "g") {
				lastKeyRef.current = e.key;
				lastKeyTimeRef.current = now;
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [
		containerRef,
		disabled,
		focusDown,
		focusUp,
		focusLeft,
		focusRight,
		focusFirst,
		focusLast,
		focusNextInSubgroup,
		focusPrevInSubgroup,
		getSubgroupLinks,
		isInSubgroupLink,
		getParentListItem,
		zoomIn,
		zoomOut,
	]);
}
