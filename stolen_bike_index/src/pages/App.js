import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from "./IndexPage/components/Header";
import { IndexPage } from './IndexPage/index';
import { DetailsPage } from "./DetailsPage/index";

export const App = () =>  (
  <Router>
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={IndexPage} />
        <Route path='/:id' component={DetailsPage} />
      </Switch>
    </>
  </Router>
);

