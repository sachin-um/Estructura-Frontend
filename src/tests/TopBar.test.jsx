/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render} from "@testing-library/react";
import TopBar from "../components/TopBar";
import { BrowserRouter } from "react-router-dom";

it("renders the logo text", () => {
  render(
    <BrowserRouter>
      <TopBar />
    </BrowserRouter>
  );
});
