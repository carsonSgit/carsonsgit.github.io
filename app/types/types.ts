// TECH DEBT: Statistics type is overly permissive. Consider using discriminated unions or const assertions
// for better type safety when migrating to Next.js
export type Statistics = {
  [key: string]: {
    [key: string]: number | string;
  } | null;
};

export interface HoverColors {
  company?: string;
  institution?: string;
  role?: string;
}

export interface EducationItem {
  date: string;
  title: string;
  institution: string;
  description: string[];
  statsKey: string;
  link: string;
  hoverColors?: HoverColors;
}

export interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string[];
  statsKey: string;
  link: string;
  hoverColors?: HoverColors;
}

export interface Highlight {
  x: number;
  y: number;
  color: string;
  createdAt: number;
}

