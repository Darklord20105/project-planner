import React from "react";
import { Card, Button } from "react-bootstrap";

const ProjectSummary = ({ project }) => {
  return (
    <Card bg="light" style={{ width: "80%" }}>
      {/* <Card.Header></Card.Header> */}
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
};

export default ProjectSummary;
