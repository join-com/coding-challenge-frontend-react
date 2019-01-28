import {
  SET_INCIDENTS_LIST,
  CLEAR_INCIDENTS_LIST,
  SET_INCIDENTS_DETAILS,
  CLEAR_INCIDENTS_DETAILS,
  SET_INCIDENTS_FILTERS,
  CLEAR_INCIDENTS_FILTERS,
} from './actions';

const defaultState = {
  list: [],
  details: null,
  filters: {
    page: 0,
    per_page: 10,
    occurred_before: null,
    occurred_after: null,
    incident_type: null,
    proximity: null,
    query: null,
  },
}

export default function incidents(state = defaultState, action) {
  switch (action.type) {
    case SET_INCIDENTS_LIST:
      return {
        ...state,
        list: action.payload,
      };

    case CLEAR_INCIDENTS_LIST:
      return {
        ...state,
        list: defaultState.list,
      };

    case SET_INCIDENTS_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    case CLEAR_INCIDENTS_DETAILS:
      return {
        ...state,
        details: defaultState.details,
      };

    case SET_INCIDENTS_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };

    case CLEAR_INCIDENTS_FILTERS:
      return {
        ...state,
        filters: defaultState.filters,
      };

		default:
			return state;
  }
}
