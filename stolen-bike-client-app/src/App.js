import React, { Component } from 'react';
import './App.scss';

import AppBar from './components/app-bar/AppBar';
import IncidentList from './components/incident-list/IncidentList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__overlay">
          <AppBar />
          <IncidentList />
        </div>
      </div>
    );
  }
}

export default App;
