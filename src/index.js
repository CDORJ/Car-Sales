import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";

import "bulma/css/bulma.css";
import "./styles.scss";

const rootElement = document.getElementById("root");

const reducer = () => {
  return {
    somedata: "something",
  };
};
const store = createStore(reducer);

ReactDOM.render(<App />, rootElement);
