import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
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
        <Navbar.Brand>
          <NavLink to="/" style={{ color: "#f4f4f4", textDecoration: "none" }}>
            Project Planner
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <SignedInLinks />
            <SignedOutLinks />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
