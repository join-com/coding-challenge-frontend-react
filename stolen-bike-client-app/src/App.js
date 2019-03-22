import React, { Component } from 'react';
import 'react-dates/initialize';
import './App.scss';
import axiosGlobals from './utils/axiosGlobals';

import AppBar from './components/app-bar/AppBar';
import IncidentList from './components/incident-list/IncidentList';

//axios global config
axiosGlobals();

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
