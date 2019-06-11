import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import { reducer, epics } from '../redux'

export function configureStore() {
  fetch('https://bikewise.org/api/v2/incidents?page=1&per_page=2', {
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((value) => {
    console.log(value.headers.get('link'))
    console.log(value)
  })
  const epicMiddleware = createEpicMiddleware()
  const store = createStore(reducer, applyMiddleware(epicMiddleware))
  epicMiddleware.run(epics)
  return store
}
