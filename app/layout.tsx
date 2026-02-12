import type { Metadata, Viewport } from "next";
import "./globals.scss";
import "./styles/guide-modal.scss";
import Script from "next/script";

export const metadata: Metadata = {
	title: "carsonSgit Portfolio",
	description:
		"My personal portfolio. Showcasing my projects, experience, and more.",
	icons: {
		icon: "/favicon.ico",
	},
	manifest: "/manifest.json",
	openGraph: {
		title: "carsonSgit Portfolio",
		description:
			"My personal portfolio. Showcasing my projects, experience, and more.",
		url: "https://carsonsgit.github.io",
		siteName: "carsonSgit Portfolio",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary",
		title: "carsonSgit Portfolio",
		description:
			"My personal portfolio. Showcasing my projects, experience, and more.",
	},
};

export const viewport: Viewport = {
	themeColor: "#0d0d0f",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" data-theme="mono">
			<head>
				<link
					rel="preload"
					href="/fonts/CommitMono-400-Regular.otf"
					as="font"
					type="font/opentype"
					crossOrigin="anonymous"
				/>
			</head>
			<Script
				src="https://cloud.umami.is/script.js"
				data-website-id="3a4253fc-dee7-4c4e-bd4a-a5eba54a2df1"
				strategy="afterInteractive"
				defer
			/>
			<body className="theme-mono">{children}</body>
		</html>
	);
}
