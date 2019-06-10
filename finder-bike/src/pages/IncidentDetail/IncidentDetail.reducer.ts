import {
  GET_INCIDENT_DETAIL_REQUEST,
  GET_INCIDENT_DETAIL_SUCCESS,
  GET_INCIDENT_DETAIL_FAILURE
} from './IncidentDetail.actionTypes';
import { IIncident } from '../../shared/components/IncidentsList/IncidentsList';

export interface IHomeState {
  request: boolean;
  data: IIncident | null;
  error: typeof Error | null;
}

export const initialState: IHomeState = {
  request: false,
  data: null,
  error: null
};

export function incidentDetailReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INCIDENT_DETAIL_REQUEST:
      return {
        ...state,
        request: true,
        error: null,
        data: null
      };
    case GET_INCIDENT_DETAIL_SUCCESS:
      return {
        ...state,
        request: false,
        data: action.data
      };

    case GET_INCIDENT_DETAIL_FAILURE:
      return {
        ...state,
        request: false,
        error: action.error
      };

    default:
      return state;
  }
}
