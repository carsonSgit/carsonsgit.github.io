export type ThemeId = "classic" | "mono";

export interface ThemeColors {
	primary: string;
	background: string;
	text: string;
	muted: string;
	accent: string;
	border: string;
}

export interface GridConfig {
	gridSize: number;
	decayMs: number;
	maxTiles: number;
	palette: string[];
}

export interface ThemeConfig {
	id: ThemeId;
	name: string;
	description: string;
	colors: ThemeColors;
	grid: GridConfig;
	fontFamily: string;
}

export interface ThemeContextValue {
	theme: ThemeId;
	setTheme: (theme: ThemeId) => void;
	config: ThemeConfig;
}

// Classic (V1) theme configuration
export const classicThemeConfig: ThemeConfig = {
	id: "classic",
	name: "Classic",
	description: "The original portfolio",
	colors: {
		primary: "#32CEA2",
		background: "#FAF9F6",
		text: "#1a1a1a",
		muted: "#666666",
		accent: "#5FCC2D",
		border: "rgba(0, 0, 0, 0.1)",
	},
	grid: {
		gridSize: 100,
		decayMs: 1500,
		maxTiles: 50,
		palette: [
			"rgba(50, 206, 162, 0.35)",
			"rgba(95, 204, 45, 0.35)",
			"rgba(24, 167, 95, 0.35)",
			"rgba(35, 114, 84, 0.35)",
			"rgba(68, 172, 108, 0.35)",
		],
	},
	fontFamily: "Inter, Poppins, sans-serif",
};

// Mono (V2) theme configuration
export const monoThemeConfig: ThemeConfig = {
	id: "mono",
	name: "Mono",
	description: "Mono, keyboard-first",
	colors: {
		primary: "#a78bfa",
		background: "#0d0d0f",
		text: "#e4e4e7",
		muted: "#71717a",
		accent: "#5eead4",
		border: "rgba(255, 255, 255, 0.1)",
	},
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
	fontFamily: "CommitMono, monospace",
};

export const themeConfigs: Record<ThemeId, ThemeConfig> = {
	classic: classicThemeConfig,
	mono: monoThemeConfig,
};
