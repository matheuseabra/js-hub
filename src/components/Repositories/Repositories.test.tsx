import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Repositories from "./Repositories";
import { lightTheme } from "../../styles/theme";

test("renders a list of repositories", () => {
  const defaultProps = {
    term: "test",
    techLogo: "../../assets/javascript.svg"
  };

  const { container } = render(
    <MemoryRouter>
      <ThemeProvider theme={lightTheme}>
        <Repositories {...defaultProps} />
      </ThemeProvider>
    </MemoryRouter>
  );
  expect(container).toBeInTheDocument();
});
