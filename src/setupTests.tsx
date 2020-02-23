import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme";

interface MockedProviderProps {
  children: React.ReactNode;
}

export const MockedProvider: React.SFC<MockedProviderProps> = children => {
  return (
    <MemoryRouter>
      <ThemeProvider theme={lightTheme}>
        <>{children}</>
      </ThemeProvider>
    </MemoryRouter>
  );
};
