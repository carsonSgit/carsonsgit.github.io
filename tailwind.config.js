/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				main: "var(--main)",
				"main-secondary": "var(--main-secondary)",
				"main-foreground": "var(--main-foreground)",
				"main-muted": "var(--main-muted)",
				"main-background": "var(--main-background)",
				"main-invert": "var(--main-invert)",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				"primary-foreground": "var(--primary-foreground)",
				"primary-muted": "var(--primary-muted)",
				"primary-invert": "var(--primary-invert)",
				border: "hsl(0, 100%, 100%)",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
			},
		},
	},
	plugins: [],
};
