import { combineReducers } from 'redux';
import { ActionType } from '../actions/ActionType';
import { Action, Incidents } from '../types';
import { StoreState } from '../store';

function incidents(state: Incidents = [], action: Action) {
  switch (action.type) {
    case ActionType.INCIDENTS_RECEIVE: {
      return action.payload.incidents;
    }
    case ActionType.INCIDENT_RECEIVE: {
      const { id, incident } = action.payload;

      return {
        ...state,
        [id]: incident
      };
    }
    case ActionType.INCIDENT_POSITION_RECEIVE: {
      const { id, coordinates } = action.payload;

      return {
        ...state,
        [id]: {
          ...state[id],
          coordinates
        }
      };
    }
    default:
      return state;
  }
}

const rootReducer = combineReducers<StoreState, Action>({
  incidents
});

export default rootReducer;
