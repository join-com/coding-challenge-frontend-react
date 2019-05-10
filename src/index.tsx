import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@/libs/styled-components'
import * as theme from '@/libs/styled-components/theme'
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
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/" component={AppHeader} />
        <Switch>
          <Route path="/" exact component={CaseList} />
          <Route path="/cases/:id" exact component={CaseDetails} />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
