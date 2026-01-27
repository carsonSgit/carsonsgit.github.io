import { useState, useCallback, type KeyboardEvent } from "react";

export interface UseExpandableListOptions {
	defaultExpandedIndex?: number;
	allowMultiple?: boolean;
}

export interface UseExpandableListReturn {
	expandedIndex: number;
	expandedItems: Set<number>;
	isExpanded: (index: number) => boolean;
	toggleExpanded: (index: number) => void;
	expand: (index: number) => void;
	collapse: (index: number) => void;
	collapseAll: () => void;
	handleKeyDown: (e: KeyboardEvent, index: number) => void;
}

/**
 * Shared hook for managing expandable list state
 * Used by ExperienceList, EducationList, ProjectList in both themes
 */
export function useExpandableList<T>(
	_items: T[],
	options: UseExpandableListOptions = {}
): UseExpandableListReturn {
	const { defaultExpandedIndex = -1, allowMultiple = false } = options;

	// Single expanded index for default behavior
	const [expandedIndex, setExpandedIndex] = useState(defaultExpandedIndex);

	// Set of expanded indices for multi-select mode
	const [expandedItems, setExpandedItems] = useState<Set<number>>(
		new Set(defaultExpandedIndex >= 0 ? [defaultExpandedIndex] : [])
	);

	const isExpanded = useCallback(
		(index: number): boolean => {
			if (allowMultiple) {
				return expandedItems.has(index);
			}
			return expandedIndex === index;
		},
		[allowMultiple, expandedIndex, expandedItems]
	);

	const toggleExpanded = useCallback(
		(index: number) => {
			if (allowMultiple) {
				setExpandedItems((prev) => {
					const newSet = new Set(prev);
					if (newSet.has(index)) {
						newSet.delete(index);
					} else {
						newSet.add(index);
					}
					return newSet;
				});
			} else {
				setExpandedIndex((prev) => (prev === index ? -1 : index));
			}
		},
		[allowMultiple]
	);

	const expand = useCallback(
		(index: number) => {
			if (allowMultiple) {
				setExpandedItems((prev) => new Set(prev).add(index));
			} else {
				setExpandedIndex(index);
			}
		},
		[allowMultiple]
	);

	const collapse = useCallback(
		(index: number) => {
			if (allowMultiple) {
				setExpandedItems((prev) => {
					const newSet = new Set(prev);
					newSet.delete(index);
					return newSet;
				});
			} else {
				if (expandedIndex === index) {
					setExpandedIndex(-1);
				}
			}
		},
		[allowMultiple, expandedIndex]
	);

	const collapseAll = useCallback(() => {
		if (allowMultiple) {
			setExpandedItems(new Set());
		} else {
			setExpandedIndex(-1);
		}
	}, [allowMultiple]);

	const handleKeyDown = useCallback(
		(e: KeyboardEvent, index: number) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				toggleExpanded(index);
			}
		},
		[toggleExpanded]
	);

	return {
		expandedIndex,
		expandedItems,
		isExpanded,
		toggleExpanded,
		expand,
		collapse,
		collapseAll,
		handleKeyDown,
	};
}

export default useExpandableList;
