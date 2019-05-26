import { Action } from 'redux';
import { IIncidentRequestOptions, IIncident, IChangePageOptions } from 'types';

export enum ActionTypes {
    SET_INITIAL_STATE = 'Incidents/set initial state',

    INCIDENTS_REQUEST = 'Incidents/incidents request',
    INCIDENTS_REQUEST_SUCCESS = 'Incidents/incidents request success',
    INCIDENTS_REQUEST_FAIL = 'Incidents/incidents request fail',
    CHANGE_PAGE = 'Incidents/change page',
    CHANGE_PAGE_FAIL = 'Incidents/change page fail',
}

// Incidents Set InitialState

export class IncidentsSetInitialState implements Action {
    public readonly type = ActionTypes.SET_INITIAL_STATE;
}

// Incidents Request

export class IncidentsRequest implements Action {
    public readonly type = ActionTypes.INCIDENTS_REQUEST;
    public options: IIncidentRequestOptions;

    public constructor(options: IIncidentRequestOptions) {
        this.options = options;
    }
}

export class IncidentsRequestSuccess implements Action {
    public readonly type = ActionTypes.INCIDENTS_REQUEST_SUCCESS;
    public incidents: IIncident[];
    public requestOptions: IIncidentRequestOptions;

    public constructor(incidents: IIncident[], requestOptions: IIncidentRequestOptions) {
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

export class ChangePage implements Action {
    public readonly type = ActionTypes.CHANGE_PAGE;
    public options: IChangePageOptions;

    public constructor(options: IChangePageOptions) {
        this.options = options;
    }
}

export class ChangePageFail implements Action {
    public readonly type = ActionTypes.CHANGE_PAGE_FAIL;
    public error: object | string;

    public constructor(error: object | string) {
        this.error = error;
    }
}

export type ActionsAll =
    | IncidentsSetInitialState
    | IncidentsRequest
    | IncidentsRequestSuccess
    | IncidentsRequestFail
    | ChangePage;
