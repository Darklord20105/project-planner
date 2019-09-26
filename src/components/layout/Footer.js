import React, { Component } from "react";
import { Nav, Navbar, NavItem, Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>All Rights Reserved @copyright 2019</Navbar.Brand>
          <Nav className="ml-auto">
            <NavItem>
              <Nav.Link href="#home">support</Nav.Link>
            </NavItem>

            <NavItem>
              <Nav.Link href="#link">Contact</Nav.Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
export default Footer;
