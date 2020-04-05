import React, { useEffect, useState, useMemo } from "react";
import githubAPI from "../../services/githubAPI";
import { RepositoryType } from "../../types/RepositoryType";
import { Pane } from "evergreen-ui";
import { Footer, Filters, Loader, Repository } from "../../components";
import {
  Container,
  CategoryContainer,
  CategoryTitle,
  CategoryLogo,
  RepoGrid,
} from "../Repositories/Repositories.styles";

import jsLogo from "../../assets/javascript.svg";

type RepositoriesProps = {
  term?: string;
  techLogo?: string;
};

const Repositories: React.FC<RepositoriesProps> = ({ term, techLogo }) => {
  const [repositories, setRepositories] = useState<[RepositoryType]>();
  const [isLoading, setIsLoading] = useState(false);
  const [order, setOrder] = useState("desc");
  const [currentPage] = useState(1);
  const [limit] = useState(36);
  const isLoaded = !isLoading && repositories?.length;

  useEffect(() => {
    (async () => {
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
            open_issues_count: item.open_issues_count,
          }))
        );
        setIsLoading(false);
      }
    })();
  }, [term, currentPage, order, limit]);

  const handleOrderChange = () => {
    setOrder((prevState) => (prevState === "desc" ? "asc" : "desc"));
  };

  const repositoriesMap = useMemo(
    () =>
      isLoaded &&
      repositories?.map(
        ({
          id,
          name,
          description,
          avatar_url,
          html_url,
          stargazers_count,
          forks_count,
          open_issues_count,
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
      ),
    [repositories, isLoaded]
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Container>
        <Pane display="flex">
          <Pane flex={1} alignItems="center" display="flex">
            <CategoryContainer>
              <CategoryLogo src={techLogo} />
              <CategoryTitle>{term}</CategoryTitle>
            </CategoryContainer>
          </Pane>
          <Pane>
            <Filters order={order} handleOrderChange={handleOrderChange} />
          </Pane>
        </Pane>
        <RepoGrid>{repositoriesMap}</RepoGrid>
      </Container>
      <Footer />
    </>
  );
};

Repositories.defaultProps = {
  term: "JavaScript",
  techLogo: jsLogo,
};

export default Repositories;
