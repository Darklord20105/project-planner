import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { createProject } from "../../redux/actions/actions";

class CreateProject extends Component {
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
    // state declaration is embeded in the form component
  };
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicProjectTitle">
            <Form.Label>Project title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter project title"
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicProjectContent">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Enter project details here"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => {
      dispatch(createProject(project));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateProject);
