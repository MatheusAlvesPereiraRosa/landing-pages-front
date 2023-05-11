import React from "react";
import ReactDOM from "react-dom/client";


import Home from "./templates/App";
import { GlobalStyles } from "./styles/global-styles";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{theme}}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
