import React from "react";
import { Container } from "react-bootstrap";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <Container>
      {projects ? (
        projects &&
        projects.map(project => {
          return (
            <div key={project.id}>
              <Link to={"/project/" + project.id}>
                <ProjectSummary project={project} />
              </Link>
              <br />
            </div>
          );
        })
      ) : (
        <p>Loading please Wait....</p>
      )}
    </Container>
  );
};

export default ProjectList;
