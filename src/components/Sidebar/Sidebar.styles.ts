import styled from "styled-components";

export const SidebarContainer = styled.aside`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  z-index: 1;
  padding: 16px;
`;

export const SidebarTitle = styled.h2`
  color: ${props => props.theme.colors.text};
  font-family: var(--font);
  font-weight: var(--font-bold);
`;

export const SearchInput = styled.input`
  height: 40px;
  max-width: 50%;
  background-color: ${props => props.theme.colors.body};
  border: 2px solid ${props => props.theme.colors.text};
  color: ${props => props.theme.colors.text};
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
