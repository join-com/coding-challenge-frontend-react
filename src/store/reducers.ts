import { combineReducers } from 'redux';
import { ActionType } from '../actions/ActionType';
import { Action, RequestStatus } from '../types';
import { IncidentsState, StoreState } from './index';

const initState = {
  byId: [],
  loadingStatus: RequestStatus.UNINITED
};

// @TODO: destructuring operators just for prototype, could be replaced by lenses or some other solution for immutable objects
function incidents(
  state: IncidentsState = initState,
  action: Action
): IncidentsState {
  switch (action.type) {
    case ActionType.INCIDENTS_REQUEST: {
      return {
        ...state,
        loadingStatus: RequestStatus.FETCHING
      };
    }
    case ActionType.INCIDENTS_REQUEST_FAILURE: {
      return {
        ...state,
        loadingStatus: RequestStatus.FAILURE
      };
    }
    case ActionType.INCIDENTS_REQUEST_SUCCESS: {
      return {
        ...state,
        loadingStatus: RequestStatus.SUCCESS,
        byId: action.payload.incidents
      };
    }
    case ActionType.INCIDENT_REQUEST_SUCCESS: {
      const { id, incident } = action.payload;

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: incident
        }
      };
    }
    case ActionType.INCIDENT_POSITION_REQUEST_SUCCESS: {
      const { id, coordinates } = action.payload;

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            coordinates
          }
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
