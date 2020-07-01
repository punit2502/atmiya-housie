import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Housie from "./components/Housie/Housie";
import Draw from "./components/Draw/Draw";

import "./App.scss";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Housie} />
        <Route exact path="/draw" component={Draw} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
