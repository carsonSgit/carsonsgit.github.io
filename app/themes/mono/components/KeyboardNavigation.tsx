"use client";

import { useEffect } from "react";

const DOWN_KEYS = new Set(["k", "s", "ArrowDown"]);
const UP_KEYS = new Set(["i", "w", "ArrowUp"]);
const OPEN_KEYS = new Set(["l", "d", "ArrowRight"]);
const CLOSE_KEYS = new Set(["j", "a", "ArrowLeft"]);

function isEditableTarget(target: EventTarget | null) {
	return (
		target instanceof HTMLInputElement ||
		target instanceof HTMLTextAreaElement ||
		target instanceof HTMLSelectElement ||
		(target instanceof HTMLElement && target.isContentEditable)
	);
}

function getTargets(root: HTMLElement) {
	return Array.from(
		root.querySelectorAll<HTMLElement>(
			".intro__links a, .section-list__trigger, .detail-panel__links a",
		),
	).filter((element) => !element.closest("details:not([open])"));
}

function focusAt(root: HTMLElement, index: number) {
	const targets = getTargets(root);
	if (targets.length === 0) return;

	const normalizedIndex = (index + targets.length) % targets.length;
	targets[normalizedIndex].focus({ preventScroll: true });
	targets[normalizedIndex].scrollIntoView({
		behavior: "smooth",
		block: "nearest",
	});
}

export default function KeyboardNavigation() {
	useEffect(() => {
		const root = document.querySelector<HTMLElement>(
			"[data-keyboard-navigation]",
		);
		if (!root) return;

		let lastKey = "";
		let lastKeyTime = 0;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (
				isEditableTarget(event.target) ||
				document.documentElement.dataset.paletteOpen === "true"
			) {
				return;
			}

			const active = document.activeElement as HTMLElement | null;
			const targets = getTargets(root);
			const activeIndex = active ? targets.indexOf(active) : -1;
			const isActiveInRoot = active ? root.contains(active) : false;
			const isArrowKey = event.key.startsWith("Arrow");

			if (isArrowKey && !isActiveInRoot) return;

			if (DOWN_KEYS.has(event.key) || UP_KEYS.has(event.key)) {
				event.preventDefault();
				const direction = DOWN_KEYS.has(event.key) ? 1 : -1;
				const nextIndex =
					activeIndex === -1
						? direction === 1
							? 0
							: targets.length - 1
						: activeIndex + direction;
				focusAt(root, nextIndex);
				return;
			}

			const summary = active?.closest("summary");
			const details = active?.closest("details");

			if (OPEN_KEYS.has(event.key)) {
				if (!summary) return;
				event.preventDefault();
				const disclosure = summary.parentElement as HTMLDetailsElement;
				if (!disclosure.open) disclosure.open = true;
				const firstLink = disclosure.querySelector<HTMLElement>(
					".detail-panel__links a",
				);
				firstLink?.focus();
				return;
			}

			if (
				CLOSE_KEYS.has(event.key) ||
				event.key === "q" ||
				event.key === "Escape"
			) {
				if (!details) return;
				event.preventDefault();
				details.open = false;
				details.querySelector<HTMLElement>("summary")?.focus();
				return;
			}

			const now = Date.now();
			if (event.key === "g") {
				if (lastKey === "g" && now - lastKeyTime < 500) {
					event.preventDefault();
					focusAt(root, 0);
					window.scrollTo({ top: 0, behavior: "smooth" });
					lastKey = "";
					return;
				}
				lastKey = "g";
				lastKeyTime = now;
				return;
			}

			if (event.key === "G" || event.key === "End") {
				event.preventDefault();
				focusAt(root, -1);
				return;
			}

			if (event.key === "Home") {
				event.preventDefault();
				focusAt(root, 0);
				return;
			}

			if (event.key >= "1" && event.key <= "4") {
				const section =
					root.querySelectorAll<HTMLElement>("section")[Number(event.key) - 1];
				if (!section) return;
				event.preventDefault();
				section.scrollIntoView({ behavior: "smooth", block: "start" });
				section
					.querySelector<HTMLElement>("a[href], summary")
					?.focus({ preventScroll: true });
			}

			lastKey = event.key;
			lastKeyTime = now;
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	return null;
}
