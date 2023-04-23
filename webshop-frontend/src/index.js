import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import { AuthProvider } from "./context/AuthContext";
import { theme } from "./theme";

import "./css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CartProvider>
      <AuthProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </AuthProvider>
    </CartProvider>
  </ThemeProvider>
);
