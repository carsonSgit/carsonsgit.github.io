"use client";

import { useCallback, useEffect, useState } from "react";
import type { ThemeId } from "../core/types/theme";
import ClassicTheme from "../themes/classic";
import MonoTheme from "../themes/mono";

const THEME_STORAGE_KEY = "portfolio-theme";
const DEFAULT_THEME: ThemeId = "mono";

const App = () => {
	const [theme, setTheme] = useState<ThemeId>(() => {
		if (typeof window === "undefined") return DEFAULT_THEME;
		const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeId | null;
		return saved && (saved === "classic" || saved === "mono") ? saved : DEFAULT_THEME;
	});

	// Persist theme to localStorage
	useEffect(() => {
		localStorage.setItem(THEME_STORAGE_KEY, theme);
		document.documentElement.setAttribute("data-theme", theme);
		document.body.classList.remove("theme-classic", "theme-mono");
		document.body.classList.add(`theme-${theme}`);
	}, [theme]);

	const handleThemeSelect = useCallback((newTheme: ThemeId) => {
		setTheme(newTheme);
	}, []);

	if (theme === "mono") {
		return <MonoTheme onThemeSelect={handleThemeSelect} />;
	}

	return <ClassicTheme onThemeSelect={handleThemeSelect} />;
};

export default App;
