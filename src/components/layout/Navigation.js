import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import SignedInLinks from "./signedInLinks";
import SignedOutLinks from "./signedOutLinks";

const NavigationBar = () => {
  return (
    <Navbar
      collapseOnSelect
      fluid
      expand="lg"
      bg="dark"
      variant="dark"
      id="mainNav"
    >
      <Container>
        <Navbar.Brand>Project Planner</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <SignedInLinks />
            <SignedOutLinks />
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
