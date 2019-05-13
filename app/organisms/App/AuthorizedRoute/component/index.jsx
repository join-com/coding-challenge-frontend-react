import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthorizedRoute = ({ authenticated, component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    authenticated ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

export default AuthorizedRoute;
