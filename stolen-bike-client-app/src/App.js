import React, { Component } from 'react';
import './App.scss';

import AppBar from './components/app-bar/AppBar';
import IncidentList from './components/incident-list/IncidentList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppBar />
        <IncidentList />
      </div>
    );
  }
}

export default App;
