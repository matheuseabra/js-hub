import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Repository from "./Repository";
import { lightTheme } from "../../../styles/theme";

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

  const { getByText } = render(
    <MemoryRouter>
      <ThemeProvider theme={lightTheme}>
        <Repository {...defaultProps} />
      </ThemeProvider>
    </MemoryRouter>
  );

  const name = getByText(/test repo/i);
  expect(name).toBeInTheDocument();

  const description = getByText(/sample test/i);
  expect(description).toBeInTheDocument();
});
