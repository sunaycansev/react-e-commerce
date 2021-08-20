import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import CartProvider from "./contexts/CartContext";
import ProductsProvider from "./contexts/ProductsContext";
import AuthProvider from "./contexts/AuthContext";
ReactDOM.render(
  <Router>
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  </Router>,
  document.getElementById("root")
);
