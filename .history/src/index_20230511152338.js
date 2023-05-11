import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./templates/App";
import { GlobalStyles } from "./styles/global-styles";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
