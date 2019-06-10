import {
  GET_INCIDENT_DETAIL_REQUEST,
  GET_INCIDENT_DETAIL_SUCCESS,
  GET_INCIDENT_DETAIL_FAILURE,
  IGetIncidenntDetailRequestAction,
  IGetIncidenntDetailSuccessAction,
  IGetIncidenntDetailFailureAction
} from './IncidentDetail.actionTypes';

export function getIncidentDetailRequest(id): IGetIncidenntDetailRequestAction {
  return {
    type: GET_INCIDENT_DETAIL_REQUEST,
    id
  };
}

export function getIncidentDetailSuccess(
  data
): IGetIncidenntDetailSuccessAction {
  return {
    type: GET_INCIDENT_DETAIL_SUCCESS,
    data
  };
}

export function getIncidentDetailFailure(
  error
): IGetIncidenntDetailFailureAction {
  return {
    type: GET_INCIDENT_DETAIL_FAILURE,
    error
  };
}
