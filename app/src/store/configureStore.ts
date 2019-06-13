import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import { reducer, epics } from '../redux'

export function configureStore() {
  const epicMiddleware = createEpicMiddleware()
  const store = createStore(reducer, applyMiddleware(epicMiddleware))
  epicMiddleware.run(epics)
  return store
}
