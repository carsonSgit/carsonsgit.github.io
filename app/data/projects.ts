import type * as z from "zod";
import type { projectSchema } from "../types/zodTypes";
import { colours } from "./colours";

export const projects: z.infer<typeof projectSchema>[] = [
    {
        year: 2025,
        title: "Argus",
        description: "All-in-one AI-native surveillance suite for monitoring and analyzing live feeds from various sources autonomously.",
        languages: {
            ai: { name: "AI", backgroundColour: colours.ai },
            cv: { name: "Computer Vision", backgroundColour: colours.cv },
            ts: { name: "TypeScript", backgroundColour: colours.ts },
            db: { name: "PostgreSQL", backgroundColour: colours.postgresql },
            rtmp: { name: "RTMP", backgroundColour: colours.rtmp },
        },
        github: "https://github.com/GodPuffin/Argus",
        website: "https://devpost.com/software/argus-w6i0pv",
    },
    {
        year: 2025,
        title: "CropCare",
        description: "IoT-based smart farming solution for automated plant monitoring and control through a bi-directional MQTT Azure pipeline.",
        languages: {
            py: { name: "Python", backgroundColour: colours.py },
            csharp: { name: "C#", backgroundColour: colours.csharp },
            hardware: { name: "Hardware", backgroundColour: colours.hardware },
            azure: { name: "Azure", backgroundColour: colours.azure },
            iot: { name: "IoT", backgroundColour: colours.iot },
        },
        github: "https://github.com/carsonSgit/CropCare",
        website: "https://carsonsgit.github.io/cropcare-3d/",
    },
    {
        year: 2025,
        title: "Linky",
        description: "AI-powered URL-based knowledge base for interactive learning and exploration using RAG AI and a Vector database for information storage and retrieval.",
        languages: {
            mantine: { name: "Mantine", backgroundColour: colours.mantine },
            ts: { name: "TypeScript", backgroundColour: colours.ts },
            ai: { name: "AI", backgroundColour: colours.ai },
            db: { name: "PostgreSQL", backgroundColour: colours.postgresql },
        },
        github: "https://github.com/carsonSgit/Linky",
        website: "https://www.linky.im/",
    },
    {
        year: 2025, 
        title: "Pathfinder",
        description: "3D interactive career coach for exploring and discovering career paths using AI and complex data analysis.",
        languages: {
            threejs: { name: "Three.js", backgroundColour: colours.threejs },
            ts: { name: "TypeScript", backgroundColour: colours.ts },
            ai: { name: "AI", backgroundColour: colours.ai },
            zustand: { name: "Zustand", backgroundColour: colours.zustand },
        },
        github: "https://github.com/xsachax/pathfinder_conuhacks-2025",
        website: "https://www.pathfinderhelpsyoudecidewhereyouwantto.work/?",
    },
    {
        year: 2024,
        title: "Mice Neural Decoding",
        description: "Neural decoding of the retrosplenial cortex of mice through Machine Learning analysis of L2/3 neuron activity to predict mouse navigation decisions.",
        languages: {
            py: { name: "Python", backgroundColour: colours.py },
            ml: { name: "Machine Learning", backgroundColour: colours.ml },
            neuroscience: { name: "Neuroscience", backgroundColour: colours.neuroscience },
        },
        github: "https://github.com/carsonSgit/Mice-Neural-Decoding-ML",
        website: "https://github.com/carsonSgit/Mice-Neural-Decoding-ML/blob/main/PharmaHacks%202024%20Neural%20Decoding%20Single%20File.ipynb",
    }
];