import React, {Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import App from "./App";
import { reducer } from "./reducers";
import * as serviceWorker from "./serviceWorker";

const self: any = window;
const devTools: any = self.__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(reducer, devTools && devTools());

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Dosis', sans-serif;
  }
`;

ReactDOM.render(
<Fragment>
  <GlobalStyle />
  <Provider store={store}>
    <App />
  </Provider>
</Fragment>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
