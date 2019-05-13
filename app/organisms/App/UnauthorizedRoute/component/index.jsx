import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const UnauthorizedRoute = ({ authenticated, component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    authenticated ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    ) : (
      <Component {...props} {...rest} />
    )
  )}/>
);

export default UnauthorizedRoute;
