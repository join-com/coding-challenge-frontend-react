import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'normalize.css'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { AppHeader } from '@/components/app-header'
import { CaseList } from '@/features/case-list'
import { CaseDetails } from '@/features/case-details'
import { configureStore } from '@/store'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={AppHeader} />
      <Switch>
        <Route path="/" exact component={CaseList} />
        <Route path="/cases/:id" exact component={CaseDetails} />
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
