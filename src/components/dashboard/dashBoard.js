import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectList from "../project/ProjectList";
import Notification from "./Notification";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class DashBoard extends Component {
  render() {
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) {
      return <Redirect to="/login" />;
    } else {
      return (
        <Container>
          <Row className="justify-content-between">
            <Col xs={12} md={6}>
              <ProjectList projects={projects} />
            </Col>
            <Col xs={6} md={5}>
              <Notification notifications={notifications} />
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects", orderBy: ["timestamp", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }
  ])
)(DashBoard);
