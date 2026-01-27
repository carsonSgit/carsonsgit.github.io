import type { Metadata, Viewport } from "next";
import "./globals.scss";
import "./styles/guide-modal.scss";
import Script from "next/script";

export const metadata: Metadata = {
	title: "carsonSgit",
	description: "Personal Portfolio website, coded by me :]",
	icons: {
		icon: "/favicon.ico",
	},
	manifest: "/manifest.json",
};

export const viewport: Viewport = {
	themeColor: "#FAF9F6",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" data-theme="mono">
			<head />
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
