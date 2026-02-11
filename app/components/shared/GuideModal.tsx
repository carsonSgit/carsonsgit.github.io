"use client";

import { useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import "../../styles/guide-modal.scss";

interface GuideModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
	const modalRef = useRef<HTMLDivElement>(null);

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
			}
		},
		[isOpen, onClose]
	);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
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
						className="guide-modal guide-modal--v2"
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
							type="button"
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
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default GuideModal;
