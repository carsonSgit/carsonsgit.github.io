// https://api.github.com/users/carsonSgit

export const getGitHubProfileStats = async () => {
    const response = await fetch('https://api.github.com/users/carsonSgit');
    const data = await response.json();
    return data;
}

export const getGitHubProfileLanguages = async () => {
    const reposResponse = await fetch('https://api.github.com/users/carsonSgit/repos');
    const repos = await reposResponse.json();

    const languagesPromises = repos.map(async (repo: { name: string }) => {
        const languagesResponse = await fetch(`https://api.github.com/repos/carsonSgit/${repo.name}/languages`);
        const languages = await languagesResponse.json();
        return { repo: repo.name, languages };
    });

    const languagesData = await Promise.all(languagesPromises);
    
    return languagesData;
}
