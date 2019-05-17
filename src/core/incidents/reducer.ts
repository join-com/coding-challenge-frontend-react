import { Reducer } from 'redux';
import { AppState } from 'core/reducers';
import { ActionTypes, ActionsAll } from './actions';
import { Incident } from 'types';
import { MAX_INCIDENTS_COUNT } from 'core/constants';

interface TState {
    error?: object | boolean;
    requesting?: boolean;
    incidents: Incident[];
    countPages?: number;
    currentPage: number;
}

const initialState: TState = {
    incidents: [],
    requesting: false,
    currentPage: 1,
};

export type TIncidentsState = TState;
export const incidentsInitialState = initialState;
export const incidents: Reducer<TState> = (state: TState = initialState, action: ActionsAll) => {
    console.log(`action ${action.type}`, action);

    switch (action.type) {
        case ActionTypes.SET_INITIAL_STATE:
            return initialState;

        case ActionTypes.INCIDENTS_REQUEST:
            return { ...state, requesting: true };

        case ActionTypes.INCIDENTS_REQUEST_SUCCESS:
            if (action.requestOptions.perPage === MAX_INCIDENTS_COUNT) {
                return { ...state, countPages: action.incidents.length, error: false };
            }

            return { ...state, incidents: action.incidents, requesting: false, error: false };

        case ActionTypes.INCIDENTS_REQUEST_FAIL:
            return { ...state, requesting: false, error: action.error };

        default:
            return state;
    }
};

export const selectIncidents = (state: AppState): TIncidentsState => state.incidents;
