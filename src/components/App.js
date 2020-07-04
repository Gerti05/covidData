import React from "react";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import ErrorPage from "./errorPage";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}
