import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import Details from './views/Details'
import NotFound from './views/NotFound'

export const Routes = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/bike/:id' component={Details} />
      <Route component={NotFound} />
    </Switch>
  </div>
)
