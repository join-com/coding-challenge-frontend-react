import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import { Incidents } from './types';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface StoreState {
  incidents?: Incidents;
}

const store = createStore<StoreState, any, any, any>(
  rootReducer,
  { incidents: [] },
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
