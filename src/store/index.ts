import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';
import rootReducer from '../reducers';
import { Action, Incidents } from '../types';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface StoreState {
  incidents?: Incidents;
}

export type Dispatch = ThunkDispatch<StoreState, any, Action>;

const index = createStore<StoreState, any, any, any>(
  rootReducer,
  { incidents: [] },
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default index;
