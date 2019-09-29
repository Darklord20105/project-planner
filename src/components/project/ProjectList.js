import React from "react";
import { Container } from "react-bootstrap";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";
const ProjectList = ({ projects }) => {
  return (
    <Container>
      {projects &&
        projects.map(project => {
          return (
            <Link to={"/project/" + project.id}>
              <ProjectSummary project={project} key={project.id} />
            </Link>
          );
        })}
    </Container>
  );
};
export default ProjectList;
