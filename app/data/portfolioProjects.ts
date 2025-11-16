import type { Project } from "../types/projects";

const languageColors = {
	Python: { backgroundColour: "rgba(54, 216, 176, 0.5)" },
	"C#": { backgroundColour: "rgba(89, 218, 102, 0.5)" },
	".NET MAUI": { backgroundColour: "rgba(165, 86, 218, 0.5)" },
	RaspberryPi: { backgroundColour: "rgba(223, 104, 201, 0.5)" },
	IoT: { backgroundColour: "rgba(192, 231, 102, 0.5)" },
	Mantine: { backgroundColour: "rgba(123, 208, 223, 0.5)" },
	TypeScript: { backgroundColour: "rgba(134, 122, 240, 0.5)" },
	RAGAI: { backgroundColour: "rgba(167, 167, 167, 0.5)" },
	VectorDB: { backgroundColour: "rgba(167, 167, 167, 0.5)" },
	React: { backgroundColour: "rgba(105, 96, 231, 0.5)" },
	MachineLearning: { backgroundColour: "rgba(214, 224, 66, 0.5)" },
	JupyterNotebook: { backgroundColour: "rgba(255, 175, 2, 0.5)" },
	"Three.js": { backgroundColour: "rgba(235, 11, 11, 0.5)" },
	Tailwind: { backgroundColour: "rgba(43, 200, 174,  0.5)" },
	Zustand: { backgroundColour: "rgba(218, 214, 214, 0.5)" },
	PostgreSQL: { backgroundColour: "rgba(157, 209, 243, 0.5)" },
	RTMP: { backgroundColour: "rgba(241, 122, 172, 0.5)" },
	ComputerVision: { backgroundColour: "rgba(113, 240, 187, 0.5)" },
	AI: { backgroundColour: "rgba(196, 138, 235, 0.5)" },
	Hardware: { backgroundColour: "rgba(206, 203, 14, 0.5)" },
	Azure: { backgroundColour: "rgba(131, 188, 255, 0.5)" },
	Neuroscience: { backgroundColour: "rgba(224, 123, 224, 0.5)" },
	RnD: { backgroundColour: "rgba(53, 197, 241, 0.5)" },
};

export const languageBorders = (colour: string) => {
	// Extract RGB values from rgba(r, g, b, a) format
	const rgbaMatch = colour.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);

	if (rgbaMatch) {
		const [, r, g, b] = rgbaMatch;
		return {
			borderColor: `rgba(${r}, ${g}, ${b}, 0.7)`,
			color: `#000000`,
		};
	}

	// Fallback in case the format is unexpected
	return {
		borderColor: colour,
		color: colour,
	};
};

export const projects: Project[] = [
	{
		title: "Argus",
		languages: [
			{ name: "AI", ...languageColors.AI },
			{ name: "Computer Vision", ...languageColors.ComputerVision },
			{ name: "TypeScript", ...languageColors.TypeScript },
			{ name: "PostgreSQL", ...languageColors.PostgreSQL },
			{ name: "RTMP", ...languageColors.RTMP },
		],
		description:
			"All-in-one AI-native surveillance suite for monitoring and analyzing live feeds from various sources autonomously.",
		github: "https://github.com/GodPuffin/Argus",
		website: "https://devpost.com/software/argus-w6i0pv",
	},
	{
		title: "CropCare",
		languages: [
			{ name: "Python", ...languageColors.Python },
			{ name: "C#", ...languageColors["C#"] },
			{ name: "Hardware", ...languageColors.Hardware },
			{ name: "Azure", ...languageColors.Azure },
			{ name: "IoT", ...languageColors.IoT },
		],
		description:
			"IoT-based smart farming solution for automated plant monitoring and control through a bi-directional MQTT Azure pipeline.",
		github: "https://github.com/carsonSgit/CropCare",
		website: "https://carsonsgit.github.io/cropcare-3d/",
	},
	{
		title: "Linky",
		languages: [
			{ name: "Mantine", ...languageColors.Mantine },
			{ name: "TypeScript", ...languageColors.TypeScript },
			{ name: "AI", ...languageColors.AI },
			{ name: "Vector DB", ...languageColors.PostgreSQL },
		],
		description:
			"AI-powered URL-based knowledge base for interactive learning and exploration using RAG AI and a Vector database for infomration storage and retrieval.",
		github: "https://github.com/carsonSgit/Linky",
		website: "https://www.linky.im/",
	},
	{
		title: "Pathfinder",
		languages: [
			{ name: "Three.js", ...languageColors["Three.js"] },
			{ name: "TypeScript", ...languageColors.TypeScript },
			{ name: "AI", ...languageColors.AI },
			{ name: "Zustand", ...languageColors.Zustand },
		],
		description:
			"3D interactive career coach for exploring and discovering career paths using AI and complex data analysis.",
		github: "https://github.com/xsachax/pathfinder_conuhacks-2025",
		website: "https://www.pathfinderhelpsyoudecidewhereyouwantto.work/?",
	},
	{
		title: "Mice Neural Decoding",
		languages: [
			{ name: "Python", ...languageColors.Python },
			{ name: "Machine Learning", ...languageColors.MachineLearning },
			{ name: "Neuroscience", ...languageColors.Neuroscience },
		],
		description:
			"Neural decoding of the retrosplenial cortex of mice through Machine Learning analysis of L2/3 neuron activity to predict mouse navigation decisions.",
		github: "https://github.com/carsonSgit/Mice-Neural-Decoding-ML",
		website:
			"https://github.com/carsonSgit/Mice-Neural-Decoding-ML/blob/main/PharmaHacks%202024%20Neural%20Decoding%20Single%20File.ipynb",
	},
	{
		title: "TradeMind",
		languages: [
			{ name: "Python", ...languageColors.Python },
			{ name: "Machine Learning", ...languageColors.MachineLearning },
			{ name: "R&D", ...languageColors.RnD },
		],
		description:
			"R&D Fellowship project covering various Machine Learning models to analyze stock market data and provide insights to users.",
		github: "https://github.com/carsonSgit/TradeMind",
		website: "https://trademind.pages.dev/",
	},
];
