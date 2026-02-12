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
