type ThemeId = "mono";

interface ThemeConfig {
	id: ThemeId;
	name: string;
	description: string;
}

// Mono theme configuration
export const monoThemeConfig: ThemeConfig = {
	id: "mono",
	name: "Mono",
	description: "Mono, keyboard-first",
};
