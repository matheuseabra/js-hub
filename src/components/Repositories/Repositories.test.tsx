import React from "react";
import Repositories from "./Repositories";
import { renderWithRouter } from "../../setupTests";

test("renders a list of repositories", () => {
  const defaultProps = {
    term: "test",
    techLogo: "../../assets/javascript.svg"
  };

  const { container } = renderWithRouter(<Repositories {...defaultProps} />);
  expect(container).toBeInTheDocument();
});
