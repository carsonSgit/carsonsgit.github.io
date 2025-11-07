export interface StatBadge {
  label: string;
  value: string | number;
  backgroundColour: string;
}

export type Statistics = {
  [key: string]: {
    stats: StatBadge[];
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

export interface SnakeSegment {
  x: number;
  y: number;
  color: string;
}

export interface FoodTile {
  x: number;
  y: number;
}

export interface SnakeGameState {
  isActive: boolean;
  snake: SnakeSegment[];
  food: FoodTile[];
}

