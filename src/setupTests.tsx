import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme";

export interface MockedProviderProps {
  children: React.ReactNode;
}

export const MockedProvider = (children: MockedProviderProps) => {
  return (
    <MemoryRouter>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </MemoryRouter>
  );
};
