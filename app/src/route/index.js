import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Root from '../containers/root'

export default () => (
  <Router>
    <Route to path="/" component={Root} />
  </Router>
)
