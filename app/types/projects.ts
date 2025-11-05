export interface Language {
  name: string;
  backgroundColour: string;
}

export interface Project {
  title: string;
  languages: Language[];
  description: string;
  github?: string;
  website?: string;
}

export interface ProjectItemProps {
  project: Project;
}

