import React from "react";
import Filters from "./Filters";
import { renderWithRouter } from "../../setupTests";

test("renders a filter properly", () => {
  const order = "asc";
  const handleOrderChange = () => {};

  const { container } = renderWithRouter(
    <Filters order={order} handleOrderChange={handleOrderChange} />
  );

  expect(container).toBeInTheDocument();
});
