import React from "react";
import { Nav, NavItem } from "react-bootstrap";

const SignedOutLinks = () => {
  return (
    <Nav>
      <NavItem>
        <a className="nav-link">Log In</a>
      </NavItem>

      <NavItem>
        <a className="nav-link">Sign Up</a>
      </NavItem>
    </Nav>
  );
};

export default SignedOutLinks;
