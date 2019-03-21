import { GET_ALERTS } from '../actions/types';

const initialState = null;

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALERTS:
            return action.payload;
        default:
            return state;
    }
}

export default alertReducer