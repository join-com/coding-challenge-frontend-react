import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './config/css/default.css';
import './config/css/variables.css';
import './config/css/layout.css';

const AppWithRouter = withRouter(App);

render(
  <BrowserRouter>
    <AppWithRouter />
  </BrowserRouter>,
  document.getElementById('stolen-bike'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
