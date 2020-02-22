import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const CategoryTitle = styled.h2`
  position: relative;
  background-color: var(--primary);
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
