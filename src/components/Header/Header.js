import React from "react";

import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "../../assets/monday-icon.svg";
import { FiShoppingCart } from "react-icons/fi";
import "./_Header.scss";
import { useAuthContext } from "../../contexts/AuthContext";
import { useCartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { loggedIn } = useAuthContext();
  const { cart } = useCartContext();
  const retrievedCartData = localStorage.getItem("cart");
  const localeStorageCart = JSON.parse(retrievedCartData);

  return (
    <Navbar expand="lg" className="navbar" variant="dark">
      <Container>
        <Link to="/">
          <Logo />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav-links ">
          <Nav>
            <Link className="nav-link" to="/">
              Shop
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            {!loggedIn && (
              <>
                <Link className="nav-link" to="/signup">
                  Sign up
                </Link>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </>
            )}
            {loggedIn && (
              <>
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </>
            )}
            <Link
              className="nav-link-cart position-relative nav-link"
              to="/cart"
            >
              <FiShoppingCart />

              <Badge
                className="position-absolute top-0 start-100 translate-middle rounded-pill text-dark"
                bg="light"
              >
                {cart?.length ?? 0}
              </Badge>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
