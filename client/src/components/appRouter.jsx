import React from "react";
import { Route, Switch } from "react-router";
import Admin from "./admin/admin";
import Home from "./home/home";

function AppRouter() {
  return (
    <div>
      <Switch>
        <Route path="/admin" exact component={Admin} />
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={Home} />
        <Route path="/*" exact component={Home} />
      </Switch>
    </div>
  );
}

export default AppRouter;
