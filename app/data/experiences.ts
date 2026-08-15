import type * as z from "zod";
import type { experienceSchema } from "../types/zodTypes";

export const professionalExp: z.infer<typeof experienceSchema>[] = [
	{
		date: ["Jun 2026", "Present"],
		title: "AI Automation Software Developer",
		institution: "Qohash",
		tagline:
			"Building towards Sovereign Zero Copy Data Security for responsible AI.",
		description: [
			"Building & deploying AI-powered automations and tooling to improve workflows and automate GTM strategies.",
			"Continuously researching and developing the latest in AI, applying it towards building a responsible and secure data platform for the future of AI.",
		],
		link: "https://qohash.com/",
	},
	{
		date: ["2026", "2026"],
		title: "Full Stack Developer",
		institution: "Botpress",
		tagline:
			"Shipping AI integrations and data products at a fast-moving startup.",
		description: [
			"Building software integrations to connect customer's services with Agentic AI systems.",
			"Engineered an end-to-end product for generating insights based on customer support data with custom AI inference flows, data classification, logic gating and deduplication.",
		],
		link: "https://botpress.com/",
	},
	{
		date: ["May 2025", "Apr 2026"],
		title: "Junior Software Developer",
		institution: "Fundica",
		tagline:
			"Scaling microservices and automating the core of a fintech platform.",
		description: [
			"Optimized microservices improving scalability and performance by up to 99%. (PHP, Node.js)",
			"Built automations for core business workflows to drastically increase scale and speed of growth and efficiency. (TypeScript, Python, Golang)",
		],
		link: "https://www.fundica.com/content/fundica-live-demo-at-finovate-spring-2022",
	},
	{
		date: ["May 2024", "Aug 2024"],
		title: "SDE Intern",
		institution: "Tail'ed",
		tagline:
			"Building full-stack features and AI pipelines to lift user conversions.",
		description: [
			"Architected backend jobs and UI/UX across products, increasing user conversions by over 80%. (Next.js, TypeScript, Docker)",
			"Engineered an AI-ingestion pipeline for analyzing user resumes and job listings for improved classification and suggestion algorithms. (Python, Vector Database, AWS Lambda)",
		],
		link: "https://tailed.ca",
	},
	{
		date: ["Jan 2024", "May 2024"],
		title: "IT Intern",
		institution: "Ville de Kirkland",
		tagline: "Automating security remediation across municipal IT systems.",
		description: [
			"Scripted and automated bulk vulnerability scans and patch deployments, improving mitigation efficiency by 80%.",
			"Cybersecurity tasks using CrowdStrike Falcon and Python, eliminating 4,500+ vulnerabilities.",
		],
		link: "https://ville.kirkland.qc.ca/",
	},
];

export const extraCurricularExp: z.infer<typeof experienceSchema>[] = [
	{
		date: ["Jan 2026", "Present"],
		title: "Co-Chair",
		institution: "CUSEC",
		tagline:
			"Leading the team behind Canada's longest-running student tech conference.",
		description: [
			"Running Canada's longest running student tech conference, 10,000+ attendees, 380+ sponsors, 280+ speakers.",
			"Leading a team of 30+ members to ensure highest quality work is done and all members are supported to the fullest in their work.",
		],
		link: "https://2026.cusec.net/",
	},
	{
		date: ["Mar 2024", "Jul 2024"],
		title: "President",
		institution: "JACHacks",
		tagline: "Standing up a 130+ attendee hackathon on a six-week timeline.",
		description: [
			"Managed a team of 5 to ensure the successful organization and execution of the hackathon.",
			"Organized the event with a short timeline of 1.5 months, resulting in 130+ attendees and overly positive feedback.",
		],
		link: "https://jachacks.pages.dev/",
	},
	{
		date: ["Feb 2024", "Apr 2024"],
		title: "R&D Fellow",
		institution: "AI Launch Lab",
		tagline:
			"Researching ML and building a stock-prediction model under PhD mentorship.",
		description: [
			"Learned Machine Learning and AI topics and material under PhDs.",
			"Developed the ML project TradeMind to predict the stock market using Python and Keras.",
			"Presented the project to a panel of investors and industry professionals.",
			"Noted as the top project of the program's conception.",
		],
		link: "https://mitacs.launchlab.ai/en/",
	},
];

export const educationExp: z.infer<typeof experienceSchema>[] = [
	{
		date: ["Sep 2025", "Present"],
		title: "B.EngTech & Applied Sci",
		institution: "Memorial University",
		tagline:
			"Engineering, technology, project management, applied statistics, and business.",
		description: [
			"Engineering, technology, project management, applied statistics, business, and more.",
		],
		link: "https://www.mun.ca/",
	},
	{
		date: ["Aug 2024", "May 2025"],
		title: "B.Econ",
		institution: "Concordia University",
		tagline: "Economics, realized business isn't for me.",
		description: ["Economics, realized business isn't for me."],
		link: "https://www.concordia.ca/",
	},
	{
		date: ["Aug 2021", "May 2024"],
		title: "DEC.CompSci",
		institution: "John Abbott College",
		tagline:
			"Three years of software development, mobile, and IoT fundamentals.",
		description: [
			"Completed a comprehensive 3-year Computer Science DEC program with a focus on software development, mobile app development, and IoT technologies.",
			"Built a strong foundation in programming fundamentals, algorithms, data structures, and computer architecture while developing practical skills in full-stack development.",
		],
		link: "https://www.johnabbott.qc.ca/",
	},
];
