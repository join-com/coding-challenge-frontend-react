import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { homeSaga, homeReducer } from './pages/Home';

const rootReducer = combineReducers({
  homeReducer
});

export type AppState = ReturnType<typeof rootReducer>
const sagaMiddleware = createSagaMiddleware()
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

sagaMiddleware.run(homeSaga)
