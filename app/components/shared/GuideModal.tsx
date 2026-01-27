"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import "../../styles/guide-modal.scss";

type VersionOption = "v1" | "v2";
type ThemeVariant = "v1" | "v2";

interface GuideModalProps {
	isOpen: boolean;
	onClose: () => void;
	onVersionSelect: (version: VersionOption) => void;
	currentVersion: VersionOption;
	theme?: ThemeVariant;
}

const CARDS: { id: VersionOption; label: string; tag: string; description: string }[] = [
	{
		id: "v1",
		label: "Classic",
		tag: "ORIGINAL",
		description: "The original portfolio",
	},
	{
		id: "v2",
		label: "Mono",
		tag: "CURRENT",
		description: "Mono, keyboard-first",
	},
];

const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose, onVersionSelect, currentVersion, theme = "v2" }) => {
	const [focusedCardIndex, setFocusedCardIndex] = useState(
		CARDS.findIndex((c) => c.id === currentVersion)
	);
	const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
	const modalRef = useRef<HTMLDivElement>(null);

	// Reset focused index when modal opens
	useEffect(() => {
		if (isOpen) {
			setFocusedCardIndex(CARDS.findIndex((c) => c.id === currentVersion));
		}
	}, [isOpen, currentVersion]);

	// Focus management
	useEffect(() => {
		if (isOpen) {
			modalRef.current?.focus();
		}
	}, [isOpen]);

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (!isOpen) return;

			switch (e.key) {
				case "Escape":
				case "?":
					e.preventDefault();
					onClose();
					break;
				case "ArrowLeft":
				case "ArrowUp":
				case "h":
				case "k":
					e.preventDefault();
					setFocusedCardIndex((prev) => (prev === 0 ? CARDS.length - 1 : prev - 1));
					break;
				case "ArrowRight":
				case "ArrowDown":
				case "l":
				case "j":
					e.preventDefault();
					setFocusedCardIndex((prev) => (prev === CARDS.length - 1 ? 0 : prev + 1));
					break;
				case "Enter":
				case " ":
					e.preventDefault();
					const selectedCard = CARDS[focusedCardIndex];
					if (selectedCard.id !== currentVersion) {
						onVersionSelect(selectedCard.id);
					}
					break;
				case "1":
					e.preventDefault();
					if (CARDS[0].id !== currentVersion) {
						onVersionSelect(CARDS[0].id);
					}
					break;
				case "2":
					e.preventDefault();
					if (CARDS[1].id !== currentVersion) {
						onVersionSelect(CARDS[1].id);
					}
					break;
			}
		},
		[isOpen, focusedCardIndex, currentVersion, onClose, onVersionSelect]
	);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handleKeyDown]);

	const themeClass = theme === "v1" ? "guide-modal--v1" : "guide-modal--v2";

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className={`guide-modal-overlay ${themeClass}`}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					onClick={onClose}
				>
					<motion.div
						ref={modalRef}
						className={`guide-modal ${themeClass}`}
						initial={{ opacity: 0, scale: 0.95, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: 20 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
						onClick={(e) => e.stopPropagation()}
						tabIndex={-1}
					>
						<div className="guide-modal__header">
							<h2>Guide</h2>
							<button
								className="guide-modal__close"
								onClick={onClose}
								aria-label="Close guide"
							>
								<kbd>?</kbd> / <kbd>Esc</kbd>
							</button>
						</div>

						<div className="guide-modal__content">
							{/* Navigation Section */}
							<section className="guide-modal__section">
								<h3>Navigation</h3>
								<div className="guide-modal__shortcuts">
									<div className="guide-modal__shortcut-group">
										<div className="guide-modal__shortcut">
											<span className="guide-modal__keys">
												<kbd>i</kbd> / <kbd>k</kbd>
											</span>
											<span className="guide-modal__action">up / down</span>
										</div>
										<div className="guide-modal__shortcut">
											<span className="guide-modal__keys">
												<kbd>l</kbd> / <kbd>Enter</kbd>
											</span>
											<span className="guide-modal__action">expand / enter</span>
										</div>
										<div className="guide-modal__shortcut">
											<span className="guide-modal__keys">
												<kbd>j</kbd> / <kbd>q</kbd>
											</span>
											<span className="guide-modal__action">collapse / exit</span>
										</div>
									</div>
									<div className="guide-modal__shortcut-group">
										<div className="guide-modal__shortcut">
											<span className="guide-modal__keys">
												<kbd>g</kbd><kbd>g</kbd> / <kbd>G</kbd>
											</span>
											<span className="guide-modal__action">top / bottom</span>
										</div>
										<div className="guide-modal__shortcut">
											<span className="guide-modal__keys">
												<kbd>1</kbd>-<kbd>4</kbd>
											</span>
											<span className="guide-modal__action">jump to section</span>
										</div>
										<div className="guide-modal__shortcut">
											<span className="guide-modal__keys">
												<kbd>+</kbd> / <kbd>-</kbd>
											</span>
											<span className="guide-modal__action">zoom in / out</span>
										</div>
									</div>
								</div>
							</section>

							{/* Theme Selection */}
							<section className="guide-modal__section">
								<h3>Theme</h3>
								<div className="guide-modal__cards">
									{CARDS.map((card, index) => (
										<button
											key={card.id}
											ref={(el) => { cardRefs.current[index] = el; }}
											className={`guide-modal__card ${focusedCardIndex === index ? "guide-modal__card--focused" : ""} ${card.id === currentVersion ? "guide-modal__card--current" : ""}`}
											onClick={() => {
												if (card.id !== currentVersion) {
													onVersionSelect(card.id);
												}
											}}
											onFocus={() => setFocusedCardIndex(index)}
											onMouseEnter={() => setFocusedCardIndex(index)}
											aria-label={`${card.label} - ${card.description}${card.id === currentVersion ? " (current)" : ""}`}
										>
											<span className="guide-modal__card-tag">{card.tag}</span>
											<span className="guide-modal__card-label">{card.label}</span>
											<span className="guide-modal__card-desc">{card.description}</span>
											{card.id === currentVersion && (
												<span className="guide-modal__card-badge">active</span>
											)}
										</button>
									))}
								</div>
								<div className="guide-modal__hint">
									<kbd>1</kbd> / <kbd>2</kbd> or <kbd>Enter</kbd> to switch
								</div>
							</section>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default GuideModal;
