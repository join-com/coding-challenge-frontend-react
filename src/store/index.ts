import { compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './root-reducer'
import { rootSaga } from './root-saga'

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
  // @ts-ignore
  const reduxDevTools = global.__REDUX_DEVTOOLS_EXTENSION__ && global.__REDUX_DEVTOOLS_EXTENSION__()
  // @ts-ignore
  const store = global.__REDUX_DEVTOOLS_EXTENSION__
    ? createStore(
      rootReducer,

      compose(
        applyMiddleware(sagaMiddleware),
        reduxDevTools,
      ),
    )
    : createStore(
      rootReducer,

      compose(applyMiddleware(sagaMiddleware)),
    )
  sagaMiddleware.run(rootSaga)
  return store
}

export { configureStore }
