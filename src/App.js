import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Theme, GlobalStyle } from './theme';

import Home from './views/Home';

const App = () => (
  <ThemeProvider theme={Theme}>
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
        </Switch>
      </ BrowserRouter>
      <GlobalStyle />
    </>
  </ThemeProvider>
);

export default App;
