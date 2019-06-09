import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import { Incident } from './types';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface StoreState {
  incidents?: Array<Incident>;
}

const store = createStore(
  rootReducer,
  { incidents: [] },
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
