import React from "react";
import { Switch, Route } from "react-router-dom";
import Reports from "./Reports";

function Index() {
  return (
    <Switch>
      <Route exact path="/reports/" component={Reports} />
    </Switch>
  );
}

export default Index;
