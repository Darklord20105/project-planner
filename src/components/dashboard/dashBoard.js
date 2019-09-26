import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectList from "../project/ProjectList";
import Notification from "./Notification";

const DashBoard = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <ProjectList />
        </Col>
        <Col xs={6} md={4}>
          <Notification />
        </Col>
      </Row>
    </Container>
  );
};
export default DashBoard;
