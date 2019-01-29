import { ListActionTypes } from "../actions/actionTypes";

const initialState = {
    stolenBikeList: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ListActionTypes.FETCH_LIST:
            return {
                ...state,
                stolenBikeList: action.payload
            }
        default:
        return state;
    }
}