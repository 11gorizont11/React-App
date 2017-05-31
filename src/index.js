import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import routes from "./routes";
import { Router } from "react-router";
import { history, store } from "./store";
import "./styles/index.scss";
import "./styles/style.scss";

ReactDOM.render(
  <Provider store={store}>
    <Router
      // eslint-disable-next-line react/no-children-prop
      children={routes}
      history={history}
    />
  </Provider>,
  document.querySelector("#root")
);
