import React from "react";
import NavigationBar from "./components/layout/Navigation";
import DashBoard from "./components/dashboard/dashBoard";
import SignIn from "./components/auth/SignInFormik";
import SignUp from "./components/auth/SignUpFormik";
import Footer from "./components/layout/Footer";
import CreateProject from "./components/project/CreateProjectFormik";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectDetails from "./components/project/ProjectDetails";

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <br />
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/createNew" component={CreateProject} />
          <Route path="/project/:id" component={ProjectDetails} />
        </Switch>
        <br />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
