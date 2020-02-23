import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;

export const Filter = styled.div`
  cursor: pointer;
  border: none;
  padding: 10px;
  background-color: ${props => props.theme.colors.body};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: 0 5px;
`;

export const CategoryTitle = styled.h2`
  position: relative;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  width: 50px;
  height: 50px;
  padding: 1em;
`;

export const RepoGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 15px;
  padding: 0;
  margin: 0;
  list-style-type: none;
  animation: 0.45s ease-in-out 0s fadeInUp;
`;
