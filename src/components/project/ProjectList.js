import React from "react";
import { Container } from "react-bootstrap";
import ProjectSummary from "./ProjectSummary";

class ProjectList extends React.Component {
  render() {
    return (
      <Container>
        <ProjectSummary />
        <br />
        <ProjectSummary />
        <br />
        <ProjectSummary />
      </Container>
    );
  }
}
export default ProjectList;
