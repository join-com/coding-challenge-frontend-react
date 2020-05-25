import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import App from './App';
import history from './utils/history';
import theme from './styles/theme';

const Main = () => (
  <Router history={history}>
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <CssBaseLine />
          <App />
        </MuiPickersUtilsProvider>
      </StylesProvider>
    </ThemeProvider>
  </Router>
);

ReactDOM.render(<Main />, document.getElementById('root'));
