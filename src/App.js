import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Routes from './Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <main className="main-content">
            <Routes />
          </main>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
