import React from "react";
import { Switch, Route } from "react-router-dom";
import { Repositories, NotFound } from "./components";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Repositories} />
      <Route exact path="/react" component={NotFound} />
    </Switch>
  );
};

export default Routes;
