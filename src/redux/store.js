import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import BikesReducer from "./reducers/BikesReducer";
import FilterReducer from "./reducers/FilterReducer";
import PaginationReducer from "./reducers/PaginationReducer";

import thunk from "redux-thunk";

const middleware = [thunk];

const composeEnhancers =
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

export default createStore(
  combineReducers({ "bikes": BikesReducer, "filter": FilterReducer, "pagination": PaginationReducer }),
  enhancer
);
