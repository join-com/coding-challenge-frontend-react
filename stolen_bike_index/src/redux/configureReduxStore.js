import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { rootReducer } from './combineReducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware(),
  logger = createLogger({ collapsed: true }),
  createStoreWithMiddleware = applyMiddleware(sagaMiddleware, logger),
  store = createStore(rootReducer, compose(createStoreWithMiddleware));

sagaMiddleware.run(rootSaga);

export default store;