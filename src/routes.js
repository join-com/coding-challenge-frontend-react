import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import Details from './views/Details'

export const Routes = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/:id' component={Details} />
    </Switch>
  </div>
)
