import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import EstructuraTheme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EstructuraTheme>
      <RouterProvider router={router} />
    </EstructuraTheme>
  </React.StrictMode>
);

reportWebVitals();
