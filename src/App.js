import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Routes from './Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Routes />
        </Fragment>
      </Router>
    );
  }
}

export default App;
