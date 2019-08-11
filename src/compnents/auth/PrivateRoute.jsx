import React from "react";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

function PrivateRoute({ auth, component: Component }) {
  console.log(auth);
  return auth.uid ? <Component /> : <Redirect to="/signin" />;
}
const mapStateToProps = state => ({
  auth: state.firebase.auth
});
export default connect(mapStateToProps)(PrivateRoute);
