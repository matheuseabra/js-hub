import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  JavascriptRepos,
  ReactRepos,
  VueRepos,
  NodeRepos,
  TypescriptRepos,
  AngularRepos
} from "./pages";
import { NotFound } from "./components";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/javascript" component={JavascriptRepos} />
      <Route exact path="/node" component={NodeRepos} />
      <Route exact path="/react" component={ReactRepos} />
      <Route exact path="/vue" component={VueRepos} />
      <Route exact path="/typescript" component={TypescriptRepos} />
      <Route exact path="/angular" component={AngularRepos} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
