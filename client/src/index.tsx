import React, {Fragment } from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-family: 'Dosis', sans-serif;
  }
`;

ReactDOM.render(
<Fragment>
  <GlobalStyle />
  <App />
</Fragment>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
