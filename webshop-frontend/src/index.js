import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProductsProvider } from "./context/ProductsContext";
import { theme } from "./theme";

import "./css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </ThemeProvider>
  </React.StrictMode>
);
