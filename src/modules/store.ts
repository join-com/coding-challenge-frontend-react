import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { AppState } from './interfaces'

import reducer from './reducer';
import { rootSaga } from './sagas';

export default function configureStore(initialState?: AppState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}
