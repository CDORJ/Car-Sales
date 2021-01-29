import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer as rootReducer } from "./reducers";

import "bulma/css/bulma.css";
import "./styles.scss";

const rootElement = document.getElementById("root");

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
