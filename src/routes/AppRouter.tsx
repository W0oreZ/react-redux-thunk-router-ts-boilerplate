import React from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import ExamplePage from "../pages/Example.page";
import DummyPage from "../pages/Dummy.page";

import DefaultRoute from "./default.route";
import MainRoute from "./main.route";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <DefaultRoute path="/" exact component={ExamplePage} />

        <MainRoute path="/items-dummy" component={DummyPage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
