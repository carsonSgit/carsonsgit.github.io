interface ExperienceRole {
	title: string;
	date: string[];
	description: string[];
}

interface Experience {
	date: string[];
	title: string;
	institution: string;
	tagline?: string;
	description: string[];
	experienceBadges: string[];
	link: string;
	caseStudySlug?: string;
	roles?: ExperienceRole[];
}

export const professionalExp: Experience[] = [
	{
		date: ["June 2026", "Present"],
		title: "AI Automation Software Developer",
		institution: "Qohash",
		tagline:
			"Building towards Sovereign Zero Copy Data Security for responsible AI.",
		description: [
			"Building & deploying AI-powered automations and tooling to improve workflows and automate GTM strategies.",
			"Continuously researching and developing the latest in AI, applying it towards building a responsible and secure data platform for the future of AI.",
		],
		experienceBadges: ["AI", "Automation", "Security"],
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
		experienceBadges: ["AI", "Full Stack", "DevOps"],
		caseStudySlug: "botpress",
		link: "https://botpress.com/",
	},
	{
		date: ["May 2025", "April 2026"],
		title: "Junior Software Developer",
		institution: "Fundica",
		tagline:
			"Scaling microservices and automating the core of a fintech platform.",
		description: [
			"Optimized microservices improving scalability and performance by up to 99%. (PHP, Node.js)",
			"Built automations for core business workflows to drastically increase scale and speed of growth and efficiency. (TypeScript, Python, Golang)",
		],
		experienceBadges: ["Automation", "AI", "DevOps"],
		link: "https://www.fundica.com/content/fundica-live-demo-at-finovate-spring-2022",
	},
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
		experienceBadges: ["Leadership", "Management", "Logistics"],
		roles: [
			{
				title: "Director of Logistics",
				date: ["Jan 2025", "Jan 2026"],
				description: [
					"Negotiated hotel and venue arrangements for the conference, including pricing, room blocks, space requirements, and contract terms.",
					"Coordinated vendors and operational logistics across conference planning, ensuring venue, accommodation, scheduling, and execution needs were aligned.",
				],
			},
			{
				title: "Sponsorship Executive",
				date: ["Jan 2024", "Jan 2025"],
				description: [
					"Built and maintained relationships with corporate sponsors, university partners, and local technology organizations to support conference funding goals.",
					"Prepared and delivered sponsorship outreach materials, communicating conference value, audience demographics, partnership tiers, and sponsor benefits.",
				],
			},
		],
		link: "https://2026.cusec.net/",
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
		experienceBadges: ["AI", "AWS", "R&D"],
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
		experienceBadges: ["IT", "Cybersecurity", "Networking"],
		link: "https://ville.kirkland.qc.ca/",
	},
	{
		date: ["March 2024", "July 2024"],
		title: "President",
		institution: "JACHacks",
		tagline: "Standing up a 130+ attendee hackathon on a six-week timeline.",
		description: [
			"Managed a team of 5 to ensure the successful organization and execution of the hackathon.",
			"Organized the event with a short timeline of 1.5 months, resulting in 130+ attendees and overly positive feedback.",
		],
		experienceBadges: ["Leadership", "Management", "Logistics"],
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
		experienceBadges: ["R&D", "AI"],
		link: "https://mitacs.launchlab.ai/en/",
	},
];

export const educationExp: Experience[] = [
	{
		date: ["Sept 2025", "Present"],
		title: "B.EngTech & Applied Sci",
		institution: "Memorial University",
		description: [
			"Engineering, technology, project management, applied statistics, business, and more.",
		],
		experienceBadges: ["Engineering", "Sciences", "Quality Management"],
		link: "https://www.mun.ca/",
	},
	{
		date: ["Aug 2024", "May 2025"],
		title: "B.Econ",
		institution: "Concordia University",
		description: ["Economics, realized business isn't for me."],
		experienceBadges: ["Business", "Economics"],
		link: "https://www.concordia.ca/",
	},
	{
		date: ["Aug 2021", "May 2024"],
		title: "DEC.CompSci",
		institution: "John Abbott College",
		description: [
			"Completed a comprehensive 3-year Computer Science DEC program with a focus on software development, mobile app development, and IoT technologies.",
			"Built a strong foundation in programming fundamentals, algorithms, data structures, and computer architecture while developing practical skills in full-stack development.",
		],
		experienceBadges: [
			"Data Structures",
			"Algorithms",
			"Software Engineering",
			"Security",
			"IoT",
		],
		link: "https://www.johnabbott.qc.ca/",
	},
];
