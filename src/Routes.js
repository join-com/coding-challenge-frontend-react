import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IndexView from './pages/IndexView';
import DetailsView from './pages/DetailsView';
import NotFound from './pages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={IndexView} />
      <Route path="/case/:caseId" exact component={DetailsView} />
      <Route path="*" exact component={NotFound} />
    </Switch>
  );
};

export default Routes;
