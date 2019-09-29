import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectList from "../project/ProjectList";
import Notification from "./Notification";
import { connect } from "react-redux";

class DashBoard extends Component {
  render() {
    console.log(this.props);
    const { projects } = this.props;
    return (
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <ProjectList projects={projects} />
          </Col>
          <Col xs={6} md={4}>
            <Notification />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects
  };
};

export default connect(mapStateToProps)(DashBoard);
