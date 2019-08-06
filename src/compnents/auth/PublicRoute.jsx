import React from "react";
import { Redirect } from "react-router-dom";

function PublicRoute(Component, user) {
  return !user ? Component : <Redirect to="/" />;
}

export default PublicRoute;
