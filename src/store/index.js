import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import uiReducer from "./ui";
import incidentsReducer from "./incidents";
import api from "../api";

let composeEnhancers = compose;

if (process.env.NODE_ENV === "development") {
  const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  if (typeof composeWithDevToolsExtension === "function") {
    composeEnhancers = composeWithDevToolsExtension;
  }
}

const enhancer = composeEnhancers(applyMiddleware(thunk.withExtraArgument(api)));

/* eslint-disable no-underscore-dangle */
const store = createStore(
  combineReducers({
    ui: uiReducer,
    incidents: incidentsReducer
  }),
  enhancer
);

/* eslint-enable */

export default store;
