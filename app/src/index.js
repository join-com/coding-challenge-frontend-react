import React from 'react';
import ReactDOM from 'react-dom';

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import FontFaceObserver from 'fontfaceobserver';
import 'normalize.css/normalize.css';
import './theme/global';
import configureStore from './modules/store';
import UnsupportedBrowserDetection from './shared/utils/unsupportedBrowserDetection';
import browserHistory from './shared/utils/history';

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(
  () => {
    document.body.classList.add('fontLoaded');
  },
  () => {
    document.body.classList.remove('fontLoaded');
  }
);

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {};
const store = configureStore(initialState);

if (process.env.NODE_ENV === 'development') {
  if (!window.__REDUX_DEVTOOLS_EXTENSION__) {
    const DevToolsComponent = require('./shared/utils/devtools.component').default;
    const devToolsRoot = window.document.createElement('div');

    window.document.body.appendChild(devToolsRoot);

    ReactDOM.render(
      <Provider store={store}>
        <DevToolsComponent />
      </Provider>,
      devToolsRoot
    );
  }
}

const render = () => {
  const NextApp = require('./routes').default;

  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <NextApp />
      </Router>
    </Provider>,
    document.getElementById('app')
  );
};

const initApp = async () => {
  const detection = new UnsupportedBrowserDetection();
  if (!detection.isSupported()) {
    return;
  }

  // Chunked polyfill for browsers without Intl support
  if (!window.Intl) {
    new Promise(resolve => {
      resolve(require('intl'));
    })
      .then(() => Promise.all([require('intl/locale-data/jsonp/en.js'), require('intl/locale-data/jsonp/pl.js')]))
      .then(() => render())
      .catch(err => {
        throw err;
      });
  } else {
    render();
  }
};

initApp();
