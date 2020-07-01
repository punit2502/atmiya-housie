import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import Draw from "./components/Draw/Draw";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/draw" component={Draw} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
