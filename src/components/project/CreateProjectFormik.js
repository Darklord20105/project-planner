import React from "react";
import { connect } from "react-redux";
import { createProject } from "../../redux/actions/projectActions";
import { Redirect } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container } from "react-bootstrap";

const CreateProject = props => {
  const { auth } = props;
  if (!auth.uid) {
    return <Redirect to="login" />;
  }
  const schema = Yup.object().shape({
    title: Yup.string()
      .min(10, "Too Short!")
      .max(50, "Too Long!")
      .required("Adding a title is required"),
    content: Yup.string()
      .min(50, "Too Short!")
      .max(1000, "Too Long!")
      .required("Adding a content is required")
  });
  return (
    <Container>
      <Formik
        initialValues={{
          title: "",
          content: ""
        }}
        validationSchema={schema}
        onSubmit={fields => {
          console.log(fields);
          //   props.createProject(fields);
          //   this.props.history.push("/");
        }}
        render={({ errors, status, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="title">Project Title</label>
              <Field
                name="title"
                type="text"
                className={
                  "form-control" +
                  (errors.title && touched.title ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="title"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">content</label>
              <Field
                name="content"
                type="text"
                className={
                  "form-control" +
                  (errors.content && touched.content ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="content"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary mr-2">
                Create Project
              </button>
            </div>
          </Form>
        )}
      />
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => {
      dispatch(createProject(project));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
