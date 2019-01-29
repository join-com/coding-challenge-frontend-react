import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Incidents from './Components/Incidents';
import IncidentPage from './Components/IncidentPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Incidents} />
            <Route exact path="/incident/:id" component={IncidentPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
