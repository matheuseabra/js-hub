import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Filters from "./Filters";
import { lightTheme } from "../../styles/theme";

test("renders a filter properly", () => {
  const order = "asc";
  const handleOrderChange = () => {};

  const { container } = render(
    <MemoryRouter>
      <ThemeProvider theme={lightTheme}>
        <Filters order={order} handleOrderChange={handleOrderChange} />
      </ThemeProvider>
    </MemoryRouter>
  );

  expect(container).toBeInTheDocument();
});
