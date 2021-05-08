import React from "react";
import { Route, Switch } from "react-router";
import Admin from "./admin/admin";
import Home from "./home/home";
import Stats from "./stats/stats";

function AppRouter() {
  return (
    <div>
      <Switch>
        <Route path="/stats" exact component={Stats} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={Home} />
        {/* <Route path="/*" exact component={Home} /> */}
      </Switch>
    </div>
  );
}

export default AppRouter;
