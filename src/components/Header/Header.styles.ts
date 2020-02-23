import styled from "styled-components";

export const Container = styled.header`
  background: ${props => props.theme.colors.primary};
  padding: 15px 20px;
  display: flex;
  flex-direction: column wrap;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colors.text};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 468px) {
    display: none;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Logotype = styled.h3`
  font-weight: bold;
  font-size: 20px;
  margin: 0;
  padding: 0;
  color: ${props => props.theme.colors.text};
`;

export const Nav = styled.ul`
  display: inline-flex;
  list-style-type: none;
`;

export const NavItem = styled.li`
  margin: 0 20px;
  font-weight: bold;
  cursor: pointer;
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }
`;
