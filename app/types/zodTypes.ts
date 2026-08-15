import * as z from "zod";

export const experienceSchema = z.object({
	date: z.array(z.string()),
	title: z.string(),
	institution: z.string(),
	tagline: z.string().optional(),
	description: z.array(z.string()),
	link: z.string(),
});

const projectLinkSchema = z.object({
	label: z.string(),
	href: z.string(),
});

export const projectSchema = z.object({
	title: z.string(),
	description: z.string(),
	caseStudySlug: z.string().optional(),
	links: z.array(projectLinkSchema),
});
