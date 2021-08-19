import "./App.scss";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/auth/Signin/Login";
import Signup from "./pages/auth/signup/Signup";
import Cart from "./pages/cart/Cart";
import NotFound from "./pages/404/NotFound";
import Profile from "./pages/Profile/Profile";

import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
        <Route path="/profile" component={Profile} />
        <Route path="/product/:productId" component={ProductDetail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
