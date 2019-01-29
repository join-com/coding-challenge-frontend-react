import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import Details from './views/Details';
import NotFound from './views/NotFound';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/incidents/:id" exact component={Details} />
    <Route path='*' exact component={NotFound} />
  </Switch>
);

export default Routes;