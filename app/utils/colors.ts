/**
 * Extracts RGB values from an rgba() color string and returns a border/text color pair.
 * Used for language badges and stat badges.
 */
export const getBorderColors = (colour: string) => {
	const rgbaMatch = colour.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);

	if (rgbaMatch) {
		const [, r, g, b] = rgbaMatch;
		return {
			borderColor: `rgba(${r}, ${g}, ${b}, 0.5)`,
			color: `rgba(${r}, ${g}, ${b}, 1)`,
		};
	}

	return {
		borderColor: colour,
		color: colour,
	};
};

export const getBadgeStyle = (colour: string) => {
	const rgbaMatch = colour.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);

	if (rgbaMatch) {
		const [, r, g, b] = rgbaMatch;
		return {
			background: `rgba(${r}, ${g}, ${b}, 0.2)`,
			foreground: `rgba(${r}, ${g}, ${b}, 1)`,
		};
	}

	return {
		background: colour,
		foreground: colour,
	};
};
