const KeyboardShortcuts = () => {
	return (
		<section className="keyboard-shortcuts">
			<h2>Keyboard</h2>
			<div className="keyboard-shortcuts__grid">
				<div className="keyboard-shortcuts__group">
					<div className="keyboard-shortcuts__row">
						<span className="keyboard-shortcuts__keys">
							<kbd>i</kbd> / <kbd>k</kbd>
						</span>
						<span className="keyboard-shortcuts__action">up / down</span>
					</div>
					<div className="keyboard-shortcuts__row">
						<span className="keyboard-shortcuts__keys">
							<kbd>l</kbd> / <kbd>Enter</kbd>
						</span>
						<span className="keyboard-shortcuts__action">expand / enter</span>
					</div>
					<div className="keyboard-shortcuts__row">
						<span className="keyboard-shortcuts__keys">
							<kbd>j</kbd> / <kbd>q</kbd>
						</span>
						<span className="keyboard-shortcuts__action">collapse / exit</span>
					</div>
				</div>
				<div className="keyboard-shortcuts__group">
					<div className="keyboard-shortcuts__row">
						<span className="keyboard-shortcuts__keys">
							<kbd>g</kbd><kbd>g</kbd> / <kbd>G</kbd>
						</span>
						<span className="keyboard-shortcuts__action">top / bottom</span>
					</div>
					<div className="keyboard-shortcuts__row">
						<span className="keyboard-shortcuts__keys">
							<kbd>1</kbd>-<kbd>4</kbd>
						</span>
						<span className="keyboard-shortcuts__action">sections</span>
					</div>
					<div className="keyboard-shortcuts__row">
						<span className="keyboard-shortcuts__keys">
							<kbd>+</kbd> / <kbd>-</kbd>
						</span>
						<span className="keyboard-shortcuts__action">zoom in / out</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default KeyboardShortcuts;
