// https://api.github.com/users/carsonSgit

export const getGitHubProfileStats = async () => {
    const response = await fetch('https://api.github.com/users/carsonSgit');
    const data = await response.json();
    return data;
}
