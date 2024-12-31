export interface Language {
  name: string;
  backgroundColour: string;
}

export interface Project {
  image: string;
  title: string;
  languages: Language[];
  description: string;
  github?: string;
  website?: string;
}
