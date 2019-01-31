import { ListActionTypes } from "../actions/actionTypes";

const initialState = {
    stolenBikeList: [],
    stolenBikeDetail: {},
    stolenBikeMap: {},
    totalRecords : 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ListActionTypes.FETCH_LIST:
            return {
                ...state,
                stolenBikeList: action.payload.list,
                totalRecords : action.payload.total
            }
        case ListActionTypes.FETCH_SINGLE_INCIDENT:
            return {
                ...state,
                stolenBikeDetail: action.payload
            }
        case ListActionTypes.FETCH_SINGLE_INCIDENT_MAP:
            return {
                ...state,
                stolenBikeMap: action.payload
            }
        case ListActionTypes.RESET_DETAIL_STATE:
            return {
                ...state,
                stolenBikeDetail: {},
                stolenBikeMap: {}
            }
        case ListActionTypes.RESET_LIST_STATE:
            return {
                ...state,
                ...initialState
            }
        default:
            return state;
    }
}