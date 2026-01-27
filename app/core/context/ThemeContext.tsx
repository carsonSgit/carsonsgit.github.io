"use client";

import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from "react";
import {
	type ThemeConfig,
	type ThemeContextValue,
	type ThemeId,
	themeConfigs,
} from "../types/theme";

const THEME_STORAGE_KEY = "portfolio-theme";
const DEFAULT_THEME: ThemeId = "mono";

const ThemeContext = createContext<ThemeContextValue | null>(null);

interface ThemeProviderProps {
	children: ReactNode;
	defaultTheme?: ThemeId;
}

export const ThemeProvider = ({
	children,
	defaultTheme = DEFAULT_THEME,
}: ThemeProviderProps) => {
	const [theme, setThemeState] = useState<ThemeId>(defaultTheme);
	const [config, setConfig] = useState<ThemeConfig>(themeConfigs[defaultTheme]);

	// Load saved theme from localStorage on mount
	useEffect(() => {
		const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeId | null;
		if (savedTheme && themeConfigs[savedTheme]) {
			setThemeState(savedTheme);
			setConfig(themeConfigs[savedTheme]);
		}
	}, []);

	// Update document attributes when theme changes
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		document.body.classList.remove("theme-classic", "theme-mono");
		document.body.classList.add(`theme-${theme}`);
	}, [theme]);

	const setTheme = useCallback((newTheme: ThemeId) => {
		setThemeState(newTheme);
		setConfig(themeConfigs[newTheme]);
		localStorage.setItem(THEME_STORAGE_KEY, newTheme);
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, setTheme, config }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = (): ThemeContextValue => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};

export const useThemeConfig = (): ThemeConfig => {
	const { config } = useTheme();
	return config;
};

export { ThemeContext };
