import { IIncident } from '../../shared/components/IncidentsList/IncidentsList';

export const GET_INCIDENT_DETAIL_REQUEST = 'GET_INCIDENT_DETAIL_REQUEST';
export const GET_INCIDENT_DETAIL_SUCCESS = 'GET_INCIDENT_DETAIL_SUCCESS';
export const GET_INCIDENT_DETAIL_FAILURE = 'GET_INCIDENT_DETAIL_FAILURE';

export interface IGetIncidenntDetailRequestAction {
  type: typeof GET_INCIDENT_DETAIL_REQUEST;
  id: number;
}

export interface IGetIncidenntDetailSuccessAction {
  type: typeof GET_INCIDENT_DETAIL_SUCCESS;
  data: IIncident;
}

export interface IGetIncidenntDetailFailureAction {
  type: typeof GET_INCIDENT_DETAIL_FAILURE;
  error?: typeof Error;
}
