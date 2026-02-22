import type { Metadata, Viewport } from "next";
import "./globals.scss";
import Script from "next/script";

const BASE_URL = "https://carsonspriggs.me";

export const metadata: Metadata = {
	title: "carsonSgit",
	description:
		"Portfolio of Carson Spriggs. Fullstack developer, AI research, UI/UX.",
	metadataBase: new URL(BASE_URL),
	alternates: {
		canonical: "/",
	},
	authors: [{ name: "Carson Spriggs" }],
	keywords: [
		"Carson Spriggs",
		"software developer",
		"portfolio",
		"full-stack",
		"AI",
		"Memorial University",
		"Concordia University",
		"CUSEC",
		"John Abbott College",
	],
	icons: {
		icon: "/favicon.ico",
	},
	openGraph: {
		title: "carsonSgit",
		description:
			"Portfolio of Carson Spriggs. Fullstack developer, AI research, UI/UX.",
		url: BASE_URL,
		siteName: "carsonSgit",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary",
		title: "carsonSgit",
		description:
			"Portfolio of Carson Spriggs. Fullstack developer, AI research, UI/UX.",
	},
	manifest: "/manifest.json",
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
			name: "Concordia University",
			url: "https://www.concordia.ca/",
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
	readonly children: React.ReactNode;
}) {
	return (
		<html lang="en" data-theme="mono">
			<head>
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
					data-cache="false"
					strategy="afterInteractive"
					defer
				/>
			</body>
		</html>
	);
}
