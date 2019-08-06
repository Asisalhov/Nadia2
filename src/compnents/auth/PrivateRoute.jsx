import React from "react";
import { Redirect } from "react-router-dom";

function PrivateRoute(Component, user) {
  return user ? Component : <Redirect to="/signin" />;
}

export default PrivateRoute;
