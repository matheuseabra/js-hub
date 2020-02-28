import React from "react";
import Header from "./Header";
import { renderWithRouter } from "../../setupTests";

test("renders a header properly", () => {
  const toggleThemeSpy = () => {};
  const setShowSearchSpy = () => {};

  const { getByText } = renderWithRouter(
    <Header toggleTheme={toggleThemeSpy} setShowSearch={setShowSearchSpy} />
  );

  const title = getByText(/JS Hub/i);
  expect(title).toBeInTheDocument();
});
