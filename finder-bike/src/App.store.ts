import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { homeSaga, homeReducer } from './pages/Home';
import {
  incidentDetailReducer,
  incidentDetailSaga
} from './pages/IncidentDetail';
import { all, fork } from 'redux-saga/effects';

const rootReducer = combineReducers({
  homeReducer,
  incidentDetailReducer
});

export function* mainSaga() {
  yield all([fork(homeSaga), fork(incidentDetailSaga)]);
}

export type AppState = ReturnType<typeof rootReducer>;
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    process.env.NODE_ENV === 'development' &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f
  )
);

sagaMiddleware.run(mainSaga);
