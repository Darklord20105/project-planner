import React from "react";
import { connect } from "react-redux";
import { signIn } from "../../redux/actions/authActions";
import { Redirect } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container } from "react-bootstrap";

const SignIn = props => {
  // console.log(props);
  const { authError, auth } = props;
  if (auth.uid) {
    return <Redirect to="/" />;
  }
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
  });
  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={schema}
        onSubmit={fields => {
          console.log(fields);
          props.signIn(fields);
        }}
        render={({ errors, status, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="email"
                className={
                  "form-control" +
                  (errors.email && touched.email ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                className={
                  "form-control" +
                  (errors.password && touched.password ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary mr-2">
                Sign In
              </button>
              {authError ? (
                <p
                  style={{ textAlign: "center", color: "red", padding: "1rem" }}
                >
                  {authError}
                </p>
              ) : (
                <p
                  style={{
                    textAlign: "center",
                    color: "green",
                    padding: "1rem"
                  }}
                >
                  Login Success
                </p>
              )}
            </div>
          </Form>
        )}
      />
    </Container>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: cred => dispatch(signIn(cred))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
