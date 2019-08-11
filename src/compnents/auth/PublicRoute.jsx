import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

function PublicRoute({ component: Component, auth }) {
  return !auth.uid ? <Component /> : <Redirect to="/home" />;
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});
export default connect(mapStateToProps)(PublicRoute);
