import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import About from "../src/components/About/About";
import ClassList from "../src/components/ClassList/ClassList";
import Student from "./components/Student/Student";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/classlist/:class" component={ClassList} />
    <Route path="/student/:id" component={Student} />
  </Switch>
);
