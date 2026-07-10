interface CaseStudyLink {
	label: string;
	href: string;
}

interface CaseStudySeo {
	title?: string;
	description?: string;
	socialImage?: string;
}

interface CaseStudySection {
	id: string;
	title: string;
	paragraphs: string[];
}

interface CaseStudyHighlight {
	label: string;
	value: string;
}

interface CaseStudyPresentation {
	eyebrow?: string;
	accent?: "gold" | "mist" | "meadow";
	heroLayout?: "balanced" | "immersive";
	highlights?: CaseStudyHighlight[];
	indexLabel?: string;
}

export interface CaseStudy {
	slug: string;
	title: string;
	summary: string;
	projectType: string;
	stack: string[];
	image?: string;
	sections: CaseStudySection[];
	links: CaseStudyLink[];
	publishedAt: string;
	updatedAt: string;
	seo?: CaseStudySeo;
	presentation?: CaseStudyPresentation;
}

export const caseStudies: CaseStudy[] = [
	{
		slug: "botpress",
		title: "Working at Botpress",
		summary: "Lessons learned while working at Botpress.",
		projectType: "Professional Experience",
		stack: ["TypeScript", "Zod", "LLMz", "Next.js", "Prisma"],
		image: "/botpress.webp",
		presentation: {
			eyebrow: "Shipping at an industry-leading AI startup",
			accent: "gold",
			heroLayout: "immersive",
			indexLabel: "Lessons learned from working at Botpress",
			highlights: [
				{
					label: "Ship fast",
					value: "Rapid iteration and deployment in a fast-paced environment",
				},
				{
					label: "Engineering",
					value: "Building scalable and maintainable applications",
				},
				{
					label: "Ownership",
					value: "Taking end-to-end responsibility for features and products",
				},
			],
		},
		sections: [
			{
				id: "pretext",
				title: "Pretext",
				paragraphs: [
					"Starting in Summer 2025, I became enamoured with the work that Botpress does. The speed and quality that they go at was awe-inspiring for me, and I knew that I wanted to be a part of it.",
					"I spent the next 8 months interviewing, practicing, learning, growing, and taking feedback to the heart to become a great engineer, ultimately I was given an offer for a full time position as a Full Stack Developer.",
					"The offer came in back in February and I accepted it immediately, all that hard work finally paid off and I was ready to step up to the challenge and get to shipping.",
				],
			},
			{
				id: "week1_work",
				title: "Week 1, move fast",
				paragraphs: [
					"Starting my first week was a culture shock, I had finished my onboarding in the first few hours and got straight to coding. Everyone who starts at Botpress does the same task: Build an integration for the Botpress platform.",
					"A quick TLDR: what is an integration? Basically Botpress has a platform that allows users to build and deploy AI agents that are fully connected to their tools and data, an integration is basically the connector that allows you to link your external tools to your Botpress agent, all accessible in one place.",
					"I was given the task to build out the Jira integration. I had heard that people typically take about 2-3 weeks to build their integration, but me being me, I wanted to challenge myself to see how quickly I could get it up and running.",
					"After fumbling through setting up my dev environment, I got to work. Lots of reading documentation, looking at other examples, manual testing, trying to break things, before the end of the week I was done everything.",
					"Once I was done, it actually hit me-- this tool I just built was now able to be used to help customers improve their own workflows in the blink of an eye. A little bit later, I got to set up OAuth connections which was really fun and a good learning experience, I got to really appreciate the beauty of TypeScript and intellisense.",
				],
			},
			{
				id: "work",
				title: "Work and Ownership",
				paragraphs: [
					"During my first week, since I was basically done with my integration, I spoke with my team lead about next steps. To my shock, he decided to catapult me into building a full, comprehensive feature end-to-end.",
					"I was tasked with building out Topic Insights for our new product that's in the works. Backend logic, CRON jobs, database schemas, API routes, AI flows, synchronization, logic gating, deduplication, frontend, testing, documentation, the whole shebang.",
					"I was definitely nervous to start, this feature is *very* important to the product and customers, it's the one-stop shop for all the data and insights that users will be relying on to make important business decisions, and I was the one given the reigns and responsibility to build it out from ground up.",
					"But I got to work, stayed late *every day...* (even till 11:30pm on some days) and I loved every minute of it. In the world of programming, getting to do actual engineering work at a high level is pretty rare, so getting to have full ownership over a core feature of the product *on my first week* was an absolutely unique feeling.",
				],
			},
			{
				id: "learnings",
				title: "What did I learn?",
				paragraphs: [
					"First and foremost, shipping fast does NOT mean slop, and second, the importance of good developer experience has such a massive impact on what you can do and how fast you can go.",
					"QStash: QStash is a tool made by Upstash (What's up stash?), basically it's the middleman between your API and your requests. The problem I was tackling had to do with system flows and triggers. Basically, `if A triggered --> do B and C --> once B is done launch D --> D depends on C`.",
					"Without QStash, we were running into a lot of issues with reliability, AI jobs ran on certain triggers, but at scale issues arose (deduplication, synchronization, server-stress, reliability & error catching). After going through and mapping out the architecture with my Team Lead, we decided to use QStash to handle the AI inferrence jobs.",
					"While reading through the docs, my team lead and I realized that this was actually something that needed to be done for a lot of other jobs that get triggered, without a queueing system we were basically waiting for a disaster. After setting it up, it was night and day, no dropped requests, automatic retries, overall a much more reliable system, and the AI inferrence jobs were now bringing unquantifiably better results.",
					"Tilt.dev: Tilt is a tool for making local development *so* much easier. Instead of having to mess around with Docker commands, kubectl, Apache configs, manage different environments, etc., Tilt just handlees everything for you. Auto-rebuild, logs, syncing, whatever you need when it comes to infrastructure and local development, Tilt handles it.",
					"Tilt genuinely is one of the most useful tools I've ever worked with, everyone has the same config, the same docker containers and kubernetes clusters, it's all standardized and just works. The best part? All you need to do is run `tilt up` and you're good to go.",
					"Overall I grew across all facets of engineering; backend, frontend, infrastructure, testing, scaling, and so much more. In 3 weeks I can confidently say that I learnt more than some people do in 3 years at other companies, I'm extremely grateful for the opportunity to work and learn at Botpress.",
				],
			},
			{
				id: "layoffs",
				title: "The reality of startups: Layoffs",
				paragraphs: [
					"Today, when I got into work I was made aware that the company was going through restructuring, 40% of the company was being laid off effective immediately. Unfortunately, I was one of the many affected.",
					"The news is definitely a shock, I still can't really process it. The hardest part is that I really loved working at Botpress, the people, the work, the culture, I was so proud to be part of it and I was so excited to start my career there, I honestly saw myself there for a very long time.",
					"That being said, I understand that this is simply the reality of startups and the tech industry in general. Does that mean it doesn't hurt? No, it definitely does, but the fact is that I was able to learn and grow so much in such a short amount of time, I'm already a better developer than I was a month ago and I'm confident that I'll keep growing.",
					"Layoffs suck and personally in most cases I think they're the wrong move for a company to make, but in tech you have to face the reality that they *do* happen, you just have to take the hit and move forward.",
				],
			},
		],
		links: [{ label: "Botpress", href: "https://botpress.com/" }],
		publishedAt: "2026-05-20",
		updatedAt: "2026-05-20",
		seo: {
			title: "Botpress Case Study | Carson Spriggs",
			description:
				"Learn about my experience at Botpress and the lessons I learned while working on various projects.",
			socialImage: "/botpress.webp",
		},
	},
	{
		slug: "argus",
		title: "Argus",
		summary:
			"Hackathon prototype for monitoring live video feeds with event detection and operator review tools.",
		projectType: "2x Hackathon Winning Project",
		stack: ["TypeScript", "AI", "Computer Vision", "PostgreSQL", "RTMP"],
		image: "/argus.jpg",
		presentation: {
			eyebrow: "Live ops tooling for machine-assisted review",
			accent: "mist",
			heroLayout: "immersive",
			indexLabel: "Monitoring workflow prototype",
			highlights: [
				{ label: "Outcome", value: "2x hackathon winner" },
				{ label: "Focus", value: "Signal-first operator review" },
				{ label: "Stack", value: "Vision, streaming, storage" },
			],
		},
		sections: [
			{
				id: "context",
				title: "Context",
				paragraphs: [
					"Argus began as an attempt to make live video review feel more humane for teams that need signal without sitting through every frame themselves.",
					"The central question was whether ingest, computer-vision analysis, and operator review could read as one coherent workflow instead of three disconnected tools.",
				],
			},
			{
				id: "build",
				title: "Build",
				paragraphs: [
					"I framed the demo around one continuous loop: bring in a live feed, analyze it automatically, and surface notable events in a review interface that still felt operator-led.",
					"The prototype stayed grounded in real constraints, with streaming, typed application code, and persistent storage carrying the idea beyond a superficial hackathon mock-up.",
				],
			},
			{
				id: "takeaways",
				title: "Takeaways",
				paragraphs: [
					"The result suggested that computer-vision assistance could reduce constant manual watching while still preserving clear review points for a human operator.",
					"It also became a stronger portfolio story because the architecture, product choices, and tradeoffs could be explained as one end-to-end system.",
				],
			},
		],
		links: [
			{ label: "GitHub", href: "https://github.com/GodPuffin/Argus" },
			{ label: "Devpost", href: "https://devpost.com/software/argus-w6i0pv" },
		],
		publishedAt: "2025-10-26",
		updatedAt: "2026-03-26",
		seo: {
			title: "Argus Case Study | Carson Spriggs",
			description:
				"How Carson Spriggs built Argus, a hackathon prototype that combines live video ingest, event detection, and operator review.",
			socialImage: "/klungo.png",
		},
	},
	{
		slug: "cropcare",
		title: "CropCare",
		summary:
			"Hackathon prototype for plant monitoring and control using sensors, cloud messaging, and operator dashboards.",
		projectType: "Capstone Project",
		stack: ["Python", "C#", "IoT", "Azure", "MQTT", "Hardware"],
		image: "/cropcare.jpg",
		presentation: {
			eyebrow: "Connected agriculture system spanning hardware and software",
			accent: "meadow",
			heroLayout: "balanced",
			indexLabel: "IoT monitoring and response prototype",
			highlights: [
				{ label: "Focus", value: "Readable monitoring and control" },
				{ label: "System", value: "Sensors, Azure, MQTT" },
				{ label: "Outcome", value: "End-to-end field workflow" },
			],
		},
		sections: [
			{
				id: "context",
				title: "Context",
				paragraphs: [
					"CropCare came from a simple observation: a lot of smart-agriculture demos prove the hardware works, but stop short of showing a software workflow that someone could actually trust day to day.",
					"The project was meant to connect field signals, cloud automation, and a readable operator experience inside one end-to-end story.",
				],
			},
			{
				id: "build",
				title: "Build",
				paragraphs: [
					"I used an Azure-backed MQTT pipeline to move between sensing and response, so the system could both observe conditions and react without feeling like a disconnected hardware demo.",
					"The interface work focused on making monitoring and control legible, which helped the project read as a product prototype instead of a bundle of technical parts.",
				],
			},
			{
				id: "takeaways",
				title: "Takeaways",
				paragraphs: [
					"The final prototype demonstrated reliable two-way communication between field data and cloud-side actions, which was the most important proof point for the concept.",
					"It also gave me a concise way to explain how embedded constraints, backend integration, and user-facing control design fit together.",
				],
			},
		],
		links: [
			{ label: "GitHub", href: "https://github.com/carsonSgit/CropCare" },
			{ label: "Live demo", href: "https://carsonsgit.github.io/cropcare-3d/" },
		],
		publishedAt: "2024-05-23",
		updatedAt: "2026-03-26",
		seo: {
			title: "CropCare Case Study | Carson Spriggs",
			description:
				"How Carson Spriggs built CropCare, a hackathon prototype that links sensor data, Azure services, and practical automation workflows.",
			socialImage: "/klungo.png",
		},
	},
	{
		slug: "linky",
		title: "Linky",
		summary:
			"Hackathon prototype that turns a URL into a searchable knowledge base with retrieval-backed answers.",
		projectType: "Hackathon Winning Project",
		stack: ["TypeScript", "AI", "RAG", "PostgreSQL", "Mantine"],
		image: "/linky.jpg",
		presentation: {
			eyebrow: "A calmer interface for retrieval-backed learning",
			accent: "gold",
			heroLayout: "balanced",
			indexLabel: "URL-to-knowledge product concept",
			highlights: [
				{ label: "Focus", value: "Learning workflow over chat UX" },
				{ label: "System", value: "Retrieval, storage, typed frontend" },
				{ label: "Outcome", value: "Searchable knowledge experience" },
			],
		},
		sections: [
			{
				id: "context",
				title: "Context",
				paragraphs: [
					"Linky started with a small but useful prompt: what if one URL could become a structured place to learn, not just a one-off chat input.",
					"I wanted the project to show both retrieval quality and a calmer product experience, since many AI demos only prove the model call and not the interface around it.",
				],
			},
			{
				id: "build",
				title: "Build",
				paragraphs: [
					"The product flow stayed intentionally simple: start with a URL, ingest the source material, and turn it into a knowledge layer that supports exploration instead of generic answers.",
					"Under the hood, the stack paired retrieval, storage, and a typed frontend so the project felt like a usable tool with real product decisions behind it.",
				],
			},
			{
				id: "takeaways",
				title: "Takeaways",
				paragraphs: [
					"The prototype showed how ingestion, retrieval, and interface design can reinforce each other when the product starts with a clear learning workflow.",
					"It also became a stronger write-up because the product decisions and technical implementation could be presented with the same level of clarity.",
				],
			},
		],
		links: [
			{ label: "GitHub", href: "https://github.com/carsonSgit/Linky" },
			{ label: "Website", href: "https://www.linky.im/" },
		],
		publishedAt: "2024-04-11",
		updatedAt: "2026-03-26",
		seo: {
			title: "Linky Case Study | Carson Spriggs",
			description:
				"How Carson Spriggs built Linky, a hackathon prototype that uses retrieval and interface design to improve exploration and learning.",
			socialImage: "/klungo.png",
		},
	},
];

export function getCaseStudyBySlug(slug: string) {
	return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
