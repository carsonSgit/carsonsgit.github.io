import type { Metadata, Viewport } from "next";
import "./globals.scss";
import "./styles/guide-modal.scss";
import Script from "next/script";

const BASE_URL = "https://carsonsgit.github.io";

export const metadata: Metadata = {
	title: "Carson Spriggs — Software Developer & Student",
	description:
		"Portfolio of Carson Spriggs, a software developer and engineering student at Memorial University. Co-Chair of CUSEC, CS alumni of John Abbott College. Projects in AI, IoT, full-stack, and more.",
	authors: [{ name: "Carson Spriggs" }],
	keywords: [
		"Carson Spriggs",
		"software developer",
		"portfolio",
		"full-stack",
		"AI",
		"React",
		"Next.js",
		"TypeScript",
		"Memorial University",
		"CUSEC",
		"John Abbott College",
	],
	icons: {
		icon: "/favicon.ico",
	},
	manifest: "/manifest.json",
	alternates: {
		canonical: BASE_URL,
	},
	openGraph: {
		title: "Carson Spriggs — Software Developer & Student",
		description:
			"Portfolio of Carson Spriggs, a software developer and engineering student at Memorial University. Co-Chair of CUSEC, CS alumni of John Abbott College.",
		url: BASE_URL,
		siteName: "Carson Spriggs Portfolio",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary",
		title: "Carson Spriggs — Software Developer & Student",
		description:
			"Portfolio of Carson Spriggs, a software developer and engineering student at Memorial University. Co-Chair of CUSEC, CS alumni of John Abbott College.",
	},
};

export const viewport: Viewport = {
	themeColor: "#0d0d0f",
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Carson Spriggs",
	url: BASE_URL,
	sameAs: [
		"https://github.com/carsonSgit",
		"https://linkedin.com/in/carsonspriggs",
	],
	jobTitle: "Software Developer",
	worksFor: {
		"@type": "Organization",
		name: "Botpress",
	},
	alumniOf: [
		{
			"@type": "CollegeOrUniversity",
			name: "Memorial University of Newfoundland",
			url: "https://www.mun.ca/",
		},
		{
			"@type": "CollegeOrUniversity",
			name: "John Abbott College",
			url: "https://www.johnabbott.qc.ca/",
		},
	],
	knowsAbout: [
		"Software Development",
		"Artificial Intelligence",
		"IoT",
		"Full-Stack Development",
		"DevOps",
		"Machine Learning",
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" data-theme="mono">
			<head>
				{/* Preconnect to analytics origin to reduce latency */}
				<link rel="preconnect" href="https://cloud.umami.is" />
				<link
					rel="preload"
					href="/fonts/CommitMono-400-Regular.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/CommitMono-700-Regular.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD, no user input
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body className="theme-mono">
				{children}
				<Script
					src="https://cloud.umami.is/script.js"
					data-website-id="3a4253fc-dee7-4c4e-bd4a-a5eba54a2df1"
					strategy="afterInteractive"
					defer
				/>
			</body>
		</html>
	);
}
