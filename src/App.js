import React from "react";
// router
import { Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./compnents/auth/PrivateRoute";
import PublicRoute from "./compnents/auth/PublicRoute";
import history from "./history";

// style
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// components
import { Container } from "reactstrap";
// public
import SignIn from "./compnents/auth/SignIn";
import SignUp from "./compnents/auth/SignUp";
import Recover from "./compnents/auth/Recover";
// private
import Header from "./compnents/layout/Header";
import SideMenu from "./compnents/layout/SideMenu";

import UnderDev from "./compnents/layout/UnderDev";
import Clients from "./compnents/clients";

function App() {
  return (
    <Router history={history}>
      <Switch>
        {/* public routes */}
        <Route path="/signin" exact component={SignIn} />
        <Route path="/SignUp" exact component={SignUp} />
        <Route path="/Recover" exact component={Recover} />
        {/* private routes */}
        <Route component={Panel} />
      </Switch>
    </Router>
  );
}

function Panel() {
  return (
    <Container fluid>
      <Header />
      <div>
        <SideMenu />
        <Switch>
          {/* private routes */}
          <Route path="/clients" component={Clients} />
          <Route component={UnderDev} />
        </Switch>
      </div>
    </Container>
  );
}
export default App;
