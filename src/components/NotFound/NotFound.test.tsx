import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import NotFound from "./NotFound";
import { lightTheme } from "../../styles/theme";

test("renders a not found component properly", () => {
  const { getByText } = render(
    <MemoryRouter>
      <ThemeProvider theme={lightTheme}>
        <NotFound />
      </ThemeProvider>
    </MemoryRouter>
  );
  const title = getByText(/Oops! 404 not found/i);
  expect(title).toBeInTheDocument();
});
