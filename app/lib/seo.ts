import type { Metadata } from "next";

export const BASE_URL = "https://carsonspriggs.me";
export const SITE_NAME = "Carson Spriggs-Audet";
export const DEFAULT_TITLE = "Carson Spriggs-Audet | Software Developer";
export const DEFAULT_DESCRIPTION =
	"Carson Spriggs-Audet is a Canada-based AI Automation Software Developer at Qohash, focused on automation, data, and practical software.";
export const DEFAULT_SOCIAL_IMAGE = "/social-card.png";
export const DEFAULT_SOCIAL_IMAGE_ALT =
	"Carson Spriggs-Audet software developer portfolio preview card.";

export function absoluteUrl(pathname = "/") {
	return new URL(pathname, BASE_URL).toString();
}

type MetadataInput = {
	title: string;
	description: string;
	pathname: string;
	keywords?: string[];
	image?: string;
	openGraphType?: "website" | "article";
	publishedTime?: string;
	modifiedTime?: string;
};

export function createPageMetadata({
	title,
	description,
	pathname,
	keywords,
	image = DEFAULT_SOCIAL_IMAGE,
	openGraphType = "website",
	publishedTime,
	modifiedTime,
}: MetadataInput): Metadata {
	const url = absoluteUrl(pathname);
	const socialImage = absoluteUrl(image);

	return {
		title,
		description,
		keywords,
		alternates: {
			canonical: url,
		},
		category: "Software Engineering",
		openGraph: {
			title,
			description,
			url,
			siteName: SITE_NAME,
			locale: "en_CA",
			type: openGraphType,
			images: [
				{
					url: socialImage,
					width: 1200,
					height: 630,
					alt: DEFAULT_SOCIAL_IMAGE_ALT,
				},
			],
			...(publishedTime ? { publishedTime } : {}),
			...(modifiedTime ? { modifiedTime } : {}),
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [socialImage],
		},
	};
}
