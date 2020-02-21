import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import { lightTheme } from "../../styles/theme";

test("renders a header properly", () => {
  const toggleThemeSpy = () => {};
  const setShowSearchSpy = () => {};
  const { getByText } = render(
    <MemoryRouter>
      <ThemeProvider theme={lightTheme}>
        <Header toggleTheme={toggleThemeSpy} setShowSearch={setShowSearchSpy} />
      </ThemeProvider>
    </MemoryRouter>
  );
  const title = getByText(/JS Stack/i);

  expect(title).toBeInTheDocument();
});
