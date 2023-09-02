import React from "react";
import Brand from "./Brand";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NavBar = () => {
  const itemsCarrito = 4;
  const logoURL = "../img/Logo.png";

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary d-flex justify-content-between"
      >
        <Container>
          <div>
            <Brand logoURL={logoURL} />
            {/* <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand> */}
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ">
                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Business</NavDropdown.Item>
                  <NavDropdown.Item href="#">Classic</NavDropdown.Item>
                  <NavDropdown.Item href="#">Platinum</NavDropdown.Item>
                  <NavDropdown.Item href="#">Serius</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">About Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
          <div>
            <CartWidget itemsCarrito={itemsCarrito} />
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
