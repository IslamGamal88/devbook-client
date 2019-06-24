import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
function App() {
  return (
    <Fragment>
      <Navbar />
      <Landing />
    </Fragment>
  );
}

export default App;
