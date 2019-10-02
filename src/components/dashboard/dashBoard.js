import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectList from "../project/ProjectList";
import Notification from "./Notification";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class DashBoard extends Component {
  render() {
    console.log(this.props);
    const { projects } = this.props;
    return (
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <ProjectList projects={projects} />
          </Col>
          <Col xs={6} md={4}>
            <Notification />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(DashBoard);
