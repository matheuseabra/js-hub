import React from "react";
import NotFound from "./NotFound";
import { renderWithRouter } from "../../setupTests";

test("renders a not found component properly", () => {
  const { getByText } = renderWithRouter(<NotFound />);
  const title = getByText(/Oops! 404 not found/i);
  expect(title).toBeInTheDocument();
});
