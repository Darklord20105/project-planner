import React from "react";
import { Card, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const ProjectDetails = props => {
  console.log(props);
  const { project, auth } = props;
  if (!auth.uid) {
    return <Redirect to="/login" />;
  }

  if (project) {
    return (
      <div>
        <Container>
          <Card bg="light" style={{ width: "80%" }}>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.content}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Last updated
                {moment(project.timestamp.toDate()).calendar()}
              </small>
            </Card.Footer>
          </Card>
        </Container>
      </div>
    );
  } else {
    return (
      <Container>
        <p>loading project please wait</p>
      </Container>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
