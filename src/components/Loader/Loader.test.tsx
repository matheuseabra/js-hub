import React from "react";
import Loader from "./Loader";
import { renderWithRouter } from "../../setupTests";

test("renders a Loader properly", () => {
  const { container } = renderWithRouter(<Loader />);
  expect(container).toBeInTheDocument();
});
