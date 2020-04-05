import React, { useState, useContext, ChangeEvent } from "react";
import githubAPI from "../../services/githubAPI";
import { SideSheet } from "evergreen-ui";
import { ThemeContext } from "styled-components";
import { SidebarContext } from "../../context/SidebarContext";
import { Icon } from "evergreen-ui";

import {
  SidebarContainer,
  SidebarTitle,
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchResultsContainer,
  SearchResultList,
  SearchResultItem,
} from "./Sidebar.styles";

const Sidebar: React.FC = () => {
  const { showSidebar, setShowSidebar } = useContext(SidebarContext);
  const { colors } = useContext(ThemeContext);
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.currentTarget.value);
  };

  const submitSearch = async () => {
    const response = await githubAPI.get(
      `/search/repositories?q=${term}+topic:${term}&page=1&per_page=5&sort=stars&order=desc`
    );
    if (response.data) {
      setResults(
        response.data.items.map((item: any) => ({
          id: item.id,
          name: item.name,
          owner: item.owner.login,
        }))
      );
    }
  };

  return (
    <SideSheet
      isShown={showSidebar}
      onCloseComplete={() => setShowSidebar(false)}
      containerProps={{ backgroundColor: colors.body }}
      preventBodyScrolling={true}
    >
      <SidebarContainer>
        <SidebarTitle>Search GitHub repositories</SidebarTitle>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="e.g: react auth libraries"
            value={term}
            onChange={handleSearch}
          />
          <SearchButton onClick={submitSearch}>
            <Icon icon="search" color={colors.text} />
          </SearchButton>
        </SearchContainer>
        <SearchResultsContainer>
          <SearchResultList>
            {results &&
              results?.map(({ id, name, html_url, description }) => (
                <SearchResultItem key={id}>
                  <a href={html_url} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                  <p>{description}</p>
                </SearchResultItem>
              ))}
          </SearchResultList>
        </SearchResultsContainer>
      </SidebarContainer>
    </SideSheet>
  );
};

export default Sidebar;
