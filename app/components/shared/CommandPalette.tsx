"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface PaletteItem {
	id: string;
	label: string;
	hint: string;
	href?: string;
}

const ITEMS: readonly PaletteItem[] = [
	{ id: "home", label: "Home", hint: "/", href: "/" },
	{
		id: "case-studies",
		label: "Case Studies",
		hint: "/case-studies",
		href: "/case-studies",
	},
	{
		id: "argus",
		label: "Argus",
		hint: "/case-studies/argus",
		href: "/case-studies/argus",
	},
	{
		id: "botpress",
		label: "Working at Botpress",
		hint: "/case-studies/botpress",
		href: "/case-studies/botpress",
	},
	{
		id: "cropcare",
		label: "CropCare",
		hint: "/case-studies/cropcare",
		href: "/case-studies/cropcare",
	},
	{
		id: "linky",
		label: "Linky",
		hint: "/case-studies/linky",
		href: "/case-studies/linky",
	},
	{ id: "theme", label: "Toggle theme", hint: "light / dark" },
];

function toggleColorMode() {
	const root = document.documentElement;
	const nextMode = root.dataset.mode === "light" ? "dark" : "light";
	root.dataset.mode = nextMode;
	root.style.colorScheme = nextMode;
	window.localStorage.setItem("portfolio:color-mode", nextMode);
}

export default function CommandPalette() {
	const [isOpen, setIsOpen] = useState(false);
	const [query, setQuery] = useState("");
	const [activeIndex, setActiveIndex] = useState(0);
	const inputRef = useRef<HTMLInputElement>(null);
	const listRef = useRef<HTMLUListElement>(null);

	const filtered = useMemo(() => {
		const normalizedQuery = query.trim().toLowerCase();
		return normalizedQuery
			? ITEMS.filter((item) =>
					item.label.toLowerCase().includes(normalizedQuery),
				)
			: ITEMS;
	}, [query]);

	const openPalette = useCallback(() => {
		document.documentElement.dataset.paletteOpen = "true";
		setIsOpen(true);
		setQuery("");
		setActiveIndex(0);
	}, []);

	const closePalette = useCallback(() => {
		delete document.documentElement.dataset.paletteOpen;
		setIsOpen(false);
		setQuery("");
		setActiveIndex(0);
	}, []);

	const execute = (item: PaletteItem) => {
		closePalette();
		if (item.href) {
			window.location.assign(item.href);
		} else {
			toggleColorMode();
		}
	};

	useEffect(() => {
		return () => {
			delete document.documentElement.dataset.paletteOpen;
		};
	}, []);

	useEffect(() => {
		if (isOpen) inputRef.current?.focus();
	}, [isOpen]);

	useEffect(() => {
		const handleShortcut = (event: KeyboardEvent) => {
			if ((event.ctrlKey || event.metaKey) && event.key === "k") {
				event.preventDefault();
				if (isOpen) closePalette();
				else openPalette();
			}
		};

		window.addEventListener("keydown", handleShortcut);
		return () => window.removeEventListener("keydown", handleShortcut);
	}, [closePalette, isOpen, openPalette]);

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Escape") {
			event.preventDefault();
			closePalette();
			return;
		}

		if (filtered.length === 0) return;

		if (event.key === "ArrowDown" || event.key === "ArrowUp") {
			event.preventDefault();
			const direction = event.key === "ArrowDown" ? 1 : -1;
			const nextIndex =
				(activeIndex + direction + filtered.length) % filtered.length;
			setActiveIndex(nextIndex);
			listRef.current?.children[nextIndex]?.scrollIntoView({
				block: "nearest",
			});
			return;
		}

		if (event.key === "Enter") {
			event.preventDefault();
			execute(filtered[activeIndex]);
		}
	};

	if (!isOpen) return null;

	return (
		<dialog
			open={isOpen}
			aria-label="Command palette"
			className="cmd-palette-overlay"
			data-open={isOpen}
			onClick={(event) => {
				if (event.target === event.currentTarget) closePalette();
			}}
			onKeyDown={(event) => {
				if (event.key === "Escape") closePalette();
			}}
		>
			<div className="cmd-palette">
				<div className="cmd-palette__input-row">
					<input
						ref={inputRef}
						type="text"
						className="cmd-palette__input"
						placeholder="Search commands…"
						aria-label="Search commands"
						value={query}
						onChange={(event) => {
							setQuery(event.target.value);
							setActiveIndex(0);
						}}
						onKeyDown={handleKeyDown}
						autoComplete="off"
						spellCheck={false}
					/>
					<kbd className="cmd-palette__esc">Esc</kbd>
				</div>
				<ul ref={listRef} className="cmd-palette__list">
					{filtered.map((item, index) => (
						<li key={item.id}>
							<button
								type="button"
								className="cmd-palette__item"
								data-active={index === activeIndex}
								onMouseEnter={() => setActiveIndex(index)}
								onClick={() => execute(item)}
							>
								<span className="cmd-palette__item-label">{item.label}</span>
								<span className="cmd-palette__item-hint">{item.hint}</span>
							</button>
						</li>
					))}
					{filtered.length === 0 && (
						<li className="cmd-palette__empty">No results for "{query}"</li>
					)}
				</ul>
			</div>
		</dialog>
	);
}
