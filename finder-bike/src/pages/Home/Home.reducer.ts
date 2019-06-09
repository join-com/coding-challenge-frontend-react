import {
  GET_INCIDENTS_REQUEST,
  GET_INCIDENTS_SUCCESS,
  GET_INCIDENTS_FAILURE
} from './Home.actionTypes';
import { IIncident } from '../../shared/components/IndientList/IndientList';

export interface IHomeState {
  request: boolean;
  data: IIncident[] | null;
  error: typeof Error | null;
}

export const initialState: IHomeState = {
  request: false,
  data: null,
  error: null
};

export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INCIDENTS_REQUEST:
      return {
        ...state,
        request: true,
        error: null,
        data: []
      };
    case GET_INCIDENTS_SUCCESS:
      return {
        ...state,
        request: false,
        data: action.data
      };

    case GET_INCIDENTS_FAILURE:
      return {
        ...state,
        request: false,
        error: action.error
      };

    default:
      return state;
  }
}
