import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";
import DetailsPage from "./components/DetailsPage";
import Header from "./components/Header/Header";
import GlobalStyle from "./components/GlobalStyles";
import Page404 from "./components/Page404";

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/case/:id" component={DetailsPage} />
              <Route path="/" component={Page404} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
