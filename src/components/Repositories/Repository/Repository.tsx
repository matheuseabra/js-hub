import React from "react";
import { Avatar, Icon } from "evergreen-ui";
import {
  Container,
  RepoHeader,
  RepoName,
  RepoDescription,
  RepoStats,
  StatItem
} from "./Repository.styles";

interface RepositoryProps {
  name: string;
  description: string;
  avatar_url: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

const Repository = (repo: RepositoryProps) => {
  return (
    <Container>
      <a
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
        href={repo.html_url}
      >
        <RepoHeader>
          <Avatar
            src={repo.avatar_url}
            name={repo.name}
            size={45}
            style={{ marginRight: "10px" }}
          />
          <RepoName>{repo.name}</RepoName>
        </RepoHeader>
        <RepoDescription>{repo.description}</RepoDescription>
        <RepoStats>
          <StatItem>
            <Icon icon="star" color="#777" marginRight={5} />
            {repo.stargazers_count}
          </StatItem>
          <StatItem>
            <Icon icon="fork" color="#777" marginRight={5} /> {repo.forks_count}
          </StatItem>
          <StatItem>
            <Icon icon="issue-closed" color="#777" marginRight={5} />
            {repo.open_issues_count}
          </StatItem>
        </RepoStats>
      </a>
    </Container>
  );
};

export default Repository;
