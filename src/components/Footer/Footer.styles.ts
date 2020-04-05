import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  padding: 20px;
  margin: 50px 0 0 0;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const FooterLogo = styled.h3``;

export const FooterDescription = styled.span`
  margin-left: 10px;
  line-height: 1.3;
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  opacity: 0.8;
`;

export const FooterList = styled.ul`
  display: inline-flex;
  list-style: none;
`;

export const FooterItem = styled.li`
  margin: 0 10px;

  &:first-child {
    margin-left: 0;
  }
`;

export const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.text};
  font-weight: 400;
  font-weight: bold;
  opacity: 0.8;
`;
