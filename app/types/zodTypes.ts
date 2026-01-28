import * as z from "zod";

export const experienceSchema = z.object({
    date: z.array(z.string()),
    title: z.string(),
    institution: z.string(),
    description: z.array(z.string()),
    experienceBadges: z.record(z.string(), z.object({
        label: z.string(),
        backgroundColour: z.string(),
    })),
    link: z.string(),
})