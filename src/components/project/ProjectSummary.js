import React from "react";
import { Card, Button } from "react-bootstrap";
const ProjectSummary = () => {
  return (
    <Card bg="light" style={{ width: "80%" }}>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Success Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
};
export default ProjectSummary;
