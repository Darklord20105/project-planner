import React from "react";
import { Nav, NavItem, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../redux/actions/authActions";

const SignedInLinks = props => {
  console.log(props);
  return (
    <Nav>
      <NavItem>
        <NavLink className="nav-link" to="/createNew">
          Create Project
        </NavLink>
      </NavItem>
      <NavItem>
        <Button variant="dark" className="nav-link" onClick={props.signOut}>
          Log Out
        </Button>
      </NavItem>
      <NavItem className="rounded-circle">
        <NavLink className="nav-link " to="/">
          {props.profile.initials}
        </NavLink>
      </NavItem>
    </Nav>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
