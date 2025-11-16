export type Statistics = {
	[key: string]: {
		stats: string[];
	} | null;
};

export interface EducationItem {
	date: string;
	title: string;
	institution: string;
	description: string[];
	statsKey: string;
	link: string;
}

export interface ExperienceItem {
	date: string;
	title: string;
	company: string;
	description: string[];
	statsKey: string;
	link: string;
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
