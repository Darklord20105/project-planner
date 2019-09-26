import React from "react";
import NavigationBar from "./components/layout/Navigation";
import DashBoard from "./components/dashboard/dashBoard";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <br />
      <DashBoard />
      <br />
      <Footer />
    </div>
  );
};

export default App;
