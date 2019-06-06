import React from 'react';
import { Home } from './pages/Home';
import { Provider } from 'react-redux';
import { store } from './App.store';
import { GlobalStyle } from './shared/components/GlobalStyle';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Home />
    </Provider>
  );
};

export default App;
