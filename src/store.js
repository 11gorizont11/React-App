import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import { browserHistory } from "react-router";
import rootSaga from "./sagas/index";
import reducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();

export const store = applyMiddleware(
  sagaMiddleware,
  routerMiddleware(browserHistory)
)(createStore)(reducers, {});

sagaMiddleware.run(rootSaga);

export const history = syncHistoryWithStore(browserHistory, store);
