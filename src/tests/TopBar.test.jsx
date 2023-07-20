/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TopBar from "../components/TopBar";
import { BrowserRouter } from "react-router-dom";

jest.mock("axios");

it("renders the TopBar component without errors", () => {
  render(
    <BrowserRouter>
      <TopBar />
    </BrowserRouter>
  );

  // Check if the TopBar component renders without errors
  expect(screen.getByTestId("top-bar")).toBeInTheDocument();
});
