"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import "../styles/menu.scss";

type VersionOption = "v1" | "v2";

interface MenuProps {
	onSelect: (version: VersionOption) => void;
}

const CARDS: { id: VersionOption; label: string; tag: string; description: string; available: boolean }[] = [
	{
		id: "v1",
		label: "v1",
		tag: "ORIGINAL",
		description: "The original portfolio",
		available: true,
	},
	{
		id: "v2",
		label: "v2",
		tag: "NEW",
		description: "Mono, keyboard-first",
		available: true,
	},
];

const Menu: React.FC<MenuProps> = ({ onSelect }) => {
	const [focusedIndex, setFocusedIndex] = useState(0);
	const [exiting, setExiting] = useState(false);
	const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);

	const handleSelect = useCallback(
		(version: VersionOption) => {
			const card = CARDS.find((c) => c.id === version);
			if (!card?.available) return;
			setExiting(true);
		},
		[],
	);

	const handleExitComplete = useCallback(() => {
		const card = CARDS[focusedIndex];
		if (card?.available) {
			onSelect(card.id);
		}
	}, [focusedIndex, onSelect]);

	useEffect(() => {
		cardRefs.current[focusedIndex]?.focus();
	}, [focusedIndex]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (exiting) return;

			switch (e.key) {
				case "ArrowLeft":
				case "ArrowUp":
					e.preventDefault();
					setFocusedIndex((prev) => (prev === 0 ? CARDS.length - 1 : prev - 1));
					break;
				case "ArrowRight":
				case "ArrowDown":
					e.preventDefault();
					setFocusedIndex((prev) => (prev === CARDS.length - 1 ? 0 : prev + 1));
					break;
				case "Enter":
				case " ":
					e.preventDefault();
					handleSelect(CARDS[focusedIndex].id);
					break;
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [focusedIndex, exiting, handleSelect]);

	return (
		<AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
			{!exiting && (
				<motion.div
					key="menu"
					className="menu-overlay"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.4, ease: "easeInOut" }}
				>
					<div className="menu-content">
						<motion.div
							className="menu-header"
							initial={{ y: -20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{
								type: "spring",
								stiffness: 200,
								damping: 25,
								delay: 0.1,
							}}
						>
							<h1 className="menu-title">carsonSgit</h1>
							<p className="menu-subtitle">Select a version</p>
						</motion.div>

						<div className="menu-cards">
							{CARDS.map((card, index) => (
								<motion.button
									key={card.id}
									ref={(el) => { cardRefs.current[index] = el; }}
									className={`menu-card ${focusedIndex === index ? "menu-card--focused" : ""} ${!card.available ? "menu-card--disabled" : ""}`}
									onClick={() => handleSelect(card.id)}
									onFocus={() => setFocusedIndex(index)}
									disabled={!card.available}
									tabIndex={0}
									aria-label={`${card.label} - ${card.tag}${!card.available ? " (unavailable)" : ""}`}
									initial={{ y: 30, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{
										type: "spring",
										stiffness: 200,
										damping: 20,
										delay: 0.2 + index * 0.1,
									}}
								>
									<span className="menu-card__tag">{card.tag}</span>
									<span className="menu-card__label">{card.label}</span>
									<span className="menu-card__desc">{card.description}</span>
									{focusedIndex === index && card.available && (
										<motion.span
											className="menu-card__indicator"
											layoutId="card-indicator"
											transition={{
												type: "spring",
												stiffness: 300,
												damping: 25,
											}}
										/>
									)}
								</motion.button>
							))}
						</div>

						<motion.div
							className="menu-legend"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5, duration: 0.4 }}
						>
							<div className="menu-legend__row">
								<span className="menu-legend__key">
									<kbd>&larr;</kbd><kbd>&rarr;</kbd>
								</span>
								<span className="menu-legend__action">Navigate</span>
							</div>
							<span className="menu-legend__divider" />
							<div className="menu-legend__row">
								<span className="menu-legend__key">
									<kbd>Enter</kbd>
								</span>
								<span className="menu-legend__action">Select</span>
							</div>
						</motion.div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Menu;
