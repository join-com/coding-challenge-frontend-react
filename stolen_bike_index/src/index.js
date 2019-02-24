import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './pages/App';
import * as serviceWorker from './serviceWorker';
import store from './redux/configureReduxStore';
import './index.css';
import "antd/dist/antd.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
