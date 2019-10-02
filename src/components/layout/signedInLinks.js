import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../redux/actions/authActions";

const SignedInLinks = props => {
  return (
    <Nav>
      <NavItem>
        <NavLink className="nav-link" to="/createNew">
          Create Project
        </NavLink>
      </NavItem>
      <NavItem>
        <a className="nav-link" href="" onClick={props.signOut}>
          Log Out
        </a>
      </NavItem>
      <NavItem className="rounded-circle">
        <NavLink className="nav-link " to="/">
          NN
        </NavLink>
      </NavItem>
    </Nav>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
