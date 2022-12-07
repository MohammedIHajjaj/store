import React, { useContext } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar as NavbarBootstrap,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ItemContext from "../assets/contexts/item-context";
import CartIcon from "../assets/icons/cartIcon";

const Navbar = (props) => {
  const cartCtx = useContext(ItemContext);

  return (
    <NavbarBootstrap sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/store">
            Store
          </Nav.Link>
        </Nav>
        <Button
          variant="outline-primary"
          className="rounded-circle"
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          onClick={props.onShow}
        >
          <CartIcon />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "1.2rem",
              height: "1.2rem",
              transform: "translate(25%, 25%)",
              color:"white"
            }}
          >
            {cartCtx.items.length}
          </div>
        </Button>
      </Container>
    </NavbarBootstrap>
  );
};

export default Navbar;
