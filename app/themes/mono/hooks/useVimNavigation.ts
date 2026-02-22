import { useCallback, useEffect, useRef } from "react";

interface UseVimNavigationOptions {
	containerRef: React.RefObject<HTMLElement | null>;
	disabled?: boolean;
}

export function useVimNavigation({
	containerRef,
	disabled = false,
}: UseVimNavigationOptions) {
	const lastKeyRef = useRef<string>("");
	const lastKeyTimeRef = useRef<number>(0);

	const getNavigationRows = useCallback((): HTMLElement[][] => {
		if (!containerRef.current) return [];
		const rows: HTMLElement[][] = [];

		const intro = containerRef.current.querySelector(".intro");
		if (intro) {
			const title = intro.querySelector("h1");
			const subtitle = intro.querySelector(".intro__subtitle");
			const about = intro.querySelector(".intro__about");
			const socialLinks = Array.from(
				intro.querySelectorAll<HTMLElement>(".intro__links .bracket-link"),
			);

			if (title) rows.push([title as HTMLElement]);
			if (subtitle) rows.push([subtitle as HTMLElement]);
			if (about) rows.push([about as HTMLElement]);
			if (socialLinks.length > 0) rows.push(socialLinks);
		}

		const allTriggers = containerRef.current.querySelectorAll<HTMLElement>(
			".section-list__trigger",
		);
		for (const trigger of allTriggers) {
			rows.push([trigger]);
		}

		return rows;
	}, [containerRef]);

	const getSubgroupLinks = useCallback((): HTMLElement[] => {
		const active = document.activeElement as HTMLElement;
		const activePanel = active?.closest(".detail-panel[data-open]");
		if (activePanel) {
			return Array.from(
				activePanel.querySelectorAll<HTMLElement>(".detail-panel__links a"),
			);
		}
		const openPanel = containerRef.current?.querySelector(
			".detail-panel[data-open]",
		);
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
				const lastRow = rows.at(-1);
				if (lastRow && lastRow.length > 0) {
					focusElement(lastRow.at(-1)!);
				}
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

		if (row === -1) {
			if (rows.length > 0 && rows[0].length > 0) {
				focusElement(rows[0][0]);
			}
			return;
		}

		const currentRow = rows[row];
		if (col < currentRow.length - 1) {
			// Move right within current row
			focusElement(currentRow[col + 1]);
		} else if (row < rows.length - 1) {
			// At end of row, wrap to start of next row
			focusElement(rows[row + 1][0]);
		} else {
			// At end of last row, wrap to start of first row
			focusElement(rows[0][0]);
		}
	}, [getNavigationRows, getCurrentPosition, focusElement]);

	const focusLeft = useCallback(() => {
		const rows = getNavigationRows();
		const { row, col } = getCurrentPosition();

		if (row === -1) {
			if (rows.length > 0) {
				const lastRow = rows.at(-1);
				if (lastRow && lastRow.length > 0) {
					focusElement(lastRow.at(-1)!);
				}
			}
			return;
		}

		const currentRow = rows[row];
		if (col > 0) {
			// Move left within current row
			focusElement(currentRow[col - 1]);
		} else if (row > 0) {
			// At start of row, wrap to end of previous row
			const prevRow = rows[row - 1];
			focusElement(prevRow.at(-1)!);
		} else {
			// At start of first row, wrap to end of last row
			const lastRow = rows.at(-1);
			if (lastRow) {
				focusElement(lastRow.at(-1)!);
			}
		}
	}, [getNavigationRows, getCurrentPosition, focusElement]);

	const focusFirst = useCallback(() => {
		const rows = getNavigationRows();
		if (rows.length > 0 && rows[0].length > 0) {
			focusElement(rows[0][0]);
		}
	}, [getNavigationRows, focusElement]);

	const focusLast = useCallback(() => {
		const rows = getNavigationRows();
		if (rows.length > 0) {
			const lastRow = rows.at(-1);
			if (lastRow) {
				focusElement(lastRow.at(-1)!);
			}
		}
	}, [getNavigationRows, focusElement]);

	const isInSubgroupLink = useCallback((): boolean => {
		const active = document.activeElement as HTMLElement;
		return active?.closest(".detail-panel__links") !== null;
	}, []);

	const getParentTrigger = useCallback((): HTMLElement | null => {
		const active = document.activeElement as HTMLElement;
		// First check if we're in a detail panel, then find the associated trigger
		const panel = active?.closest(".detail-panel");
		if (panel) {
			const item = panel.closest(".section-list__item");
			return item?.querySelector(
				".section-list__trigger",
			) as HTMLElement | null;
		}
		return active?.closest(".section-list__trigger");
	}, []);

	// Key mapping constants
	const DOWN_KEYS = new Set(["k", "s", "ArrowDown"]);
	const UP_KEYS = new Set(["i", "w", "ArrowUp"]);
	const RIGHT_KEYS = new Set(["l", "d", "ArrowRight"]);
	const LEFT_KEYS = new Set(["j", "a", "ArrowLeft"]);

	// Helper function for parent trigger actions
	const handleParentTriggerAction = useCallback(
		(action: "focus" | "click" | "clickAndFocus", then?: () => void) => {
			const parentItem = getParentTrigger();
			if (parentItem) {
				if (action === "click" || action === "clickAndFocus") {
					parentItem.click();
				}
				if (action === "focus" || action === "clickAndFocus") {
					parentItem.focus();
				}
				if (then) {
					setTimeout(then, 0);
				}
			}
		},
		[getParentTrigger],
	);

	// Handle section navigation (number keys 1-4)
	const handleSectionNavigation = useCallback(
		(key: string) => {
			if (key >= "1" && key <= "4") {
				const sectionIndex = Number.parseInt(key, 10) - 1;
				const sections = containerRef.current?.querySelectorAll("section");
				if (sections?.[sectionIndex]) {
					const section = sections[sectionIndex];
					section.scrollIntoView({ behavior: "smooth", block: "start" });
					const firstFocusable = section.querySelector<HTMLElement>(
						'[tabindex="0"], a[href]',
					);
					firstFocusable?.focus();
				}
			}
		},
		[containerRef],
	);

	// Handle double-key sequence (gg for focusFirst)
	const handleDoubleKeySequence = useCallback(
		(key: string, now: number): boolean => {
			if (key === "g") {
				if (
					lastKeyRef.current === "g" &&
					now - lastKeyTimeRef.current < 500
				) {
					focusFirst();
					window.scrollTo({ top: 0, behavior: "smooth" });
					lastKeyRef.current = "";
					return true;
				}
				lastKeyRef.current = "g";
				lastKeyTimeRef.current = now;
				return true;
			}
			return false;
		},
		[focusFirst],
	);

	// Handle subgroup link navigation
	const handleSubgroupLinkKey = useCallback(
		(e: KeyboardEvent): boolean => {
			const active = document.activeElement as HTMLElement;

			if (RIGHT_KEYS.has(e.key)) {
				e.preventDefault();
				const links = getSubgroupLinks();
				const currentIdx = links.indexOf(active);
				if (currentIdx !== -1 && currentIdx < links.length - 1) {
					links[currentIdx + 1].focus();
				} else {
					handleParentTriggerAction("clickAndFocus", focusDown);
				}
				return true;
			}

			if (LEFT_KEYS.has(e.key)) {
				e.preventDefault();
				const links = getSubgroupLinks();
				const currentIdx = links.indexOf(active);
				if (currentIdx > 0) {
					links[currentIdx - 1].focus();
				} else {
					handleParentTriggerAction("focus");
				}
				return true;
			}

			if (DOWN_KEYS.has(e.key)) {
				e.preventDefault();
				handleParentTriggerAction("clickAndFocus", focusDown);
				return true;
			}

			if (UP_KEYS.has(e.key)) {
				e.preventDefault();
				handleParentTriggerAction("clickAndFocus", focusUp);
				return true;
			}

			if (e.key === "q" || e.key === "Escape") {
				e.preventDefault();
				handleParentTriggerAction("clickAndFocus");
				return true;
			}

			if (e.key === "Enter" || e.key === " ") {
				return true;
			}

			return false;
		},
		[getSubgroupLinks, handleParentTriggerAction, focusDown, focusUp],
	);

	// Handle main navigation keys
	const handleMainNavigationKey = useCallback(
		(e: KeyboardEvent, isInContainer: boolean, active: HTMLElement) => {
			if (DOWN_KEYS.has(e.key)) {
				e.preventDefault();
				focusDown();
				return;
			}

			if (UP_KEYS.has(e.key)) {
				e.preventDefault();
				focusUp();
				return;
			}

			if (RIGHT_KEYS.has(e.key)) {
				e.preventDefault();
				if (isInContainer && active) {
					const isExpanded = active.getAttribute("aria-expanded") === "true";
					const isTrigger = active.classList.contains("section-list__trigger");

					if (isTrigger) {
						if (isExpanded) {
							const links = getSubgroupLinks();
							if (links.length > 0) {
								links[0].focus();
							} else {
								active.click();
								focusDown();
							}
						} else {
							active.click();
						}
					} else {
						focusRight();
					}
				} else {
					focusRight();
				}
				return;
			}

			if (LEFT_KEYS.has(e.key)) {
				e.preventDefault();
				if (isInContainer && active) {
					const isExpanded = active.getAttribute("aria-expanded") === "true";
					const isTrigger = active.classList.contains("section-list__trigger");

					if (isTrigger && isExpanded) {
						active.click();
					} else {
						focusLeft();
					}
				} else {
					focusLeft();
				}
				return;
			}

			if (e.key === "q" || e.key === "Escape") {
				if (isInContainer && active) {
					if (active.getAttribute("aria-expanded") === "true") {
						e.preventDefault();
						active.click();
					}
				}
				return;
			}

			if (e.key === "G" || e.key === "End") {
				e.preventDefault();
				focusLast();
				window.scrollTo({
					top: document.body.scrollHeight,
					behavior: "smooth",
				});
				return;
			}

			if (e.key === "Home") {
				e.preventDefault();
				focusFirst();
				window.scrollTo({ top: 0, behavior: "smooth" });
				return;
			}

			handleSectionNavigation(e.key);
		},
		[
			focusDown,
			focusUp,
			focusRight,
			focusLeft,
			focusFirst,
			focusLast,
			getSubgroupLinks,
			handleSectionNavigation,
		],
	);

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
			const isInContainer: boolean =
				containerRef.current?.contains(document.activeElement) ?? false;
			const active = document.activeElement as HTMLElement;

			// Handle subgroup link navigation
			if (isInSubgroupLink()) {
				if (handleSubgroupLinkKey(e)) {
					if (e.key !== "g") {
						lastKeyRef.current = e.key;
						lastKeyTimeRef.current = now;
					}
					return;
				}
			}

			// Handle double-key sequence (gg)
			if (handleDoubleKeySequence(e.key, now)) {
				return;
			}

			// Handle main navigation
			handleMainNavigationKey(e, isInContainer, active);

			// Update key tracking
			if (e.key !== "g") {
				lastKeyRef.current = e.key;
				lastKeyTimeRef.current = now;
			}
		};

		globalThis.addEventListener("keydown", handleKeyDown);
		return () => globalThis.removeEventListener("keydown", handleKeyDown);
	}, [
		disabled,
		containerRef,
		isInSubgroupLink,
		handleSubgroupLinkKey,
		handleDoubleKeySequence,
		handleMainNavigationKey,
	]);
}
