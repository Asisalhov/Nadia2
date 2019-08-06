import React from "react";
// router
import { Router, Switch } from "react-router-dom";
import PrivateRoute from "./compnents/auth/PrivateRoute";
import PublicRoute from "./compnents/auth/PublicRoute";
import history from "./history";

// style
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// components
// public
import SignIn from "./compnents/auth/SignIn";
import SignUp from "./compnents/auth/SignUp";
import Recover from "./compnents/auth/Recover";
// private
import Header from "./compnents/layout/Header";
import SideMenu from "./compnents/layout/SideMenu";

import Clients from "./compnents/clients";

function App() {
  const user = false;
  return (
    <Router history={history}>
      {user ? <Panel user={user} /> : <Auth user={user} />}
    </Router>
  );
}

const Panel = ({ user }) => {
  return (
    <div>
      <Header />
      <div>
        <SideMenu />
        <Switch>
          {/* private routes */}
          <PrivateRoute to="/clients" component={Clients} user={user} />
        </Switch>
      </div>
    </div>
  );
};
const Auth = ({ user }) => {
  return (
    <Switch>
      {/* public routes */}
      <PublicRoute to="/signin" user={user} component={SignIn} />
      <PublicRoute to="/signup" user={user} component={SignUp} />
      <PublicRoute to="/recover" user={user} component={Recover} />
    </Switch>
  );
};
export default App;
