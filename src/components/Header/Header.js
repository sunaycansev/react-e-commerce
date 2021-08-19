import React from "react";

import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "../../assets/monday-icon.svg";
import { FiShoppingCart } from "react-icons/fi";
import "./_Header.scss";
import { useAuthContext } from "../../contexts/AuthContext";
const Header = () => {
  const { loggedIn } = useAuthContext();

  return (
    <Navbar expand="lg" className="navbar" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav-links">
          <Nav>
            <Nav.Link className="nav-link" href="/">
              Shop
            </Nav.Link>
            <Nav.Link className="nav-link" href="/contact">
              Contact
            </Nav.Link>
            <Nav.Link className="nav-link" href="/about">
              About
            </Nav.Link>
            {!loggedIn && (
              <>
                <Nav.Link className="nav-link" href="/signup">
                  Sign up
                </Nav.Link>
                <Nav.Link className="nav-link" href="/login">
                  Login
                </Nav.Link>
              </>
            )}
            {loggedIn && (
              <>
                <Nav.Link className="nav-link" href="/profile">
                  Profile
                </Nav.Link>
              </>
            )}
            <Nav.Link className="nav-link-cart position-relative" href="/cart">
              <FiShoppingCart />
              <Badge
                className="position-absolute top-0 start-100 translate-middle rounded-pill"
                bg="secondary"
              >
                9
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
