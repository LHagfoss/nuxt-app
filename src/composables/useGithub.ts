export const useGithub = () => {
  const config = useRuntimeConfig()
  const baseUrl = 'https://api.github.com'

  const getHeaders = () => {
    return {
      Authorization: `token ${config.githubToken}`,
      Accept: 'application/vnd.github.v3+json',
    }
  }

  const fetchRepos = async () => {
    return await useFetch(`${baseUrl}/users/${config.public.githubUsername}/repos`, {
      headers: getHeaders(),
      params: {
        sort: 'updated',
        per_page: 100
      },
      transform: (repos: any[]) => {
        return repos.filter(repo => repo.topics.includes('blog'))
      }
    })
  }

  const fetchReadme = async (repoName: string) => {
    return await useFetch(`${baseUrl}/repos/${config.public.githubUsername}/${repoName}/readme`, {
      headers: {
        ...getHeaders(),
        Accept: 'application/vnd.github.v3.raw'
      }
    })
  }

  return {
    fetchRepos,
    fetchReadme
  }
}