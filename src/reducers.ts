import { combineReducers } from 'redux';
import { Action, ActionType } from './actions';
import { Incidents } from './types';
import { StoreState } from './store';

function incidents(state: Incidents = [], action: Action) {
  switch (action.type) {
    case ActionType.RECEIVE_INCIDENTS: {
      return action.payload.incidents;
    }
    default:
      return state;
  }
}

const rootReducer = combineReducers<StoreState, Action>({
  incidents
});

export default rootReducer;
