import { useEffect, useState } from "react";

import "./App.scss";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Signin from "./pages/Signin/Signin";
import Cart from "./pages/cart/Cart";
import NotFound from "./pages/404/NotFound";
import { ProductsContext } from "./contexts/ProductsContext";
import axios from "axios";
import { CartContext } from "./contexts/CartContext";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      <CartContext.Provider value={cart}>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/product/:productId" component={ProductDetail} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/signin" component={Signin} />
            <Route path="/cart" component={Cart} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;
