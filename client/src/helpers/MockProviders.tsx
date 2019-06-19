
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "../reducers";

const store: any = createStore(reducer);

export const withMockProviders = (Component: any) => <Provider store={store}>{Component}</Provider>
