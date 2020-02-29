import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme";
import { SidebarContext } from "./context/SidebarContext";

export const renderWithRouter = (ui: React.ReactNode) => {
  const showSidebar = false;
  const setShowSidebar = () => {};
  return render(
    <ThemeProvider theme={lightTheme}>
      <SidebarContext.Provider value={{ showSidebar, setShowSidebar }}>
        <MemoryRouter>{ui}</MemoryRouter>
      </SidebarContext.Provider>
    </ThemeProvider>
  );
};
