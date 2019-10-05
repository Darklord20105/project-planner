import React from "react";
import { Card } from "react-bootstrap";
import moment from "moment";
const ProjectSummary = ({ project }) => {
  return (
    <Card bg="light">
      {/* <Card.Header></Card.Header> */}
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <Card.Footer>
        <p>
          Posted by {project.authorFirstName} {project.authorLastName}
        </p>
        <small className="text-muted">
          Last updated {moment(project.timestamp.toDate()).calendar()}
        </small>
      </Card.Footer>
    </Card>
  );
};

export default ProjectSummary;
