import { Reducer } from 'redux';
import * as R from 'ramda';

import { MAX_INCIDENTS_COUNT } from 'core/constants';
import { ActionTypes as GeoActionTypes, ActionsAll as GeoActionsAll } from 'core/geo/actions';
import { AppState } from 'core/reducers';
import { arrayToObj } from 'core/utils/arrayToObj';
import { Incident } from 'types';

import { ActionTypes as IncidentsActionTypes, ActionsAll as IncidentsActionsAll } from './actions';

export interface Incidents {
    [key: string]: Incident;
}

const initIncidents: Incidents = {};

interface TState {
    error: object | boolean;
    requesting?: boolean;
    incidents: Incidents;
    countPages?: number;
    currentPage: number;
}

const initialState: TState = {
    incidents: initIncidents,
    requesting: false,
    error: false,
    currentPage: 1,
};

export type TIncidentsState = TState;
export const incidentsInitialState = initialState;

export const incidents: Reducer<TState> = (
    state: TState = initialState,
    action: IncidentsActionsAll | GeoActionsAll,
) => {
    // console.log(`action ${action.type}`, action);

    switch (action.type) {
        case IncidentsActionTypes.SET_INITIAL_STATE:
            return initialState;

        case IncidentsActionTypes.INCIDENTS_REQUEST:
            return { ...state, requesting: true };

        case IncidentsActionTypes.INCIDENTS_REQUEST_SUCCESS:
            if (action.requestOptions.perPage === MAX_INCIDENTS_COUNT) {
                return { ...state, countPages: action.incidents.length, error: false };
            }

            return {
                ...state,
                // @ts-ignore convert to obj with index - id
                incidents: arrayToObj(action.incidents, 'id') as Incidents,
                requesting: false,
                error: false,
            };

        case IncidentsActionTypes.INCIDENTS_REQUEST_FAIL:
            return { ...state, requesting: false, error: action.error };

        case GeoActionTypes.GEO_REQUEST:
            return { ...state, requesting: true };

        case GeoActionTypes.GEO_REQUEST_SUCCESS:
            const pairsWithUpdatedGeo: R.KeyValuePair<string, Incident>[] = R.toPairs<Incident>(state.incidents).map(
                ([key, incident]) => {
                    const features = action.geo.features.filter(feature => feature.properties.id === incident.id);

                    return [
                        key,
                        features.length === 0
                            ? incident
                            : Object.assign({}, incident, { geometry: features[0].geometry }),
                    ];
                },
            );

            return {
                ...state,
                // update geometry in incident
                incidents: R.fromPairs<Incident>(pairsWithUpdatedGeo),
                requesting: false,
                error: false,
            };

        case GeoActionTypes.GEO_REQUEST_FAIL:
            return { ...state, requesting: false, error: action.error };

        default:
            return state;
    }
};

export const selectIncidents = (state: AppState): TIncidentsState => state.incidents;
