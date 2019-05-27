import { LOAD_BIKES_SUCCESS, LOAD_BIKES_FAIL, LOAD_BIKES_PENDING, CLEAR_BIKES } from "../actions/BikesActions";

const initialState = {
  paginatedIncidents: [],
  error: false,
  pending: false,
  count: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_BIKES_SUCCESS: {
      return {
        pending: false,
        paginatedIncidents: action.paginatedIncidents,
        count: action.count
      }
    }
    case LOAD_BIKES_FAIL: {
      return { ...state, pending: false, error: true };
    }
    case LOAD_BIKES_PENDING: {
      return {
        ...state,
        pending: true
      }
    }
    case CLEAR_BIKES : {
      return {
        ...state, paginatedIncidents: []
      }
    }
    default:
      return state;
  }
}

export const getPaginatedIncidents = state => state.bikes.paginatedIncidents;
export const getIncidentCount = state => state.bikes.count;
export const getPending = state => state.bikes.pending;
export const getError = state => state.bikes.error;
