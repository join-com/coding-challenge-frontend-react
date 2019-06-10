import { IIncident } from '../../shared/components/IncidentsList/IncidentsList';

export const GET_INCIDENTS_REQUEST = 'GET_INCIDENTS_REQUEST';
export const GET_INCIDENTS_SUCCESS = 'GET_INCIDENTS_SUCCESS';
export const GET_INCIDENTS_FAILURE = 'GET_INCIDENTS_FAILURE';

export interface IGetIncidenntsRequestAction {
  type: typeof GET_INCIDENTS_REQUEST;
  params: any;
}

export interface IGetIncidenntsSuccessAction {
  type: typeof GET_INCIDENTS_SUCCESS;
  data: IIncident[];
}

export interface GetIncidenntsFailureAction {
  type: typeof GET_INCIDENTS_FAILURE;
  error?: typeof Error;
}
