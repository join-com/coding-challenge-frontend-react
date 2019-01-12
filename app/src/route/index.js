import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Root from '../containers/root'
import IncidentDetails from '../containers/details'

export default () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Root} />
      <Route path="/case/:id" component={IncidentDetails} />
    </React.Fragment>
  </Router>
)
