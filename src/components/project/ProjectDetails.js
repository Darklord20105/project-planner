import React from "react";
import { Card } from "react-bootstrap";

const ProjectDetails = props => {
  console.log(props);
  let id = props.match.params.id;
  return (
    <div>
      <Card bg="light" style={{ width: "80%" }}>
        <Card.Body>
          <Card.Title>title {id}</Card.Title>
          <Card.Text>card text content</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ProjectDetails;
