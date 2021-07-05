import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./App";
import SKASKT from "./components/skaskt";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home}></Route>
      <Route path="/ska-skt" component={SKASKT}></Route>
    </Switch>
  </BrowserRouter>
);

export default App;
