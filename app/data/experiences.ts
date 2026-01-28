import * as z from "zod";
import { experienceSchema } from "../types/zodTypes";
import { colours } from "./colours";

export const professionalExp: z.infer<typeof experienceSchema>[] = [
    {
        date: ["May 2025", "April 2026"],
        title: "SQA Specialist & Dev",
        institution: "Fundica",
        description: [
            "Building an automated CI/CD AI WCAG accessibility tool reducing audit times by 99%.",
            "Handling product development for customer-facing AI tools and features."
        ],
        experienceBadges: {
            automation: { label: "Automation", backgroundColour: colours.automation },
            ai: { label: "AI", backgroundColour: colours.ai },
            devops: { label: "DevOps", backgroundColour: colours.devops },
        },
        link: "https://fundica.com",
    },
    {
        date: ["March 2024", "Present"],
        title: "Co-Chair",
        institution: "CUSEC",
        description: [
            "Leading the organization of Canada's largest student tech conference, with 350+ attendees from 15+ universities nationwide."
        ],
        experienceBadges: {
            leadership: { label: "Leadership", backgroundColour: colours.leadership },
            management: { label: "Management", backgroundColour: colours.management },
            logistics: { label: "Logistics", backgroundColour: colours.logistics },
        },
        link: "https://2026.cusec.net/",
    },
    {
        date: ["May 2024", "Aug 2024"],
        title: "SDE Intern",
        institution: "Tail'ed",
        description: [
            "Improved UI/UX, ensuring responsiveness and consistency. (Next.js, TypeScript, Docker)",
            "Built an AI recruitment tool using Python, vector databases, and AWS Lambda, improving accuracy by 90%",
        ],
        experienceBadges: {
            ai: { label: "AI", backgroundColour: colours.ai },
            aws: { label: "AWS", backgroundColour: colours.aws },
            rnd: { label: "R&D", backgroundColour: colours.rnd },
        },
        link: "https://tailed.ca",
    },
    {
        date: ["Jan 2024", "May 2024"],
        title: "IT Intern",
        institution: "Ville de Kirkland",
        description: [
            "Resolved 100+ critical IT incidents across municipal infrastructure, ensuring uninterrupted city services.",
            "Performed cybersecurity remediation using CrowdStrike Falcon, eliminating 4,500+ vulnerabilities.",
        ],
        experienceBadges: {
            it: { label: "IT", backgroundColour: colours.it },
            cybersecurity: { label: "Cybersecurity", backgroundColour: colours.cybersecurity },
            networking: { label: "Networking", backgroundColour: colours.networking },
        },
        link: "https://ville.kirkland.qc.ca/",
    },
    {
        date: ["March 2024", "July 2024"],
        title: "President",
        institution: "JACHacks",
        description: [
            "Managed a team of 5 to ensure the successful organization and execution of the hackathon.",
            "Organized the event with a short timeline of 1.5 months, resulting in 130+ attendeess and overly positive feedback.",
        ],
        experienceBadges: {
            leadership: { label: "Leadership", backgroundColour: colours.leadership },
            management: { label: "Management", backgroundColour: colours.management },
            logistics: { label: "Logistics", backgroundColour: colours.logistics },
        },
        link: "https://jachacks.pages.dev/",
    },
    {
        date: ["Feb 2024", "Apr 2024"],
        title: "R&D Fellow",
        institution: "AI Launch Lab",
        description: [
            "Learned Machine Learning and AI topics and material under PhDs.",
            "Developed the ML project TradeMind to predict the stock market using Python and Keras.",
            "Presented the project to a panel of investors and industry professionals.",
            "Noted as the top project of the program's conception.",
        ],
        experienceBadges: {
            rnd: { label: "R&D", backgroundColour: colours.rnd },
            ai: { label: "AI", backgroundColour: colours.ai },
        },
        link: "https://launchlab.ai/rd-program/",
    }
];

export const educationExp: z.infer<typeof experienceSchema>[] = [
    {
        date: ["Sept 2025", "Present"],
        title: "B.EngTech & Applied Sci",
        institution: "Memorial University",
        description: [
            "Engineering, technology, project management, applied statistics, business, and more."
        ],
        experienceBadges: {
            engineering: { label: "Engineering", backgroundColour: colours.engineering },
            sciences: { label: "Sciences", backgroundColour: colours.sciences },
            qm: { label: "Quality Management", backgroundColour: colours.qm },
        },
        link: "https://www.mun.ca/",
    },
    {
        date: ["Aug 2024", "May 2025"],
        title: "B.Econ",
        institution: "Concordia University",
        description: [
            "Economics, realized business isn't for me."
        ],
        experienceBadges: {
            business: { label: "Business", backgroundColour: colours.business },
            econ: { label: "Economics", backgroundColour: colours.econ },
        },
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
        experienceBadges: {
            dataStructures: { label: "Data Structures", backgroundColour: colours.dataStructures },
            algorithms: { label: "Algorithms", backgroundColour: colours.algorithms },
            swe: { label: "Software Engineering", backgroundColour: colours.swe },
            security: { label: "Security", backgroundColour: colours.security },
            iot: { label: "IoT", backgroundColour: colours.iot },
        },
        link: "https://www.johnabbott.qc.ca/",
    }
];