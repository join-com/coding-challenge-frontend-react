import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';
import rootReducer from './reducers';
import { Action, Incidents, RequestStatus } from '../types';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type IncidentsState = {
  byId: Incidents;
  loadingStatus: RequestStatus;
};

export interface StoreState {
  incidents: IncidentsState;
}

export type Dispatch = ThunkDispatch<StoreState, any, Action>;

const index = createStore<StoreState, any, any, any>(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default index;
