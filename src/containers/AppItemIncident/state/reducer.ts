import { Reducer } from 'redux';

import { Actions, State } from './types';


const initialState: State = {
    incident: undefined,
    error: undefined,
};


export const reducer: Reducer<State> = (state = initialState, action) => {
    switch (action.type) {

        case Actions.DO_GET_INCIDENT_BY_ID:
            return { ...state, incident: action.payload.incident };

        case Actions.DO_CLEAR_ERROR:
            return { ...state, error: undefined };

        case Actions.DO_SET_ERROR:
            return { ...state, error: action.payload.error };

        default:
            return state;
    }
};
