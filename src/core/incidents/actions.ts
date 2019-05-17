import { Action } from 'redux';
import { IncidentRequestOptions, Incident } from 'types';

export enum ActionTypes {
    SET_INITIAL_STATE = 'Incidents/set initial state',

    INCIDENTS_REQUEST = 'Incidents/incidents request',
    INCIDENTS_REQUEST_SUCCESS = 'Incidents/incidents request success',
    INCIDENTS_REQUEST_FAIL = 'Incidents/incidents request fail',
}

// Incidents Set InitialState

export class IncidentsSetInitialState implements Action {
    public readonly type = ActionTypes.SET_INITIAL_STATE;
}

// Incidents Request

export class IncidentsRequest implements Action {
    public readonly type = ActionTypes.INCIDENTS_REQUEST;
    public options: IncidentRequestOptions;

    public constructor(options: IncidentRequestOptions) {
        this.options = options;
    }
}

export class IncidentsRequestSuccess implements Action {
    public readonly type = ActionTypes.INCIDENTS_REQUEST_SUCCESS;
    public incidents: Incident[];
    public requestOptions: IncidentRequestOptions;

    public constructor(incidents: Incident[], requestOptions: IncidentRequestOptions) {
        this.incidents = incidents;
        this.requestOptions = requestOptions;
    }
}

export class IncidentsRequestFail implements Action {
    public readonly type = ActionTypes.INCIDENTS_REQUEST_FAIL;
    public error: object | boolean;

    public constructor(error: object | boolean) {
        this.error = error;
    }
}

export type ActionsAll = IncidentsSetInitialState | IncidentsRequest | IncidentsRequestSuccess | IncidentsRequestFail;
