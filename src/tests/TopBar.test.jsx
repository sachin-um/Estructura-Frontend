/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TopBar from "../components/TopBar";
import { pages } from "../components/TopBar";
import { BrowserRouter } from "react-router-dom";

it("renders the logo text", () => {
  render(
    <BrowserRouter>
      <TopBar />
    </BrowserRouter>
  );
  const title = screen.getByText(/Estructura/i);
  expect(title).toBeInTheDocument();
});

// Temporary: remove when TopBar is completed
it("renders the links", () => {
  render(
    <BrowserRouter>
      <TopBar />
    </BrowserRouter>
  );
  pages.forEach((page) => {
    const link = screen.getByText(page.title);
    expect(link).toBeInTheDocument();
  });
});
