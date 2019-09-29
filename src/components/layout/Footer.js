import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Text>All Rights Reserved @copyright 2019</Navbar.Text>
        </Container>
      </Navbar>
    );
  }
}
export default Footer;
