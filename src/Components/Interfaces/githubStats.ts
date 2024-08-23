export interface GitHubStats {
  login: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface LanguageData {
  [key: string]: number;
}

export interface TopLanguage {
  language: string;
  bytes: number;
}
