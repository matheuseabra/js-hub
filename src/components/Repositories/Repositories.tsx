import React, { useEffect, useState } from "react";
import githubAPI from "../../services/githubAPI";
import { RepositoryType } from "../../types/RepositoryType";
import Repository from "./Repository/Repository";
import Filters from "../Filters/Filters";
import { Pane } from "evergreen-ui";
import Loader from "../Loader/Loader";
import {
  Container,
  CategoryTitle,
  RepoGrid
} from "../Repositories/Repositories.styles";

type RepositoriesProps = {
  term?: string;
};

const Repositories: React.FC<RepositoriesProps> = ({ term }) => {
  const [repositories, setRepositories] = useState<[RepositoryType]>();
  const [isLoading, setIsLoading] = useState(false);

  const [order, setOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(24);

  useEffect(() => {
    const fetchRepositories = async () => {
      setIsLoading(true);
      const response = await githubAPI.get(
        `/search/repositories?q=${term}+topic:${term}&page=${currentPage}&per_page=${limit}&sort=stars&order=${order}`
      );
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
  }, [term, currentPage, order, limit]);

  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(e.currentTarget.valueAsNumber);
  };

  const handleOrderChange = () => {
    setOrder(prevState => (prevState === "desc" ? "asc" : "desc"));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <Pane display="flex">
        <Pane flex={1} alignItems="center" display="flex">
          <CategoryTitle>{term}</CategoryTitle>
        </Pane>
        <Pane>
          <Filters order={order} handleOrderChange={handleOrderChange} />
        </Pane>
      </Pane>

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

Repositories.defaultProps = {
  term: "JavaScript"
};

export default Repositories;
