import React from "react";
import { Nav, NavItem } from "react-bootstrap";

const SignedInLinks = () => {
  return (
    <Nav>
      <NavItem>
        <a className="nav-link">Create Project</a>
      </NavItem>

      <NavItem>
        <a className="nav-link">Log Out</a>
      </NavItem>
      <NavItem className="rounded-circle">
        <a className="nav-link ">NN</a>
      </NavItem>
    </Nav>
  );
};

export default SignedInLinks;
