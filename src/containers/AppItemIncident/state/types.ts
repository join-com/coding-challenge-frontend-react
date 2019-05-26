import { Incident } from '../../../interfaces';


export enum Actions {
    DO_GET_INCIDENT_BY_ID = '@@AppListIncidents/DO_GET_INCIDENT_BY_ID',
    DO_CLEAR_ERROR = '@@AppListIncidents/DO_CLEAR_ERROR',
    DO_SET_ERROR = '@@AppListIncidents/DO_SET_ERROR',
}

export interface State {
    readonly incident?: Incident;
    readonly error?: string;
}
