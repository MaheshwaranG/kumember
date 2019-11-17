import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import { createBrowserHistory } from "history";
import configureStore from "./storeConfiguration";

import Kumember from "./components/kumember";
import "./styles/kumember/main.scss";
var asdad = "czdfd";

const store = configureStore();
const history = createBrowserHistory();
const jsx = (
  <Provider store={store}>
    <div>
      <Kumember></Kumember>
    </div>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
