import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme";

export const renderWithRouter = (ui: React.ReactNode) => {
  return render(
    <ThemeProvider theme={lightTheme}>
      <MemoryRouter>{ui}</MemoryRouter>
    </ThemeProvider>
  );
};
