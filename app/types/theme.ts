type ThemeId = "mono";

interface GridConfig {
	gridSize: number;
	decayMs: number;
	maxTiles: number;
	palette: string[];
}

interface ThemeConfig {
	id: ThemeId;
	name: string;
	description: string;
	grid: GridConfig;
}

// Mono theme configuration
export const monoThemeConfig: ThemeConfig = {
	id: "mono",
	name: "Mono",
	description: "Mono, keyboard-first",
	grid: {
		gridSize: 60,
		decayMs: 1200,
		maxTiles: 50,
		palette: [
			"rgba(167, 139, 250, 0.35)", // purple (ai)
			"rgba(94, 234, 212, 0.35)", // teal (cv)
			"rgba(147, 197, 253, 0.35)", // blue (ts)
			"rgba(110, 231, 183, 0.35)", // green (py)
			"rgba(134, 239, 172, 0.35)", // lime (csharp)
			"rgba(252, 211, 77, 0.35)", // yellow (hardware)
			"rgba(125, 211, 252, 0.35)", // cyan (azure)
			"rgba(163, 230, 53, 0.35)", // lime-green (iot)
			"rgba(251, 191, 36, 0.35)", // amber (ml)
			"rgba(252, 165, 165, 0.35)", // red (threejs)
			"rgba(249, 168, 212, 0.35)", // pink (rtmp)
			"rgba(216, 180, 254, 0.35)", // violet (neuro)
			"rgba(103, 232, 249, 0.35)", // sky (rnd)
		],
	},
};
