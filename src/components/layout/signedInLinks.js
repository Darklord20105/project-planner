import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <Nav>
      <NavItem>
        <NavLink className="nav-link" to="/createNew">
          Create Project
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" to="/">
          Log Out
        </NavLink>
      </NavItem>
      <NavItem className="rounded-circle">
        <NavLink className="nav-link " to="/">
          NN
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default SignedInLinks;
