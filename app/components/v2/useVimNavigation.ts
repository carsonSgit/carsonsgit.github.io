import { useCallback, useEffect, useRef, useState } from "react";

interface UseVimNavigationOptions {
	containerRef: React.RefObject<HTMLElement | null>;
	disabled?: boolean;
}

// Zoom configuration
const ZOOM_LEVELS = [0.8, 0.9, 1.0, 1.1, 1.2];
const ZOOM_DEFAULT_INDEX = 2; // 1.0
const ZOOM_STORAGE_KEY = "mono-portfolio-zoom";

// Navigation structure:
// - i/k: vertical navigation (up/down between rows)
// - j/l: horizontal navigation (left/right within a row)
// Rows are: title -> subtitle -> body -> social links row -> projects row...

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

	// Get navigable rows - each row is an array of elements
	// Row structure: [title], [subtitle], [body], [github, linkedin, email], [project1], [project2]...
	const getNavigationRows = useCallback((): HTMLElement[][] => {
		if (!containerRef.current) return [];
		const rows: HTMLElement[][] = [];

		// Intro section elements
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

		// Project items - each project is its own row
		const projectItems = containerRef.current.querySelectorAll<HTMLElement>(
			".section-list__item[role='listitem']"
		);
		for (const item of projectItems) {
			rows.push([item]);
		}

		// Experience and Education items
		const expEduItems = containerRef.current.querySelectorAll<HTMLElement>(
			"section:not(:first-child) .section-list__item[role='listitem']"
		);
		// Only add items not already in rows (avoid duplicates from projects)
		const existingItems = new Set(rows.flat());
		for (const item of expEduItems) {
			if (!existingItems.has(item)) {
				rows.push([item]);
			}
		}

		return rows;
	}, [containerRef]);

	const getSubgroupLinks = useCallback((): HTMLElement[] => {
		// Get links within the detail panel that contains the currently focused element
		// or the currently open detail panel
		const active = document.activeElement as HTMLElement;
		const activePanel = active?.closest(".detail-panel--open");
		if (activePanel) {
			return Array.from(
				activePanel.querySelectorAll<HTMLElement>(".detail-panel__links a"),
			);
		}
		// Fallback to any open panel
		const openPanel = containerRef.current?.querySelector(".detail-panel--open");
		if (!openPanel) return [];
		return Array.from(
			openPanel.querySelectorAll<HTMLElement>(".detail-panel__links a"),
		);
	}, [containerRef]);

	// Find current position in the navigation grid
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

	// Move down (k key)
	const focusDown = useCallback(() => {
		const rows = getNavigationRows();
		const { row, col } = getCurrentPosition();

		if (row === -1) {
			// Not focused, focus first element
			if (rows.length > 0 && rows[0].length > 0) {
				focusElement(rows[0][0]);
			}
			return;
		}

		const nextRow = row < rows.length - 1 ? row + 1 : 0;
		const nextRowElements = rows[nextRow];
		// Try to maintain column position, or use last element in row
		const nextCol = Math.min(col, nextRowElements.length - 1);
		focusElement(nextRowElements[nextCol]);
	}, [getNavigationRows, getCurrentPosition, focusElement]);

	// Move up (i key)
	const focusUp = useCallback(() => {
		const rows = getNavigationRows();
		const { row, col } = getCurrentPosition();

		if (row === -1) {
			// Not focused, focus last element
			if (rows.length > 0) {
				const lastRow = rows[rows.length - 1];
				focusElement(lastRow[lastRow.length - 1]);
			}
			return;
		}

		const prevRow = row > 0 ? row - 1 : rows.length - 1;
		const prevRowElements = rows[prevRow];
		// Try to maintain column position, or use last element in row
		const prevCol = Math.min(col, prevRowElements.length - 1);
		focusElement(prevRowElements[prevCol]);
	}, [getNavigationRows, getCurrentPosition, focusElement]);

	// Move right (l key) - within row or expand/enter subgroup
	const focusRight = useCallback(() => {
		const rows = getNavigationRows();
		const { row, col } = getCurrentPosition();

		if (row === -1) return;

		const currentRow = rows[row];
		if (col < currentRow.length - 1) {
			// Move to next element in same row
			focusElement(currentRow[col + 1]);
		}
		// If at end of row and it's a project item, the caller handles expansion
	}, [getNavigationRows, getCurrentPosition, focusElement]);

	// Move left (j key) - within row
	const focusLeft = useCallback(() => {
		const rows = getNavigationRows();
		const { row, col } = getCurrentPosition();

		if (row === -1) return;

		const currentRow = rows[row];
		if (col > 0) {
			// Move to previous element in same row
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

	// Check if focus is currently inside a subgroup link
	const isInSubgroupLink = useCallback((): boolean => {
		const active = document.activeElement as HTMLElement;
		return active?.closest(".detail-panel__links") !== null;
	}, []);

	// Get the parent list item of a subgroup link
	const getParentListItem = useCallback((): HTMLElement | null => {
		const active = document.activeElement as HTMLElement;
		return active?.closest(".section-list__item") as HTMLElement | null;
	}, []);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			// Don't capture keys if navigation is disabled (e.g., modal open)
			if (disabled) return;

			// Don't capture keys if focus is on an input
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

			// Handle zoom keys globally
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

			// Handle navigation when focused on a subgroup link (inside dropdown)
			if (inSubgroupLink) {
				switch (e.key) {
					case "l": {
						// Move right within subgroup links, or exit to next project if at last link
						e.preventDefault();
						const links = getSubgroupLinks();
						const currentIdx = links.indexOf(active);
						if (currentIdx !== -1 && currentIdx < links.length - 1) {
							// Move to next link
							links[currentIdx + 1].focus();
						} else {
							// At last link (or only link), close dropdown and move to next project
							const parentItem = getParentListItem();
							if (parentItem) {
								parentItem.click(); // Close dropdown
								parentItem.focus();
								setTimeout(() => focusDown(), 0);
							}
						}
						return;
					}
					case "j": {
						// Move left within subgroup links, or back to parent item if at first link
						e.preventDefault();
						const links = getSubgroupLinks();
						const currentIdx = links.indexOf(active);
						if (currentIdx > 0) {
							// Move to previous link
							links[currentIdx - 1].focus();
						} else {
							// At first link, go back to parent item (keep dropdown open)
							const parentItem = getParentListItem();
							if (parentItem) {
								parentItem.focus();
							}
						}
						return;
					}
					case "k": {
						// Move down: close dropdown and go to next project
						e.preventDefault();
						const parentItem = getParentListItem();
						if (parentItem) {
							parentItem.click(); // Close dropdown
							parentItem.focus();
							setTimeout(() => focusDown(), 0);
						}
						return;
					}
					case "i": {
						// Move up: close dropdown and go to previous project
						e.preventDefault();
						const parentItem = getParentListItem();
						if (parentItem) {
							parentItem.click(); // Close dropdown
							parentItem.focus();
							setTimeout(() => focusUp(), 0);
						}
						return;
					}
					case "q":
					case "Escape": {
						// Escape: close dropdown and return to parent item
						e.preventDefault();
						const parentItem = getParentListItem();
						if (parentItem) {
							parentItem.click(); // Close dropdown
							parentItem.focus();
						}
						return;
					}
					case "Enter":
					case " ":
						// Let the link handle its own click
						return;
				}
			}

			// Global vim navigation (i=up, k=down, j=left, l=right)
			switch (e.key) {
				case "k":
					// Move down to next row (closes any expanded dropdown first)
					e.preventDefault();
					if (active?.getAttribute("aria-expanded") === "true") {
						active.click(); // Close dropdown
					}
					focusDown();
					break;
				case "i":
					// Move up to previous row (closes any expanded dropdown first)
					e.preventDefault();
					if (active?.getAttribute("aria-expanded") === "true") {
						active.click(); // Close dropdown
					}
					focusUp();
					break;
				case "l":
					// Move right or expand/enter dropdown
					if (isInContainer && active) {
						const isExpanded = active.getAttribute("aria-expanded") === "true";
						const isListItem = active.getAttribute("role") === "listitem";

						if (isListItem) {
							if (isExpanded) {
								// Already expanded, enter subgroup (focus first link)
								e.preventDefault();
								const links = getSubgroupLinks();
								if (links.length > 0) {
									links[0].focus();
								} else {
									// No links, close and move to next project
									active.click();
									focusDown();
								}
							} else {
								// Expand the project item
								e.preventDefault();
								active.click();
							}
						} else {
							// Move right within horizontal row (e.g., social links)
							e.preventDefault();
							focusRight();
						}
					}
					break;
				case "j":
					// Move left or close dropdown
					if (isInContainer && active) {
						const isExpanded = active.getAttribute("aria-expanded") === "true";
						const isListItem = active.getAttribute("role") === "listitem";

						if (isListItem && isExpanded) {
							// Close the expanded item
							e.preventDefault();
							active.click();
						} else if (!isListItem) {
							// Move left within horizontal row
							e.preventDefault();
							focusLeft();
						}
					}
					break;
				case "q":
				case "Escape":
					// Close any expanded dropdown when on the list item
					if (isInContainer && active) {
						if (active.getAttribute("aria-expanded") === "true") {
							e.preventDefault();
							active.click();
						}
					}
					break;
				case "g":
					// gg to go to top/first item
					if (
						lastKeyRef.current === "g" &&
						now - lastKeyTimeRef.current < 500
					) {
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
					// G to go to bottom/last item
					e.preventDefault();
					focusLast();
					window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
					break;
				default:
					// Number keys 1-4 jump to sections
					if (e.key >= "1" && e.key <= "4") {
						e.preventDefault();
						const sectionIndex = Number.parseInt(e.key) - 1;
						const sections =
							containerRef.current?.querySelectorAll("section");
						if (sections && sections[sectionIndex]) {
							const section = sections[sectionIndex];
							section.scrollIntoView({ behavior: "smooth", block: "start" });
							const firstFocusable = section.querySelector<HTMLElement>(
								'[tabindex="0"], a[href]',
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
