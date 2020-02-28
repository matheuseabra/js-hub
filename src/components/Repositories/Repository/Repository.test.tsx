import React from "react";
import Repository from "./Repository";
import { renderWithRouter } from "../../../setupTests";

test("renders a Repository", () => {
  const defaultProps = {
    name: "Test repo",
    description: "sample test",
    avatar_url: "",
    html_url: "",
    stargazers_count: 12,
    forks_count: 3,
    open_issues_count: 0
  };

  const { container, getByText } = renderWithRouter(
    <Repository {...defaultProps} />
  );

  expect(container).toBeInTheDocument();

  const name = getByText(/test repo/i);
  expect(name).toBeInTheDocument();

  const description = getByText(/sample test/i);
  expect(description).toBeInTheDocument();
});
