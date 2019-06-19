
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createStore } from "redux";
import history from "../History";
import { reducer } from "../reducers";

const store: any = createStore(reducer);

export const withMockProviders = (Component: any) =>
<Router history={history}>
  <Provider store={store}>{Component}</Provider>
</Router>;
