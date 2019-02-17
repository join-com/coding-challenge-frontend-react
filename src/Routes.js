import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import IndexView from './pages/IndexView';
import DetailsView from './pages/DetailsView';
import NotFound from './pages/NotFound';

const routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={IndexView} />
      {props.state.incidents.cases.length ? (
        <Route path="/case/:caseId" component={DetailsView} />
      ) : (
        <Redirect from="/case" to="/" />
      )}
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default withRouter(connect(mapStateToProps)(routes));
