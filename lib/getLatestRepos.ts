import axios from "axios";

interface GithubData {
  githubUsername: string;
}

interface Repo {
  // Add specific repo properties here
  id: number;
  name: string;
  // Add other relevant properties
}

interface GithubResponse {
  items: Repo[];
}

const getLatestRepos = async (
  data: GithubData,
  token?: string
): Promise<Repo[] | undefined> => {
  try {
    const { githubUsername } = data;
    const url = `https://api.github.com/search/repositories?q=user:${githubUsername}+sort:author-date-asc`;

    const config = token
      ? { headers: { Authorization: `token ${token}` } }
      : undefined;

    const res = await axios.get<GithubResponse>(url, config);
    return res.data.items.slice(0, 6);
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export default getLatestRepos;
