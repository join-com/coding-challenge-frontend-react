import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";
import DetailsPage from "./components/DetailsPage";
import Header from "./components/Header";
import GlobalStyle from "./components/GlobalStyles";
import Page404 from "./components/Page404";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/case/:id" component={DetailsPage} />
            <Route path="/" component={Page404} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
};

export default App;
