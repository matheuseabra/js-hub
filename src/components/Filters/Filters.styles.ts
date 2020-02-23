import styled from "styled-components";

export const Container = styled.div`
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
