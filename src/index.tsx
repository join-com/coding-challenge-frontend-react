import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'normalize.css'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { AppHeader } from '@/components/app-header'
import { MainPage } from '@/features/main-page'
import { CaseDetails } from '@/features/case-details'

const App = () => (
  <Router>
    <Route path="/" component={AppHeader} />
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/cases/:id" exact component={CaseDetails} />
    </Switch>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
