import { Action } from 'redux';
import { IGeoRequestOptions, IGeo } from 'types';

export enum ActionTypes {
    SET_INITIAL_STATE = 'Geo/set initial state',

    GEO_REQUEST = 'Geo/geos request',
    GEO_REQUEST_SUCCESS = 'Geo/geos request success',
    GEO_REQUEST_FAIL = 'Geo/geos request fail',
}

// Geo Set InitialState

export class GeoSetInitialState implements Action {
    public readonly type = ActionTypes.SET_INITIAL_STATE;
}

// Geo Request

export class GeoRequest implements Action {
    public readonly type = ActionTypes.GEO_REQUEST;
    public options: IGeoRequestOptions;

    public constructor(options: IGeoRequestOptions) {
        this.options = options;
    }
}

export class GeoRequestSuccess implements Action {
    public readonly type = ActionTypes.GEO_REQUEST_SUCCESS;
    public geo: IGeo;
    public requestOptions: IGeoRequestOptions;

    public constructor(geo: IGeo, requestOptions: IGeoRequestOptions) {
        this.geo = geo;
        this.requestOptions = requestOptions;
    }
}

export class GeoRequestFail implements Action {
    public readonly type = ActionTypes.GEO_REQUEST_FAIL;
    public error: object | boolean;

    public constructor(error: object | boolean) {
        this.error = error;
    }
}

export type ActionsAll = GeoSetInitialState | GeoRequest | GeoRequestSuccess | GeoRequestFail;
