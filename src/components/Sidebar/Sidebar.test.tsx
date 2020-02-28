import React from "react";
import Sidebar from "./Sidebar";
import { renderWithRouter } from "../../setupTests";

test("renders a Repository", () => {
  const { container } = renderWithRouter(<Sidebar />);

  expect(container).toBeInTheDocument();
});
