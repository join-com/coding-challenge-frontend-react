import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import store from './store';
import { Theme, GlobalStyle } from './theme';

import Layout from './views/Layout';
import ScrollTop from './components/ScrollTop';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <>
        <BrowserRouter>
          <ScrollTop>
            <Layout>
              <Routes />
            </Layout>
          </ScrollTop>
        </ BrowserRouter>
        <GlobalStyle />
      </>
    </ThemeProvider>
  </Provider>
);

export default App;
