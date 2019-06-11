import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import { pages } from '../pages'

export const AppRouter: React.FC = () => (
  <Switch>
    {Object.entries(pages).map(([key, props]) => (
      <Route key={key} {...props} />
    ))}
  </Switch>
)
