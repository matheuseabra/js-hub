import React from "react";
import { Icon, Tooltip } from "evergreen-ui";
import { Container, Filter } from "./Filters.styles";

type FiltersProps = {
  order: string;
  handleOrderChange: VoidFunction;
};

const Filters: React.FC<FiltersProps> = ({ order, handleOrderChange }) => (
  <Container>
    <Filter onClick={handleOrderChange}>
      {order !== "asc" ? (
        <Tooltip content="Sort by most stars">
          <Icon icon="sort-desc" color="#777" />
        </Tooltip>
      ) : (
        <Tooltip content="Sort by least stars">
          <Icon icon="sort-asc" color="#777" />
        </Tooltip>
      )}
    </Filter>
  </Container>
);

export default Filters;
