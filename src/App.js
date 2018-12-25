import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import DetailsPage from "./components/DetailsPage";
import Header from "./components/Header/Header";
import GlobalStyle from "./components/GlobalStyles";

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={HomePage} />
            <Route path="/case/:id" component={DetailsPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
