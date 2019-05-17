import Types from './types'
import { AppState } from './interfaces'

const defaultState: AppState = {
  isLoading: false,
  filters: {
    page: 1,
    per_page: 1001,
    incident_type: 'theft',
    proximity: 'Berlin',
    proximity_square: 30, // size of Berlin is 891,8 sq km. so, it's a square with the side ~30 km.
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
        error: undefined,
      };
    case Types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
        error: undefined,
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
