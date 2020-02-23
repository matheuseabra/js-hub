export interface RepositoryType {
  id: number;
  name: string;
  owner: {
    avatar_url: string;
  };
  avatar_url: string;
  full_name: string;
  description: string;
  html_url: string;
  git_url: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}
