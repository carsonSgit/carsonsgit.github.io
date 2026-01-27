/**
 * Extracts RGB values from an rgba() color string and returns a border/text color pair.
 * Used for language badges and stat badges.
 */
export const getBorderColors = (colour: string) => {
	const rgbaMatch = colour.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);

	if (rgbaMatch) {
		const [, r, g, b] = rgbaMatch;
		return {
			borderColor: `rgba(${r}, ${g}, ${b}, 0.7)`,
			color: `#000000`,
		};
	}

	return {
		borderColor: colour,
		color: colour,
	};
};
