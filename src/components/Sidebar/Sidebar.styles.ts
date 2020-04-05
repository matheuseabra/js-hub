import styled from "styled-components";

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  z-index: 1;
  padding: 16px 0;
`;

export const SidebarTitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-family: var(--font);
  font-weight: var(--font-bold);
`;

export const SearchContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchInput = styled.input`
  height: 40px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.body};
  border: 2px solid ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.text};
  border-radius: 4px;
  padding: 0 10px;
  text-align: initial;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &::placeholder {
    color: var(--grey);
    font-family: var(--font);
    font-weight: var(--font-bold);
  }
`;

export const SearchButton = styled.button`
  border-radius: 3px;
  padding: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: ${(props) => props.theme.colors.body};
  border: 2px solid ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  margin: 0 10px;
`;

export const SearchResultsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const SearchResultList = styled.ul`
  list-style: none;
  margin: 10px 0;
`;

export const SearchResultItem = styled.li`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  margin: 10px 0;
`;
