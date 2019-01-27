import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import store from './store';
import { Theme, GlobalStyle } from './theme';

import Home from './views/Home';
import Details from './views/Details';
// import NotFound from './views/NotFound';

import Layout from './views/Layout';
import ScrollTop from './components/ScrollTop';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <>
        <BrowserRouter>
          <Switch>
            <ScrollTop>
              <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/incidents/:id" component={Details} />
                {/* <Route component={NotFound} /> */}
              </Layout>
            </ScrollTop>
          </Switch>
        </ BrowserRouter>
        <GlobalStyle />
      </>
    </ThemeProvider>
  </Provider>
);

export default App;
