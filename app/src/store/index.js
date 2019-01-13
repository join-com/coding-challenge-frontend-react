import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducers from '../reducers'

import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'

const store = createStore(reducers, {}, applyMiddleware(logger, thunk, promiseMiddleware()))

export default store
