import Types from './types'
import { AppState } from './interfaces'

const defaultState: AppState = {
  isLoading: false,
  filters: {
    page: 1,
    per_page: 10,
    incident_type: 'theft',
    proximity: 'Berlin',
    proximity_square: 100,
  },
  data: [ ],
};

export default function defaultReducer(
  state = defaultState,
  action: any
): AppState {
  switch (action.type) {
    case Types.FETCH_DATA:
      return {
        ...state,
        isLoading: true,
        filters: action.params,
      };
    case Types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    case Types.FETCH_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
