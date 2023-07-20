/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

it("renders the logo text", () => {
  render(
    <BrowserRouter>
    </BrowserRouter>
  );
});
