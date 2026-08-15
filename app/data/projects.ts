import type * as z from "zod";
import type { projectSchema } from "../types/zodTypes";

export const projects: z.infer<typeof projectSchema>[] = [
	{
		title: "Argus",
		description:
			"Computer-vision hackathon prototype for monitoring live video feeds and surfacing notable events.",
		links: [
			{ label: "github", href: "https://github.com/GodPuffin/Argus" },
			{ label: "devpost", href: "https://devpost.com/software/argus-w6i0pv" },
		],
		caseStudySlug: "argus",
	},
	{
		title: "CropCare",
		description:
			"Sensor-driven farming prototype that connects plant monitoring, cloud messaging, and remote control.",
		links: [
			{ label: "github", href: "https://github.com/carsonSgit/CropCare" },
			{ label: "live demo", href: "https://carsonsgit.github.io/cropcare-3d/" },
		],
		caseStudySlug: "cropcare",
	},
	{
		title: "Linky",
		description:
			"Retrieval-backed learning tool that turns a URL into a searchable knowledge base.",
		links: [
			{ label: "github", href: "https://github.com/carsonSgit/Linky" },
			{ label: "live product", href: "https://www.linky.im/" },
		],
		caseStudySlug: "linky",
	},
	{
		title: "Pathfinder",
		description:
			"3D career exploration prototype with AI-assisted recommendations and interactive data views.",
		links: [
			{
				label: "github",
				href: "https://github.com/xsachax/pathfinder_conuhacks-2025",
			},
			{
				label: "live demo",
				href: "https://www.pathfinderhelpsyoudecidewhereyouwantto.work/?",
			},
		],
	},
	{
		title: "Mice Neural Decoding",
		description:
			"Hackathon research project using neural activity data to predict mouse navigation decisions.",
		links: [
			{
				label: "github",
				href: "https://github.com/carsonSgit/Mice-Neural-Decoding-ML",
			},
			{
				label: "notebook",
				href: "https://github.com/carsonSgit/Mice-Neural-Decoding-ML/blob/main/PharmaHacks%202024%20Neural%20Decoding%20Single%20File.ipynb",
			},
		],
	},
];
