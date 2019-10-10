import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { signUp } from "../../../redux/actions/authActions";
import { Formik } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";

// this is an approach to use react bootstrap components with formik and yup validation
// problem is ..most components in both libraries has naming confliction so its better to use regular bootstrap

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last Name is required"),
  email: Yup.string()
    .email("Email is invalid")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(50, "Too Long!")
    .required("Password is required")
});

const SignUp = props => {
  const { auth, authError } = props;
  if (auth.uid) {
    return <Redirect to="/" />;
  }
  return (
    <Formik
      validationSchema={schema}
      onSubmit={values => {
        console.log(values);
        props.signUp(values);
      }}
      initialValues={{
        firstName: "",
        lastName: ""
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors
      }) => (
        <Container>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="email">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group md="4" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Button type="submit">Submit form</Button>
            {authError ? <p>{authError}</p> : null}
          </Form>
        </Container>
      )}
    </Formik>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
