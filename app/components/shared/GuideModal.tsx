"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef } from "react";
import "../../styles/guide-modal.scss";

interface GuideModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const FOCUSABLE_SELECTORS =
	'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (isOpen) {
			closeButtonRef.current?.focus();
		}
	}, [isOpen]);

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (!isOpen) return;

			if (e.key === "Escape" || e.key === "?") {
				e.preventDefault();
				onClose();
				return;
			}

			if (e.key === "Tab") {
				const modal = modalRef.current;
				if (!modal) return;

				const focusable = Array.from(
					modal.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS),
				).filter((el) => !el.hasAttribute("disabled"));

				if (focusable.length === 0) {
					e.preventDefault();
					return;
				}

				const first = focusable[0];
				const last = focusable[focusable.length - 1];

				if (e.shiftKey) {
					if (document.activeElement === first) {
						e.preventDefault();
						last.focus();
					}
				} else {
					if (document.activeElement === last) {
						e.preventDefault();
						first.focus();
					}
				}
			}
		},
		[isOpen, onClose],
	);

	useEffect(() => {
		globalThis.addEventListener("keydown", handleKeyDown);
		return () => globalThis.removeEventListener("keydown", handleKeyDown);
	}, [handleKeyDown]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className="guide-modal-overlay guide-modal--v2"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					onClick={onClose}
				>
					<motion.div
						ref={modalRef}
						role="dialog"
						aria-modal="true"
						aria-labelledby="guide-modal-title"
						className="guide-modal guide-modal--v2"
						initial={{ opacity: 0, scale: 0.95, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: 20 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
						onClick={(e) => e.stopPropagation()}
						tabIndex={-1}
					>
						<div className="guide-modal__header">
							<h2 id="guide-modal-title">Guide</h2>
							<button
								ref={closeButtonRef}
								type="button"
								className="guide-modal__close"
								onClick={onClose}
								aria-label="Close guide"
							>
								<kbd aria-hidden="true">?</kbd> /{" "}
								<kbd aria-hidden="true">Esc</kbd>
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
											<span className="guide-modal__action">
												expand / enter
											</span>
										</div>
										<div className="guide-modal__shortcut">
											<span className="guide-modal__keys">
												<kbd>j</kbd> / <kbd>q</kbd>
											</span>
											<span className="guide-modal__action">
												collapse / exit
											</span>
										</div>
									</div>
									<div className="guide-modal__shortcut-group">
										<div className="guide-modal__shortcut">
											<span className="guide-modal__keys">
												<kbd>g</kbd>
												<kbd>g</kbd> / <kbd>G</kbd>
											</span>
											<span className="guide-modal__action">top / bottom</span>
										</div>
										<div className="guide-modal__shortcut">
											<span className="guide-modal__keys">
												<kbd>1</kbd>-<kbd>4</kbd>
											</span>
											<span className="guide-modal__action">
												jump to section
											</span>
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
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default GuideModal;
