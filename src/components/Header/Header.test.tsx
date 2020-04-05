import React from "react";
import Header from "./Header";
import { renderWithRouter } from "../../setupTests";

test("renders a header properly", () => {
  const toggleThemeSpy = () => {};
  const logotype = "js.hub();";

  const { getByText } = renderWithRouter(
    <Header toggleTheme={toggleThemeSpy} />
  );

  const title = getByText(logotype);
  expect(title).toBeInTheDocument();
});
