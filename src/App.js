import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Theme, GlobalStyle } from './theme';

import Home from './views/Home';
import Details from './views/Details';
import NotFound from './views/NotFound';

import ScrollTop from './components/ScrollTop';

const App = () => (
  <ThemeProvider theme={Theme}>
    <>
      <BrowserRouter>
        <Switch>
          <ScrollTop>
            <Route path="/" exact={true} component={Home} />
            <Route path="/case/:id" component={Details} />
            <Route path="*" component={NotFound} />
          </ScrollTop>
        </Switch>
      </ BrowserRouter>
      <GlobalStyle />
    </>
  </ThemeProvider>
);

export default App;
