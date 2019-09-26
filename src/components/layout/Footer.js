import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Nav className="mr-auto">
          <Nav.Link href="#home">support</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
        </Nav>
        <Navbar.Brand>All Rights Reserved @copyright 2019</Navbar.Brand>
      </Navbar>
    );
  }
}
export default Footer;
