import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import DetailsPage from "./components/DetailsPage";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/case/:id" component={DetailsPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
