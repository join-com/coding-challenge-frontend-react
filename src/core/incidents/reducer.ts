import { Reducer } from 'redux';
import * as R from 'ramda';

import { MAX_INCIDENTS_COUNT } from 'core/constants';
import { ActionTypes as GeoActionTypes, ActionsAll as GeoActionsAll } from 'core/geo/actions';
import { AppState } from 'core/reducers';
import { arrayToObj } from 'core/utils/arrayToObj';
import { IIncident } from 'types';

import { ActionTypes as IncidentsActionTypes, ActionsAll as IncidentsActionsAll } from './actions';
import { convertCoordinates } from 'core/utils/convertCoordinates';

export interface IIncidentsObj {
    [key: string]: IIncident;
}

const initIncidents: IIncidentsObj = {};

export interface TState {
    error: object | boolean;
    requesting: boolean;
    incidents: IIncidentsObj;
    currentPage: number;
    totalIncidents: number;
    incidentsPerPage: number;
}

const initialState: TState = {
    incidents: initIncidents,
    requesting: false,
    error: false,
    currentPage: 1,
    totalIncidents: 0,
    incidentsPerPage: 10,
};

export type TIncidentsState = TState;
export const incidentsInitialState = initialState;

export const incidents: Reducer<TState> = (
    state: TState = initialState,
    action: IncidentsActionsAll | GeoActionsAll,
) => {
    switch (action.type) {
        case IncidentsActionTypes.SET_INITIAL_STATE:
            return initialState;

        case IncidentsActionTypes.INCIDENTS_REQUEST:
            return { ...state, requesting: true };

        case IncidentsActionTypes.INCIDENTS_REQUEST_SUCCESS:
            if (action.requestOptions.perPage === MAX_INCIDENTS_COUNT) {
                return { ...state, totalIncidents: action.incidents.length, error: false };
            }

            return {
                ...state,
                // @ts-ignore convert to obj with index - id
                incidents: arrayToObj(action.incidents, 'id') as IncidentsObj,
                currentPage: action.requestOptions.page,
                requesting: false,
                error: false,
            };

        case IncidentsActionTypes.INCIDENTS_REQUEST_FAIL:
            return { ...state, requesting: false, error: action.error };

        case GeoActionTypes.GEO_REQUEST:
            return { ...state };

        case GeoActionTypes.GEO_REQUEST_SUCCESS:
            const pairsWithUpdatedGeo: R.KeyValuePair<string, IIncident>[] = R.toPairs<IIncident>(state.incidents).map(
                ([id, incident]) => {
                    const feature = action.geo.features.filter(feature => String(feature.properties.id) === id)[0];

                    return [
                        id,
                        feature
                            ? Object.assign({}, incident, {
                                  geometry: convertCoordinates(feature.geometry.coordinates),
                              })
                            : incident,
                    ];
                },
            );

            return {
                ...state,
                // update geometry in incident
                incidents: R.fromPairs<IIncident>(pairsWithUpdatedGeo),
                error: false,
            };

        case GeoActionTypes.GEO_REQUEST_FAIL:
            return { ...state, error: action.error };

        default:
            return state;
    }
};

export const selectIncidents = (state: AppState): IIncident[] => Object.values(state.incidents.incidents);
export const selectIncident = (state: AppState, id: string): IIncident => state.incidents.incidents[id];
export const selectRequesting = (state: AppState): boolean => state.incidents.requesting;
export const selectError = (state: AppState): boolean => Boolean(state.incidents.error);

export const selectCurrentPage = (state: AppState): number => state.incidents.currentPage;
export const selectTotalIncidents = (state: AppState): number => state.incidents.totalIncidents;
export const selectTotalPage = (state: AppState): number =>
    Math.ceil(selectTotalIncidents(state) / state.incidents.incidentsPerPage);
