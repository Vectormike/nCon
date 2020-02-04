import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/home";
import News from "./containers/news";

const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
      </Switch>
    </div>
  );
};

export default Router;
