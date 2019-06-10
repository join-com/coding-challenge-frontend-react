import React from 'react';
import { Home } from './pages/Home';
import { Provider } from 'react-redux';
import { store } from './App.store';
import { GlobalStyle } from './shared/components/GlobalStyle';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IncidentDetail from './pages/IncidentDetail/IncidentDetail.Container';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/case/:id" component={IncidentDetail} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
