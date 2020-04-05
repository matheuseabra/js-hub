import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.body};
  padding: 1em;
  border-radius: 5px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform: translateY(0px);

  &:hover {
    transform: translateY(-8px);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @media only screen and (max-width: 468px) {
    width: 350px;
    margin: 0 auto;
  }
`;

export const RepoHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const RepoName = styled.h3`
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  margin: 0;
`;

export const RepoDescription = styled.p`
  color: ${(props) => props.theme.colors.text};
`;

export const RepoStats = styled.ul`
  display: inline-flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const StatItem = styled.li`
  margin: 0 10px;
  display: flex;
  align-items: center;
  font-weight: 300;
  color: ${(props) => props.theme.colors.text};

  &:first-child {
    margin: 0;
  }
`;
