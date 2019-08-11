import React from "react";
// router
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

// redux
import store from "./store";
import { Provider } from "react-redux";
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

// import UnderDev from "./compnents/layout/UnderDev";
import Clients from "./compnents/clients";
import PrivateRoute from "./compnents/auth/PrivateRoute";
import PublicRoute from "./compnents/auth/PublicRoute";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          {/* public routes */}
          <Route
            path="/signin"
            exact
            render={() => <PublicRoute component={SignIn} />}
          />
          <Route
            path="/SignUp"
            exact
            render={() => <PublicRoute component={SignUp} />}
          />
          <Route
            path="/Recover"
            exact
            render={() => <PublicRoute component={Recover} />}
          />
          {/* private routes */}
          <Route render={() => <PrivateRoute component={Panel} />} />
        </Switch>
      </Router>
    </Provider>
  );
}

function Panel() {
  return (
    <Container fluid className="p-0 m-0 d-flex">
      <SideMenu />
      <div className="flex-fill ">
        <Header />
        <div className="content_container">
          <Switch>
            {/* private routes */}
            <Route path="/clients" component={Clients} />
            {/* <Route path="/" component={UnderDev} /> */}
          </Switch>
        </div>
      </div>
    </Container>
  );
}

export default App;
