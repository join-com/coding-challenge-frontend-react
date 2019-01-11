import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducers from '../reducers'

import promiseMiddleware from 'redux-promise-middleware'

const store = createStore(reducers, {}, applyMiddleware(logger, promiseMiddleware()))

export default store
