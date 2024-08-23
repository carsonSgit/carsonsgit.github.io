// https://api.github.com/users/carsonSgit

import { TopLanguage, LanguageData } from '../Interfaces/githubStats';

export const getGitHubProfileStats = async () => {
  const response = await fetch('https://api.github.com/users/carsonSgit');
  const data = await response.json();
  return data;
};

export const getGitHubProfileLanguages = async (): Promise<TopLanguage[]> => {
  const reposResponse = await fetch(
    'https://api.github.com/users/carsonSgit/repos',
  );
  const reposData = await reposResponse.json();

  const languageMap: Record<string, number> = {};

  for (const repo of reposData) {
    const languagesResponse = await fetch(
      `https://api.github.com/repos/carsonSgit/${repo.name}/languages`,
    );
    const languagesData: LanguageData = await languagesResponse.json();

    for (const [language, bytes] of Object.entries(languagesData)) {
      if (
        language !== 'Jupyter Notebook' &&
        language !== 'HTML' &&
        language !== 'CSS' &&
        language !== 'Mermaid' &&
        language !== 'SCSS'
      ) {
        languageMap[language] = (languageMap[language] || 0) + bytes;
      }
    }
  }

  return Object.entries(languageMap)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([language, bytes]) => ({ language, bytes }));
};
