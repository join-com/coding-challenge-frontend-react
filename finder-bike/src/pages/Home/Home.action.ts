import {
  GET_INCIDENTS_REQUEST,
  GET_INCIDENTS_SUCCESS,
  GET_INCIDENTS_FAILURE,
  IGetIncidenntsRequestAction,
  IGetIncidenntsSuccessAction,
  GetIncidenntsFailureAction
} from './Home.actionTypes';

export function getIncidentsRequest(params): IGetIncidenntsRequestAction {
  return {
    type: GET_INCIDENTS_REQUEST,
    params
  };
}

export function getIncidentsSuccess(data): IGetIncidenntsSuccessAction {
  return {
    type: GET_INCIDENTS_SUCCESS,
    data
  };
}

export function getIncidentsFailure(error): GetIncidenntsFailureAction {
  return {
    type: GET_INCIDENTS_FAILURE,
    error
  };
}
