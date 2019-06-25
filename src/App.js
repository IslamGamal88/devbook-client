import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap-reboot.min.css";
import Register from "./Register";
import Login from "./Login";
import Developers from "./Developers";
const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Container>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/developers" component={Developers} />
          </Switch>
        </Container>
      </Fragment>
    </Router>
  );
};

export default App;
