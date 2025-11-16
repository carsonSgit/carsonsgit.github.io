export interface Project {
	title: string;
	description: string;
	github?: string;
	website?: string;
	languages: ProjectLanguage[];
}

export interface ProjectLanguage {
	name: string;
	backgroundColour: string;
}

export interface ProjectItemProps {
	languages: ProjectLanguage[];
	project: Project;
}
