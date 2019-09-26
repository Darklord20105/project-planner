import React from "react";
import NavigationBar from "./components/layout/Navigation";
import DashBoard from "./components/dashboard/dashBoard";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
