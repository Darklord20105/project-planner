import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <Nav>
      <NavItem>
        <NavLink className="nav-link" to="/login">
          Log In
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" to="/signup">
          Sign Up
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default SignedOutLinks;
