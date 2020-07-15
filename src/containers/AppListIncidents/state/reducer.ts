import { Reducer } from 'redux';

import { Actions, State, StateQueryFilterDefault } from './types';


const initialState: State = {
    isBusy: false,
    filter: undefined,
    incidents: undefined,
    error: undefined,
};


export const reducer: Reducer<State> = (state = initialState, action) => {
    switch (action && action.type || null) {

        case Actions.DO_FETCH_INCIDENTS:
            return { ...state, incidents: action.payload.incidents };

        case Actions.DO_CLEAR_ERROR:
            return { ...state, error: undefined };

        case Actions.DO_SET_ERROR:
            return { ...state, error: action.payload.error };

        case Actions.DO_SET_BUSY_STATUS:
            return { ...state, isBusy: action.payload.isBusy };

        case Actions.DO_SET_FILTER:
            return { ...state, filter: action.payload.filter };

        case Actions.DO_PAGINATE:
            return { ...state, filter: { ...(state.filter || StateQueryFilterDefault), page: action.payload.page } };

        default:
            return state;
    }
};
