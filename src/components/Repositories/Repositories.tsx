import React, { useEffect, useState } from "react";
import githubAPI from "../../services/githubAPI";
import RepositoryType from "../../types/RepositoryType";
import Repository from "./Repository/Repository";
import Loader from "../Loader/Loader";
import {
  Container,
  CategoryTitle,
  RepoGrid
} from "../Repositories/Repositories.styles";

const Repositories: React.FC = () => {
  const [repositories, setRepositories] = useState<[RepositoryType]>();
  const [isLoading, setIsLoading] = useState(false);
  const [term, setTerm] = useState("javascript");
  const [order, setOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(24);

  const [query] = useState<string>(
    `${term}+topic:${term}&page=${currentPage}&per_page=${limit}&sort=stars&order=${order}`
  );

  useEffect(() => {
    const fetchRepositories = async () => {
      setIsLoading(true);
      const response = await githubAPI.get(`/search/repositories?q=${query}`);
      if (response.data) {
        setRepositories(
          response.data.items.map((item: RepositoryType) => ({
            id: item.id,
            name: item.name,
            avatar_url: item.owner.avatar_url,
            full_name: item.full_name,
            description: item.description,
            html_url: item.html_url,
            git_url: item.git_url,
            stargazers_count: item.stargazers_count,
            forks_count: item.forks_count,
            open_issues_count: item.open_issues_count
          }))
        );
        setIsLoading(false);
      }
    };
    fetchRepositories();
  }, [query]);

  const handleLimitChange = (e: any) => {
    setLimit(e.target.value);
  };

  const handleTermChange = (e: any) => {
    setTerm(e.target.value);
  };

  const handleOrderChange = (e: any) => {
    setOrder(e.target.value);
  };

  const handlePageChange = (e: any) => {
    setCurrentPage(e.target.value);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <CategoryTitle>JavaScript</CategoryTitle>
      <RepoGrid>
        {repositories?.map(
          ({
            id,
            name,
            description,
            avatar_url,
            html_url,
            stargazers_count,
            forks_count,
            open_issues_count
          }) => (
            <Repository
              key={id}
              name={name}
              description={description}
              avatar_url={avatar_url}
              html_url={html_url}
              stargazers_count={stargazers_count}
              forks_count={forks_count}
              open_issues_count={open_issues_count}
            />
          )
        )}
      </RepoGrid>
    </Container>
  );
};

export default Repositories;
