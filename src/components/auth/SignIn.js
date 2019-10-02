import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { signIn } from "../../redux/actions/authActions";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    // state declaration is embeded in the form component
    this.props.signIn(this.state);
    console.log(this.state);
  };
  render() {
    console.log(this.props);
    const { authError } = this.props;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {authError ? (
          <p style={{ textAlign: "center", color: "red", padding: "1rem" }}>
            {authError}
          </p>
        ) : null}
      </Container>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: cred => dispatch(signIn(cred))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
