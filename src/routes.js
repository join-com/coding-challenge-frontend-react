import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import Header from './components/Header'

export const Routes = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </div>
)
