import React from "react";
import Footer from "./Footer";
import { renderWithRouter } from "../../setupTests";

test("renders a Footer properly", () => {
  const { getByText } = renderWithRouter(<Footer />);

  const githubLink = getByText(/Github/i);
  expect(githubLink).toBeInTheDocument();

  const twitterLink = getByText(/Twitter/i);
  expect(twitterLink).toBeInTheDocument();
});
