import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

let composeEnhancers = compose;

// if (__DEV__) {
const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
if (typeof composeWithDevToolsExtension === "function") {
  composeEnhancers = composeWithDevToolsExtension;
}
// }

const enhancer = composeEnhancers(applyMiddleware(thunk));

/* eslint-disable no-underscore-dangle */
const store = createStore(combineReducers({}), enhancer);

/* eslint-enable */

export default store;
