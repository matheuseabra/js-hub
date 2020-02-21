import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Loader from "./Loader";
import { lightTheme } from "../../styles/theme";

test("renders a Loader properly", () => {
  const { container } = render(
    <MemoryRouter>
      <ThemeProvider theme={lightTheme}>
        <Loader />
      </ThemeProvider>
    </MemoryRouter>
  );
  expect(container).toBeInTheDocument();
});
