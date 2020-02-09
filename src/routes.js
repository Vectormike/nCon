import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/home";
import News from "./containers/news";
import SingleNews from "./containers/singleNews";
import Payment from "./containers/payment";

const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/news/:id" component={SingleNews} />
        <Route path="/payment" component={Payment} />
      </Switch>
    </div>
  );
};

export default Router;
